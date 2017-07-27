<template>
  	<div id="table" class="rightContainer table">
        <el-table  :data="tableData"
                    style="width: 98%">

            <el-table-column prop="date" label="日期"></el-table-column>

            <el-table-column prop="name" label="姓名"></el-table-column>

            <el-table-column prop="address" label="地址"></el-table-column>

            <el-table-column label="操作">
                <template scope="scope">
                    <el-button type="text" @click="editFn(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="编辑" :visible.sync="editFormVisible">
            <div>
                <span>日期：</span>
                <el-date-picker v-model="editForm.date"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions0">
                </el-date-picker>
            </div>
            <div>
                <span>姓名：</span>
                <el-input v-model="editForm.name" placeholder="请输入姓名"></el-input>
            </div>
            <div>
                <span>地址：</span>
                <el-input v-model="editForm.address" placeholder="请输入地址"></el-input>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editFormVisible = false">确 定</el-button>
                <el-button @click="editFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
  	</div>
</template>


<script>
export default {
	
	created() {
       
    },
    data () {
        return {
     		tableData:[{
                date: '2017-07-02',
                name: 'aaa',
                address: 'aaaaaa'
            }, {
                date: '2017-07-04',
                name: 'bbb',
                address: 'bbbbbb'
            }, {
                date: '2017-07-01',
                name: 'ccc',
                address: 'cccccc'
            }, {
                date: '2017-07-03',
                name: 'ddd',
                address: 'dddddd'
            }],
            editFormVisible:false,
            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            editForm:{
                date: '',
                name: '',
                address: ''
            },
        }
    },

    methods: {
    	editFn(row){
            console.log(row);
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
        }
    }
}
</script>
