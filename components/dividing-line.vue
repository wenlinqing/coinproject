<template>
<view class="dividing">
	<view class="intro">或</view>
</view>
</template>
<style scoped lang="scss">
.dividing{margin: 15px 0;display: flex;align-items: center;justify-content: center;position: relative;
	view{flex: none;display: flex;align-items: center;background-color: #fff;padding: 0 40px;
	color: #707A8A;font-size: 24rpx;position: relative;z-index: 9;}
}
.dividing::after{content: '';width: 100%;height: 1px;border-top: 1px solid #E4E6E9;position: absolute;top: 50%;left: 0;z-index: 1;}
</style>
