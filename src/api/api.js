import axios from 'axios'
import cookie from 'js-cookie'
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

export const postRequest = (url, baseURL, params) => {
  return axios({
    method: 'post',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": "POST,GET",
    }
  });
}
