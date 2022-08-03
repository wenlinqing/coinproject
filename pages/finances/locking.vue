<template>
<view class="uni-px-10">
	<view class="timeBox uni-mb-5" style="padding: 0;">
		<view class="uni-my-5 gray">期限</view>
		<view class="flex">
			<view class="item flex flex_Center font12 black bold"
			 :class="time==30?'on':''" @click="timeChoose(30)">30 天</view>
			<view class="item flex flex_Center font12 black bold" 
			:class="time==60?'on':''" @click="timeChoose(60)">60 天</view>
			<view class="item flex flex_Center font12 black bold" 
			:class="time==90?'on':''" @click="timeChoose(90)">90 天</view>
		</view>
		<view class="uni-my-5 gray">锁仓数量</view>
		<view class="greyBox flex flex_ac">
			<input class="flex1 uni-pl-5 font12" type="digit" v-model="money" placeholder="请输入金额" />
			<view class="font12 flex flex_ac">
				<image :src="productInfo.photo" mode="widthFix" 
				style="width: 32rpx;height: 32rpx;margin-right: 5px;"></image>
				<text class="bold">{{productInfo.currency}}</text>
				<view class="yellow uni-pa-5">全部</view>
			</view>
		</view>
		<!-- <view class="uni-my-2 error font12">您的资金余额不足</view> -->
		<view class="uni-my-2 gray font12">可用:<text class="bold uni-ml-5">0 {{productInfo.currency}}</text></view>
		
		<view class="uni-my-10 gray">锁仓数量限制</view>
		<view class="uni-my-2 gray font12">最少可投:<text class="black uni-ml-5">
		{{productInfo.min_buy}} {{productInfo.currency}}</text></view>
		<view class="uni-my-2 gray font12">可用额度:<text class="black uni-ml-5">1000 {{productInfo.currency}}</text></view>
		<view class="uni-my-2 gray font12">个人总额度:<text class="black uni-ml-5">1000 {{productInfo.currency}}</text></view>
		
	</view>
	
	<view class="greyBox uni-pa-9">
		<view class="uni-mb-3">自动锁仓</view>
		<view class="flex">
			<view class="flex1 uni-mr-3 gray font12">
				一旦激活自动锁仓按钮，您锁仓的产品到期后，
				它将自动锁仓相同周期的产品并开始计算
			</view>
			<view style="width: 80rpx;flex:0 0 auto;">
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>
		</view>
	</view>
	
	<view class="uni-my-10 gray flex flexbetween">
		<text>锁仓数量限制</text>
		<view class="more flex flex_ac" v-if="showMore" @click="showMore=false">
			收起展示 <uni-icons class="uni-ml-2" type="top" size="10"></uni-icons>
		</view>
		<view class="more flex flex_ac" v-else @click="showMore=true">
			展示更多 <uni-icons class="uni-ml-2" type="bottom" size="10"></uni-icons>
		</view>
	</view>
	<view class="greyBox uni-pa-9">
		<view class="uni-pb-5 uni-mb-5 lineBox" v-if="showMore">
			<view class="uni-mb-3 font12 flex flexbetween">
				<text class="gray">锁仓日</text>
				<view class="bold">2022-06-22 12:10</view>
			</view>
			<view class="uni-mb-3 font12 flex flexbetween">
				<text class="gray">起息日</text>
				<view class="bold">2022-06-22 12:10</view>
			</view>
			<view class="uni-mb-3 font12 flex flexbetween">
				<text class="gray">计息周期</text>
				<view class="bold">{{productInfo.cycle}} 天</view>
			</view>
			<view class="uni-mb-3 font12 flex flexbetween">
				<text class="gray">计息结束日</text>
				<view class="bold">2022-09-21 12:10</view>
			</view>
			<view class="uni-mb-3 font12 flex flexbetween">
				<text class="gray">赎回周期</text>
				<view class="bold">{{productInfo.cycle}} 天</view>
			</view>
			<view class="uni-mb-3 font12 flex flexbetween">
				<text class="gray">赎回到账日期</text>
				<view class="bold">2022-09-21 12:10</view>
			</view>
		</view>
		<view class="uni-mb-3 font12 flex flexbetween">
			<text class="gray">参考年化</text>
			<view class="bold">{{productInfo.profit_year}}%</view>
		</view>
		<view class="font12 flex flexbetween">
			<text class="gray">预估利息</text>
			<view class="bold">0.0000000 {{productInfo.currency}} </view>
		</view>
	</view>
	<view style="height: 300rpx;"></view>
	<view class="fixed_bottom uni-pa-10 bgfff">
		<view class="font12 uni-mb-3">
			<label>
				<checkbox checked ref="checkbox" color="#FFCC33" style="transform:scale(0.7)" />
				<text class="gray">我已阅读并且同意</text>
			</label>
			<text class="yellow">《币安Staking协议》</text>
		</view>
		<button @click="submit()">确认</button>
	</view>
</view>
</template>

<script>
export default {
	data() {
		return {
			showMore: true,
			time:30,
			money:'',
			productInfo:{},
			checkbox:true
		}
	},
	created(){
		this.$request({
			url: '/getProduct',
			data:{
				id:this.$route.query.id
			},
			method:'POST',
		}).then(ress=>{
			this.productInfo=ress.data
		}).catch(error=>{
			this.Toast(error.msg);
		})
	},
	methods: {
		timeChoose(tt){
			this.time=tt
		},
		submit(){
			
			if(this.money===''){
				this.Toast('请输入金额');
				return
			}
			if(!this.$refs.checkbox.checkboxChecked){
				this.Toast('请勾选协议');
				return
			}
			
			this.$request({
				url: '/buyProduct',
				data:{
					product_id:this.$route.query.id,
					time:this.time,
					money:this.money,
				},
				method:'POST',
			}).then(ress=>{
				this.Toast(ress.msg);
			}).catch(error=>{
				this.Toast(error.msg);
			})
		}
	}
}
</script>

<style scoped lang="scss">
.timeBox .item{padding: 0 30rpx;}
.timeBox .item.on {background: url('@/static/images/itemBg.png') no-repeat center center;background-size: 100% 100%;}

.greyBox{background-color: #F5F5F5;border-radius: 5px;
	input{height:70rpx;}
}
.lineBox{border-bottom: 1px solid #E4E6E9;}
.fixed_bottom{border-top: 1px solid #F5F5F5;
	button{height: 70rpx;}
}
</style>
