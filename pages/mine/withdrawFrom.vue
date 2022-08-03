<template>
<view >
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<!-- <view class="flex1 flex flex_ac flexcenter font16 bold">修改密码</view> -->
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
		<view slot="right" class="flex flex_ac" @click="navTo('/pages/mine/withdrawRecord')">
			<image src="@/static/images/us_icon1.png" mode="widthFix" style="width: 36rpx;"></image>
		</view>
	</uni-nav-bar>
	<view class="uni-pa-10">
		<h2 >转账USDT</h2>
		<view class="font12 gray">转账 USDT 到数字币地址</view>
	</view>
	
	
	<view class="bgfff uni-px-10 uni-py-5">
		<view class="uni-my-5 bold gray">地址</view>
		<view class="greyBox flex flex_ac">
			<input class="flex1 uni-pl-5 font12" placeholder="长按粘贴" />
			<view class="flex flex_ac uni-pr-5">
				<image src="@/static/images/tou.png" mode="widthFix" style="width: 44rpx;margin-right: 5px;"></image>
				<image src="@/static/images/home1.png" mode="widthFix" style="width: 44rpx;"></image>
			</view>
		</view>
		
		
		<view class="uni-my-5 bold gray">主网络</view>
		<view class="greyBox uni-mb-10 flex flex_ac uni-px-5" >
			<input class="flex1 uni-pl-5 font12" placeholder="输入地址后，可自动匹配主网络" />
			<uni-icons type="forward" size="20" color="#707A8A"></uni-icons>
		</view>
		
		<view class="uni-my-5 bold gray">金额</view>
		<view class="greyBox flex flex_ac">
			<input class="flex1 uni-pl-5 font12" type="digit"  />
			<view class="font12 flex flex_ac">
				<!-- <image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;"></image> -->
				<text class="bold">USDT</text>
				<view class="yellow uni-pa-5">全部</view>
			</view>
		</view>
		
		
		<view class="uni-my-5 bold gray flex flex_ac flexbetween">
			可用
			<view class="font12 gray">
				0.289065 USDT
			</view>
		</view>
		<view class="greyBox uni-py-5">
			<view class="flex flex_ac uni-px-5">
				<view class="flex1 font12 flex flex_ac" style="height:90rpx;">
					<uni-icons type="checkbox-filled" size="20" color="#E6B00B"></uni-icons>
					<text class="gray bold uni-ml-3">现货账户</text>
				</view>
				<view class="font12 gray">
					0.289065 USDT
				</view>
			</view>
			<view class="flex flex_ac uni-px-5">
				<view class="flex1 font12 flex flex_ac" style="height:90rpx;">
					<uni-icons type="checkbox-filled" size="20" color="#707A8A"></uni-icons>
					<text class="gray bold uni-ml-3">资金账户</text>
				</view>
				<view class="font12 gray">
					0 USDT
				</view>
			</view>
		</view>
		
		<view class="uni-my-5 bold gray font12">提示</view>
		<view class="gray font12 uni-mb-3">1、24h提现额度： <text class="black">8,000,000/8,000,000BUSD</text></view>
		<view class="gray font12 uni-mb-3">2、提币至币安地址将获得交易费用退款。 <text class="yellow">了解详情</text></view>
		<view class="gray font12 uni-mb-3">3、请勿直接提现至众筹或ICO地址，否则将无法收到众筹或ICO发放的代币。</view>
		
	</view>
	
	<view style="height: 300rpx;"></view>
	<view class="fixed_bottom flex flex_ac uni-pa-10 bgfff">
		<view class="flex2">
			<view class="gray font12">到账数量</view>
			<view class="bold font20">0.00 <text class="font16 uni-ml-3">USDT</text></view>
			<view class="gray font12">网络手续费 0.00 USDT</view>
		</view>
		<button class="font12 flex1" size="mini">提现</button>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
.greyBox{background-color: #F5F5F5;border-radius: 5px;margin-bottom: 20px;
	input{height:80rpx;}
}
</style>
