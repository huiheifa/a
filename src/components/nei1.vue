<template id="nei1">
	<div id="nav0">
		
		<div id="img1"><img src="../assets/img1.png"/></div>
		<div class="nav">
			 <router-link to="/youhui"><dl>
				<dt><i class="iconfont icon-youhui"></i></dt>
				<dd>最新优惠</dd>
			</dl></router-link>
			<dl>
				<dt><i class="iconfont icon-feiji"></i></dt>
				<dd>寓意系</dd>
			</dl>
			<dl>
				<dt><i class="iconfont icon-sheji"></i></dt>
				<dd>设计感</dd>
			</dl>
			<dl>
				<dt><i class="iconfont icon-biao"></i></dt>
				<dd>复古派</dd>
			</dl>
			<router-link to="/pinpai/yuyue"><dl>
				<dt><i class="iconfont icon-wode"></i></dt>
				<dd>到店预约</dd>
			</dl></router-link>
		</div>
		
		<div class="nav2">
		<div class="wrap">
			<img src="../assets/img2.png"/>
			<img src="../assets/img2.png"/>
		</div>	
		</div>
		
		<div class="nav3">
			<img src="../assets/img3.png"/>
		</div>
		
		<div class="nav4">
			<img src="../assets/img4.png"/>
		</div>
		
		<div class="nav4">
			<img src="../assets/img5.png"/>
		</div>
		
		<div class="nav5">
			<ul>
				<router-link :to="'/'+i" v-for="(item,i) in arr"> <li>{{item}}</li></router-link>
				
			</ul>
		</div>
		
		<div class="nav6" id="nav6">
			
			<router-view></router-view>
		</div>
		
		
		
		
	</div>
	
</template>


<script type="text/javascript">
	export default{
		name:"nei1",
		data:function(){
			return{
				arr:[]
			}
		},
		created:function(){
			var _this = this
			var st=this.$route.params.id
			axios.get('nav.json')
				.then(function(res){
					for(var i in res.data){
						_this.arr.push(res.data[i].name)
					}
				})
		}
	}
	
</script>



<style type="text/css">
	*{margin: 0;padding: 0;}
	#nei1{margin: 0 auto;position: relative;left: 0;right: 0;}
	#nav0{width: 6.4rem;margin: 0 auto;margin-bottom: 3rem;min-height: 100%;}
	#img1{width: 6.4rem;margin: 0 auto;}
	#img1 img{width: 6.4rem;}
	.nav{height: 1.65rem;width: 6.4rem;margin: 0 auto;}
	.nav dl{width: 1.28rem;height: 1.65rem; float: left;text-align: center;}
	.nav dl dt{height: 0.95rem;line-height: 0.95rem;font-size: 0.4rem;font-weight: bold;}
	.nav dl dd{font-size: 0.2rem;color: #3c3c3c;font-weight: bold;}
	
	.nav2{height: 2.4rem;width: 6.4rem;overflow: hidden;margin: 0 auto;border-bottom: 1px solid #ccc;}
	.nav2 .wrap{width: 8rem;}
	.nav2 img{width: 2.7rem;height: 2.3rem;float: left;margin-left: 0.3rem;}
	
	.nav3{height: 0.8rem;width: 6.4rem;margin: 0 auto;}
	.nav3 img{width: 6.4rem;height: 0.8rem;}
	
	.nav4{height: 2.4rem;width: 6.4rem;margin: 0 auto;margin-top: 0.2rem;}
	.nav4 img{height: 2.4rem;width: 6.4rem;}
	
	.nav5{height: 0.64rem;width: 6.4rem;}
	.nav5 ul{height: 0.64rem;width: 6.4rem;}
	.nav5 ul li{width: 1.28rem;float: left;text-align: center;line-height: 0.64rem;height: 0.64rem;font-weight: bold;}
	
	
	
</style>