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
		<div class="m-control">
				<ul>
					<li>
						<img src="../assets/img/icon/icon-mode-loop.png" />
					</li>
					<li>
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
	</div>
</template>

<script>
//	(function() {
//		var html = document.documentElement;
//		var hWidth = html.getBoundingClientRect().width;
//		html.style.fontSize = hWidth / 15 + "px"; //设置默认字符大小 25
//		var a = html.style.fontSize;
//	})();
				let a=1;
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
		methods:{
			playMusic:function(){
				let myVideo=document.getElementById('myVideo');
				myVideo.play()
				let startIcon=document.getElementById('start-icon');
				if(startIcon.src=='http://localhost:8085/static/icon/icon-ctrl-start.png'){
					startIcon.src='/static/icon/icon-ctrl-stop.png'
					myVideo.pause()
				}else{
					startIcon.src='/static/icon/icon-ctrl-start.png'
				}
				
			},
			nextVideo:function(){

				a++;
				console.log(a);
				let myVideo=document.getElementById('myVideo');
				myVideo.src='/static/myVideo/shapeOfMyHeart.mp4'
			}
		}
	}
</script>

<style lang="scss" scoped>
#hello{
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
	/*add style*/
	/** {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}*/
	
.m-control {
  width: 100%;
  height: 6rem;
  position: absolute;
  bottom: 0;
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