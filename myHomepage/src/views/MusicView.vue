<template>
	<div class="group-view has-header">
		<p id="hello">hello</p>
		<!--video begins-->
		<div class="wrap">
			<video id="myVideo" width="350" height="250">
				<source src="./static/myVideo/sugar.mp4" type="video/mp4"></source>
			</video>
			<!--<audio id="summervibe" src="./static/myMusic/summervibe.mp3" controls="controls"></audio>-->
		</div>
		<!--video ends-->
		<!--panel begins-->
		<div class="m-panel">
			<ul>
				<li @click='changeVideo1'>sugar</li>
				<li @click='changeVideo2'>我心的形状</li>
				<li @click='changeVideo3'>加勒比海盗</li>
				<li @click='changeVideo4'>main title</li>
				<li @click='changeVideo5'>柔声倾述</li>
			</ul>
		</div>
		<!--panel ends-->
		<!--control begins-->
		<div class="m-control">
			<ul>
				<li>
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
				<li>
					<img src="../assets/img/icon/icon-song-list.png" />
				</li>
			</ul>
		</div>
		<!--control ends-->
	</div>
</template>

<script>
	//	(function() {
	//		var html = document.documentElement;
	//		var hWidth = html.getBoundingClientRect().width;
	//		html.style.fontSize = hWidth / 15 + "px"; //设置默认字符大小 25
	//		var a = html.style.fontSize;
	//	})();
	let a = 1;

	import {
		mapState
	} from 'vuex'

	import UserBar from '../components/UserBar'
	import Group from '../components/Group'
	import DownloadApp from '../components/DownloadApp'

	export default {
		name: 'group-view',
		components: {
			UserBar,
			Group,
			DownloadApp
		},
		data() {
			return {}
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
		methods: {
			playMusic: function() {
				let myVideo = document.getElementById('myVideo');
				myVideo.play()
				let startIcon = document.getElementById('start-icon');
				if(startIcon.src == 'http://localhost:8085/static/icon/icon-ctrl-start.png') {
					startIcon.src = '/static/icon/icon-ctrl-stop.png'
					myVideo.pause()
				} else {
					startIcon.src = '/static/icon/icon-ctrl-start.png'
				}

			},
			nextVideo: function() {
				let startIcon = document.getElementById('start-icon');

				let myVideo = document.getElementById('myVideo');
				startIcon.src = '/static/icon/icon-ctrl-start.png';

				a++;
				if(a == 6) {
					a = 1;
				}
				console.log(a);
				switch(a) {
					case 2:
						myVideo.src = '/static/myVideo/shapeOfMyHeart.mp4'
						myVideo.play()
						break;
					case 3:
						myVideo.src = '/static/myVideo/pirate.mp4'
						myVideo.play()
						break;
					case 4:
						myVideo.src = '/static/myVideo/mainTitle.mp4'
						myVideo.play()
						break;
					case 5:
						myVideo.src = '/static/myVideo/speakSoftlyLove.mp4'
						myVideo.play()
						break;
					default:
						myVideo.src = '/static/myVideo/sugar.mp4'
						startIcon.src = '/static/icon/icon-ctrl-stop.png';
				}
			},
			prevVideo: function() {
				let startIcon = document.getElementById('start-icon');

				let myVideo = document.getElementById('myVideo');
				startIcon.src = '/static/icon/icon-ctrl-start.png';
				a--;
				if(a == 0) {
					a = 5;
				}
				console.log(a);
				this.chooseVideo(a);
				//				switch(a) {
				//					case 2:
				//						myVideo.src = '/static/myVideo/shapeOfMyHeart.mp4'
				//						myVideo.play()
				//						break;
				//					case 3:
				//						myVideo.src = '/static/myVideo/pirate.mp4'
				//						myVideo.play()
				//						this.sayTest();
				//						break;
				//					case 4:
				//						myVideo.src = '/static/myVideo/mainTitle.mp4'
				//						myVideo.play()
				//						break;
				//					case 5:
				//						myVideo.src = '/static/myVideo/speakSoftlyLove.mp4'
				//						myVideo.play()
				//						break;
				//					default:
				//						myVideo.src = '/static/myVideo/sugar.mp4'
				//						startIcon.src = '/static/icon/icon-ctrl-stop.png';
				//				}
			},
			chooseVideo: function(a) {
				let startIcon = document.getElementById('start-icon');
				switch(a) {
					case 2:
						myVideo.src = '/static/myVideo/shapeOfMyHeart.mp4'
						myVideo.play()
						break;
					case 3:
						myVideo.src = '/static/myVideo/pirate.mp4'
						myVideo.play()
						break;
					case 4:
						myVideo.src = '/static/myVideo/mainTitle.mp4'
						myVideo.play()
						break;
					case 5:
						myVideo.src = '/static/myVideo/speakSoftlyLove.mp4'
						myVideo.play()
						break;
					default:
						myVideo.src = '/static/myVideo/sugar.mp4'
						startIcon.src = '/static/icon/icon-ctrl-stop.png';
				}
			},
			changeVideo2: function() {
				let startIcon = document.getElementById('start-icon');
				startIcon.src = '/static/icon/icon-ctrl-start.png';
				a = 2;
				myVideo.src = '/static/myVideo/shapeOfMyHeart.mp4'
				myVideo.play()
			},
			changeVideo1: function() {
				let startIcon = document.getElementById('start-icon');
				startIcon.src = '/static/icon/icon-ctrl-start.png';
				a = 1;
				myVideo.src = '/static/myVideo/sugar.mp4'
				myVideo.play()
			},
			changeVideo3: function() {
				let startIcon = document.getElementById('start-icon');
				startIcon.src = '/static/icon/icon-ctrl-start.png';
				a = 3;
				myVideo.src = '/static/myVideo/pirate.mp4'
				myVideo.play()
			},
			changeVideo4: function() {
				let startIcon = document.getElementById('start-icon');
				startIcon.src = '/static/icon/icon-ctrl-start.png';
				a = 4;
				myVideo.src = '/static/myVideo/mainTitle.mp4'

				myVideo.play()
			},
			changeVideo5: function() {
				let startIcon = document.getElementById('start-icon');
				startIcon.src = '/static/icon/icon-ctrl-start.png';
				a = 5;
				myVideo.src = '/static/myVideo/speakSoftlyLove.mp4'
				myVideo.play()
			}

		}
	}
</script>

<style lang="scss" scoped>
	#hello {
		color: #00B600;
		/*color:#007722 ;*/
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
	
	.m-panel>ul>li {
		width: 100%;
		background: darkgray;
		color: white;
		margin-top: 5px;
		font-size: 32px;
	}
	/*panel ends*/
	/*add style*/
	
	.m-control {
		width: 100%;
		height: 6rem;
		position: absolute;
		bottom: 0;
		background: #17130f;
		opacity: 0.8;
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
</style>
