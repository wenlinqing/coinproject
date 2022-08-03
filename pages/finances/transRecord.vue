<template>
<view>
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<view class="flex1 flex flex_ac flexcenter font16 bold">交易流水</view>
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 20px;"></image>
		</view>
		<view slot="right" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/time_icon1.png" mode="widthFix" style="width: 18px;"></image>
		</view>
	</uni-nav-bar>
	<!-- <view class="flex tops">
		<view class="center flex1">
			<text class="font12">流入（BTC）</text>
			<view class="green bold mt5">+0.00001769</view>
		</view>
		<view class="center flex1">
			<text class="font12">流出（BTC）</text>
			<view class="red bold mt5">-0.00001129</view>
		</view>
	</view> -->
	<view class="tagBox flex font16 bgfff">
		<view class="flex1 bold center" :class="act==1?'on':''" @click="tagClick(1)">
			<text>申购</text>
		</view>
		<view class="flex1 bold center" :class="act==2?'on':''" @click="tagClick(2)">
			<text>赎回</text>
		</view>
		<view class="flex1 bold center" :class="act==3?'on':''" @click="tagClick(3)">
			<text>利息</text>
		</view>
	</view>
	<view class="dataBox bgfff" >
		<view class="item " v-for="item,index in dataList" :key="index">
			<view class="flex flexbetween font12">
				<view class="bold font14 flex">
					<view class="flexauto"><image src="@/static/images/record_icon.png" mode="widthFix">
					</image></view>
					{{item.currency}}
				</view>
				<view class="gray">{{item.create_time}}</view>
			</view>
			<view class="flex flexbetween font12 right">
				<view class="gray">利息数量</view>
				<view class="bold">{{item.quantity}}</view>
			</view>
			<!-- <view class="flex flexbetween font12 right">
				<view class="gray">类型</view>
				<view class="bold">{{item.product_name}}</view>
			</view> -->
		</view>
	</view>
	<notData v-if="dataList.length==0"></notData>
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
			act:1,
			dataList:[]
		}
	},
	created(){
		this.$request({
			url: '/getOrderList',
			data:{},
			method:'POST',
		}).then(ress=>{
			this.dataList=ress.data
		}).catch(error=>{
			this.Toast(error.msg);
		})
	},
	methods: {
		tagClick(type){
			this.act=type
		},
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.detail.value)
			this.index = e.detail.value
		},
	}
}
</script>

<style scoped lang="scss">
	// page{background-color: #F5F5F5!important;}
	.tops{padding-top: 10px;}
	.dataBox{
		.filterBox .flex{padding: 15px 0 ;}
		.item{padding: 15px;border-bottom: 1px solid #F5F5F5;
			.flexauto{margin-right: 10px;padding-top: 3px;}
			image{width: 32rpx;}
		}
	}
	
	
	
</style>
