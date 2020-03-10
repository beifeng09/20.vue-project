<template>
<div class="home">
	<ul class="types clearfix">
		<router-link v-for="(item, index) in types" :key="index" tag="li" :to="'/list/' + item.id">
			<img :src="'/img/icon/' + item.url" alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 广告模块 -->
	<div class="ads">
		<router-link v-for="(item, index) in ad" :key="index" tag="div" to="'/detail/' + item.id" class="ads-item">
			<h3 :class="'color-' + index">{{item.title}}</h3>
			<p>{{item.description}}</p>
			<img :src="'/img/ad/' + item.url" alt="">
		</router-link>
	</div>
	<!-- 商品列表 -->
	<div class="home-list">
		<div class="title">猜你喜欢</div>
		<Product v-for="(item, index) in list" :key="index" :data="item"></Product>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
// 引入库文件
@import '../base.scss';
.home {
	.types {
		@include clearfix;
		background: #fff;
		padding: 10px 0;
		li {
			float: left;
			width: (100%/5);
			text-align: center;
			padding: 0 0 8px;
			img {
				width: 60%;
			}
			p {
				font-size: 12px;
				margin-top: 5px;
			}
		}
	}
	.ads {
		display: flex;
		background: #fff;
		margin: 10px 0;
		.ads-item {
			flex: 1;
			padding: 12px 0 15px;
			border-right: 1px solid #ccc;
			text-align: center;
			&:last-child {
				border-right: none;
			}
			img {
				width: 60%;
				margin-top: 8px;
			}
			h3 {
				font-size: 16px;
				line-height: 30px;
			}
			p {
				font-size: 14px;
				color: #666;
			}
			// .color-0 {
			// 	color: red;
			// }
			// .color-1 {
			// 	color: green;
			// }
			// .color-2 {
			// 	color: purple;
			// }
			// 索引值
			$i: 0;
			// for, while, each
			@each $color in red, green, purple {
				.color-#{$i} {
					color: $color;
				}
				// 更新索引值
				$i: $i + 1;
			}
		}
	}
}
.home-list {
	background: #fff;
	.title {
		margin: 0 10px;
		padding: 10px 0;
		color: #000;
		font-size: 20px;
		border-bottom: 1px solid #ccc;
	}
}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// 引入组件
import Product from '../components/Product';
// 组件
export default {
	// 注册组件
	components: { Product },
	// 数据
	data() {
		return {
			types: [
				{ url: '01.png', text: '美食', id: '1' },
				{ url: '02.png', text: '电影', id: '2' },
				{ url: '03.png', text: '酒店', id: '3' },
				{ url: '04.png', text: '休闲', id: '4' },
				{ url: '05.png', text: '外卖', id: '5' },
				{ url: '06.png', text: 'KTV', id: '6' },
				{ url: '07.png', text: '周边游', id: '7' },
				{ url: '08.png', text: '丽人', id: '8' },
				{ url: '09.png', text: '小吃', id: '9' },
				{ url: '10.png', text: '火车票', id: '10' }
			],
			// 初始化数据
			list: [],
			ad: []
		}
	},
	// 创建组件之后发送请求
	created() {
		// 请求数据
		this.$http
			// get
			.get('/data/home.json')
			// 监听数据返回
			.then(({ data }) => {
				// 存储数据
				this.ad = data.ad;
				this.list = data.list;
				// console.log(this)
			})
	}
}
</script>
