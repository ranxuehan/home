import axios from 'axios'
import cookie from 'js-cookie'
import qs from 'qs'
axios.interceptors.request.use(config => {
  config.headers.Authorization = decodeURIComponent(cookie.get('token'));
  return config;
}, err => {
  toast("请求超时,请检查网络后再试！");
  return Promise.resolve(err);
})

axios.interceptors.response.use(data => {
  if (data.status && data.status == 200 && data.data.status == 'error') {
    toast(data.data.msg);
    return;
  }
  if (data.data.code == 401) {
    toast('重新登陆');
    return
  }
  return data;
}, err => {
  window.$Raven.captureException(err.response.data);
  if (err.response.status == 504 || err.response.status == 404) {
    toast('服务器响应出错');
  } else if (err.response.status == 401) {
    toast('重新登陆');
  } else {
    toast('请检查网络情况或联系客服!');
  }
  return Promise.resolve(err);
})
// checkNavigator()
function checkNavigator() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
    //跳转移动端页面
    console.log('appppp')
  } else {
    //跳转pc端页面
    console.log('pccccc')
  }
}
export const postRequest = (url, baseURL, params) => {
  return axios({
    method: 'post',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: qs.stringify(params),
    timeout: 30000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}