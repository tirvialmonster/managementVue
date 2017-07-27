<template>
  	<div id="table" class="rightContainer table">
        <div class="editBtnContainer">
            <el-button class="btn editbtn" @click="deleteBtnFn">删除</el-button>
            <el-button class="btn addbtn" @click="addBtnFn">新增</el-button>
        </div>

        <el-table  :data="tableData"
                    style="width: 98%"
                    @selection-change="handleSelectionChange">

            <el-table-column type="selection" width="50" row-key="id"></el-table-column>

            <el-table-column line-template label="日期">
                <template scope="scope">
                    <div v-show="!scope.row.isedit">{{scope.row.date}}</div>
                    <el-input v-model="scope.row.editForm.date"
                              placeholder="请输入日期"
                              v-show="scope.row.isedit"
                              size="small">
                    </el-input>
                </template>
            </el-table-column>

            <el-table-column line-template label="姓名">
                <template scope="scope">
                    <div v-show="!scope.row.isedit">{{scope.row.name}}</div>
                    <el-input v-model="scope.row.editForm.name"
                              placeholder="请输入姓名"
                              v-show="scope.row.isedit"
                              size="small">
                    </el-input>
                </template>
            </el-table-column>

            <el-table-column line-template label="地址">
                <template scope="scope">
                    <div v-show="!scope.row.isedit">{{scope.row.address}}</div>
                    <el-input v-model="scope.row.editForm.address"
                              placeholder="请输入地址"
                              v-show="scope.row.isedit"
                              size="small">
                    </el-input>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="150">
                <template scope="scope">
                    <el-button @click="editFn(scope.row,scope.$index)"
                               v-show="!scope.row.isedit"
                               type="text"
                               size="small">编辑
                    </el-button>
                    <el-button @click="submitClick(scope.row)"
                               v-show="scope.row.isedit"
                               type="text"
                               size="small">提交
                    </el-button>
                    <el-button class="cancelColor"
                               @click="cancelClick(scope.row,scope.$index)"
                               v-show="scope.row.isedit"
                               type="text"
                               size="small">取消
                    </el-button>        
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
        let editForm = {
            date: '',
            name: '',
            address: '',
            isedit:true,
        }
        return {
     		tableData:[{
                id:1,
                date: '2016-05-02',
                name: 'aaa',
                address: 'aaaaaa',
                isedit:false,
                editForm:editForm
            }, {
                id:2,
                date: '2016-05-04',
                name: 'bbb',
                address: 'bbbbbb',
                isedit:false,
                editForm:editForm
            }, {
                id:3,
                date: '2016-05-01',
                name: 'ccc',
                address: 'cccccc',
                isedit:false,
                editForm:editForm
            }, {
                id:4,
                date: '2016-05-03',
                name: 'ddd',
                address: 'dddddd',
                isedit:false,
                editForm:editForm
            }]
        }
    },

    methods: {
        //编辑
    	editFn(row){
            row.isedit = true;
            row.editForm = Object.assign({}, row);
        },
        //提交
        submitClick(row){
            let para = Object.assign(row, row.editForm);
            row.isedit = false;
        },
        //取消
        cancelClick(row){
            row.isedit = false;
        },
        //复选框
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //删除
        deleteBtnFn(index){
            //删除的id
            var deleteRow = '';
            console.log(this.multipleSelection);
            //若选择了删除项
            if (this.multipleSelection != undefined && this.multipleSelection != '') {
                //获取所有勾选项的roleId,并以英文逗号隔开
                for (var i = 0; i < this.multipleSelection.length; i++) {
                    console.log(this.multipleSelection[i].id);
                    deleteRow += this.multipleSelection[i].id + ',';
                }
                deleteRow = deleteRow.substr(0, deleteRow.length - 1);
                this.$confirm(' ','确认删除？')
                .then(_ => {
                    this.tableData = this.tableData.filter(t => !this.multipleSelection.some(s => s.id === t.id))
                })
                .catch(_ => {});
                
            } else {
                this.$message({
                    message: '请选择要删除的项！',
                    type: 'warning'
                });
            }
        },
        //新增
        addBtnFn(){
            let newRow = {
                id:'',
                date: '',
                name: '',
                address: '',
                isedit:true,
                editForm:{
                    id:'',
                    date: '',
                    name: '',
                    address: '',
                    isedit:true,
                }
            }
            this.tableData.push(newRow);
        }
    }
}
</script>
