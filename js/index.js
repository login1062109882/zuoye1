/*
* @Author: Marte
* @Date:   2017-12-26 17:01:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-26 20:09:24
*/

'use strict';

//获取标签
        function Tab(obj){
            this.obj = obj;
            this.btn = document.getElementById('btn');
            this.fn();
        }
        // 实例化面向对象
        Tab.prototype = {
            constructor:Tab,
            // 调用该函数
            fn:function(){
              this.click();
            },
            // 点击弹出框
            click:function(){
                var that = this;
                btn.onclick = function fn () {
                 that.alertBox();
               }
            },
            // 创建弹出框
            alertBox:function(){
                 var box = document.createElement("div");
                    box.className = "box";
                    document.body.appendChild(box);
                var info = document.createElement("div");
                info.className = "info";
                document.body.appendChild(info);
                info.innerHTML = `<h2>${this.obj.title}</h2><span class = 'spa1'>${this.obj.buttons[0]}</span><span class= "spa2">${this.obj.buttons[1]}</span>`;

                 var close = document.getElementsByClassName('spa2')[0];
                 close.onclick = function fn () {
                 info.style.display = 'none';
                 box.style.display = 'none';
                 }
            }
        }
        // 传参
        new Tab({
            title:"请您登录",
            buttons:["继续","关闭"]
        });