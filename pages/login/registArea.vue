<template>
<view>
	<view class="seachBox fixed bgfff">
		<uni-search-bar :radius="100" @input="search" cancelButton="none" placeholder="搜索"></uni-search-bar>
	</view>
	<view class="seachBox"></view>
	<view class="listBox">
		<view class="item flex flex_ac" v-for="item,index in 20" :key="index">
			<image src="@/static/images/icon2.png" mode="widthFix"></image>
			<text>安道尔</text>
		</view>
	</view>
	
	<!-- <notData text="无搜索结果"></notData> -->
</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			search(v){
				console.log(v)
			}
		}
	}
</script>

<style scoped lang="scss">
.seachBox{height: 56px;}
.listBox {
	.item{padding: 15px 10px;
		image{width: 20px;margin-right: 5px;}
	}
}


</style>
