<template>
  	<div id="table" class="rightContainer table">
        <el-table  :data="tableData"
                    style="width: 98%">

            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>

            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>

            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>

            <el-table-column label="操作">
                <template scope="scope">
                    <el-button type="text" @click="editFn">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
  	</div>
</template>


<script>
export default {
	
	created() {
       
    },
    data () {
        return {
     		tableData:[{
                date: '2016-05-02',
                name: 'aaa',
                address: 'aaaaaa'
            }, {
                date: '2016-05-04',
                name: 'bbb',
                address: 'bbbbbb'
            }, {
                date: '2016-05-01',
                name: 'ccc',
                address: 'cccccc'
            }, {
                date: '2016-05-03',
                name: 'ddd',
                address: 'dddddd'
            }]
        }
    },

    methods: {
    	editFn(){
            
        }
    }
}
</script>
