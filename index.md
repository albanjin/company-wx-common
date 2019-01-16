####  微信注册方法使用
 ```
  微信使用方法
    1、微信注册
      html:包含代码
        <div id="wx_config" style="display: none" appId="<?php echo $appId?>" timestamp="<?php echo $timestamp;?>" nonceStr="<?php echo $nonceStr;?>" signature="<?php echo $signature;?>"></div>
      js方法调用
          let target = document.getElementById("wx_config") 
          let appId = target.getAttribute("appId")
          let timestamp = target.getAttribute("timestamp")
          let nonceStr = target.getAttribute("nonceStr")
          let signature = target.getAttribute("signature")

          wxConfig({ // 微信配置
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
              } 
          })
 ```