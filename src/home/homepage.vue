<template>
    <div id="mainContainer" class="mainContainer">
        <Topbar></Topbar>
        <NavContainer @upNavId="getNavId"></NavContainer>
        <Note v-if="navId == 1" :navId="navId"></Note>
        <Table1 v-if="navId == 2 || navId == 3"></Table1>
        <Table2 v-if="navId == 4"></Table2>
    </div>
</template>

<script>

import Topbar from './topbar.vue'
import NavContainer from './nav.vue'
import Note from './../template/note.vue'
import Table1 from './../template/table.vue'
import Table2 from './../template/table2.vue'

export default {

    components: {
        'Topbar': Topbar,
        'NavContainer':NavContainer,
        'Note':Note,
        'Table1':Table1,
        'Table2':Table2
    },

    data () {
        return {
            navId:''
        }
    },

    methods: {
        getNavId(val){
            this.navId = val;
            console.log(this.navId);
        }
    }
}
</script>

<style lang="less">
    .mainContainer{
        width:100%;
        height:100%;
        .top{
            width:100%;
            height:50px;
            line-height:50px;
            background:#20a0ff;
            color:#fff;
            .title{
                padding-left:10px;
                font-size:18px;
            }
            .topUser{
                float: right;
                padding-right:20px;
                .loginOutBtn{
                    padding:15px;
                    cursor:pointer;
                }
            }
        }
        .nav{
            width:20%;
            //height:100%;
            float: left;
            border-right:1px solid #f1f1f1;
            position:absolute;
            top:50px;
            bottom:0;
            .el-tree{
                border:none;
            }
        }
        .rightContainer{
            width:78%;
            position:absolute;
            top:50px;
            bottom:0;
            right:0;
            overflow:auto;
            padding-top:10px;
            padding-bottom:30px;
        }
    }
    .editBtnContainer{
        height:50px;
        line-height: 50px;
    }
</style>