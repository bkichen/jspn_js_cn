// JavaScript Document

/*
开始日：<input id="start" class="laydate-icon">
结束日：<input id="end" class="laydate-icon">
*/

var strStartTime = {
    elem: '#strStartTime',
    format: 'YYYY-MM-DD',
    min: '2000-01-01', //设定最小日期为当前日期
    max: '2100-01-01', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         strEndTime.min = datas; //开始日选好后，重置结束日的最小日期
         strEndTime.strStartTime = datas //将结束日的初始值设定为开始日
    }
};
var strEndTime = {
    elem: '#strEndTime',
    format: 'YYYY-MM-DD',
    min: '2000-01-01',
    max: '2100-01-01',
    istime: true,
    istoday: false,
    choose: function(datas){
        strStartTime.max = datas; //结束日选好后，重置开始日的最大日期
    }
};
laydate(strStartTime);
laydate(strEndTime);






