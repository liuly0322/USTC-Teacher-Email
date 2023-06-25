# USTC-Teacher-Email

## Note!!!

本仓库不再维护，推荐查看 [USTC-Teacher-Email](https://github.com/txtxj/USTC-Teacher-Email) 项目，内含 greasyfork 脚本。

## 说明

一个能在浏览器端查询教师邮箱的脚本

接口来源 txtxj 的 [USTC-Teacher-Email](https://github.com/txtxj/USTC-Teacher-Email) 项目

## 使用

首先在浏览器端登录教务系统，进入主页，并打开浏览器控制台

![](src/start.png)

控制台中 copy 脚本 (index.js)，把使用示例中改成自己想查询的老师，控制台回车即可

![](src/run.png)

控制台会提示具体运行状态，最后结果会以弹出窗口形式显现

## 原理

浏览器端利用本人的账号 token 信息发送请求，无需考虑登录验证

~~实际上如果浏览器端的 js 真的能考虑登录验证那就成 CSRF 攻击了，挺哈人的~~
