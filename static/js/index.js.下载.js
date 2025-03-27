/**
 * 定义轮播插件
 */
(function($, window, document,undefined) {
	//定义Slider的构造函数
	var Slider = function($ele, opt) {
		// 定义默认值
		this.defaults = {
			// 默认切换模式为渐入渐出
			mode:'fade',
			// 默认切换时间为4秒
			speed:4000,
			slideSelector:'.content-pic li',
			prevSelector:'.pre-btn',
			nextSelector:'.next-btn'
		};
		// 将选项和默认值合并，深拷贝进空对象，赋值给当前选项
		this.options = $.extend({}, this.defaults, opt);

		/**
		 *  定义全局静态变量
		 */
		
		//当前显示的图片索引
		this.now = 0;
		//是否开始轮播
		this.hasStarted = false;
		//定时器
		this.interval = null;
		
		this.$container = $ele;
		//要轮播的li元素集合
		this.$liItems = null;
		this.$slideCont= null;
		//轮播页数
		this.len = 0;
		// 单个轮播宽度，和容器宽度
		this.slideWidth=0;
		this.contWidth=0;

		// 上一页下一页按钮
		this.$prevBtn=null;
		this.$nextBtn=null;
		
	}

	//定义Slider的方法
	Slider.prototype = {
		// 初始化
		init: function() {
			var that=this;
			// 初始化变量
			this.$liItems = this.$container.find(that.options.slideSelector);
			this.$slideCont= this.$liItems.parent();
			this.len = this.$liItems.length;

			this.slideWidth=this.$liItems.width();
			if(this.options.mode=='fade'){
				this.$slideCont.eq(0).show();
				//this.$slideCont.eq(0).siblings().hide();
			}
			if(this.options.mode=='horizonal'){
				// 为实现无缝轮播，需将第一个元素多循环一个
				this.$slideCont.append(this.$liItems.eq(0).prop('outerHTML'));
				this.contWidth=(this.$liItems.width())*(this.len+1);
				this.$slideCont.css('width',this.contWidth);
			}

			this.$prevBtn=this.$container.find(that.options.prevSelector);
			this.$nextBtn=this.$container.find(that.options.nextSelector);

			this.autoHideBtn();
			this.prevAndNext();
			this.start();
			// console.log('initialized');
		},
		// 鼠标移入banner图时，停止轮播并显示前后按钮，移出时开始轮播并隐藏前后按钮
		autoHideBtn:function(){
			var that=this;
			this.$container.on('mouseenter', function(event) {
				event.preventDefault();
				that.stop();
//                that.$prevBtn.show();
//                that.$nextBtn.show();
			}).on('mouseleave', function(event) {
				event.preventDefault();
				that.start();
//                that.$prevBtn.hide();
//                that.$nextBtn.hide();
			});
		},
		//绑定前后按钮事件
		prevAndNext:function(){
			var that = this;
			this.$prevBtn.on('click', function(event) {
				event.preventDefault();
				that.prev();
			});
			this.$nextBtn.on('click', function(event) {
				event.preventDefault();
				that.next();
			});
		},
		// 前一张函数
		prev:function(){
			var out = this.now;
			this.now = (--this.now + this.len) % this.len;
			this.play(out, this.now);
			// console.log('上一页');
		},
		// 后一张函数
		next:function(){
			var out = this.now;
			this.now = ++this.now % this.len;
			this.play(out, this.now);
			// console.log('下一页');
		},
		/**
		 * 播放函数
		 * @param out number 要消失的图片的索引值
		 * @param now number 接下来要轮播的图的索引值
		 */
		play : function (out, now){
			var that=this;
			// 先停止计时器，
			// 这是为了防止动画未执行完，就触发下一个定时器，
			// 导致轮播鬼畜加快
			// 这个定时器需要在回调完成之后重新打开
			that.stop();
			
			if(this.options.mode=='fade'){
				this.$liItems.eq(now).siblings().fadeOut();
				this.$liItems.eq(now).fadeIn('fast',function(){
					that.start();
				});
			}
			if(this.options.mode=='horizonal'){
				var left=-1*this.slideWidth*now;
				// 无缝轮播核心代码
				if(out==0&&now==this.len-1){
					// 当从第一页向前翻页
					this.$slideCont.css({'left':-(this.contWidth-this.slideWidth)});
					this.$slideCont.stop().animate({'left':left},'fast',function(){
						that.start();
					});
				}else if(out==this.len-1&&now==0){
					// 当从最后一页向后翻页
					this.$slideCont.stop().animate({'left':-(this.contWidth-this.slideWidth)},function(){
						that.$slideCont.css({'left':0});
						that.start();
					});
				}else{
					this.$slideCont.stop().animate({'left':left},'fast',function(){
						that.start();
					});
				}
			}
		},
		//开始函数
		start : function(){
			var that=this;
			if(!that.hasStarted) {
				that.hasStarted = true;
				that.interval = setInterval(function(){
					that.next();
				},that.options.speed);
			}
		},
		//停止函数
		stop : function (){
			var that=this;
			clearInterval(that.interval);
			that.hasStarted = false;
		}
	};

	// 将Slider对象扩展到JQ插件bzSlider
	$.fn.bzSlider = function(options) {
		//创建Slider的实例
		var slider = new Slider(this, options);
		//调用其初始化方法
		slider.init();
		// 返回this以支持链式调用
		return this;
	};

})(jQuery, window, document);

/**
 * 初始化横向轮播
 */
(function(){
	var delay=0;
	$('.focusA').each(function(){
		var that=this;
		setTimeout(function(){
			// 设置定时为10秒,初始化轮播
			$(that).bzSlider({
				mode:'fade',
				speed:5000,
				slideSelector:'li',
				prevSelector:'.prev-btn',
				nextSelector:'.next-btn'
			});
		},delay);
		// 添加delay，使轮播不同时切换
		delay+=500;
	})
})();