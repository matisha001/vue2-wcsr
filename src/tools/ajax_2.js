import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default (params) => {
  // Vue.http.options.headers = {
  //   'Content-Type': 'application/json;charset=UTF-8;'
  // }
  Vue.http.options.timeout = 30000
  // Vue.http.options.emulateJSON = false
  return new Promise((resolve, reject) => {
    Vue.http.post('http://jtqb.shizitegong.com/req/app',params)
      .then((res) => {
        resolve(res);
      })
      .catch((res) => {
        reject(res.body);
      });
  })
}


/*
 ajax({"requestType":"5041","arguments":{"activityType":"2"}})
 .then((data) => {
 console.log(data)
 })
 .catch((message) => {

 })
 */
