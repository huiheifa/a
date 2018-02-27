import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

import nei1 from "./components/nei1.vue"
import youhui from "./components/youhui.vue"
import youhui1 from "./components/youhui1.vue"
import youhui2 from "./components/youhui2.vue"





import navlist from "./components/nei11.vue"
import tashuo from "./components/tashuo.vue"

import pinpai from "./components/pinpai.vue"
import guanyu from "./components/guanyu.vue"
import yuyue from "./components/yuyue.vue"
import yijian from "./components/yijian.vue"
import tuandui from "./components/tuandui.vue"
import gushi from "./components/gushi.vue"
import shengming from "./components/shengming.vue"



import wode from "./components/wode.vue"



Vue.use(Mint);

Vue.use(VueRouter)




var route = [
{path:"/youhui",component:youhui},
{path:"/youhui/youhui1",component:youhui1},
{path:"/youhui/youhui2",component:youhui2},
{path:"/home",component:nei1,},
{path:"/tashuo",component:tashuo},
{path:"/pinpai",component:pinpai,
	"children":[
		{path:"/pinpai/guanyu",component:guanyu},
		{path:"/pinpai/yuyue",component:yuyue},
		{path:"/pinpai/yijian",component:yijian},
		{path:"/pinpai",redirect:"/pinpai/guanyu"},
	]},
{path:"/pinpai/tuandui",component:tuandui},
{path:"/pinpai/gushi",component:gushi},
{path:"/pinpai/shengming",component:shengming},
{path:"/wode",component:wode},
{path:"/",component:nei1,
	"children":[{path:"/:id",component:navlist},
				{path:"*",redirect:"/0"}
	]

}
]
var router = new VueRouter({
	routes:route
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
