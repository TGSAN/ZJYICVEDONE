// ==UserScript==
// @name         智慧职教省流量刷课脚本
// @namespace    http://www.cloudmoe.com/
// @version      0.1
// @description  不需要加载完课程页面即可完成学习
// @author       TGSAN
// @match        http://zjy.icve.com.cn/study/view/studying/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
function getQueryString(name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = window.location.search.substr(1).match(reg); 
if (r != null) return unescape(r[2]); return null; 
}
$.ajax({type:"POST",url:"/Study/cell/updateVideo",data:{courseId:getQueryString("courseId"),cellId:getQueryString("cellId"),learnTime:999999999999}});
// Your code here