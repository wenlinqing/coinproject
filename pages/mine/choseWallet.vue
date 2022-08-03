<template>
<view><uni-nav-bar fixed :statusBar="true" :border="false">
		<view class="flex1 flex flex_ac flexcenter font16 bold">选择一个钱包</view>
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
	</uni-nav-bar>
	
	
	<view class="listBox">
		<view class="flex flex_ac flexbetween uni-pa-10" :class="active==1?'act':''" @click="choseFun(1)">
			<view class="item flex flex_ac">
				<image src="@/static/images/tt_acount1.png" mode="widthFix"></image>
				<text>现货账户</text>
			</view>
			<image class="chkImg" src="@/static/images/yes.png" mode="widthFix" style="width: 32rpx;"></image>
		</view>
		<view class="flex flex_ac flexbetween uni-pa-10" :class="active==2?'act':''" @click="choseFun(2)">
			<view class="item flex flex_ac">
				<image src="@/static/images/tt_acount2.png" mode="widthFix"></image>
				<text>逐仓杠杆</text>
			</view>
			<image class="chkImg" src="@/static/images/yes.png" mode="widthFix" style="width: 32rpx;"></image>
		</view>
		<view class="flex flex_ac flexbetween uni-pa-10" :class="active==3?'act':''" @click="choseFun(3)">
			<view class="item flex flex_ac">
				<image src="@/static/images/tt_acount3.png" mode="widthFix"></image>
				<text>资金账户</text>
			</view>
			<image class="chkImg" src="@/static/images/yes.png" mode="widthFix" style="width: 32rpx;"></image>
		</view>
	</view>
	
	<!-- <notData text="无搜索结果"></notData> -->
</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
			}
		},
		methods: {
			choseFun(v){
				this.active=v
			}
		}
	}
</script>

<style scoped lang="scss">
.listBox {
	.item{font-size: 24rpx;
		image{width: 24rpx;margin-right: 20rpx;}
	}
	.flexbetween image.chkImg{display: none;}
	.act image.chkImg{display: block;}
}


</style>
