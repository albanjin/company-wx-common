//微信先导入微信js
// if(!window.wx){
//   window.wx = require('../third/js/jweixin-1.2.0')
// }
import { isWX } from '../common/utils'  

export function wxConfig({ appId, title, id, coverThumb, link, abstractShare, timestamp, nonceStr, signature, errorFunc = null, onMenuShareTimeline = null, onMenuShareAppMessage = null }) {
    if(!isWX) return false
    try {
      console.log("appId=" + appId)
      console.log("timestamp=" + timestamp)
      console.log("nonceStr=" + nonceStr)
      console.log("signature=" + signature)
  } catch (error) {
      console.log(error)
  }
  window.wx.config({
      debug: false,
      appId: appId,
      timestamp: timestamp,
      nonceStr: nonceStr,
      signature: signature,
      jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'previewImage'
      ]
  })
  window.wx.error(function (res) {
      errorFunc && errorFunc()
  });

  window.wx.ready(function () {
      window.wx.onMenuShareTimeline({
          title: title,
          link: link || window.location.href,
          imgUrl: coverThumb,
          success() {
              onMenuShareTimeline && onMenuShareTimeline()
          }
      })

      window.wx.onMenuShareAppMessage({
          title: title,
          desc: abstractShare,
          link: link || window.location.href,
          imgUrl: coverThumb,
          success() {
              onMenuShareAppMessage && onMenuShareAppMessage()
          }
      })
  })
}