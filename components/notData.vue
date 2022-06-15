<template>
<view class="notData">
	<image src="@/static/images/notData.png" mode="widthFix"></image>
	<view class="font12">{{text}}</view>
</view>
</template>
<script>
export default {
	props:{
		text:{
			type:String,
			default:"暂无数据"
		}
	}
}
</script>
<style scoped lang="scss">
.notData{padding: 50px;text-align: center;
	image{width: 85px;}
	view{color: #707A8A;margin-top: 30px;}
}
</style>
