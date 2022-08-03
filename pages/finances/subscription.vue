<template>
<view>
	<view class="uni-px-10">
		<view class="timeBox uni-mb-5" style="padding: 0;">
			<view class="uni-my-5 gray">申购金额</view>
			<view class="greyBox flex flex_ac">
				<input class="flex1 uni-pl-5 font12" type="digit" placeholder="请输入金额" />
				<view class="font12 flex flex_ac">
					<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;"></image>
					<text class="bold">USDT</text>
					<view class="yellow uni-pa-5">全部</view>
				</view>
			</view>
			<view class="uni-my-2 error font12">您的资金余额不足</view>
			<view class="uni-my-2 gray font12">可用:<text class="bold uni-ml-5">0 USDT</text></view>
			
			<view class="uni-my-10 gray">申购数量限制</view>
			<view class="uni-my-2 gray font12">最少可投:<text class="black uni-ml-5">0.1</text></view>
			<view class="uni-my-2 gray font12">最大可投:<text class="black uni-ml-5">1000</text></view>
			
		</view>
		
		<view class="uni-mt-10 uni-mb-5 gray">概览</view>
		<view class="greyBox uni-pa-9">
			<view class="uni-pb-5 uni-mb-5 lineBox" v-if="showMore">
				<view class="uni-mb-3 font12 flex flexbetween">
					<text class="gray">申购日期</text>
					<view class="bold">2022-06-22 12:10</view>
				</view>
				<view class="uni-mb-3 font12 flex flexbetween">
					<text class="gray">结算日期</text>
					<view class="bold">2022-06-22 12:10</view>
				</view>
				<view class="uni-mb-3 font12 flex flexbetween">
					<text class="gray">发放</text>
					<view class="bold">2022-06-22 12:10</view>
				</view>
			</view>
			<view class="uni-mb-3 font12 flex flexbetween">
				<text class="gray">BTC 现货参考价格</text>
				<view class="bold">20,207.75</view>
			</view>
			<view class="font12 flex flexbetween">
				<text class="gray">目标价格</text>
				<view class="bold">20,000</view>
			</view>
			<view class="font12 flex flexbetween">
				<text class="gray">年华收益率</text>
				<view class="bold green">240.99%</view>
			</view>
		</view>
		
		<view class="uni-mt-10 uni-mb-5 gray">概览</view>
		<view class="topBox uni-py-5">
			<view class="outBox">
				<view class="innerBox flex">
					<view class="flex1"></view>
					<view class="font12 center flex1">
						<text>目标价格</text>
						<view class="bold">20,000</view>
						<view class="uni-mt-n3">
							<image src="@/static/images/down.png" mode="widthFix" style="width: 16rpx;"></image>
						</view>
						<view>
							<image src="@/static/images/tt1.png" mode="widthFix" style="width: 32rpx;"></image>
						</view>
					</view>
					<view class="font12 center flex1">
						<view>参考现货价格</view>
						<view class="bold green">20,207.75</view>
						<view class="uni-mt-n3">
							<image src="@/static/images/down.png" mode="widthFix" style="width: 16rpx;"></image>
						</view>
						<view>
							<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;"></image>
						</view>
					</view>
				</view>
				<view class="lineBox"></view>
			</view>
			<view class="flex ">
				<view class="flex1 center">
					<view class="gray2">收到BTC</view>
				</view>
				<view class="flex1 center">
					<view  >收到USDT</view>
				</view>
			</view>
		</view>
		<view class="subBox uni-pa-8 font12">
			<view class="flex flex_ac uni-mb-3">
				<text style="background: #2EBD87;"></text>
				当最终结算价>$20,000，您将会收到
			</view>
			<view class="flex flex_ac">
				<text style="background: #E6B00B;"></text>
				当最终结算价<$20,000，您将会收到
			</view>
		</view>
	</view>
	<view class="line5 uni-my-10"></view>
	<view class="uni-px-10 gray font12">
		<view>1.可用Spot账户账户来进行购买。</view>
		<view>2.申购后，您可以在双币投资订单下查看认购历史。</view>
		<view>3.申购后，您可以在双币投资订单下查看认购历史。</view>
	</view>
	
	<view style="height: 300rpx;"></view>
	<view class="fixed_bottom uni-pa-10 bgfff">
		<view class="font12 uni-mb-3">
			<label>
				<checkbox  color="#FFCC33" style="transform:scale(0.7)" />
				<text class="gray">我已阅读并且同意</text>
			</label>
			<text class="yellow">《币安Staking协议》</text>
		</view>
		<button >确认</button>
	</view>
</view>
</template>

<script>
export default {
	data() {
		return {
			showMore: true
		}
	},
	methods: {

	}
}
</script>

<style scoped lang="scss">
.timeBox .item{padding: 0 30rpx;}
.timeBox .item.on {background: url('@/static/images/itemBg.png') no-repeat center center;background-size: 100% 100%;}

.greyBox{background-color: #F5F5F5;border-radius: 5px;
	input{height:70rpx;}
}
.lineBox{border-bottom: 1px solid #E4E6E9;}
.fixed_bottom{border-top: 1px solid #F5F5F5;
	button{height: 70rpx;}
}
.subBox{background: #FCFCFC;
	text{width: 32rpx;height: 32rpx;display: inline-block;margin-right: 10px;border-radius: 50%;}
}
</style>
