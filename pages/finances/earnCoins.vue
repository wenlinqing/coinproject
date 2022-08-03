<template>
<view >
	<uni-nav-bar fixed :statusBar="true" :border="false">
		<view class="flex1 " style="padding-top: 10rpx;">
			<uni-easyinput  prefixIcon="search" v-model="value" placeholder="热门币种"></uni-easyinput>
		</view>
		
		<view slot="left" class="flex flex_ac" @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 20px;"></image>
		</view>
		<view slot="right" style="width: 0;">
			<!-- <image src="@/static/images/time_icon1.png" mode="widthFix" style="width: 18px;"></image> -->
		</view>
	</uni-nav-bar>
	<view class="tagBox flex font16">
		<view class="flex1 bold center" :class="act==1?'on':''" @click="tagClick(1)">
			<text>保本型</text>
		</view>
		<view class="flex1 bold center" :class="act==2?'on':''" @click="tagClick(2)">
			<text>高收益型</text>
		</view>
	</view>
	
	<view v-if="act==1">
		<uni-table emptyText="暂无更多数据" style="width: 100%;">
			<uni-tr>
				<uni-th width="">币种/产品</uni-th>
				<uni-th width="100px" sortable>参考年化</uni-th>
				<uni-th align="right" width="100px" sortable>期限</uni-th>
			</uni-tr>
			<uni-tr v-for="item,index in productList" :key="index" >
				<uni-td>
					<view class="flex" @click="navTo('/pages/finances/locking?id='+item.id)">
						<image :src="item.photo" mode="widthFix" style="width: 32rpx;height: 32rpx;margin-right: 5px;padding-top: 2px;"></image>
						<view >
							<view class="bold">{{item.title}}</view>
							<text class="font12">{{item.currency}}</text>
						</view>
					</view>
				</uni-td>
				<uni-td class="green">
					<view @click="navTo('/pages/finances/locking?id='+item.id)">
						{{item.profit_year}}%
					</view>
				</uni-td>
				<uni-td align="right" class="bold">
					<view @click="navTo('/pages/finances/locking?id='+item.id)">
						{{item.cycle}} 天
					</view>
				</uni-td>
			</uni-tr>
		</uni-table>
	</view>
	
	<view class="uni-px-10 uni-py-5" v-if="act==2">
		<view class="flex flex_ac flexbetween secTT">
			双向投资
			<image src="@/static/images/notice2.png" mode="widthFix" style="width: 24rpx;"></image>
		</view>
		
		<view class="timeBox uni-mb-5" style="padding: 0;">
			<view class="uni-my-5">热门资产：</view>
			<view class="flex">
				<view class="item flex flex_ac flexcenter font12 on">BTC</view>
				<view class="item flex flex_ac flexcenter font12">BNB</view>
				<view class="item flex flex_ac flexcenter font12">SOL</view>
				<view class="item flex flex_ac flexcenter font12">MATIC</view>
			</view>
		</view>
		<view>
			<view class="flex uni-py-5" v-for="item,index in 5" :key="index">
				<view class="flex flex1">
					<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;padding-top: 2px;"></image>
					<view >
						<view class="bold">AXS</view>
					</view>
				</view>
				<view class="flex1">
					<view class="bold green">23.92% ~ 187.91%</view>
					<text class="font12 gray">参考年化</text>
				</view>
			</view>
			<view class="yellow center font16 uni-pa-5" @click="navTo('/pages/finances/subscriptionList')">查看更多</view>
		</view>
		<view>
			<view class="flex flex_ac flexbetween secTT">
				流动性挖矿
				<image src="@/static/images/notice2.png" mode="widthFix" style="width: 24rpx;"></image>
			</view>
			<view class="flex uni-py-5" v-for="item,index in 5" :key="index">
				<view class="flex flex2">
					<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;padding-top: 2px;"></image>
					<view >
						<view class="bold">AXS</view>
						<text class="font12 gray">staking</text>
					</view>
				</view>
				<view class="flex1">
					<view class="bold green">23.92%</view>
					<text class="font12 gray">参考年化</text>
				</view>
				<view class="flex flex1" style="justify-content: flex-end;">
					<image src="@/static/images/licai1.png" mode="widthFix" style="width: 32rpx;margin-right: 5px;padding-top: 2px;"></image>
					<view class="right">
						<view class="bold">BNB</view>
						<text class="font12 gray">奖励</text>
					</view>
				</view>
			</view>
			<view class="yellow center font16 uni-pa-10" @click="navTo('/pages/finances/subscriptionList')">查看更多</view>
		</view>
		
	</view>
</view>
</template>

<script>
export default {
	data() {
		return {
			value:'',
			act: 1,
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
	methods: {
		tagClick(type){
			this.act=type
		}
	}
}
</script>

<style scoped lang="scss">
	.uni-easyinput{background:#F5F5F5;border-radius: 20px;height: 36px;
		/deep/ .is-input-border{border: none;}
	}
	.secTT{height: 80rpx;border-bottom: 1px solid #EAECEF;color: #707A8A;}
</style>
