<template>
<div id="app">
	<div class="app-header">
		<div class="goback" @click="$router.history.go(-1)">
			<span class="arrow"></span>
			<span class="arrow green"></span>
		</div>
		<h1>爱创课堂团购网站</h1>
		<div class="login">登录</div>
	</div>
	<div class="app-search" v-show="$route.fullPath.indexOf('/detail/') !== 0">
		<input type="text" v-model="msg" @keyup.enter="gotoSearch" placeholder="请输入搜索关键字">
	</div>
	<router-view/>
</div>
</template>
<style lang="scss">
// 引入库
@import './base.scss';
// 清空默认样式
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, 
body {
	background: #efefef;
}
.app-header {
	background: $navColor;
	color: #fff;
	display: flex;
	text-align: center;
	height: 50px;
	line-height: 50px;
	.goback,
	.login {
		width: 50px;
	}
	h1 {
		flex: 1;
		font-size: 24px;
		text-indent: -10px;
	}
	.goback {
		position: relative;
		.arrow {
			// 使用混合
			@include arrow(10px, #fff, right);
			position: absolute;
			top: 16px;
			left: 10px;
			&.green {
				top: 16px;
				left: 12px;
				border-right-color: $navColor;
			}
		}
	}
}
.app-search {
	background: #fff;
	display: flex;
	padding: 10px 20px;
	input {
		flex: 1;
		font-size: 12px;
		padding: 10px 20px;
		background: #efefef;
		outline: none;
		border: none;
		border-radius: 17px;
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 定义数据
	data() {
		return {
			msg: ''
		}
	},
	// 方法
	methods: {
		// 开始搜索
		gotoSearch() {
			// 获取搜索内容
			// let msg = this.msg;
			// 发送消息
			this.$store.commit('updateSearch', this.msg);
			// 清空msg
			this.msg = '';
		}
	},
	// // 创建完成
	// created() {
	// 	console.log(this)
	// }
}
</script>
