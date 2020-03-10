<template>
<div class="detail">
	<div class="img-part">
		<img v-if="data.src" :src="'/img/item/' + data.src" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price"><strong>{{data.price}}</strong>元</span>
		<span>门市价{{data.originPrice}}元</span>
		<span class="buy-btn">立即购买</span>
	</div>
	<div class="sales-part">
		<div class="item">支持立即退货</div>
		<div class="item">支持随时退货</div>
		<div class="item">销量{{data.sales}}</div>
	</div>
	<div class="store-part module">
		<div class="module-header">店家信息</div>
		<div class="module-body">
			<p>{{data.storeName}}</p>
			<p>{{data.storeAddress}}</p>
		</div>
		<div class="module-footer">查看{{data.storeNum}}家分店</div>
	</div>
	<div class="buy-part module">
		<div class="module-header">购买须知</div>
		<div class="module-body">
			<h3>有效日期</h3>
			<p>{{data.validateTime}}</p>
			<h3>使用日期</h3>
			<p>{{data.useTime}}</p>
			<h3>使用规则</h3>
			<p v-for="(item, index) in data.rules" :key="index">{{item}}</p>
		</div>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';
.detail {
	.img-part {
		position: relative;
		color: #fff;
		img {
			display: block;
			width: 100%;
		}
		h1, p {
			position: absolute;
			left: 15px;
			bottom: 15px;
			font-size: 16px;
		}
		h1 {
			bottom: 40px;
			font-size: 20px;
		}
	}
	.price-part {
		padding: 10px;
		border-bottom: 1px solid #ccc;
		background: #fff;
		.price {
			color: $navColor;
			margin-right: 8px;
			strong {
				font-size: 34px;
				font-weight: normal;
			}
		}
		.buy-btn {
			float: right;
			background: #f60;
			color: #fff;
			padding: 8px 15px;
			font-size: 12px;
			margin-top: 7px;
		}
	}
	.sales-part {
		@include clearfix;
		background: #fff;
		padding: 8px 10px;
		.item {
			float: left;
			width: (100%/2);
			line-height: 30px;
			color: yellowgreen;
			font-size: 16px;
			&:last-child {
				color: #000;
			}
		}
	}
	.module {
		background: #fff;
		margin-top: 10px;
		padding: 10px;
		.module-header {
			border-bottom: 1px solid #ccc;
			padding: 10px 0;
			font-size: 24px;
		}
		.module-body {
			line-height: 30px;
			padding: 8px 0;
			h3 {
				font-weight: normal;
				line-height: 40px;
				color: #f60;
			}
		}
		.module-footer {
			border-top: 1px solid #ccc;
			padding: 8px 0;
			color: skyblue;
		}
	}
}
</style>
<script type="text/javascript">
// 定义组件
export default {
	// 数据
	data() {
		return {
			data: {}
		}
	},
	// 方法
	methods: {
		// 请求数据
		getData() {
			// 解构parmams
			let { params } = this.$route;
			// console.log(params)
			// 发送请求
			this.$http
				// .get('/data/detail.json', {
				// 	// params: { id: params.id }
				// 	params
				// })
				.get('/data/product.json', { params })
				// 监听数据返回
				.then(({ data }) => this.data = data);
		}
	},
	// 组件创建完成
	created() {
		// 更新数据
		this.getData();
	},
	// 局部监听
	// beforeRouteEnter(route, oldRoute, next) {
	// 	// next方法必须执行
	// 	next();
	// 	console.log(arguments)
	// }
	// watch监听
	watch: {
		// 路由
		$route() {
			// console.log(arguments,this.$route)
			// 更新数据
			this.getData();
		}
	}
}
</script>