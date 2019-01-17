const ua = navigator.userAgent
const APP_TYPE = getAppType()
const SYSTEM_TYPE = getSystemType()
const ORIGIN_TYPE = getOriginType()

const version = getMeipianVersion()

/**
 * isWX,isAPP,isAND,isIOS,isPC
 * @return {Boolean}
 */
export const isWX = APP_TYPE === 'WECHAT'
export const isAPP = APP_TYPE === 'IOS_APP' || APP_TYPE === 'ANDROID_APP'
export const isQQBrowser = APP_TYPE === 'QQ'

export const isAND = SYSTEM_TYPE === 'AD'
export const isIOS = SYSTEM_TYPE === 'IOS'
export const isPC = SYSTEM_TYPE === 'PC'
export const isNative = getQueryString('model') === 'offline'

export const isMINA = ORIGIN_TYPE === 'MINAAPP'
export const isSelfView = ORIGIN_TYPE === 'APPVIEW' || 'WEBVIEW'
export const audit = ORIGIN_TYPE === 'AUDIT'
export const isWXwork = (ua.indexOf('MicroMessenger') > -1) && (ua.indexOf('wxwork') > -1)

/**
 * 默认获取当前URL的值
 * @param  {String} name URL's key name.
 * @param  {String} url  Crruent url. 默认: window.location.search
 * @return {String}      Key's value
 */
export function getQueryString(name, url = '') {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let temp = url.match(/(\?+[^\?]*)/) || []
  let r = (temp[1] || window.location.search).substr(1).match(reg)

  if (r !== null) {
    return unescape(r[2])
  }
  return null
}

/**
 * Gets the access browse type
 * @return {String} 'AD': Android 'IOS': iphone 'PC': desktop
 */
export function getSystemType() {
  if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {
    return 'AD'
  }

  if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return 'IOS'
  }
  return 'PC'
}

/**
 * Get app type
 * @return {String} 
 * wechat: 'WECHAT' 
 * qq: 'QQ' browse 
 * app: 'IOS_APP' and 'ANDROID_APP'
 * qzone: 'QZONE'
 * web: 'WEB'
 * weibo: 'WEIBO'
 * enterprise_wechat: 'ENTERPRISE_WECHAT'
 */
export function getAppType() {
  // let client = getQueryString('client')

  // if (client) {
  //   return client.toUpperCase()
  // }

  if (ua.indexOf('MicroMessenger') > -1) {
    return 'WECHAT'
  }
  if (ua.indexOf('MQQBrowser') > -1) {
    return 'QQ'
  }
  if (/(ios){1} *\/ *(\d+\.\d+\.\d+){1}/.test(ua)) {
    return 'IOS_APP'
  }
  if (/(android){1} *\/ *(\d+\.\d+\.\d+){1}/.test(ua)) {
    return 'ANDROID_APP'
  }
  return null
}

/**
 * isWX,isAPP,isQQBrowser,isAND,isIOS,isPC
 * @return {Boolean}
 */
export function getMeipianVersion() {
  let mp = ua.match(/(ios|android){1} *\/ *(\d+\.\d+\.?\d+){1}/)

  return mp ? mp[2].replace(' ', '') : null
}

/**
 * Get view origin 
 * @return {String} Business custom source
 * 'AUDIT': audit view
 * 'MINAAPP': mina template view
 * 'CIRCLE': circle template view 
 */
export function getOriginType() {
  let origin = (getQueryString('from') || '').toLowerCase()
  let value = ''

  //App view
  if (origin === 'appview') {
    value = 'appview'
  }

  if (origin === 'appviewrcmd') {
    value = 'appviewrcmd'
  }

  //Audit view
  if (origin === 'audit') {
    value = 'audit'
  }

  //Minapp view
  if (origin === 'minaapp') {
    value = 'minaapp'
  }

  if (origin === 'webview') {
    value = 'webview'
  }

  //Circle view
  if (getQueryString('circleid') &&
    getQueryString('circleid').length) {
    value = 'circle'
  }

  return value.toUpperCase()
}

/**
 * Format thousand number 
 * @param  {Number} num  number
 * @return {String}     '万' unit
 */
export function formatThousandNumber(num) {
  let tempNum = parseFloat(num)

  if (isNaN(tempNum)) {
    return 0
  }

  if (tempNum < 10000) {
    return num
  } else if (tempNum < 100000) {
    return `${(tempNum / 10000).toString().replace(/^(\d+\.?\d{0,1})\d*$/, '$1')}万`
  } else {
    return `${(tempNum / 10000).toString().replace(/^(\d+)\.?\d{0,1}\d*$/, '$1')}万`
  }
}

/**
 * Format omit nickname 
 * @param  {String} str  nickname's value
 * @return {String}      nickname's omit
 */
export function formatOmitNickname(str, type) {
  if (!str) {
    return ''
  }

  if (type === 0) {

    if (str.length <= 9) {
      return str
    } else {
      return str.replace(/^(.{4})(.+)(.{4})$/, ($1, $2, $3, $4) => {
        return `${$2}***${$4}`
      })
    }
  } else if (type === 1) {
    if (str.length <= 5) {
      return str
    } else {
      return str.replace(/^(.{2})(.+)(.{2})$/, ($1, $2, $3, $4) => {
        return `${$2}***${$4}`
      })
    }
  } else {
    if (str.length <= 12) {
      return str
    } else {
      return str.replace(/^(.{4})(.+)(.{3})$/, ($1, $2, $3, $4) => {
        return `${$2}***${$4}`
      })
    }
  }
}

/**
 * Fromat date time 
 * @param  {Date} time  time's 
 * @param  {String} str omit 
 * @return {String}     format date.
 */
export function formatDate(time, str = '-') {
  let date = Number(time) ? new Date(time) : new Date()
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join(str)
}

/**
 * URL get's request join param.
 * @param  {String} url    URL
 * @param  {Object} params Param's name
 * @return {String} Join's url.      
 */
export function joinParams(url, params = {}) {
  let str = ''
  let plen = Object.keys(params).length

  if (!(url && (typeof url === 'string'))) {
    console.error('"url" isn\'t empty and must is string ')
  }

  if (url.indexOf('?') < 0) {
    url = plen ? `${url}?` : url
  } else {
    url = plen ? `${url}&` : url
  }

  for (let attr in params) {

    if (typeof params[attr] === 'string') {
      params[attr] = encodeURIComponent(params[attr])
    }
    if (params[attr] &&
      (typeof params[attr] === 'object' ||
        typeof params[attr] === 'array')) {
      params[attr] = JSON.stringify(params[attr])
    }
    str += `&${attr}=${params[attr]}`
  }
  return `${url}${str.replace('&', '')}`
}

/**
 * Filter config img
 * @param  {Object} config object
 * @return {Object}        config object
 */
export function filterConfig(config, filter) {
  if (config.scene && config.scene['imgs'] && config.scene['imgs'].length) {
    config.scene['imgs'] = config.scene['imgs'].map(value => {
      if (/^\.\/img\/.*/.test(`${value}`)) {
        return filter.apply(null, `${value}`)
      }
    })
  }
  return config
}

export default {
  getQueryString,

  getSystemType,

  getAppType,

  getMeipianVersion,

  getOriginType,

  formatThousandNumber,

  formatOmitNickname,

  formatDate,

  filterConfig,

  joinParams,
  version,
  isWX,
  isQQBrowser,
  isAPP,
  isAND,
  isIOS,
  isPC,
  isMINA,
  isSelfView,
  isNative,
  isWXwork
}