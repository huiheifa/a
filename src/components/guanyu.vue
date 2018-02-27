


<template id="guanyu">
	<div id="guanyu">
		<ul id="ul">
			<router-link to="/pinpai/tuandui"> <li>
				<div><img class="img1" src="../assets/guanyu11.png"/><img class="img2" src="../assets/guanyu1.png"/></div>
				<div class="div">
					<h3>团队</h3>
					<p>We work with many skilled manufacturers and makers to realize our line of goods...</p>
				</div>
			</li></router-link>
			<router-link to="/pinpai/gushi"><li>
				<div><img class="img1" src="../assets/guanyu21.png"/><img class="img2" src="../assets/guanyu2.png"/></div>
				<div class="div">
					<h3>品牌故事</h3>
					<p>Yield designs items that blend traditional craft with modern innovations. From thoughtfully...</p>
				</div>
			</li></router-link>
			<router-link to="/pinpai/shengming"><li>
				<div><img class="img1" src="../assets/guanyu31.png"/><img class="img2" src="../assets/guanyu3.png"/></div>
				<div class="div">
					<h3>声明</h3>
					<p>We are about respecting the past, yielding to the present and looking forward to the future...</p>
				</div>
			</li></router-link>
		</ul>
	</div>
	
</template>
<script type="text/javascript">
	export default{
		name:"guanyu"
	}
</script>
<style type="text/css">
	#guanyu{width: 6.4rem;margin: 0 auto;}
	#ul{width: 6.4rem;}
	#ul li{height: 3rem;}
	#ul li div{height: 3rem;width: 3.2rem;float: left;position: relative;}
	#ul li img{position: absolute;width: 2rem;}
	#ul li .img1{top: 0.2rem;left: 0.5rem;}
	#ul li .img2{top: 0.5rem;left: 1rem;}
	#ul li .div h3{height: 1rem;line-height: 1rem;text-align: center;font-weight: bold;}
	#ul li .div p{padding: 0 0.5rem;}
</style>





