import "babel-polyfill";
import "../assets/css/style.css";
import "../assets/vendors/font-awesome/css/font-awesome.css"
import $ from "jquery";
const Swipe = require("../assets/vendors/swipe/swipe.js");
let People = ()=>import(/* webpackChunkName: 'people'*/ './class/people.js');
setTimeout(()=>{
  People().then((data)=>{
    console.log(data);
    // let p = new data.default();
    // p.say();
  })
},300)

console.log(111)

$(function(){
    var swiper = Swipe(document.querySelector('.swipe'), {
        auto: 3000,
        transitionEnd: function (index) {
          // index++;
  
          $('.cursor span').eq(index).addClass('active').siblings('.active').removeClass('active');
        }
      });
  
      // 上/下一张
      $('.swipe .arrow').on('click', function () {
        var _this = $(this);
  
        if(_this.is('.prev')) {
          swiper.prev();
        } else if(_this.is('.next')) {
          swiper.next();
        }
      })
})

