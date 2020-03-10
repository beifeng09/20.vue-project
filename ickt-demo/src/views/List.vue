<template>
<div class="list">
	<ul class="orders">
		<li v-for="item in orders" :key="item.id" @click="orderList(item.id)">
			<span>{{item.text}}</span>
			<span class="arrow"></span>
		</li>
	</ul>
	<!-- 商品组件 -->
	<Product v-for="(item, index) in dealList" :key="index" :data="item"></Product>
	<div class="loadmore" @click="showOther" v-show="others.length">
		<span>查看其他{{others.length}}条团购</span>
		<span class="arrow">
			<span class="arrow white"></span>
		</span>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
// 库文件
@import '../base.scss';
.list {
	// .orders {
	// 	@include clearfix;
	// 	background: #fff;
	// 	li {
	// 		float: left;
	// 		width: (100%/4);
	// 		text-align: center;
	// 	}
	// }
	.orders {
		display: flex;
		background: #fff;
		li {
			flex: 1;
			text-align: center;
			color: #666;
			font-size: 12px;
			line-height: 24px;
			border-bottom: 1px solid #ccc;
			border-right: 1px solid #ccc;
			&:last-child {
				border-right: none;
			}
		}
		.arrow {
			@include arrow(5px, #666);
			position: relative;
			top: -1px;
			left: 2px;
		}
	}
	.loadmore {
		line-height: 40px;
		background: #fff;
		color: $navColor;
		text-align: center;
		border-bottom: 1px solid #ccc;
		.arrow {
			@include arrow(8px, $navColor);
			position: relative;
			top: 2px;
			left: 4px;
			&.white {
				border-top-color: #fff;
				position: absolute;
				top: -10px;
				left: -8px;
			}
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Product from '../components/Product';
// 组件
export default {
	// 注册组件
	components: { Product },
	// 数据
	data() {
		return {
			orders: [
				{ text: '价格排序', id: 'price' },
				{ text: '销量排序', id: 'sales' },
				{ text: '好评排序', id: 'evaluate' },
				{ text: '优惠排序', id: 'discount' }
			],
			// 预定义数据
			list: [],
			// 剩余未显示的。
			others: []
		}
	},
	// 计算属性数据
	computed: {
		// 过滤list数组
		dealList() {
			// 返回的就是渲染的数据
			// 成员标题中，是否包含store中的搜索词search
			// return this.list.filter(item => item.title.indexOf(this.$store.state.search) >= 0)
			// 忽略大小写
			return this.list.filter(item => {
				return item.title
					// 标题中的字母大写
					.toUpperCase()
					// 是否包含
					.indexOf(
						// 搜索词也要大写
						this.$store.state.search.toUpperCase()
					) >= 0
			})
		}
	},
	// 方法
	methods: {
		// 展示剩余的商品
		showOther() {
			// 将others中的数据，存储在list中
			this.list = this.list.concat(this.others);
			// 数据显示了，就要清空others
			this.others = [];
		},
		// 对商品排序，参数就是排序id
		orderList(id) {
			// 如果是优惠
			if (id === 'discount') {
				return this.list.sort((a, b) => {
					// a的优惠：a.originPrice - a.price
					// b的优惠：b.originPrice - b.price
					// 升序
					// return (a.originPrice - a.price) - (b.originPrice - b.price)
					// 降序
					return (b.originPrice - b.price) - (a.originPrice - a.price)
				})
			}
			// console.log(id)
			// 对商品排序就是对list数据排序，就是对数组排序
			this.list.sort((a, b) => {
				/*根据id字段排序*/
				// 升序
				// return a[id] - b[id]
				// 倒序
				return b[id] - a[id]
			})
		}
	},
	// 组件创建完成，请求数据
	created() {
		// 请求
		this.$http
			// 要通知请求的是哪个分类的数据
			// 从路由中，获取id数据
			.get(`/data/list.json?id=${this.$route.params.id}`)
			// 监听数据返回
			.then(({ data }) => {
				// 存储数据
				// this.list = data;
				// 默认显示3条商品数据
				this.list = data.slice(0, 3);
				// 剩余的数据也要存储
				this.others = data.slice(3);
			})
		// console.log(this)
	}
}
</script>