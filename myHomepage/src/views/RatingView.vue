<template>
	<div class="rating">
		<ul id="ratingIpt">
			<li>
				<input type="text" name="" id="" value="" placeholder="电影名称" />
			</li>
			<li>
				<input type="text" name="" id="" value="" placeholder="评分" />
			</li>
			<li>
				<input type="text" name="" id="" value="" placeholder="海报地址" />
			</li>
			<li>
				<textarea name="" rows="" cols="" placeholder="简介"></textarea>
			</li>
		</ul>
		<!--<download-app></download-app>-->
		<router-link :to="{ name: 'MusicView'}">
			<p>hello</p>
			</a>
		</router-link>
		<ul id="ratingIpt">
			<li>
				<input type="text" name="" id="" value="" placeholder="电影名称" />
			</li>
			<li>
				<input type="text" name="" id="" value="" placeholder="评分" />
			</li>
			<li>
				<input type="text" name="" id="" value="" placeholder="海报地址" />
			</li>
			<li>
				<textarea name="" rows="" cols="" placeholder="简介"></textarea>
			</li>
		</ul>
	</div>
</template>

<script>
	(function() {
		var html = document.documentElement;
		var hWidth = html.getBoundingClientRect().width; //根据屏宽调节大小
		console.log(hWidth);
		html.style.fontSize = hWidth / 37.5 + "px";
	})();

	import {
		mapState
	} from 'vuex'

	import DownloadApp from '../components/DownloadApp'

	export default {
		name: 'rating-view',
		components: {
			DownloadApp
		},
		data() {
			return {}
		},
		computed: {
			// Getting Vuex State from store/modules/group
		},
		created: function() {
			// Dispatching getGroup on created
			//			this.$store.dispatch('getGroup')
		}
	}
</script>

<style lang="scss" scoped>
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
</style>