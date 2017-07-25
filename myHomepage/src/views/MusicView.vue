<template>
	<div class="group-view has-header">
		<p id="hello" @click='fade'>hello</p>
		<!--<p @click='fade'>world</p>-->
		<!--video begins-->
		<div class="wrap">
			<!--<video id="myVideo" width="350" height="250">-->
			<video id="myVideo">
				<source src="./static/myVideo/sugar.mp4" type="video/mp4"></source>
			</video>
			<!--<p v-show=true>exit</p>-->
			<!--<audio id="summervibe" src="./static/myMusic/summervibe.mp3" controls="controls"></audio>-->
		</div>
		<!--video ends-->
		<div class="wrap">
			<!--panel begins-->
			<div class="m-panel" id="m-panel">
				<ul v-for="value in datalist">
					<li>
						<p class="videoLi"> {{value.name}}</p><span class="m-del"></span></li>
				</ul>
				<span class="panel-botton" @click="exitPanel" id="exitPanel">退出</span>
				<span class="panel-botton" @click="clearVideo" id="clearPanel">清空列表</span>
			</div>
			<!--panel ends-->
		</div>
		<div class="mask">

		</div>
		<!--control begins-->
		<div class="m-control">
			<ul>
				<li @click="fade">
					<img src="../assets/img/icon/icon-mode-loop.png" />
				</li>
				<li @click='prevVideo'>
					<img src="../assets/img/icon/icon-ctrl-left.png" />
				</li>
				<li @click='playMusic'>
					<img id="start-icon" src="../assets/img/icon/icon-ctrl-stop.png" />
				</li>
				<li @click='nextVideo'>
					<img src="../assets/img/icon/icon-ctrl-right.png" />
				</li>
				<li @click="switchVideo">
					<img src="../assets/img/icon/icon-song-list.png" />
				</li>
			</ul>
		</div>
		<!--control ends-->
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
	let index = 1;
	let ctrl = 1;
	import animate from 'animate.css';

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
				datalist: [{
					name: 'sugar',
					index: 1
				}, {
					name: '我心的形状',
					index: 2
				}, {
					name: '加勒比海盗',
					index: 3
				}, {
					name: 'main title',
					index: 4
				}, {
					name: 'main theme',
					index: 5
				}],
				videoName: '',
				nowindex: -1
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
			let myVideo = document.getElementById('myVideo')
			myVideo.width = 350
			myVideo.height = 250
		},
		methods: {
			playMusic: function() {
				let myVideo = document.getElementById('myVideo');
				myVideo.play()
				let startIcon = document.getElementById('start-icon');
				if(startIcon.src == 'http://localhost:8080/static/icon/icon-ctrl-start.png') {
					startIcon.src = '/static/icon/icon-ctrl-stop.png'
					myVideo.pause()
				} else {
					startIcon.src = '/static/icon/icon-ctrl-start.png'
				}
				myVideo.controls = '';

			},
			nextVideo: function() {
				let startIcon = document.getElementById('start-icon');

				let myVideo = document.getElementById('myVideo');
				startIcon.src = '/static/icon/icon-ctrl-start.png';

				index++;
				if(index == 6) {
					index = 1;
				}
				this.chooseVideo(index);

			},
			prevVideo: function() {
				let startIcon = document.getElementById('start-icon');

				let myVideo = document.getElementById('myVideo');
				startIcon.src = '/static/icon/icon-ctrl-start.png';
				index--;
				if(index == 0) {
					index = 5;
				}
				console.log(index);
				this.chooseVideo(index);

			},
			chooseVideo: function(index) {
				let startIcon = document.getElementById('start-icon');
				switch(index) {
					case 2:
						myVideo.src = './static/myVideo/shapeOfMyHeart.mp4'
						startIcon.src = './static/icon/icon-ctrl-start.png';
						myVideo.play()
						break;
					case 3:
						myVideo.src = './static/myVideo/pirate.mp4'
						startIcon.src = './static/icon/icon-ctrl-start.png';
						myVideo.play()
						break;
					case 4:
						myVideo.src = './static/myVideo/mainTitle.mp4'
						startIcon.src = './static/icon/icon-ctrl-start.png';
						myVideo.play()
						break;
					case 5:
						myVideo.src = './static/myVideo/speakSoftlyLove.mp4'
						startIcon.src = './static/icon/icon-ctrl-start.png';
						myVideo.play()
						break;
					default:
						myVideo.src = './static/myVideo/sugar.mp4'
						startIcon.src = './static/icon/icon-ctrl-stop.png';
				}
			},

			//switchViedeo 
			switchVideo: function() {
				//显示面板
				let mPanel = document.getElementById('m-panel');
				let mask = document.getElementsByClassName('mask')[0];
				mask.style.display = 'block';
				mask.className = "mask animated bounceInUp";
				mPanel.style.display = 'block';
				mPanel.className = "m-panel animated fadeIn"

				let startIcon = document.getElementById('start-icon');
				let videoLi = document.getElementsByClassName('videoLi');
				let myVideo = document.getElementById('myVideo');
				let mDel = document.getElementsByClassName('m-del');
				let _this = this;
				//切换视频 根据相应index播放相应视频
				for(let i = 0; i < _this.datalist.length; i++) {
					videoLi[i].addEventListener('click', function() {
						let idx = _this.datalist[i].index;
						_this.chooseVideo(idx);

					})
				}
				//删除视频
				for(let j = 0; j < mDel.length; j++) {
					mDel[j].addEventListener('click', function() {
						_this.datalist.splice(j, 1);
						console.log(_this.datalist.length);
					})
				}

			},
			clearVideo: function() {
				this.datalist = '';
			},
			exitPanel: function() {
				let mPanel = document.getElementById('m-panel');
				mPanel.className = "m-panel animated zoomOut";
				let mask = document.getElementsByClassName('mask')[0];
				mask.className = 'mask animated fadeOut'
			},
			fade: function() {
				let startIcon = document.getElementById('start-icon');
				startIcon.src = '/static/icon/icon-ctrl-stop.png';
				let myVideo = document.getElementById('myVideo');
				myVideo.controls = 'auto';

				let w = document.documentElement.clientWidth || document.body.clientWidth;
				let h = document.documentElement.clientHeight || document.body.clientHeigth;
				let cha = Math.abs(h - w) / 2;
				myVideo.width = h;
				myVideo.height = w;
				myVideo.style.zIndex = 2000;
				myVideo.style.top = 0
				myVideo.style.transform = 'translate(-' + cha + 'px,' + cha + 'px) rotate(90deg)';

			},
			defaultVideo: function() {
				let myVideo = document.getElementById('myVideo');
				myVideo.width = 350;
				myVideo.height = 250;
			}

		}
	}
</script>

<style lang="scss" scoped>
	#hello {
		color: #00B600;
		display: none;
	}
	
	.list-link {
		display: block;
		margin-bottom: 3rem;
		padding: 1.5rem 0;
		font-size: 1.6rem;
		line-height: 1.8rem;
		text-align: center;
		color: #42bd56;
	}
	
	.user-bar {
		margin-bottom: 1.5rem;
	}
	
	.wrap {
		width: 350px;
		margin: 0 auto;
	}
	/*panel begins*/
	
	.m-panel {
		display: none;
		height: 20rem;
		position: absolute;
		bottom: 7rem;
		z-index: 1080;
		width: 100%;
	}
	
	.m-panel>ul>li {
		width: 100%;
		margin-top: 5px;
		font-size: 1.8rem;
		padding-left: 1.2rem;
		color: white;
		width: 25.4rem;
		height: 3rem;
		line-height: 3rem;
		border-bottom: 1px solid #ededed;
	}
	
	.videoLi {
		display: inline-block;
		margin: 0;
		padding: 0;
	}
	
	.panel-botton {
		float: right;
		position: absolute;
		bottom: 0px;
		color: white;
		margin: 5px;
	}
	
	#clearPanel {
		right: 20px;
	}
	
	#exitPanel {
		right: 100px;
	}
	
	.m-del {
		background: url(../assets/img/del.svg) center;
		position: absolute;
		right: 10px;
		display: inline-block;
		width: 3rem;
		height: 3rem;
		margin-right: 1.2rem;
		line-height: 3rem;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	/*panel ends*/
	/*mask*/
	
	.mask {
		width: 100%;
		height: 100%;
		background: rgba(21, 21, 22, 0.4);
		position: absolute;
		top: 0;
		z-index: 990;
		/*opacity: .4 !important;*/
		display: none;
	}
	/*mask ends*/
	/*add style*/
	
	.m-control {
		width: 100%;
		height: 6rem;
		position: absolute;
		bottom: 0;
		background: #17130f;
		opacity: 0.8;
		z-index: 1024;
	}
	
	.m-control li {
		width: 20%;
		height: 6rem;
		background: #17130f;
		opacity: 0.8;
		float: left;
		display: -webkit-box;
		-webkit-box-align: center;
	}
	
	.m-control img {
		width: 100%;
		height: 100%;
	}
	/*myVideo*/
	
	#myVideo {
		position: absolute;
	}
</style>