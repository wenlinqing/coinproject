<template>
<view style="background: #fff;min-height: 100vh;">
	<uni-nav-bar fixed :isLeft='false'>
		<view class="flex flex_ac flex1">
			<view class="input-view flex1 flex flex_ac uni-pl-5" >
				<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
				<input confirm-type="search" class="font12 flex1" type="text" placeholder="请输入关键字搜索"/>
			</view>
		</view>
		
		<block slot="right">
			<view class="flex1 flex flex_Center yellow uni-py-5" @click="goBack">取消</view>
		</block>
	</uni-nav-bar>
	
	
	<view class="dataBox bgfff ">
	
		<view class="item flex" v-for="item,index in 5" :key="index">
			<view class="flexauto"><image src="@/static/images/record_icon.png" mode="widthFix"></image></view>
			<view class="flex1 font12">
				<view class="bold">1INCH</view>
				<view class="gray">1inch</view>
			</view>
			<view class="flex1 font12 right">
				<view class="bold font14">0.00</view>
				<!-- <view class="gray">收益</view> -->
			</view>
		</view>
	</view>
	
	<choseProduct ref="popup"></choseProduct>
	
	
</view>
</template>

<script>
import choseProduct from '@/components/choseProduct.vue'
export default {
	components:{
		choseProduct
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
	page{background-color: #F5F5F5!important;}
	.tops{padding-top: 10px;}
	.dataBox{
		.filterBox .flex{padding: 15px 0 ;}
		.item{padding: 15px;
			.flexauto{margin-right: 10px;padding-top: 3px;}
			image{width: 32rpx;}
		}
	}
	
	.input-view {background-color: #f5f5f5;height: 60rpx;border-radius: 30rpx;
	
	
	}
	
</style>
