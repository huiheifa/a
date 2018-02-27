<template id="footer">
		<div id="foot">
		<router-link to="/home"><dl class="fdl">
			<dt><i slot="icon" class="iconfont icon-shouyeshouye"></i></dt>
			<dd>首页</dd>
		</dl></router-link>
		<router-link to="/tashuo"><dl class="fdl">
			<dt> <i slot="icon" class="iconfont icon-message"></i></dt>
			<dd>她说</dd>
		</dl></router-link>
		<router-link to="/pinpai"><dl class="fdl">
			<dt><i slot="icon" class="iconfont icon-pinpai"></i></dt>
			<dd>品牌</dd>
		</dl></router-link>
		<router-link to="/wode"><dl class="fdl">
			<dt><i slot="icon" class="iconfont icon-wode"></i>	</dt>
			<dd>我的</dd>
		</dl></router-link>
		</div>
	
</template>


<script type="text/javascript">
	export default{
		name:"footer"
	}

</script>

<style type="text/css">
	#foot{position: fixed;bottom: 0;height: 0.8rem;background: #5c4caf;}
	#foot .fdl{width: 25vw;height: 0.8rem;float: left;}
	#foot .fdl dt{width: 25vw;height: 0.4rem;text-align: center;line-height: 0.4rem;font-size: 0.3rem;color: #a699f1;}
	#foot .fdl dd{width: 25vw;height: 0.4rem;text-align: center;line-height: 0.4rem;font-size: 0.3rem;color: #a699f1;}
</style>



