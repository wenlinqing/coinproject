<template>
<view>
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<view class="flex1 flex flex_ac flexcenter font16 bold">交易流水</view>
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
		<!-- <view slot="right" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/time_icon1.png" mode="widthFix" style="width: 36rpx;"></image>
		</view> -->
	</uni-nav-bar>
	<view class="flex tops">
		<view class="center flex1">
			<text class="font12">流入（BTC）</text>
			<view class=" bold mt5">0</view>
			<!-- <view class="green bold mt5">+0.00001769</view> -->
		</view>
		<view class="center flex1">
			<text class="font12">流出（BTC）</text>
			<view class=" bold mt5">0</view>
			<!-- <view class="red bold mt5">-0.00001129</view> -->
		</view>
	</view>
	
	<view class="dataBox bgfff mt15">
		<view class="filterBox flex flex_ac font12">
			<view class="flex flex_ac flexcenter flex1" @click="$refs.popup.openFun()">
				所有持仓
				<image src="@/static/images/down.png" mode="widthFix" style="width: 8px;margin-left: 5px;"></image>
			</view>
			<picker @change="bindPickerChange" :value="index" :range="array" class="flex1">
				<view class="flex flex_ac flexcenter flex1">
					{{array[index]}}
					<image src="@/static/images/down.png" mode="widthFix" style="width: 8px;margin-left: 5px;"></image>
				</view>
			</picker>
			<!-- <view class="flex flex_ac flexcenter flex1">
				所有类型
				<image src="@/static/images/down.png" mode="widthFix" style="width: 8px;margin-left: 5px;"></image>
			</view> -->
		</view>
		<view class="item flex" v-for="item,index in dataList" :key="index">
			<view class="flexauto"><image src="@/static/images/record_icon.png" mode="widthFix"></image></view>
			<view class="flex1 font12">
				<view class="bold">{{item.user_name}}</view>
				<view class="gray">{{item.create_time}}</view>
			</view>
			<view class="flex1 font12 right">
				<view class="bold font14">-0.00224563 FIL</view>
				<view class="gray">{{item.remark}}</view>
			</view>
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
			dataList:[]
		}
	},
	created(){
		this.$request({
			url: '/getFundList',
			data:{},
			method:'POST',
		}).then(ress=>{
			this.dataList=ress.data
		}).catch(error=>{
			this.Toast(error.msg);
		})
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
	.dataBox{border-radius: 20px 20px 0 0;
		.filterBox .flex{padding: 15px 0 ;}
		.item{padding: 15px;border-bottom: 1px solid #F5F5F5;
			.flexauto{margin-right: 10px;padding-top: 3px;}
			image{width: 32rpx;}
		}
	}
	
	
	
</style>
