<template>
<view class="uni-pb-10">
	<view class="userInfo flex flex_ac uni-pa-10">
		<image src="@/static/images/touPic.png" mode="widthFix" class="flexauto"></image>
		<view class="flex1 uni-ml-5">
			<view class="bold font16 ">{{userInfo.username}}</view>
			<view class="font12 gray">ID:{{userInfo.id}} </view>
		</view>
		<uni-icons type="forward" size="25" color="#707A8A"></uni-icons>
	</view>
	
	<view class="uni-pa-10 userAsset bgfff">
		<view class="yugu flex flex_ac uni-mb-5">
			<view class="flex1 flex flex_ac">
				<view class="gray3">资产估值(USDT)</view>
				<image src="@/static/images/eye_on.png" mode="widthFix" style="width: 40rpx;margin-left: 5px;"></image>
			</view>
			<image src="@/static/images/us_icon1.png" mode="widthFix" style="width: 36rpx;"></image>
		</view>
		<view class="font24 bold">0.05312357</view>
		<view class="font12 gray3">≈$11,195.10</view>
		
		<view class="flex flex_ac uni-mt-8">
			<view class="gray3">今日盈亏</view>
			<image src="@/static/images/notice2.png" mode="widthFix" style="width: 20rpx;margin-left: 5px;"></image>
		</view>
		<view class="flex flex_ac">
			<view class="font15 bold uni-mr-3">+$0.00001769</view>
			<uni-icons type="forward" size="20" color="#707A8A"></uni-icons>
		</view>
		<view class="flex uni-mt-8">
			<button @click="navTo('/pages/mine/deposit')">充值</button>
			<button type="default" class="uni-mx-5" @click="navTo('/pages/mine/withdraw')" >提现</button>
			<button type="default" @click="navTo('/pages/mine/transfer')">闪兑</button>
		</view>
	</view>
	
	<view class="uni-my-3 myAccount bgfff">
		<view class="items flex flexbetween flex_ac uni-px-10">
			<text class="font16 bold">我的账户</text>
			<image src="@/static/images/s_down.png" mode="widthFix" style="width: 37rpx;" v-if="!showDown" @click="showDown=true"></image>
			<image src="@/static/images/s_up.png" mode="widthFix" style="width: 37rpx;" v-if="showDown" @click="showDown=false"></image>
		</view>
		<uni-transition :show="showDown" >
			<view class="downDiv uni-pl-10">
				<view class="li uni-py-5">
					<text class="font12 gray">资金账户</text>
					<view class="flex">
						<view class="font20 bold">0.04</view>
						<view class="font12 uni-ml-3 flex flex_y_end uni-pb-2">USDT</view>
					</view>
				</view>
				<view class="li uni-py-5">
					<text class="font12 gray">可用余额</text>
					<view class="flex">
						<view class="font20 bold">24.66</view>
						<view class="font12 uni-ml-3 flex flex_y_end uni-pb-2">USDT</view>
					</view>
				</view>
				<view class="li uni-py-5 borderNone">
					<text class="font12 gray">冻结余额</text>
					<view class="flex">
						<view class="font20 bold">24.66</view>
						<view class="font12 uni-ml-3 flex flex_y_end uni-pb-2">USDT</view>
					</view>
				</view>
			</view>
		</uni-transition>
	</view>
	
	<view class="bgfff uni-pl-10">
		<view class="navItems flex flex_ac uni-pr-10" @click="navTo('/pages/mine/security')">
			<view class="flex1 flex flex_ac">
				<image src="@/static/images/us_nav1.png" mode="widthFix" style="width: 32rpx;margin-right: 16rpx;"></image>
				<view class="">安全</view>
			</view>
			<uni-icons type="forward" size="20" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10" @click="navTo('/pages/mine/notify')">
			<view class="flex1 flex flex_ac">
				<image src="@/static/images/us_nav2.png" mode="widthFix" style="width: 32rpx;margin-right: 16rpx;"></image>
				<view class="">通知</view>
			</view>
			<uni-icons type="forward" size="20" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10" @click="navTo('/pages/mine/setUp')">
			<view class="flex1 flex flex_ac">
				<image src="@/static/images/us_nav3.png" mode="widthFix" style="width: 32rpx;margin-right: 16rpx;"></image>
				<view class="">设置</view>
			</view>
			<uni-icons type="forward" size="20" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10">
			<view class="flex1 flex flex_ac">
				<image src="@/static/images/us_nav4.png" mode="widthFix" style="width: 32rpx;margin-right: 16rpx;"></image>
				<view class="">帮助中心</view>
			</view>
			<uni-icons type="forward" size="20" class="bold" color="#ddd"></uni-icons>
		</view>
		<view class="navItems flex flex_ac uni-pr-10 borderNone">
			<view class="flex1 flex flex_ac">
				<image src="@/static/images/us_nav5.png" mode="widthFix" style="width: 32rpx;margin-right: 16rpx;"></image>
				<view class="">分享应用</view>
			</view>
			<uni-icons type="forward" size="20" class="bold" color="#ddd"></uni-icons>
		</view>
	</view>
</view>
</template>

<script>
export default {
	data() {
		return {
			showDown:false,
			userInfo:{}
		}
	},
	onShow() {
		// 8.219.2.129 cbsx iBfac3nG8knSBRrB
		
		this.$request({
			url: '/getUserProfile',
			data:this.formData,
			method:'POST',
		}).then(ress=>{
			uni.setStorageSync('userInfo',ress.data)
			this.userInfo=ress.data
		}).catch(error=>{
			this.Toast(error.msg);
		})
	},
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
page{background: #F5F5F5!important;}
.userInfo {
	.flexauto{width: 90rpx;height: 90rpx;border-radius: 50%;}
}
.userAsset{border-radius: 40rpx 40rpx 0 0;
	button{flex:1;height: 60rpx;font-size: 24rpx;font-weight: bold;}
}

.myAccount{
	.items{height: 90rpx;}
	.downDiv{border-top: 1px solid #F5F5F5;
		.li{border-bottom: 1px solid #F5F5F5;}
	}
}

.navItems{height: 100rpx;border-bottom: 1px solid #F5F5F5;}



</style>
