# managementVue
a personal summary of vue and element ui

## Setup
- npm install
- npm run dev
- open:http://127.0.0.1:8010/

- npm run build

## Summary

### 配置
- Element ui官方文档：http://element.eleme.io/#/zh-CN/component/installation
- github上有已配置好的项目，请参考：https://github.com/ElementUI/element-starter
- 具体的情况项目中（个人总结）都有写

### 请求接口
```
this.$http.post('url',{
    'aaa':1,
    'bbb':2
},{emulateJSON:true}).then(response => {
	var body = response.body.code;
    if(body == '000000'){
        //codes here
    } else{
        this.$message({
            message: response.body.message,
            type: 'error'
        });
    }
}, response => {
    console.log("请求失败");
});

```

### 说明
- 表格中的编辑确定按钮，并未书写相关逻辑
- 纯属于本人的个人总结，逻辑并没有非常完善