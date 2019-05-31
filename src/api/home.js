import * as http from './api.js'
import apis from './apis.js'


// 我的主页
export const homeApi = {
  // 获取视频列表
  videoList(data) {
    return http.postRequest('/get_video_list.php', apis.ish22_, data).then((response) => {
      return response.data
    })
  },
  // 获取视频总数
  videoListNumber(data) {
    return http.postRequest('/get_video_number.php', apis.ish22_, data).then((response) => {
      return response.data
    })
  },
  // 获取广告
  adList(data) {
    return http.postRequest('/get_ad_list.php', apis.ish22_, data).then((response) => {
      return response.data
    })
  },
 

}
