<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	.title{font-size: 40rpx;font-weight: 600;margin-bottom: 20px;}
	.loginTag{margin-bottom: 10px;
		.item{border-radius: 2px;margin-right: 20px;padding:16rpx 24rpx;}
		.item.on{background: #F5F5F5;}
	}
	.loginIcon{width:32rpx;height: 32rpx;margin-right: 5px;}
	.links view{margin-top: 15px;
		text{color: #815709;}
	}
</style>
