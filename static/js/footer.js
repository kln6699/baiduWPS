if (location.host.indexOf('360.cn') < 0) {
  // 底部footer配置
  $('.menu').hide()
  var map = {
    'dl.qdjha.cn': 'Copyright©日照娇鸿网络科技有限公司 鲁ICP备2023009269号-2', 
    'dl.qdkqa.cn': 'Copyright©日照凯千网络科技有限公司 鲁ICP备2022034913号-4', 
    'dl.sxsthwl.cn': 'Copyright©陕西顺拓汇网络科技有限公司 陕ICP备2023001326号-2', 
    'dl.fjdysky.cn': 'Copyright©西安新志网络科技有限公司 陕ICP备2022009012号-1', 
    'dl.fzbj18.cn': 'Copyright©福州博坚网络科技有限公司 闽ICP备2022007439号-1', 
    'dl.dylfb.cn': 'Copyright©东营洛孚网络科技有限公司西宁分公司 鲁ICP备2022040490号-1', 
    'dl.jnjqb.cn': 'Copyright©济南嘉趣教育信息有限公司青海分公司 鲁ICP备2023013247号-1', 
    'dl.guanlijy.cn': 'Copyright©淄博冠立教育咨询服务有限公司青海分公司 鲁ICP备2022022353号-1', 
    'dl.wlxb30.cn': 'Copyright©厦门枫舞信息科技有限公司 闽ICP备2021017063号-1', 
    'dl.wlxb47.cn': 'Copyright©厦门之闵网络科技有限公司 闽ICP备19016808号-12', 
    'dl.jncqa.cn': 'Copyright©济南船讯网络科技有限公司 鲁ICP备2023013497号-2', 
    'dl.sxgeeg.cn': 'Copyright©西安岭北网络科技有限公司 陕ICP备2023008611号-2', 
    'dl.xatcwl.cn': 'Copyright©西安天窗网络科技有限公司 陕ICP备2023008554号-2', 
    'dl.czjytrs.cn': 'Copyright©河南祥豚网络科技有限公司 豫ICP备2021034178号-2', 
    'dl.xaszn.top': 'Copyright©西安三只鸟网络科技有限公司 陕ICP备2023008840号-1', 
    'dl.yisba.cn': 'Copyright©武汉宏格亿佰电子商务有限公司江夏分公司 鄂ICP备2020019416号-2', 
    'dl.lzxsbk.cn ': 'Copyright©兰州鑫盛博科技有限公司东营分公司 陇ICP备2023001863号', 
    'dl.xaszn.cn': 'Copyright©西安三只鸟网络科技有限公司威海分公司 陕ICP备2023008840号', 
    'dl.dyhpb.cn': 'Copyright©东营和普网络科技有限公司 鲁ICP备2022040875号-1', 
    'dl.xalbwl.top': 'Copyright©西安岭北网络科技有限公司威海分公司 陕ICP备2023008611号', 
    'dl.hbumq.com': 'Copyright©武汉走天下网络科技有限公司南京分公司 鄂ICP备2023006171号-3', 
    'dl.sdjnll.com': 'Copyright©济南郦籁网络科技有限公司 鲁ICP备2023010264号-1', 
    'dl.qdxjjyb.cn': 'Copyright©威海芝耘网络科技有限公司 鲁ICP备2023004417号-1', 
    'dl.xadya.cn': 'Copyright©西安东益网络科技有限公司 陕ICP备2023009381号-2', 
    'dl.lzbyhy.cn': 'Copyright©兰州博越昊阳网络科技有限公司 陇ICP备2023001934号-2', 
    'dl.sdnshw.cn': 'Copyright©威海冰妍网络科技有限公司 鲁ICP备2022017541号-1', 
    'dl.baixiaox.top': 'Copyright©惠州市爆量信息技术有限公司 粤ICP备2022150181号-1', 
    'dl.vgtyl.cn': 'Copyright©武汉走天下网络科技有限公司 鄂ICP备2023006171号-2', 
    'dl.zjquiyt.cn': 'Copyright©义乌市新昭网络科技有限公司 浙ICP备2022001003号-1', 
    'dl.biaoxx.top': 'Copyright©惠州市爆量信息技术有限公司 粤ICP备2022150181号-1', 
    'dl.jmsqwl.top': 'Copyright©贵州推速达网络科技有限公司 黔ICP备2023008801号-2', 
    'dl.xzycpy.cn': 'Copyright©惠州新之源文化传播有限公司 粤ICP备2023072319号-2', 
    'dl.vgtyl.cn': 'Copyright©武汉走天下网络科技有限公司襄阳分公司 鄂ICP备2023006171号-2', 
    'dl.gzhctq.cn': 'Copyright©贵州环创天庆科技有限公司  黔ICP备2023011102号-1', 
    'dl.cvfgy.cn': 'Copyright©河南明册网络科技有限公司  豫ICP备2023014817号-2', 
    'dl.ruosixinxi.cn': 'Copyright©湖南若思信息科技有限公司 湘ICP备2023023606号-1', 
    'dl.hyyywl.cn': 'Copyright©衡阳印煜网络科技有限公司  湘ICP备2023023229号-1', 
    'dl.666-666-666.cn': 'Copyright©株洲百推网络科技有限公司  湘ICP备2022014403号-1',
    'dl.zjiwsaw.cn': 'Copyright©衡威海翰荣网络科技有限公司  鲁ICP备2022015325号-1', 
    'dl.xasya.cn': 'Copyright©西安时影网络科技有限公司荣成文化路分公司  陕ICP备2023009324号-2', 
    'dl.nblowp.cn': 'Copyright©威海诺辰网络科技有限公司文登分公司  鲁ICP备2022015339号-1',
    'dl.qhaqa.cn': 'Copyright©青海傲奇网络科技有限公司   青ICP备2023000774号-1',
    'dl.yusixinxi.cn': 'Copyright©益阳梵笛教育咨询有限公司  湘ICP备2023039054号-1', 
    'dl.fanlingjiaoyu.cn': 'Copyright©益阳梵铃教育咨询有限公司   湘ICP备2023038496号-1', 
    'dl.qiyijiaoyukeji.cn': 'Copyright©益阳易启教育咨询有限公司   湘ICP备2023037696号-1',
    'dl.xadya.top': 'Copyright©西安东益网络科技有限公司    陕ICP备2023009381号-1', 
    'dl.hbumq.com': 'Copyright©武汉走天下网络科技有限公司东海县分公司   鄂ICP备2023006171号-3', 
    'dl.vcfxs.cn': 'Copyright©云南浩宙廷网络科技有限公司东海县分公司    滇ICP备2022006803号-1', 
    'dl.lzxsbk.cn': 'Copyright©兰州鑫盛博科技有限公司东营分公司    陇ICP备2023001863号-2', 
    'dl.qdtnwa.cn': 'Copyright©青岛拓诺网络科技有限公司淄博分公司   鲁ICP备2022033576号-3', 
    'dl.cslta.cn': 'Copyright©长沙霖特网络科技有限公司淄博分公司    湘ICP备2023019022号-1', 
    'singdown.com': 'Copyright©北京星怡动信息技术有限公司     星动下载 京ICP备19057932号2024',
    'soft1.xwaynb.cn': 'Copyright©无锡新吴傲盈网络科技有限公司盐城分公司    苏ICP备2021009099号-4', 
    'soft2.xwaynb.cn': 'Copyright©无锡新吴傲盈网络科技有限公司盐城分公司    苏ICP备2021009099号-4',
    'soft.stywru.cn': 'Copyright©广西云奥网络科技有限公司  电话：010-84660271  桂ICP备2022004003号', 
    'ruanjian.stywru.cn': 'Copyright©广西云奥网络科技有限公司  电话：010-84660271   桂ICP备2022004003号',
    'dl.xmjlwl.cn': 'Copyright©厦门金鲤网络科技有限公司济南分公司   闽ICP备2022013822号-1', 
    'soft4.xwaynb.cn': 'Copyright©无锡新吴傲盈网络科技有限公司盐城分公司   苏ICP备2021009099号-4',
    'dl.dylfb.cn': 'Copyright©东营洛孚网络科技有限公司济南分公司   鲁ICP备2022040490号-1', 
    'dl.dyhfb.cn': 'Copyright©东营花纷教育咨询服务有限公司济南分公司   鲁ICP备2022040336号-1', 
    'ruosixinxi.cn': 'Copyright©湖南若思信息科技有限公司盐城分公司   湘ICP备2023023606号-1',
    'dl.cdyunsen.cn': 'Copyright©常德云森网络科技有限公司长沙市分公司   湘ICP备2023001847号-1',
    'dl.cdyzwl.cn': 'Copyright©常德扬泽网络科技有限公司长沙分公司   湘ICP备2023002121号-1', 
    'soft.ruosixinxi.cn': 'Copyright©湖南若思信息科技有限公司盐城分公司   湘ICP备2023023606号-1',
  }
  $('.footer-container').html(map[location.host])

  // 顶部导航配置
  var navs = [
    'dl.sxgeeg.cn',
    'dl.xatcwl.cn',
    'soft.stywru.cn',
    'ruanjian.stywru.cn',
    'singdown.com',      
  ]
  // 顶部导航logo配置
  var logoMap = {
    'soft.stywru.cn': 'http://p0.qhimg.com/t01a030d25d61dbbc13.png', 
    'ruanjian.stywru.cn': 'http://p0.qhimg.com/t01a030d25d61dbbc13.png', 
    'singdown.com': 'http://p0.qhimg.com/t0191b68c47f3a2bfda.png',
  }
  if (navs.indexOf(location.host) > -1) {
    if (logoMap[location.host]) {
       $('.dlcnheader-wrap .dlcnheader .headerInner a img.logo').attr('src', logoMap[location.host])
       $('.dlcnheader-wrap .dlcnheader .headerInner ul.header-tab').hide()
       $('.dlcnheader-wrap .dlcnheader .headerInner div.headerLinkGroup').hide()
    }
    $('.dlcnheader').show()
    $('.dlcnheader-wrap').show()
    $('.dlcnheader-wrap + .app-container .header-container').hide()
    // $('.dlcnheader-wrap + .banner .banner-logo').css('opacity', 0)
  }
}