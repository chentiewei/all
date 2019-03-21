import {post,get} from '@/assets/js/http'
const fcae='face'

/**
 * @author uploadImage提交图片接口
 * @date 图片数据流
 * @Description: 用途（提交图片）
 */
export function checkFace(data) {
  return post(fcae+'/restfulApi/face/checkFace',data,{ showLoading: true,parsed:false })
}

/**
 * @author uploadImg上传图片接口
 * @date 图片数据流
 * @Description: 用途（提交图片）
 */
export function uploadImg(data) {
  return post(fcae+'/restfulApi/face/uploadImg',data,{ showLoading: true,parsed:false })
}

/**
 * @author report详情
 * @date 报告id
 * @Description: 用途（报告详情）
 */
export function reportDetails(data) {
  return post(fcae+'/restfulApi/face/info',data)
}

/**
 * @author report列表
 * @date
 * @Description: 用途（报告列表）
 */
export function reportList(data) {
  return post(fcae+'/restfulApi/face/list')
}

/**
 * @author report列表删除报告
 * @date
 * @Description: 用途（删除报告）
 */
export function deleteReport(data) {
  return post(fcae+'/restfulApi/face/delete',data)
}
/**
 * @author 用户第一份报告
 * @date
 * @Description: 用途（查看报告）
 */
export function firstInfo() {
  return post(fcae+'/restfulApi/face/firstInfo')
}
/**
 * @author 报告数量
 * @date
 * @Description: 用途（dictionaries页面的数量）
 */
export function numInfo() {
  return post(fcae+'/restfulApi/face/numInfo')
}

/**
 * @author 用户第一份报告恢复
 * @date
 * @Description: 用途（第一份报告删除后恢复报告）
 */
export function recoverFirstInfo() {
  return post(fcae+'/restfulApi/face/recoverFirstInfo')
}
/**
 * @author 用户第一份报告恢复
 * @date
 * @Description: 用途（第一份报告删除后恢复报告）
 */
export function delUser() {
  return post(fcae+'/restfulApi/user/delUser')
}
