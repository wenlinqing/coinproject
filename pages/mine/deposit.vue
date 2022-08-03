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
	
	<view class="tagBox flex font16 uni-my-10">
		<view class="flex1 bold center" :class="act==1?'on':''" @click="navFun(1)">
			<text>数字货币</text>
		</view>
		<view class="flex1 bold center" :class="act==2?'on':''" @click="navFun(2)">
			<text>法币</text>
		</view>
	</view>
	<view  v-if="act==1">
		<view class="uni-px-10 flex flexbetween">
			<text class="bold">历史搜索</text>
			<uni-icons type="trash-filled" size="25" color="#707A8A"></uni-icons>
		</view>
		<view class="timeBox flex uni-mb-5">
			<view class="flex flex1">
				<view class="item flex flex_Center font12">BTC</view>
				<view class="item flex flex_Center font12">BTC</view>
				<view class="item flex flex_Center font12">BNB</view>
			</view>
		</view>
		
		<view class="uni-px-10 flex flexbetween">
			<text class="bold">热门</text>
		</view>
		<view class="timeBox flex uni-mb-10">
			<view class="flex flex1">
				<view class="item flex flex_Center font12">BTC</view>
				<view class="item flex flex_Center font12">BTC</view>
				<view class="item flex flex_Center font12">BNB</view>
				<view class="item flex flex_Center font12">BNB</view>
			</view>
		</view>
	</view>
	
	
	<view class="uni-px-10 flex flexbetween">
		<text class="bold">币种列表</text>
		<image src="@/static/images/az.png" mode="widthFix" style="width: 36rpx;"></image>
	</view>
	<view class="dataBox bgfff " v-if="act==1">
		<view class="item flex" v-for="item,index in 5" :key="index" @click="navTo('/pages/mine/depositFrom')">
			<view class="flexauto"><image src="@/static/images/record_icon.png" mode="widthFix"></image></view>
			<view class="flex1">
				<view class="bold">1INCH <text class="gray font12 uni-ml-3">1inch</text></view>
			</view>
		</view>
	</view>
	<view class="dataBox bgfff " v-if="act==2">
		<view class="item flex" v-for="item,index in 10" :key="index" @click="navTo('/pages/mine/depositFrom')">
			<view class="flexauto"><image src="@/static/images/record_icon.png" mode="widthFix"></image></view>
			<view class="flex1">
				<view class="bold">AXSOLD <text class="gray font12 uni-ml-3">Axie Infinity Old</text></view>
			</view>
		</view>
	</view>
	
	
	<!-- <uni-popup ref="popup" type="bottom">
		<view class="popBox bgfff">
			<view class="bold center">
				提现
				<uni-icons class="close" type="closeempty" size="20" @click="$refs.popup.close()"></uni-icons>
			</view>
			<view class="flex uni-mt-10 uni-py-10 wBox" @click="navTo('/pages/mine/withdrawFrom')">
				<image src="@/static/images/w2.png" mode="widthFix" style="width: 68rpx;"></image>
				<view class="uni-ml-5">
					<view class="bold">通过区块链转账</view>
					<view class="font12">通过区块链网络发送到已知的数字地址。</view>
				</view>
			</view>
			<view class="flex uni-py-10 wBox" @click="navTo('/pages/mine/withdrawFrom')">
				<image src="@/static/images/w1.png" mode="widthFix" style="width: 68rpx;"></image>
				<view class="uni-ml-5">
					<view class="bold">通过邮箱/手机/ID转账</view>
					<view class="font12">发送给币安用户。简单、即时，0费用。</view>
				</view>
			</view>
			<view style="height: 50px;"></view>
		</view>
	</uni-popup> -->
	
	
</view>
</template>

<script>
export default {
	components:{
	
	},
	data() {
		return {
			index: 0,
			act:1
		}
	},
	mounted() {
		// this.$refs.popup.open()
	},
	methods: {
		navFun(e){
			this.act=e
		},
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
	
	.input-view {background-color: #f5f5f5;height: 60rpx;border-radius: 30rpx;}
	.wBox{border-bottom: 1px solid #F5F5F5;}
</style>
