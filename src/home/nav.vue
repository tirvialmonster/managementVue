<template>
  	<div id="nav" class="nav">
  		<el-tree 	:data="nav"
  					:props="defaultProps"
  					node-key="id"
  					:highlight-current="true"
  					default-expand-all
  					:current-node-key="currentkey"
  					@node-click="handleNodeClick">
  		</el-tree>
  	</div>
</template>


<script>
export default {
	
	created() {
        this.upNavIdFn();
    },
    data () {
        return {
     		nav:[{
     			label:'个人总结',
     			id:1,
     			children:[]
     		},{
     			label:'表格演示',
     			id:2,
     			children:[{
     				label:'表格一',
     				id:3,
     				children:[]
     			},{
     				label:'表格二',
     				id:4,
     				children:[]
     			}]
     		}],
     		defaultProps:{
     			children:'children',
     			label:'label'
     		},
     		navId:1,
     		currentkey:1
        }
    },

    methods: {
    	handleNodeClick(data){
    		console.log(data);
    		this.navId = data.id;
    		this.upNavIdFn();
    	},
    	upNavIdFn(){
    		this.$emit('upNavId',this.navId);
    	}
    }
}
</script>
