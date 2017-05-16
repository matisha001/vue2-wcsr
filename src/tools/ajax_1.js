import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default (params,callback) => {
  Vue.http.options.headers = {
    'Content-Type': 'application/json;charset=UTF-8;'
  }
  // Vue.http.options.xhr = {
  //   withCredentials: true
  // }
  // Vue.http.options.emulateJSON = true
  Vue.http.post('http://jtqb.shizitegong.com/req/app', params).then(function(response) {
    callback(response);
  }, function(response) {
    // alert('服务器繁忙,请稍后重试');
  });
}

/*
*
 ajax({"requestType":"5041","arguments":{"activityType":"2"}},function(data){
 console.log(data)
 })
*
* */
