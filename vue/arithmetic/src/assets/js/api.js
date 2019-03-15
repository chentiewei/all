import {post,get} from '@/assets/js/http'
const fcae='face'
/**
 * @author 测试
 * @date 无
 * @Description: 用途（测试）
 */
export function getAll() {
  return post(fcae+'/restfulApi/face/list')
}

/**
 * @author uploadImage提交图片接口
 * @date 图片数据流
 * @Description: 用途（提交图片）
 */
export function upImage(data) {
  return post(fcae+'/restfulApi/face/checkFace',data)
}

/**
 * @author report详情
 * @date 报告id
 * @Description: 用途（报告详情）
 */
export function reportDetails(data) {
  return post(fcae+'/restfulApi/face/info',data)
}

