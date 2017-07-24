<template lang="html">
	<div class="list">
		<!--ul begin-->
		<ul id="ratingIpt" v-show="idx==1">
			<li>
				<input type="text" name="" id="" value="" placeholder="电影名称" v-model="title" />
			</li>
			<li>
				<input type="text" name="" id="" value="" placeholder="评分" v-model="rating" />
			</li>
			<!--<li>
				<ul class="star">

					<li class="starItem" v-for="star in stars"></li>
				</ul>
			</li>-->
			<li>
				<input type="text" name="" id="" value="" placeholder="海报地址" v-model="poster" />
			</li>
			<li>
				<textarea name="" rows="" cols="" placeholder="简介" v-model="introduction"></textarea>
			</li>
			<li>
		<p @click="addMovie">添加</p>
				
			</li>
		</ul>
		<!--<download-app></download-app>-->
		<!--<p @click="addMovie">添加</p>-->
		<p class="ratingShowStyle" @click="changeIdx">MARK</p>
		
		<router-link :to="{ name: 'MusicView'}">
			<p class="ratingShowStyle">返回</p>
		</router-link>
		<ul class="movieShowUl" v-for="movie of movies">
			<li>
				<h3>{{ movie.title }}  </h3>评分: {{ movie.rating }}
			</li>
			<!--<li>
				评分为{{ movie.rating }}
			</li>-->
			<li>
				<img class="movie-poster" :src="movie.poster">
			</li>
			<li>
				<!--<h3>简介： </h3> {{ movie.introduction }}-->
				<p class="movie-introduction"><strong>简介：</strong> {{ movie.introduction }}</p>
				<!--<span>{{ movie.introduction }}</span>-->
			</li>
			<li>
				<p class="ratingDel" @click="removeMovie(movie)">删除</p>
			</li>
		</ul>
		<!--ul end-->
		<p class="ratingShowStyle" v-show="movies.length==0">暂无电影</p>

		
	</div>
</template>

<script>

	export default {
		created() {
				this.getMovies()
				document.title = this.$route.name

			},
			components: {},
			data() {
				return {
					title: '',
					poster: '',
					rating: null,
					introduction: '',
					movie_id: '',
					movies: [],
					addMovieModal: false,
					editMovieModal: false,
					stars:[1,2,3,4,5],
					idx:-1
				}
			},
			methods: {
				// 获取所有电影的方法
				getMovies() {
					this.$http.get('/api/movie')
						.then(res => {
							console.dir(res.data)
							this.movies = res.data
						})
						.catch(err => {
							this.toastr.error(`${err.message}`, 'ERROR!')
							console.log(err)
						})
				},
				// 打开添加电影modal的方法
				openAddMovieModal() {
					this.addMovieModal = true
				},
				// 打开编辑电影modal的方法
				openEditMovieModal(movie) {
					this.editMovieModal = true
					this.title = movie.title
					this.rating = movie.rating
					this.introduction = movie.introduction
					this.poster = movie.poster
					this.movie_id = movie._id
				},
				// 关闭modal的方法
				closeModal() {
					this.addMovieModal = false
					this.editMovieModal = false
					this.title = ''
					this.rating = null
					this.poster = ''
					this.introduction = ''
					this.movie_id = ''
				},
				// 访问后端添加电影的方法
				addMovie() {
					this.$http.post('/api/movie', {
							title: this.title,
							poster: this.poster,
							introduction: this.introduction,
							rating: this.rating
						})
						.then(res => {
							//							this.toastr.success('添加电影成功')
							console.log('添加电影成功')
							console.log(res.data)
							this.addMovieModal = false
							this.title = ''
							this.rating = null
							this.poster = ''
							this.introduction = ''
							this.movie_id = ''
							this.getMovies()
						})
						.catch(e => {
							//							this.toastr.warn('保存失败!')
							console.log('保存失败')
							console.log(e)
						})
				},
				// 取消添加电影的方法
				cancelAddMovie() {
					this.addMovieModal = false
					this.title = ''
					this.rating = 0
					this.poster = ''
					this.introduction = ''
				},
				// 访问后端编辑电影的方法
				editMovie() {
					let id = this.movie_id
					this.$http.put(`/api/movie/${id}`, {
							title: this.title,
							poster: this.poster,
							introduction: this.introduction,
							rating: this.rating,
						})
						.then(res => {
							this.toastr.success("更新电影成功!")
							this.closeModal()
							this.getMovies()
							this.title = ''
							this.rating = null
							this.poster = ''
							this.introduction = ''
							this.movie_id = ''
						})
						.catch(err => console.log(err))
				},
				// 删除电影的方法
				removeMovie(movie) {
					let id = movie._id
					this.$http.delete(`/api/movie/${id}`)
						.then(res => {
							//							this.toastr.success("删除成功.")
							console.log('删除成功')
							console.log(res.data)
							this.getMovies()
						})
						.catch(e => console.log(e))
				},
				// 跳转到电影详情页的方法
				showDetail(title) {
					this.$router.push(`/movie/${title}`)
				},
				//展示添加框
				changeIdx:function(){
					this.idx=this.idx*-1;
				}
			}
	}
</script>

<style lang="scss">
	.mu-th {
		text-align: center !important;
	}
	
	.mu-td {
		text-align: center !important;
	}
	
	.movie-poster {
		width: 80px;
		padding: 4px 0;
	}
	
	.movie-introduction {
		white-space: normal;
		padding: 4px 4px;
		letter-spacing: 1px;
		font-size: 14px;
		text-align: left;
		text-indent: 2em;
	}
	/*评分*/
	
	.star {
		width: 30rem;
		height: 5.8rem;
		margin: 0 auto;
	}
	
	.star li {
		width: 6rem;
		height: 5.8rem;
		float: left;
		border: none;
		background: url(/static/homeIcon/starGrey.svg) no-repeat center;
		background-size: 80%;
	}
	
	.starItem {
		width: 6rem;
		height: 5.8rem;
		float: left;
		background-size: 80%;
		border: none;
	}
	/*评分对话框*/

	#ratingIpt{
		margin-top: 3.2rem;
		li{
			margin-top: 1rem;
			width: 100%;
			height: 3.2rem;
			font-size: 2.6rem;
			box-shadow: none;
			input,textarea,p{
				margin: 0 auto;
				width: 90%;
				height: 3.2rem;
				line-height: normal;
				text-align: center;
				color: #333333;
				box-shadow: none;
				border: 1px solid darkgray;
				border-radius: 6px;
				left: 5%;
				position: relative;
				outline: none;
			}
			p{
				margin:3.8rem 0 0 0;
				text-align: center;
				font-size: 2.2rem;
				background: lightgray;
				color: white;
				height: 3.2rem;
				line-height: 3.2rem;
				border-radius: 3.2rem;
				border: none;
			}
			textarea{
				height: auto;
			}
		}
	}
	/*暂无电影*/
	.ratingShowStyle{
		width: 100%;
		text-align: center;
		color: #494949;
		font-weight: bold;
		font-size: 1.6rem;
	}
/*movie-show-ul*/
.movieShowUl{
		margin-top: 3.2rem;
		border-top: 1px solid lightgray;
		li{
			width: 100%;
			text-align: left;
			img{
				width: 90%;
			}
			h3{
				display: inline-block;
				margin:0.4rem 10% 0.4rem 10%;
				font-size: 1.8rem;
				color: #17AA52;
			}
		}
		li:nth-child(2){
			text-align: center;
		}
		li:nth-child(3){
			p{
				color: #494949;
				font-size: 1.2rem;
				width: 90%;
				margin: 0 auto;
			}
			strong{
				color: #17AA52;
			}
		}
}
.ratingDel{
	width: 90%;
	text-align: center;
	font-size: 1.8rem;
	background: lightgray;
	height: 3.2rem;
	line-height: 3.2rem;
	border-radius: 3.2rem;
	color: white;
	margin: 0 auto;
	margin-bottom: 0.6rem;
	margin-top: 0.4rem;
}
</style>