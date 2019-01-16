# meipian-wx-common

#### 项目介绍
albanjin's  

#### 软件架构
软件架构说明


#### 安装教程

1. npm i -S meipian-wx-common


#### 使用说明

1. import {tool} form 'meipian-wx-common'
2. 提供的方法
```
   1.tool.wxConfig({{ // 微信配置
              appId,
              title: 'titile',
              link: `${window.location.origin}${window.location.pathname}?${something}`,
              coverThumb: '封面图地址',
              abstractShare: `title之后的描述`,
              timestamp,
              nonceStr,
              signature,
              errorFunc : ()=>{
                //处理异常
              },
              onMenuShareTimeline : () => {
                //分享成功
              },
              onMenuShareAppMessage: () => {
                <!-- 分享成功 -->
              } })

    2.getQueryString()
    3.formatDate()
    4.joinParams()
    5.isWX
    6.isQQBrowser
    7.isAPP
    8.isAND
    9.isIOS
    10.isPC
    11.isMINA
    12.isWXwork
```
3. xxxx

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 码云特技

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3. 你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4. [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5. 码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6. 码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)