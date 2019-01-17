# company-wx-common

#### 项目介绍
albanjin's  

#### 软件架构
软件架构说明


#### 安装教程

1. npm i -S company-wx-common


#### 使用说明

1. import {tool} form 'company-wx-common'
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
