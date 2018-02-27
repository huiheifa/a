<template id="pinpai">
	<div id="pinpai0">
		<div id="pinpai1">xiao</div>
		<p id="p">
			<router-link to="/pinpai/guanyu"><span>关于我们</span></router-link>
			<router-link to="/pinpai/yuyue"><span>到店预约</span></router-link>
			<router-link to="/pinpai/yijian"><span>意见反馈</span></router-link>
		</p>
		
		<router-view></router-view>
	</div>
	
</template>
<script type="text/javascript">
	export default{
		name:"pinpai"
	}
</script>
<style type="text/css">
	#pinpai0{width: 6.4rem;margin: 0 auto;padding-top: 0.3rem;}
	#pinpai1{height: 2.5rem;width: 6.4rem;text-align: center;line-height: 2.5rem;background: #5c4caf;color: #fff;font-size: 2rem;}
	
	#p{height: 0.7rem;line-height: 0.7rem;border-bottom: 0.05rem solid #ccc;padding-left: 0.5rem;}
	#p span{padding: 0 0.3rem;}
	
</style>


