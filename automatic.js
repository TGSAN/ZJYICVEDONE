//此脚本不需要油猴，可直接在浏览器控制台运行
//请在课程列表使用，并在期间期间观察Networkwork是否完全相应
//由于本脚本未设置完成检测，并且课程量巨大，运行后需要等待数分钟完成（等待panding全部完成）
function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}
function fuckit(cid){
	//sleep(250);
	$.ajax({type:"POST",url:"/Study/cell/updateVideo",data:{courseId:getQueryString("courseId"),cellId:cid,learnTime:999999999999}});
	$.getJSON("/Study/cell/view?courseId="+getQueryString("courseId")+"&cellId="+cid);
}
var jsono;
$.getJSON("/Study/directory/list?courseId="+getQueryString("courseId"), function(json){
  jsono = json;
});
for (var ia=0;ia<jsono["list"].length;ia++)
{
	console.log("执行"+jsono["list"][ia]['title']);
	fuckit(jsono["list"][ia]['id']);
	for (var ib=0;ib<jsono["list"][ia]['children'].length;ib++)
	{
		console.log("执行"+jsono["list"][ia]['children'][ib]['title']);
		fuckit(jsono["list"][ia]['children'][ib]['id']);
		for (var ic=0;ic<jsono["list"][ia]['children'][ib]['children'].length;ic++)
		{
			console.log("执行"+jsono["list"][ia]['children'][ib]['children'][ic]['title']);
			fuckit(jsono["list"][ia]['children'][ib]['children'][ic]['id']);
		}
	}
}
