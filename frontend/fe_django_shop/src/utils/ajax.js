import axios from 'axios'
import qs from 'qs'
//import router from '../router/index.js'

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export const ajax = axios.create({
  headers: {
    'X-CSRFToken': getCookie('csrftoken'),
    //'Authorization': 'Token ' + getCookie('token'),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: function (data){
    return qs.stringify(data)
  },
  withCredentials: true
})

ajax.interceptors.request.use(function (config) {
  config.headers['X-CSRFToken'] = getCookie('csrftoken');
  //config.headers['Authorization'] = 'Token ' + getCookie('token');
  return config
}, function (error) {
  return Promise.reject(error)
})

ajax.interceptors.response.use(function (response) {

  return response
}, function (error) {
  if (error.response) {
    if (error.response.status === 500){
      console.log('伺服器繁忙')
    }
    /*if (error.response.status === 401) {
      router.push({ name: "AccountLogin" });
    }*/
  }
  return Promise.reject(error)
})