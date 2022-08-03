<template>
<view class="uni-px-10">
	<view class="uni-my-10 flex flex_ac">
		<image :src="productInfo.photo" mode="widthFix" style="width: 60rpx;margin-right: 5px;"></image>
		<text class="bold font20">{{productInfo.title}}</text>
	</view>
	
	<view class=" ">
		<view class="uni-mb-3 font12 flex flexbetween">
			<text class="gray">总额</text>
			<view class="bold">{{productInfo.total_num}} {{productInfo.currency}}</view>
		</view>
		<view class="uni-mb-3 font12 flex flexbetween">
			<text class="gray">计息中</text>
			<view class="bold">204.89631180</view>
		</view>
		<view class="uni-mb-3 font12 flex flexbetween">
			<text class="gray">今日申购</text>
			<view class="bold">0.00000000</view>
		</view>
		<view class="uni-mb-3 font12 flex flexbetween">
			<text class="gray">赎回中</text>
			<view class="bold">0.00000000</view>
		</view>
		<view class="uni-mb-3 font12 flex flexbetween">
			<text class="gray">累积计息</text>
			<view class="bold">0.09818485</view>
		</view>
		<view class="uni-mb-3 font12 flex flexbetween">
			<text class="gray">预估年华收益率</text>
			<view class="bold">{{productInfo.profit_year}}%</view>
		</view>
	</view>
	<view class="greyBox uni-my-10 uni-pa-9 flex flex_ac">
		<view class="flex1">
			<view class="uni-mb-3">自动申购</view>
			<view class="flex1 uni-mt-3 gray font12">每日享有利息</view>
		</view>
		<view style="width: 80rpx;flex:0 0 auto;">
			<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
		</view>
	</view>
	
	<!-- <view style="height: 300rpx;"></view> -->
	<view class="fixed_bottom uni-px-10 uni-py-5 bgfff">
		<view class="font12 uni-mb-3 gray">1.活期每日分发利息，赎回后本金返回到现货账户。</view>
		<view class="font12 uni-mb-3 gray">2.活期每日分发利息，赎回后本金返回到现货账户。</view>
		<view class="flex">
			<button type="default" class="uni-mr-5 flex1" @click="navTo('/pages/finances/handleAssetsBack')">赎回</button>
			<button class="flex1">确认</button>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				productInfo: {}
			}
		},
		created(){
			this.$request({
				url: '/getProduct',
				data:{
					id:this.$route.query.id
				},
				method:'POST',
			}).then(ress=>{
				this.productInfo=ress.data
			}).catch(error=>{
				this.Toast(error.msg);
			})
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
.greyBox{background-color: #FAFAFA;border: 1px solid #ECECEC;border-radius: 5px;}
.fixed_bottom button{height: 70rpx;}
</style>
