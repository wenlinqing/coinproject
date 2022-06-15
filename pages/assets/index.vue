<template>
<view>
	<uni-nav-bar fixed :statusBar="true" :border="false" rightWidth="150rpx">
		<view class="flex1 flex flex_ac flexcenter font16 bold">理财分析</view>
		<view slot="left" class="flex flex_ac">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 20px;"></image>
		</view>
		<view slot="right" class="flex flex_ac rightBox">
			<image src="@/static/images/licai1.png" mode="widthFix" style="width: 18px;"></image> |
			<image src="@/static/images/licai2.png" mode="widthFix" style="width: 18px;"></image>
		</view>
	</uni-nav-bar>
	
	<view class="tagBox flex font16">
		<view class="flex1 bold center on">
			<text>资产</text>
		</view>
		<view class="flex1 bold center">
			<text>奖励</text>
		</view>
	</view>
	<view class="timeBox flex">
		<view class="flex flex1">
			<view class="item flex flex_ac flexcenter font12 on">7天</view>
			<view class="item flex flex_ac flexcenter font12">30天</view>
			<view class="item flex flex_ac flexcenter font12">3个月</view>
			<view class="item flex flex_ac flexcenter font12">1年</view>
		</view>
		<view class="time_r flex flex_ac flexcenter">
			<image src="@/static/images/time_icon2.png" mode="widthFix" style="width: 18px;"></image>
		</view>
	</view>
	
	<view class="secBox">
		<view class="secTitle flex flex_ac bold">
			总资产 <image src="@/static/images/notice2.png" mode="widthFix" style="width: 12px;margin-left: 5px;"></image>
		</view>
		<view class="" style="height: 300px;background-color: #FF5A5f">
			
		</view>
	</view>
	<view class="line10"></view>
	<view class="secBox">
		<view class="secTitle flex flex_ac bold">
			持仓分布
		</view>
		<view class="tagBox flex font16">
			<view class="flex1 bold center on">
				<text>按产品</text>
			</view>
			<view class="flex1 bold center">
				<text>按资产</text>
			</view>
		</view>
		<view class="" style="height: 300px;background-color: #FF5A5f">
			
		</view>
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
.rightBox {background: #F4F5F6;height: 30px;border-radius: 15px;color: #E4E6E9;
	image{margin: 0 8px;display: inline-block;}
}
.tagBox{color: #707A8A;
	view{padding-top: 10px;}
	text{display: inline-block;border-bottom: 3px solid #fff;padding-bottom: 10px;}
}
.tagBox .on{color: #29313D;}
.tagBox .on text{border-color:#FBD535}

.timeBox{padding: 30rpx;
	.item{width: 100rpx;margin-right: 30rpx;background: #F5F5F5;color: #707A8A;height: 64rpx;}
	.item.on{color: #29313D;font-weight: bold;}
}

.secTitle{padding:30rpx 0 30rpx 30rpx;}



</style>
