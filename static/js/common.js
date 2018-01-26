export default  {
   install(Vue,options) {
     Vue.prototype.getToken = function (isParent) {
       const token = sessionStorage.getItem("__TOKEN__");
       if (token) {
         return token;
       } else {
         if (isParent) {
           alert("登录超时，请重新登录！"), function (index) {
             $.redirect('../../login/login.html')

           }
         }
       }
     }

   }
}








