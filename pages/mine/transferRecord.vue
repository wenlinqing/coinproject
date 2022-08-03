<template>
<view>
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<view class="flex flex_ac flex1">
			<view class="flex flex_ac flexcenter font12 bold gray titleBox">
				<view class="on">全仓</view>
				<view>逐仓</view>
			</view>
		</view>
		
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
		<view slot="right" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/time_icon1.png" mode="widthFix" style="width: 36rpx;"></image>
		</view>
	</uni-nav-bar>
	<view class="navBoxer">
		<view class="itemBox  ">
			<view class="items on font16">
				<text>划转历史</text>
			</view>
			<view class="items font16">
				<text>借款历史</text>
			</view>
			<view class="items font16">
				<text>还款历史</text>
			</view>
			<view class="items font16">
				<text>利息历史</text>
			</view>
			<view class="items font16" v-for="item,index in 5" :key="index">
				<text>闪现</text>
			</view>
		</view>
	</view>
	<view class="dataBox">
		<view class="item flex" v-for="item,index in 5" :key="index">
			<!-- <view class="flexauto"><image src="@/static/images/record_icon.png" mode="widthFix"></image></view> -->
			<view class="flex1 font12">
				<view class="bold">USDT</view>
				<view class="gray">2022-05-31 09:52</view>
			</view>
			<view class="flex1 font12 right">
				<view class="bold font14">30000</view>
				<view class="gray">成功</view>
			</view>
		</view>
	</view>
	
	<!-- <choseProduct ref="popup"></choseProduct> -->
	
	
</view>
</template>

<script>
// import choseProduct from '@/components/choseProduct.vue'
export default {
	components:{
		// choseProduct
	},
	data() {
		return {
			array: ['所有类型', '流入', '流出'],
			index: 0,
		}
	},
	methods: {
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.detail.value)
			this.index = e.detail.value
		},
	}
}
</script>

<style scoped lang="scss">
.dataBox{
	.filterBox .flex{padding: 15px 0 ;}
	.item{padding: 15px;
		.flexauto{margin-right: 10px;padding-top: 3px;}
		image{width: 32rpx;}
	}
}

.titleBox{background: #F5F5F5;width: 70%;border-radius: 4px;padding: 2px;height: 30px;margin:0 auto;
	view{border-radius: 4px;width: 50%;height: 25px;line-height: 25px;text-align: center;}
	view.on{background: #fff;font-weight: bold;color: #29313D;}
}

.navBoxer{overflow-x: auto;margin: 10px 0;
	.itemBox{width: 200vw;padding: 0 5px;
		.items{display: inline-block;padding: 0 10px;
			text{display: inline-block;padding-bottom: 10px;border-bottom: 3px solid #fff;font-weight: bold;color: #707A8A;}
		}
		.items.on text{color: #29313D;}
		.items.on text{border-color: #FBD535;}
	}
}
	
</style>
