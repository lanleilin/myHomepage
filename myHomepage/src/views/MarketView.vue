<template>
	<div class="group-view has-header">
		<div class="wrap">
			<!--crousal begin-->
			<el-carousel :interval="4000" type="card" height="12rem">
				<el-carousel-item v-for="item in 6" :key="item">
					<h3>{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
			<!--crousal end-->

			<!--img contains begins-->
			<div class="img-containers">
				<a class="img-items" v-for='mac in macList'>
					<ul class="item-ul">
						<li>
							<img src="../assets/img/market/p1971659.jpg" />
						</li>
						<li>
							macbook支架
						</li>
						<li>
							￥{{mac.price}}
						</li>
					</ul>
				</a>

			</div>
			<!--img contains begins-->
			<div class="circleWrap" @click='say'>
				<el-progress type="circle" :percentage='80' id="circle"></el-progress>
			</div>

			<!--<p>数字  ：{{nb}}</p>-->
			<p>{{valueRating}}</p>
			<div class="circleWrap">
				<el-rate v-model="change" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
				<el-button @click='addChangeNum' type='success' :plain="true">+</el-button>

			</div>
			<!--<p @click='addChangeNum'>{{change}}</p>-->
			<!--折叠面板-->
			<el-collapse v-model="activeName" accordion>
				<el-collapse-item title="一致性 Consistency" name="1">
					<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
					<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
				</el-collapse-item>
				<el-collapse-item title="反馈 Feedback" name="2">
					<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
					<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
				</el-collapse-item>
				<el-collapse-item title="效率 Efficiency" name="3">
					<div>简化流程：设计简洁直观的操作流程；</div>
					<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
					<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
				</el-collapse-item>
				<el-collapse-item title="可控 Controllability" name="4">
					<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
					<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
				</el-collapse-item>
			</el-collapse>

		</div>
	</div>
</template>

<script>
	(function() {
		var html = document.documentElement;
		var hWidth = html.getBoundingClientRect().width;
		html.style.fontSize = hWidth / 37.5 + "px";
		var a = html.style.fontSize;
	})();
	import animate from 'animate.css';
	import {
		mapState,
		mapActions
	} from 'vuex'
	import UserBar from '../components/UserBar'
	import Group from '../components/Group'
	import DownloadApp from '../components/DownloadApp'

	export default {
		name: 'music-view',
		components: {
			UserBar,
			Group,
			DownloadApp
		},
		data() {
			return {
				macList: [{
					name: 'macbook',
					price: '119'
				}, {
					name: 'macbook2',
					price: '179'
				}],
				value: '',
				valueRating: 2,
				activeName: '1'
			}

		},
		computed: {
			// Getting Vuex State from store/modules/group
			...mapState({
				group_a: state => state.group.group_a,
				group_b: state => state.group.group_b,
				group_c: state => state.group.group_c,
				test: state => state.numbers.testNumber,
				change: state => state.numbers.changeNumber
			})
		},
		created: function() {
			// Dispatching getGroup on created
			this.$store.dispatch('getGroup')
		},
		mounted: function() {

		},
		methods: {
			...mapActions([
				'addChangeNum'
			]),
			say: function() {
				this.valueRating += 2;
				if(this.valueRating > 5) {
					this.valueRating = 0;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 90%;
		margin: 0 auto;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	/*crousal*/
	
	.el-carousel {
		margin-top: 5.4rem;
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 1.4rem;
		opacity: 0.75;
		line-height: 12rem;
		margin: 0;
	}
	
	.el-carousel__item {
		background: center center no-repeat;
		background-size: cover;
	}
	/*改变默认比例*/
	
	.el-carousel__item--card {
		width: 80%;
		left: -16%;
	}
	
	.el-carousel__item:nth-child(2n) {
		/*background-color: #99a9bf;*/
	}
	
	.el-carousel__item:nth-child(2n+1) {
		/*background-color: #d3dce6;*/
	}
	
	.el-carousel__item:nth-child(8) {
		background-image: url(http://i02.pictn.sogoucdn.com/70b0c77917667268);
	}
	
	.el-carousel__item:nth-child(7) {
		background-image: url(http://i04.pictn.sogoucdn.com/c2416e79940074c0);
	}
	
	.el-carousel__item:nth-child(6) {
		background-image: url(http://i02.pictn.sogoucdn.com/b1c472ca598c7800);
	}
	
	.el-carousel__item:nth-child(3) {
		background-image: url(https://img3.doubanio.com/img/files/file-1500343388-1.jpg);
		background-size: contain;
	}
	
	.el-carousel__item:nth-child(5) {
		background-image: url(https://img3.doubanio.com/img/files/file-1499333715-0.jpg);
		background-size: contain;
	}
	
	.el-carousel__item:nth-child(4) {
		background-image: url(http://i04.pictn.sogoucdn.com/c2416e79940074c0);
	}
	/*img containers*/
	
	.img-containers {
		display: flex;
		flex-wrap: wrap;
	}
	
	.img-items {
		display: block;
		margin: 0.8rem;
		img {
			width: 12rem;
		}
	}
	
	.item-ul {
		li:nth-child(2) {
			color: darkgray;
		}
		li:nth-child(3) {
			color: #f05f50;
			font-weight: bold;
		}
	}
	/*circleWrap*/
	
	.circleWrap {
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}
	
	.el-rate {
		/*display: inline-block;*/
	}
	.el-collapse{
		margin-top: 1rem;
	}
</style>