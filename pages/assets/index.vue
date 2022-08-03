<template>
<view>
	<uni-nav-bar fixed :statusBar="true" :border="false" rightWidth="150rpx">
		<view class="flex1 flex flex_Center font16 bold">理财分析</view>
		<view slot="left" class="flex flex_ac"  @click="goBack">
			<image src="@/static/images/back.png" mode="widthFix" style="width: 20px;"></image>
		</view>
		<!-- <view slot="right" class="flex flex_ac rightBox">
			<image src="@/static/images/licai1.png" mode="widthFix" style="width: 18px;"></image> |
			<image src="@/static/images/licai2.png" mode="widthFix" style="width: 18px;"></image>
		</view> -->
	</uni-nav-bar>
	
	<view class="tagBox flex font16">
		<view class="flex1 bold center" :class="secDiv==1?'on':''" @click="secDivFun(1)">
			<text>资产</text>
		</view>
		<view class="flex1 bold center" :class="secDiv==2?'on':''" @click="secDivFun(2)">
			<text>奖励</text>
		</view>
	</view>
	<view class="timeBox flex">
		<view class="flex flex1">
			<!-- week,quarter,month,year, -->
			<view class="item flex flex_Center font12" 
			:class="tagType=='week'?'on':''" @click="tagFun('week')">7天</view>
			<view class="item flex flex_Center font12" 
			:class="tagType=='month'?'on':''" @click="tagFun('month')">30天</view>
			<view class="item flex flex_Center font12" 
			:class="tagType=='quarter'?'on':''" @click="tagFun('quarter')">3个月</view>
			<view class="item flex flex_Center font12" 
			:class="tagType=='year'?'on':''" @click="tagFun('year')">1年</view>
		</view>
		<!-- <view class="time_r flex flex_Center">
			<image src="@/static/images/time_icon2.png" mode="widthFix" style="width: 36rpx;"></image>
		</view> -->
	</view>
	
	<view class="secBox" v-if="secDiv==1">
		<view class="secTitle flex flex_ac bold">
			总资产 <image src="@/static/images/notice2.png" mode="widthFix" style="width: 12px;margin-left: 5px;"></image>
		</view>
		<view class="" style="height: 300px;" id="canvas1"></view>
	</view>
	<view class="secBox" v-if="secDiv==2">
		<view class="secTitle flex flex_ac bold">
			累计收益 <image src="@/static/images/notice2.png" mode="widthFix" style="width: 12px;margin-left: 5px;"></image>
		</view>
		<view class="" style="height: 300px;" id="canvas4"></view>
	</view>
	<!-- <view class="line10"></view> -->
	<!-- <view class="secBox">
		<view class="secTitle flex flex_ac bold">
			每日奖励 <image src="@/static/images/notice2.png" mode="widthFix" style="width: 12px;margin-left: 5px;"></image>
		</view>
		<view class="" style="height: 300px;" id="canvas3">
			
		</view>
	</view> -->
	
	<!-- <view class="line10"></view>
	<view class="secBox">
		<view class="secTitle flex flex_ac bold">
			持仓分布
		</view>
		<view class="tagBox flex font16">
			<view class="flex1 bold center on">
				<text>按产品</text>
			</view>
			<view class="flex1 bold center">
				<text>按资产</text>
			</view>
		</view>
		<view class="" style="height: 300px;"  id="canvas2">
			
		</view>
	</view> -->
</view>
</template>

<script>
import * as echarts from 'echarts';
export default {
	data() {
		return {
			option1: {
				tooltip: {
				    trigger: 'axis',
				    axisPointer: {
				      type: 'cross',
				      label: {
				        backgroundColor: '#6a7985'
				      }
				    }
				  },
				  grid: {
				    left: '3%',
				    right: '4%',
				    bottom: '3%',
				    containLabel: true
				  },
				  xAxis: [
				    {
				      type: 'category',
				      boundaryGap: false,
				      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				      data: []
				    }
				  ],
				  yAxis: [
				    {
				      type: 'value'
				    }
				  ],
				  
				  series: [
				    {
				      name: 'Email',
				      type: 'line',
				      stack: 'Total',
				      areaStyle: {},
				      emphasis: {
				        focus: 'series'
				      },
				      itemStyle: {
				        normal: {
				          color:'#EAC650',
				          areaStyle: {
				            type: 'default',
				            //渐变色实现===
				            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
				              //三种由深及浅的颜色
				              [{
				                offset: 0,
				                color: '#FBD535'
				              }, {
				                offset: 1,
				                color: '#F5F5F5'
				              }]),
				          },
				          lineStyle: {  //线的颜色
				            color: '#FBD535'
				          },
				          //以及在折线图每个日期点顶端显示数字
				          label: {
				            show: true,
				            position: 'top',
				            textStyle: {
				              color: 'white'
				            }
				          }
				        },
				      },
				      // data: [120, 112, 121, 114, 110, 115, 110]
				      data: []
				    },
				]
			},
			chart1:'',
			option2 :{
			  tooltip: {
			    trigger: 'item',
			    formatter: '{a} <br/>{b}: {c} ({d}%)'
			  },
			  color:['#1673EC','#FBD535'],
			  series: [
			    {
			      type: 'pie',
			      radius: ['30%', '50%'],
				  labelLine: {
					  length: 0
					},
			      label:{
			        formatter: '{d}%  ',
			        color:'#333',
			        fontWeight:'bold',
			        fontSize:'16px'
			      },
			      data: [
			        { value: 1048, name: 'Search Engine' },
			        { value: 735, name: 'Direct' },
			      ],
			      emphasis: {
			        itemStyle: {
			          shadowBlur: 5,
			          shadowOffsetX: 0,
			          shadowColor: 'rgba(0, 0, 0, 0.5)'
			        }
			      }
			    }
			  ]
			},
			chart2:'',
			option3: {
			  xAxis: {
			    type: 'category',
			    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			  },
			  yAxis: {
			    type: 'value'
			  },
			  barWidth:'60%',
			  series: [
			    {
			      itemStyle: {
			            color: '#2EBD87'
			          },
			      data: [120,150,80,70,110,130,100],
			      type: 'bar'
			    }
			  ]
			},
			chart3:'',
			secDiv:1,
			rewardDataList:[],
			fundDataList:[],
			tagType:'week',
			option4: {
				tooltip: {
				    trigger: 'axis',
				    axisPointer: {
				      type: 'cross',
				      label: {
				        backgroundColor: '#6a7985'
				      }
				    }
				  },
				  grid: {
				    left: '3%',
				    right: '4%',
				    bottom: '3%',
				    containLabel: true
				  },
				  xAxis: [
				    {
				      type: 'category',
				      boundaryGap: false,
				      data: []
				    }
				  ],
				  yAxis: [
				    {
				      type: 'value'
				    }
				  ],
				  
				  series: [
				    {
				      name: 'Email',
				      type: 'line',
				      stack: 'Total',
				      areaStyle: {},
				      emphasis: {
				        focus: 'series'
				      },
				      itemStyle: {
				        normal: {
				          color:'#EAC650',
				          areaStyle: {
				            type: 'default',
				            //渐变色实现===
				            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
				              //三种由深及浅的颜色
				              [{
				                offset: 0,
				                color: '#FBD535'
				              }, {
				                offset: 1,
				                color: '#F5F5F5'
				              }]),
				          },
				          lineStyle: {  //线的颜色
				            color: '#FBD535'
				          },
				          //以及在折线图每个日期点顶端显示数字
				          label: {
				            show: true,
				            position: 'top',
				            textStyle: {
				              color: 'white'
				            }
				          }
				        },
				      },
				      data: []
				    },
				]
			},
			chart4:'',
		}
	},
	mounted(){
		
		// this.$refs.canvas1.setChart(chart);
		this.chart2 = echarts.init(document.getElementById('canvas2'));
		this.chart2.setOption(this.option2);
		
		// this.chart3 = echarts.init(document.getElementById('canvas3'));
		// this.chart3.setOption(this.option3);
		
		this.getRewardDataList()
	},
	methods: {
		secDivFun(id){
			this.secDiv=id
			this.tagType='week'
			if(id==1){
				this.getRewardDataList()
			}else{
				this.getFundDataList()
			}
		},
		tagFun(type){
			this.tagType=type
			this.getFundDataList()
		},
		getFundDataList(){
			this.option4.xAxis[0].data=[]
			this.option4.series[0].data=[]
			this.$request({
				url: '/getFundDataList',
				data:{
					type:'week'
				},
				method:'POST',
			}).then(ress=>{
				this.fundDataList=ress.data
				for(let ooo of ress.data){
					this.option4.xAxis[0].data.push(ooo.date)
					this.option4.series[0].data.push(ooo.data)
				}
				this.chart4 = echarts.init(document.getElementById('canvas4'));
				this.chart4.setOption(this.option4);
			}).catch(error=>{
				this.Toast(error.msg);
				uni.hideLoading()
			})
		},
		getRewardDataList(){
			this.option1.xAxis[0].data=[]
			this.option1.series[0].data=[]
			this.$request({
				url: '/getRewardDataList',
				data:{
					type:'week'
				},
				method:'POST',
			}).then(ress=>{
				// this.rewardDataList=ress.data
				for(let ooo of ress.data){
					this.option1.xAxis[0].data.push(ooo.date)
					this.option1.series[0].data.push(ooo.data)
				}
				this.chart1 = echarts.init(document.getElementById('canvas1'));
				this.chart1.setOption(this.option1);
			}).catch(error=>{
				this.Toast(error.msg);
				uni.hideLoading()
			})
		}
	}
}
</script>

<style scoped lang="scss">

.secTitle{padding:30rpx 0 30rpx 30rpx;}



</style>
