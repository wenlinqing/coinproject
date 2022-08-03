<template>
<view style="background: #F5F5F5;min-height: 100vh;" class="flex flex_dir_col">
	<!-- #ifdef APP-PLUS -->
	<view style="height: 20px;"></view>
	<!-- #endif -->
	<view class="flex flex_ac uni-pa-3 uni-pl-10">
		<view class="homeSearch flex flex_ac font12 gray2 uni-pl-10 flex1 uni-mr-5">
			<image src="@/static/images/home0.png" mode="widthFix" style="width: 32rpx;margin-right: 32rpx;"></image>
			<text>搜索</text>
		</view>
		<view class=" flex">
			<view class="flexauto uni-mx-4">
				<image src="@/static/images/home1.png" mode="widthFix" style="width: 44rpx;"></image>
			</view>
			<view class="flexauto uni-mx-4">
				<image src="@/static/images/home2.png" mode="widthFix" style="width: 44rpx;"></image>
			</view>
			<view class="flexauto uni-mx-4">
				<uni-badge :text="8" absolute="rightTop" :offset="[0, 2]" size="small">
					<image src="@/static/images/home3.png" mode="widthFix" style="width: 44rpx;"></image>
				</uni-badge>
			</view>
			<view class="flexauto uni-mx-4">
				<image src="@/static/images/home4.png" mode="widthFix" style="width: 44rpx;"></image>
			</view>
		</view>
	</view>
	
	<view class="banner uni-mx-10 uni-my-6">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" mode="nav" :dots-styles="dotsStyles" field="title">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item, index) in imageList" :key="index">
					<image :src="item.photo" mode="widthFix" style="width: 100%;display: block;"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
	
	<uni-notice-bar showIcon color="#707A8A" background-color="#F5F5F5" scrollable single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
	
	<view class="homeBottom bgfff uni-pt-5 flex1">
		<view class="flex">
			<view class="uni-py-5 flex1 center">
				<image src="@/static/images/sec2_icon1.png" mode="widthFix" style="width: 48rpx;"></image>
				<view class="font12">理财</view>
			</view>
			<view class="uni-py-5 flex1 center">
				<image src="@/static/images/sec2_icon2.png" mode="widthFix" style="width: 48rpx;"></image>
				<view class="font12">交易</view>
			</view>
			<view class="uni-py-5 flex1 center" v-for="item,index in 3" :key="index">
				<image src="@/static/images/sec2_icon3.png" mode="widthFix" style="width: 48rpx;"></image>
				<view class="font12">待定</view>
			</view>
		</view>
		
		<view class="homeCoin flex uni-my-10 uni-px-5">
			<view class="flex1 ">
				<view class="flex flex_ac font12">
					BNB/BUSD
					<text class="green uni-ml-3">+0.34%</text>
				</view>
				<view class="uni-mt-3 bold font20 green">239.6</view>
			</view>
			<view class="flex1 ">
				<view class="flex flex_ac font12">
					BTC/BUSD
					<text class="red uni-ml-3">-0.34%</text>
				</view>
				<view class="uni-mt-3 bold font20 red">21,368.79</view>
			</view>
			<view class="flex1 ">
				<view class="flex flex_ac font12">
					BNB/BUSD
					<text class="red uni-ml-3">-0.74%</text>
				</view>
				<view class="uni-mt-3 bold font20 red">1,227.81</view>
			</view>
		</view>
		
		<button class="mt10" @click="navTo('/pages/login/login')">登录测试地址</button>
	</view>
	
</view>
</template>

<script>
export default {
	data() {
		return {
			info: [
			],
			dotStyle: [{
				backgroundColor: 'rgba(0, 0, 0, .3)',
				border: '1px rgba(0, 0, 0, .3) solid',
				color: '#fff',
				selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
				selectedBorder: '1px rgba(0, 0, 0, .9) solid'
			},
			{
				backgroundColor: 'rgba(255, 90, 95,0.3)',
				border: '1px rgba(255, 90, 95,0.3) solid',
				color: '#fff',
				selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
				selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
			},
			{
				backgroundColor: 'rgba(83, 200, 249,0.3)',
				border: '1px rgba(83, 200, 249,0.3) solid',
				color: '#fff',
				selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
				selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
			}
		],
		modeIndex: -1,
		styleIndex: -1,
		current: 0,
		mode: 'default',
		dotsStyles: {},
		swiperDotIndex: 0,
		imageList:[]
		}
	},
	created() {
		this.$request({
			url: '/getIndexImageList',
			data:{
				type:1
			},
			method:'POST',
		}).then(ress=>{
			// uni.setStorageSync('userInfo',ress.data)
			this.imageList=ress.data
			this.info=ress.data
		}).catch(error=>{
			this.Toast(error.msg);
		})
	},
	methods: {
		change(e) {
			this.current = e.detail.current
		},
		selectStyle(index) {
			this.dotsStyles = this.dotStyle[index]
			this.styleIndex = index
		},
		selectMode(mode, index) {
			this.mode = mode
			this.modeIndex = index
			this.styleIndex = -1
			this.dotsStyles = this.dotStyle[0]
		},
		clickItem(e) {
			this.swiperDotIndex = e
		},
		onBanner(index) {
			console.log(22222, index);
		}
	}
}
</script>

<style scoped lang="scss">
.homeSearch {background: #EAECEF;height:60rpx;border-radius: 30rpx;}
.homeBottom{border-radius: 20px 20px 0 0;}





</style>
