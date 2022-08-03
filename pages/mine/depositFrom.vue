<template>
<view>
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<!-- <view class="flex1 flex flex_ac flexcenter font16 bold">交易流水</view> -->
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 40rpx;"></image>
		</view>
		<view slot="right" class="flex flex_ac" @click="navTo('/pages/mine/withdrawRecord')">
			<image src="@/static/images/us_icon1.png" mode="widthFix" style="width: 36rpx;"></image>
		</view>
	</uni-nav-bar>

	<view class="uni-pa-10">
		<h2 >充值USDT</h2>
	</view>
	
	<view class=" bgfff mt15" style="border-bottom: 1px solid #F5F5F5;padding-bottom: 30px;" v-if="netWorks==''">
		<view style="width: 80%;text-align: center;margin: 0 auto 20px;">
			<image src="@/static/images/net.png" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="font12 center gray">选择主网即可获取充值地址</view>
	</view>
	
	<view class=" bgfff mt15" style="border-bottom: 1px solid #F5F5F5;padding-bottom: 30px;" v-else>
		<view style="width: 300rpx;text-align: center;margin: 0 auto 20px;">
			<image src="@/static/images/ewm.png" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="font12 center gray">仅支持对该地址充值 USDT</view>
		<view class="font12 center gray">该地址不支持充值NFT，请至NFT页面充值</view>
	</view>
	
	
	<view class="uni-pa-10">
		<view class="font12 gray mb5" v-if="netWorks!=''">钱包地址</view>
		<view class="flex flex_ac flexbetween font16 uni-mb-10" v-if="netWorks!=''">
			<view class="bold uni-mr-5 flex1" style="word-break: break-all;">TCgjWrbc461werewrwer014d6sfg4464fd5s0f</view>
			<image src="@/static/images/copy.png" mode="widthFix" style="width: 32rpx;"></image>
		</view>
		
		<view class="font12 gray mb5">主网</view>
		<view class="flex flex_ac flexbetween font16 uni-mb-10" @click="$refs.popup.open()">
			<text class="gray2" v-if="netWorks==''">请先选择主网</text>
			<text class="bold" v-else>{{netWorks}}</text>
			<image src="@/static/images/dd.png" mode="widthFix" style="width: 32rpx;"></image>
		</view>
		
		<view class="font12 gray mb5" v-if="netWorks!=''">选择上账账户</view>
		<view class="flex flex_ac flexbetween font16 uni-mb-10" v-if="netWorks!=''">
			<text class="bold">现货账户</text>
		</view>
		
		<view class="greyBox font16 uni-pa-10" style="background: #FAFAFA;" v-if="netWorks!=''">
			<view class="flex flexbetween font12">
				<view class="gray">最小充值数</view>
				<view class="bold">0.000000001 USDT</view>
			</view>
			<view class="flex flexbetween font12 uni-my-5">
				<view class="gray">充值区确认数</view>
				<view class="bold">1区块确认</view>
			</view>
			<view class="flex flexbetween font12">
				<view class="gray">提现解锁确认数</view>
				<view class="bold">1区块确认</view>
			</view>
		</view>
		
	</view>
	
	<view style="height: 200rpx;"></view>
	<view class="fixed_bottom uni-px-10 uni-py-5 bgfff" v-if="netWorks!=''">
		<view class="flex">
			<button type="default" class="uni-mr-5 flex1" @click="navTo('/pages/finances/handleAssetsBack')">保存图片</button>
			<button class="flex1">分享地址</button>
		</view>
	</view>
	
	<uni-popup ref="popup" type="bottom">
		<view class="popBox bgfff">
			<view class="bold center uni-pb-5">
				Choose Network
				<uni-icons class="close" type="closeempty" size="20" @click="$refs.popup.close()"></uni-icons>
			</view>
			<view style="max-height: 40vh;overflow-y: auto;">
				<view class="font12 gray uni-my-10">
					请确保你选择的充值主网和您在提币时选择的主网一致，否则可能造成资产丢失。
				</view>
				<view class="greyBox font16 uni-pa-10" @click="choseNet('BNB Smart Chain(BEP20)')">
					BNB Smart Chain(BEP20)
				</view>
				<view class="greyBox font16 uni-pa-10" @click="choseNet('AVAX C-Chain1')">
					AVAX C-Chain1
				</view>
				<view class="greyBox font16 uni-pa-10" @click="choseNet('AVAX C-Chain2')">
					AVAX C-Chain2
				</view>
				<view class="greyBox font16 uni-pa-10" @click="choseNet('AVAX C-Chain3')">
					AVAX C-Chain3
				</view>
			</view>
			
		</view>
	</uni-popup>
	
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
			netWorks: '',
			index: 0,
		}
	},
	methods: {
		choseNet(name){
			this.netWorks=name
			this.$refs.popup.close()
		},
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.detail.value)
			this.index = e.detail.value
		},
	}
}
</script>

<style scoped lang="scss">
	.dataBox{border-radius: 20px 20px 0 0;
		.filterBox .flex{padding: 15px 0 ;}
		.item{padding: 15px;border-bottom: 1px solid #F5F5F5;
			.flexauto{margin-right: 10px;padding-top: 3px;}
			image{width: 32rpx;}
		}
	}
	
	.greyBox{background-color: #F5F5F5;border-radius: 5px;margin-bottom: 10px;}
	
</style>
