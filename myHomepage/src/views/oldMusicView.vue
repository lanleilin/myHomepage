<template>
	<div class="group-view has-header">
		<p>hello</p>
		<!--video begins-->
		<div class="wrap">
			<!--<video width="350" height="250" controls="controls">
				<source src="./static/myVideo/bear.mp4" type="video/mp4"></source>
			</video>-->
			<audio src="./static/myMusic/summervibe.mp3" controls="controls"></audio>
		</div>
		<!--video begins-->

	</div>
</template>

<script>
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
	
	.wrap {
		width: 350px;
		margin: 0 auto;
	}
</style>