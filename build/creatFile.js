'use strict';

const path = require('path');
const fs = require('fs');
var html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <link rel="shortcut icon" href="http://public.13322.com/263249ab.png" type="image/x-icon"/>
  </head>
  <style lang="">

  </style>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>`
var pt = path.join(__dirname, '..')
console.log(__dirname, pt + "\\public")
fs.writeFile(pt + "\\index.html", html, function (err) {
    if (err) {
         console.log("文件已经存在")
    }
    fs.mkdir(pt + '\\src', function (err) {
        if (err) {
             console.error("文件已经存在")
        }
        fs.mkdir(pt + "\\src\\common", function (err) {
            if (err) {
                console.log("文件已经存在")
            }
            fs.mkdir(pt + "\\src\\component", function (err) {
                if (err) {
                    console.log("文件已经存在")
                }
                const app = `
                            <template>
                                <div id="app">
                                    <router-view></router-view>
                                </div>
                            </template>
                    
                            <script>
                                export default {
                                  name: 'app',
                                }
                            </script>
                    
                            <style>
                                body,html {
                                    width: 100%;
                                    height: 100%;
                                }
                                #app {
                                width: 100%;
                                height: 100%;
                                }
                            </style>
                         `
                const main = `
                            import Vue from 'vue'
                            import App from './App.vue'
                            new Vue({
                            el: '#app',
                            render: h => h(App)
                            })
                         `
                fs.writeFile(pt + "\\src\\App.vue", app, function (err) {
                    if (err) {
                        console.log("文件已经存在")
                    }
                    fs.writeFile(pt + "\\src\\main.js", main, function (err) {
                        if (err) {
                            console.log("文件已经存在")
                        }
                        fs.unlink(__dirname+"\\creatFile.js", function (err) {
                            if (err) {
                                console.log("文件已经删除")
                            }
                            console.log("ok")
                        })
                    })
                })
            })
        })
    })
})
/*fs.mkdir(pt+"\\public",function(err){
    fs.writeFile(pt+'\\public\\index.html', html,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------")
        fs.readFile(pt+'\\public\\index.html', function (err, data) {
            if (err) {
                return console.error(err);
            }
            fs.mkdir(pt+'\\src',function(err){
                if(err){
                    return console.error(err)
                }
                fs.mkdir(pt+"\\src\\common",function(err){
                    if(err){
                        return console.error(err)
                    }
                    fs.mkdir(pt+"\\src\\component",function(err){
                        if(err){
                            return console.error(err)
                        } 
                     /!***   fs.unlink("creatFile.js", function (err) {
                            if(err){
                                return console.error(err)
                            }
                            console.log("ok")
                        })   ***!/
                    })
                })
            })

        });
    });
});*/