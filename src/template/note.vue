<template>
  	<div id="note" class="rightContainer note">
  		<div class="title">个人总结（个人环境：windows）</div>
        <div>
            <div class="mainTitle">一 、配置</div>
            <div>Element ui官方文档：<a href="http://element.eleme.io/#/zh-CN/component/installation" >http://element.eleme.io/#/zh-CN/component/installation</a></div>
            <div>想使用element ui，可以根据官方文档安装和快速上手进行配置，其中，值得注意的是：Win7及以上系统，输入.babelrc会弹出必须键入文件名的提示，所以在命名文件时须输入.babelrc.才能得到.babelrc。</div>
            <div><span>如果在你的项目上有些element ui 自带效果出不来，请检查element ui和vue的版本，</span>高版本element ui不兼容低版本vue；同样，低版本element ui不兼容高版本vue。做项目时，曾有个tabel的全选，在整个项目中不能生效，检查代码，没有错误，最后发现是版本问题。很是坑。</div>
            <div>github上有已配置好的项目，请参考：<a href="https://github.com/ElementUI/element-starter">https://github.com/ElementUI/element-starter</a></div>
        </div>

        <div>
            <div class="mainTitle">二、路由功能</div>
            <div>写一个项目，一般都需要进行页面跳转，特别是登录界面，一般都是需要存在的。使用vue-router 可以实现路由功能。</div>
            <div>具体可参考：<a href="http://blog.csdn.net/sinat_17775997/article/details/54710420">http://blog.csdn.net/sinat_17775997/article/details/54710420</a></div>
            <div>基本流程为：</div>
            <div>
                <div class="code">1、npm install vue-router</div>
                <div>2、创建routes.js:</div>
                    <div>
                        <div class="code">import Vue from 'vue'</div>
                        <div class="code">import ElementUI from 'element-ui'</div>
                        <div class="code">import 'element-ui/lib/theme-default/index.css'</div>
                        <div class="code">import Login from './home/Login.vue'</div>
                        <div class="code">import Index from './home/homepage.vue'</div>
                        <div class="code">let routes = [</div>
                        <div class="code">{</div>
                        <div class="code">    path: '/login',</div>
                        <div class="code">        component: Login,</div>
                        <div class="code">        name: 'login'</div>
                        <div class="code">    },</div>
                        <div class="code">   {</div>
                        <div class="code">        path: '*',</div>
                        <div class="code">        component: Login,</div>
                        <div class="code">        name: '404'</div>
                        <div class="code">    }</div>
                        <div class="code">];</div>
                        <div class="code">export default routes;</div>
                    </div>
            </div>
            <div>
                <div>3、创建 router 实例，然后传 routes 配置（main.js）：</div>
                <div>
                <div class="code">import VueRouter from 'vue-router'</div>
                <div class="code">import routes from './routes'</div>
                <div class="code">Vue.use(VueRouter)</div>
                <div class="code">const router = new VueRouter({mode: 'history',routes: routes})</div>
                </div>
            </div>
            <div>
                <div>4、</div>
                <div class="code">new Vue({</div>
                <div class="code">    el:'#App',</div>
                <div class="code">    router:router,</div>
                <div class="code">    render: h => h(App)</div>
                <div class="code">    })</div>
            </div>
            <div>
                <div>5、路由匹配到的组件将会渲染到App.vue里的&lt;router-view&gt;&lt;/router-view&gt;（app.vue）详细了解还请看之前的链接。</div>
                <div>
                    <div class="code">&lt;template&gt;</div>
                    <div class="code">&lt;div id="app" class="app"&gt;</div>
                    <div class="code">    &lt;router-view>&lt;/router-view&gt;</div>
                    <div class="code">&lt;/div&gt;</div>
                    <div class="code">&lt;/template&gt;</div>
                </div>
            </div>
            <div>6、路由设置好之后，可以通过：this.$router.push({ path: '/xxx}); 来进行跳转，其中，若需要传递参数，则：this.$router.push({ path: '/xxx,query: { num:  1} });</div>
        </div>

        <div>
            <div class="mainTitle">三、组件编写注意事项</div>
            <div>写项目时发现，样式很容易共用，具体原因并没有去了解，建议样式统一写在一起，不然时间久了，找起来很麻烦。</div>
            <div>若要在项目中引入less。除了npm install less --save-dev，还要加上npm install less-loader --save-dev，否则会报错。然后就可以编写less：&lt;style lang="less"&gt;&lt;/style&gt;。</div>
        </div>

        <div>
            <div class="mainTitle">四、组件嵌套及通信</div>
            <div>
                <div>1、组件嵌套</div>
                <div>首先在父组件中引入组件，如：import Topbar from './topbar.vue'</div>
                <div>其次，注册组件：components: {
                    ‘Topbar’: Topbar
                },</div>
                <div>最后，在html代码块中写入组件：&lt;Topbar&gt;&lt;/Topbar&gt;</div>
            </div>
            <div>
                <div>2、组件通信</div>
                <div>1）获取路由参数：this.$route.query.xxx可以获取到路由跳转之后地址栏的xxx参数。</div>
                <div>2）父组件向子组件传递数据：父组件中绑定数据：&lt;Note :navId="navId"&gt;&lt;/Note&gt;，子组件中使用props接收数据，如props:['navId'],，这样，子组件就能接收到父组件传递的数据。</div>
                <div>3）子组件向父组件发射数据：在子组件中定义一个方法，upNavIdFn(){this.$emit('upNavId',this.navId);}。在父组件中监听子组件触发的事件（@upNavId="getNavId"）并调用getNavId方法getNavId(val){console.log(val);}。这样父组件就能接收到子组件发射的数据。<span>但是，如果使用v-if来渲染组件的话，父组件能执行方法，但是获取不到子组件的数据，具体解决方法不明。</span> </div>
            </div>
        </div>
  	</div>
</template>


<script>
export default {
	props:['navId'],
	created() {
        
    },
    data () {
        return {
     		
        }
    },

    methods: {
    	
    }
}
</script>

<style lang="less">
    .note{
        color:#333;
        .title{
            text-align:center;
        }
        .mainTitle{
            color:#20a0ff;
        }
        div{
            padding-top:10px;
            span{
                border-bottom:1px solid #000;
            }
        }
        .code{
            background:#f1f1f1;
            border-left:6px solid #20a0ff;
            width:80%;
            padding:0;
            padding-left:10px;
            height:30px;
            line-height:30px;
        }
    }
</style>