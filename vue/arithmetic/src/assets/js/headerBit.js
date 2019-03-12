/*前端请求header头参数*/
import md5 from 'js-md5'
/*前端生成签名*/
const signCode=(form, time,appKey,data)=>{
  let dataString = ''
  if (typeof data === 'object') {
    Object.keys(data).sort().forEach(function(ele, index) {
      let value = data[ele]
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      dataString += ele + '=' + value
    })
  }
  dataString += form+time+appKey;
  return  md5(dataString).toString();
}

const APP_KEY='base64:rZSauIiSvTUEuUFxkukdtxaUdj43QdOQiIEtDpZRYN0='/*APP_KEY*/
const form='face_h5'/*来源 小程序face_h5 face_xcx*/
const time=()=>{/*当前时间戳*/
  return parseInt(new Date().getTime()/1000);
}
const XRequestedWith='XMLHttpRequest'

export default {
  APP_KEY,
  form,
  XRequestedWith,
  time,
  signCode
}
