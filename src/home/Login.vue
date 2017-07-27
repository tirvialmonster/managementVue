<template>
  	<div id="login" class="login">
  		<div class="loginContainer">
  			<div>
	  			<div class="item">
		  			<div class="leftText">用户名：</div>
		  			<el-input class="loginInput" size="small" v-model="userName"></el-input>
		  		</div>
		  		<div class="item">
		  			<div class="leftText">密码：</div>
		  			<el-input class="loginInput" size="small" type="password"></el-input>
	  			</div>
	  			<div  class="item loginBtn">
	  				<el-button type="primary" @click="loginFn">登录</el-button>
	  			</div>
	  		</div>
  		</div>
  	</div>
</template>


<script>
export default {
    data () {
        return {
    		userName:''
        }
    },

    methods: {
    	loginFn(){
    		this.$router.push({ path: '/index',query: { username:this.userName} });
    		
    	}
    }
}
</script>

<style lang="less">
	.login{
		width:300px;
		height: 100%;
		margin:0 auto;
		display: table;
		.loginContainer{
			display: table-cell;
			vertical-align: middle;
			.item{
				padding:4px 0;
				.leftText{
					float: left;
					width:88px;
				}
				.loginInput{
					width:70%;
				}
			}
			.loginBtn{
				text-align:center;
			}
		}
	}
</style>
