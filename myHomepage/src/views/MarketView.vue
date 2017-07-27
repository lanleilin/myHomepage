<template>
	<div class="group-view has-header">
		<div class="wrap">
			<p>hello</p>
			
			<!--crousal begin-->
			<el-carousel :interval="4000" type="card" height="10rem">
				<el-carousel-item v-for="item in 6" :key="item">
					<h3>{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
			<!--crousal begin-->
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</div>
	</div>
</template>

<script>
	(function() {
		var html = document.documentElement;
		var hWidth = html.getBoundingClientRect().width;
		//			html.style.fontSize = hWidth / 15 + "px"; //设置默认字符大小 25
		html.style.fontSize = hWidth / 37.5 + "px";
		var a = html.style.fontSize;
	})();

	import animate from 'animate.css';

	//	import ElementUI from 'element-ui'

	import {
		mapState
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: ''
			}

		},
		computed: {
			// Getting Vuex State from store/modules/group
			...mapState({
				group_a: state => state.group.group_a,
				group_b: state => state.group.group_b,
				group_c: state => state.group.group_c
			})
		},
		created: function() {
			// Dispatching getGroup on created
			this.$store.dispatch('getGroup')
		},
		mounted: function() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 90%;
		margin: 0 auto;
	}
	/*crousal*/
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 1.4rem;
		opacity: 0.75;
		line-height: 12rem;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
		background-size: cover;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
		background-size: cover;
	}
		.el-carousel__item:nth-child(8){
		background-image: url(http://i02.pictn.sogoucdn.com/70b0c77917667268);
	}
	.el-carousel__item:nth-child(7){
		background-image: url(http://i04.pictn.sogoucdn.com/c2416e79940074c0);
	}
	.el-carousel__item:nth-child(6){
		background-image: url(http://i02.pictn.sogoucdn.com/b1c472ca598c7800);
	}
	.el-carousel__item:nth-child(3){
		background-image: url(http://i02.pictn.sogoucdn.com/9419e561a199cf27);
	}
	.el-carousel__item:nth-child(4){
		background-image: url(http://i03.pictn.sogoucdn.com/dcdbf9085db6ec69);
	}
	.el-carousel__item:nth-child(5){
		background-image: url(http://i04.pictn.sogoucdn.com/c2416e79940074c0);
	}
</style>