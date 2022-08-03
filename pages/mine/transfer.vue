<template>
<view >
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<!-- <view class="flex1 flex flex_ac flexcenter font16 bold">修改密码</view> -->
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
		<view slot="right" class="flex flex_ac" @click="navTo('/pages/mine/transferRecord')">
			<image src="@/static/images/us_icon1.png" mode="widthFix" style="width: 36rpx;"></image>
		</view>
	</uni-nav-bar>
	<h2 class="uni-pa-10">划转</h2>
	
	<view class="bgfff uni-px-10 uni-py-5">
		<view class="greyBox flex flex_ac">
			<view class="flex1">
				<view class="flex flex_ac" >
					<view class="flex1 font12 flex flex_ac uni-pl-5" style="height:90rpx;">
						<image src="@/static/images/tt_acount1.png" mode="widthFix" style="width: 24rpx;"></image>
						<text class="font12 gray uni-mx-5">从</text>
						<text class="bold">{{from}}</text>
					</view>
					<uni-icons type="forward" size="20" color="#707A8A"></uni-icons>
				</view>
				<view class="flex flex_ac">
					<view class="flex1 font12 flex flex_ac uni-pl-5" style="height:90rpx;">
						<image src="@/static/images/tt_acount3.png" mode="widthFix" style="width: 24rpx;"></image>
						<text class="font12 gray uni-mx-5">到</text>
						<text class="bold">{{to}}</text>
					</view>
					<uni-icons type="forward" size="20" color="#707A8A"></uni-icons>
				</view>
			</view>
			<view class=" flex flex_ac flexend uni-pr-10" style="width: 20%;height: 40px;flex:0 0 auto;" @click="huhuan">
				<image src="@/static/images/e.png" mode="widthFix" style="width: 36rpx;"></image>
			</view>
		</view>
		
		<view class="greyBox flex flex_ac uni-px-5" style="margin-bottom: 3px;" @click="navTo('/pages/mine/choseCoin')">
			<view class="flex1 font12 flex flex_ac" style="height:80rpx;">
				<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;"></image>
				<text class="bold">BTC</text>
			</view>
			<uni-icons type="forward" size="20" color="#707A8A"></uni-icons>
		</view>
		<view class="font12 red uni-mb-10">当前币种无可用余额资产，请选择其他币种</view>
		
		<view class="uni-my-5 gray font12">数量</view>
		<view class="greyBox flex flex_ac">
			<input class="flex1 uni-pl-5 font12" type="digit"  />
			<view class="font12 flex flex_ac">
				<!-- <image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;"></image> -->
				<text class="bold">BTC</text>
				<view class="yellow uni-pa-5">全部</view>
			</view>
		</view>
	</view>
	
	<!-- <view style="height: 300rpx;"></view> -->
	<view class="fixed_bottom uni-pa-10 bgfff">
		<button class="font12">确认划转</button>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				from:'可用余额：10000',
				to: 'USDT'
			}
		},
		methods: {
			huhuan(){
				this.from=this.to==='USDT'?'USDT':'可用余额：10000'
				this.to=this.to!=='USDT'?'USDT':'可用余额：10000'
			}
		}
	}
</script>

<style scoped lang="scss">
.greyBox{background-color: #F5F5F5;border-radius: 5px;margin-bottom: 20px;
	input{height:80rpx;}
}
</style>
