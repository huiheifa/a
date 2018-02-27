<template id="navlist">
	<div id="wrap">
		<div v-for="(item,index) in ab">
			
			<dl>
				<dt><img :src="'./src/assets/'+item.img"/></dt>
				<!--<dt><img src="../assets/nav1.png"/></dt>-->
				<dd>{{item.name}}</dd>
				<dd>{{item.price}}<span>{{item.coupons}}</span></dd>
			</dl>
		</div>
	</div>
			
			
</template>


<script type="text/javascript">
	export default{
		name:"navlist",
		data(){
			return{
				arr:[]
			}
		},
		mounted:function(){
//			var _this = this
//			axios.get('nav.json')
//				.then(function(res){
//					
//					console.log(res.data)
//				_this.arr=JSON.stringify(res.data)
//				console.log(_this.arr)
				
//			})
		},
		computed:{
			
			ab:function(){
				var _this = this
				axios.get('nav.json')
				.then(function(res){
					 _this.arr=res.data[_this.$route.params.id]["goods"]
				})
				return this.arr
			}
			
		}
	}
	
	
</script>



<style type="text/css">
	#wrap{width: 6.4rem;background: #f6f2f3;margin-bottom: 1rem;min-height: 3.9rem;float: left;}
	#wrap dl{width: 3rem;float: left;height: 3.9rem;background: #fff;margin: 0 0.1rem;margin-top: 0.2rem;}
	#wrap dt{width: 3rem;height: 3rem;}
	#wrap dt img{width: 3rem;height: 3rem;float: left;}
	#wrap dd{height: 0.45rem;line-height: 0.45rem;}
	#wrap span{float: right;}
	
	
</style>
