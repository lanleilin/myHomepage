<template lang="html">
	<div class="list">
		<!--ul begin-->
		<ul id="ratingIpt">
			<li>
				<input type="text" name="" id="" value="" placeholder="电影名称" v-model="title" />
			</li>
			<li>
				<input type="text" name="" id="" value="" placeholder="评分"  v-model="rating"/>
			</li>
			<li>
				<input type="text" name="" id="" value="" placeholder="海报地址" v-model="poster"/>
			</li>
			<li>
				<textarea name="" rows="" cols="" placeholder="简介" v-model="introduction"></textarea>
			</li>

		</ul>
		<!--<download-app></download-app>-->
		<p @click="addMovie">添加</p>
		<router-link :to="{ name: 'MusicView'}">
			<p>hello</p>
			</a>
		</router-link>
		<ul id="ratingIpt" v-for="movie of movies">
			<li>
				<h3>{{ movie.title }}</h3>
			</li>
			<li>
				评分为{{ movie.rating }}
			</li>
			<li>
				<img class="movie-poster" :src="movie.poster">
			</li>
			<li>
				<p class="movie-introduction">{{ movie.introduction }}</p>
			</li>
						<li>
				<p @click="removeMovie(movie)">删除</p>
			</li>
		</ul>
		<!--ul end-->
<p v-show="movies.length==0">暂无电影</p>
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
					editMovieModal: false
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
				}
			}
	}
</script>

<style lang="css">
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
</style>