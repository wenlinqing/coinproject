<template>
<view>
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
				<uni-icons type="info-filled" size="18" color="#999"></uni-icons>
			</view>
			<view class="flex1 center">
				<view  >收到USDT</view>
				<uni-icons type="info-filled" size="18" color="#999"></uni-icons>
			</view>
		</view>
	</view>
	
	<uni-table  style="width: 100%;">
		<uni-tr>
			<uni-th width="100px" class="font12">年化收益率</uni-th>
			<uni-th width="100px" class="font12"  align="center">目标价格</uni-th>
			<uni-th align="right" class="font12">截止时间</uni-th>
		</uni-tr>
		<uni-tr v-for="item,index in 10" :key="index">
			<uni-td class="green" width="100px">167.97%</uni-td>
			<uni-td class="bold font16" width="100px" align="center">21,000</uni-td>
			<uni-td  class="bold font16" align="right">
				<view class="flex flex_ac flexend" @click="navTo('/pages/finances/subscription')">
					2022-07-01					<image src="@/static/images/mores.png" mode="widthFix" style="width: 34rpx;margin-left: 3px;"></image>				</view>
			</uni-td>
		</uni-tr>
	</uni-table>
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



</style>
