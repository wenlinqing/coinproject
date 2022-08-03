<template>
<view>
	<view class="allBox">
		<view class="all_tt flex flexbetween">
			<view class="flex flex_ac">
				预估总资产(BTC)
				<image src="@/static/images/eye_on.png" mode="widthFix" style="width: 40rpx;margin-left: 5px;"></image>
			</view>
			<!-- <view class="flex flex_ac rightBox">
				<image src="@/static/images/licai1.png" mode="widthFix" style="width: 36rpx;"></image> |
				<image src="@/static/images/licai2.png" mode="widthFix" style="width: 36rpx;"></image>
			</view> -->
		</view>
		<view class="all_num mt5">
			0.05312357
			<text class="font12">≈¥11,195.10</text>
		</view>
		
		<view class="mt10 flex">
			<view class="flex1">
				<view>30日累计收益(BTC)</view>
				<text class="font15 green">+0.00001769</text>
			</view>
			<view class="flex1">
				<view>昨日收益(BTC)</view>
				<text class="font15 green">+0.00000069</text>
			</view>
			
		</view>
		
		<image src="@/static/images/s_down.png" mode="widthFix" class="moreBtn" v-if="!showDown" @click="showDown=true"></image>
		<image src="@/static/images/s_up.png" mode="widthFix" class="moreBtn" v-if="showDown" @click="showDown=false"></image>
	</view>
	<uni-transition :show="showDown" >
		<view class="moreNum">
			<view class="more_tt mb5">币安宝活期(BTC)</view>
			<view class="flex flexbetween">
				<text>0.08154264</text>
				<text class="green">+0.08154264</text>
			</view>
		</view>
	</uni-transition>
	
	<view class="Btn_box font12">
		<button class="flex flex_Center" @click="navTo('/pages/finances/earnCoins')">
			<image src="@/static/images/sch.png" mode="widthFix" style="width: 30rpx;margin-right: 5px;"></image>理财赚币
		</button>
		<view class="btns flex mt20">
			<view class="flex1" @click="navTo('/pages/assets/index')">
				<view class="imgBox flex flex_Center"><image src="@/static/images/sec2_icon1.png" mode="widthFix" style="width: 48rpx;"></image></view>
				<text>理财分析</text>
			</view>
			<view class="flex1" @click="navTo('/pages/assets/record')">
				<view class="imgBox flex flex_Center"><image src="@/static/images/sec2_icon2.png" mode="widthFix" style="width: 48rpx;"></image></view>
				<text>交易流水</text>
			</view>
			<view class="flex1" @click="navTo('/pages/finances/transRecord')">
				<view class="imgBox flex flex_Center"><image src="@/static/images/sec2_icon3.png" mode="widthFix" style="width: 48rpx;"></image></view>
				<text>交易历史</text>
			</view>
		</view>
	</view>
	
	<view class="dataAll flex font12">
		<view class="item flex flex_ac" @click="$refs.popup.openFun()">
			所有持仓 <image src="@/static/images/down.png" mode="widthFix" style="width: 16rpx;margin-left: 5px;"></image>
		</view>
		<view class="item flex flex_ac" @click="$refs.popup2.open()">
			所有币种 <image src="@/static/images/down.png" mode="widthFix" style="width: 16rpx;margin-left: 5px;"></image>
		</view>
	</view>
	
	<view class="listBox font12" v-for="item,index in productList" :key="index"  @click="navTo('/pages/finances/handleAssets?id='+item.id)">
		<view class="flex flex_ac flexbetween item_tt mb5">
			<view class="flex flex_ac">
				<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;"></image>
				<text class="bold">{{item.currency}}</text>
				{{item.title}}
			</view>
			<uni-icons type="forward" size="20" color="#999"></uni-icons>
		</view>
		<view class="flex">
			<view class="item flex1">
				<view>数量(FIL)</view>
				<text class="bold">{{item.retain_num}}</text>
			</view>
			<view class="item flex1">
				<view>预估年华收益率</view>
				<text class="bold">{{item.profit_year}}</text>
			</view>
			<view class="item flex1 right">
				<view>累计利息</view>
				<text class="bold green">{{item.total_num}}</text>
			</view>
		</view>
	</view>
	
	<uni-popup ref="popup2" type="bottom">
		<view class="popBox bgfff font12">
			<view class="bold center mb15">
				选择币种
				<uni-icons class="close" type="closeempty" size="20" @click="$refs.popup2.close()"></uni-icons>
			</view>
			<view class="popMain">
				<uni-easyinput prefixIcon="search" v-model="value" placeholder="搜索币种"></uni-easyinput>
				<view class="allCoin flex flex_ac font12 mb10 mt10">
					<image src="@/static/images/all.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;"></image>
					所有币种
				</view>
				<view class="Coins flex flex_ac font12 mb10 mt10 bold">
					<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;"></image>
					FIL
				</view>
				<view class="Coins flex flex_ac font12 mb10 mt10 bold">
					<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;"></image>
					PHA
				</view>
			</view>
		</view>
	</uni-popup>
	
	<!-- 选择产品  -->
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
			showDown:true,
			value:'',
			productList:[]
		}
	},
	created() {
		this.$request({
			url: '/getProductList',
			data:{},
			method:'POST',
		}).then(ress=>{
			this.productList=ress.data
		}).catch(error=>{
			this.Toast(error.msg);
		})
	},
	mounted() {
		// this.$refs.popup.openFun()
		// this.$refs.popup2.open()
	},
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
.allBox {padding:30rpx 40rpx;color: #949BA5;position: relative;
	.all_num{font-size: 48rpx;color: #29313D;
		text{color: #949BA5;margin-left: 5px;}
	}
	
	.moreBtn{position: absolute;bottom: 40rpx;right: 40rpx;width: 30rpx;}
}
.moreNum{background:#F6F6F6;padding: 30rpx 40rpx;
	.more_tt{color: #949BA5;}
}
.Btn_box{padding: 30rpx 40rpx;border-bottom: 5px solid #F6F6F6;color: #29313D;
	button{height: 70rpx;}
	.btns{text-align: center;
		.imgBox{width: 80rpx;height: 80rpx;border-radius: 50%;background-color: #F5F5F5;margin: 0 auto 10rpx;}
	}
}

.listBox{padding: 30rpx 40rpx;border-bottom: 1px solid #F6F6F6;color: #707A8A;
	.item_tt text{margin:0 5px;color: #29313D;}
	text{color: #29313D;}
}







</style>
