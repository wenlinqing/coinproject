<template>
	<uni-popup ref="popup" type="bottom">
		<view class="popBox bgfff font12">
			<view class="bold center">
				选择产品
				<uni-icons class="close" type="closeempty" size="20" @click="$refs.popup.close()"></uni-icons>
			</view>
			<view class="popMain">
				<view class="mb10">
					<view class="flex flexwrap">
						<view class="li_item on">所有持仓</view>
					</view>
				</view>
				<view class="mb10">
					<view class="tt">稳健活期</view>
					<view class="flex flexwrap">
						<view class="li_item">所有稳健型活期</view>
						<view class="li_item">BNB收益池</view>
					</view>
				</view>
			</view>
			<view class="popFotter flex">
				<button class="flex1" type="default">重置</button>
				<view style="width: 40rpx;"></view>
				<button class="flex1" disabled>确认</button>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			openFun(){
				this.$refs.popup.open()
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>
