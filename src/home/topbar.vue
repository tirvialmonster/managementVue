<template>
  	<div id="top" class="top">
  		<span class="title">vue+element ui 个人总结</span>
  		<div class="topUser">
  			<span>{{userName}},</span>
  			<span class="loginOutBtn" @click="loginOutFn">注销</span>
  		</div>
  	</div>
</template>


<script>
export default {
	
	created() {
        this.userName = this.$route.query.username;
    },
    data () {
        return {
     		userName:''
        }
    },

    methods: {
    	loginOutFn(){
    		this.$router.push({ path: '/login'});
    	}
    }
}
</script>
