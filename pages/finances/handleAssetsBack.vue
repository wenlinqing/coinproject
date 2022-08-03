<template>
<view class="uni-px-10">
	<view class="uni-my-5 gray">赎回总额</view>
	<view class="greyBox flex flex_ac">
		<input class="flex1 uni-pl-5 font12" type="digit" placeholder="请输入金额" />
		<view class="font12 flex flex_ac">
			<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;"></image>
			<text class="bold">PHA</text>
			<view class="yellow uni-pa-5">全部</view>
		</view>
	</view>
	<view class="uni-my-2 gray font12">可用:<text class="bold uni-ml-5">0 PHA</text></view>
	
	<view class="SecBox uni-my-10 uni-pa-9" :class="act==1?'on':''" @click="tagClick(1)">
		<view class="uni-mb-3 ">快速赎回</view>
		<view class="gray font12">每日最高20000000.00000000 PHA赎回额度。赎回金额今日到账。</view>
	</view>
	<view class="SecBox uni-my-10 uni-pa-9" :class="act==2?'on':''" @click="tagClick(2)">
		<view class="uni-mb-3 ">标准赎回</view>
		<view class="gray font12">赎回金额将会在2022-06-18 18:00发放。您仍能获取今日的利息。</view>
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
			act: 1
		}
	},
	methods: {
		tagClick(type){
			this.act=type
		}
	}
}
</script>

<style scoped lang="scss">
.fixed_bottom{border-top: 1px solid #F5F5F5;
	button{height: 70rpx;}
}
.greyBox{background-color: #F5F5F5;border-radius: 5px;
	input{height:70rpx;}
}
.SecBox{border: 1px solid #ECECEC;border-radius: 5px;position: relative;}
.SecBox.on{border:2px solid #FBD535;}
// .SecBox.on::after{content: '';border-bottom: 20px solid #FBD535; border-left: 20px solid #000;
// border-right: 20px solid #000;position: absolute;right: 10px;top: 10px;z-index: 1;background-color: #FBD535;}
</style>
