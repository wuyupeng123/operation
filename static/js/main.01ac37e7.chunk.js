(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){e.exports=a(302)},148:function(e,t,a){},151:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(7),r=a.n(s),l=(a(148),a(128)),u=a(129),m=a(140),c=a(130),h=a(141),o=a(39),d=a(308),v=a(127),p=a(306),f=a(65),y=a(305),T=a(307),E=a(304),k=(a(151),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).time=0,a.minSize=1,a.JCB={name:"",submitTime:"",runTime:"",startTime:"",alreadyRunTime:"",finishTime:"",turnoverTime:"",rightTurnoverTime:"",ram:"",tapeDrive:"",num:""},a.RCB={num:"",size:"",adress:"",status:""},a.ram=100,a.tapeDrive=15,a.timerFunc=a.timerFunc.bind(Object(o.a)(Object(o.a)(a))),a.main=a.main.bind(Object(o.a)(Object(o.a)(a))),a.inputArr=[],a.reserveArr=[],a.readyArr=[],a.runningArr=[],a.finishArr=[],a.ramArr=[],a.state={tapeDrive:15,time:0,visible:!1,inputArr:[],reserveArr:[],readyArr:[],runningArr:[],finishArr:[],ramArr:[],averTurnoverTime:"",averRightTurnoverTime:""},a.timer=0,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"timerFunc",value:function(){this.timer&&window.clearInterval(this.timer),this.timer=setInterval(this.main,1e3)}},{key:"main",value:function(){0===parseInt(this.time)&&this.initRamPartition(),this.addJobToReserveArr(),this.addJobToReadyArr(),this.addJobToRunningArr(),this.cpuRunning(),this.finishArr.length&&this.updateTurnover(),this.time++,this.setState({time:this.time})}},{key:"setMadalVisible",value:function(){this.setState({visible:!0})}},{key:"handleCancel",value:function(){this.setState({visible:!1})}},{key:"addJob",value:function(){var e=this.refs.name.input.value,t=this.refs.submitTime.input.value,a=this.refs.runTime.input.value,n=this.refs.ram.input.value,i=this.refs.tapeDrive.rcSelect.state.value[0],s=this.copy(this.JCB);e&&t&&a&&n&&i?(s.name=e,s.submitTime=t,s.runTime=a,s.ram=n,s.tapeDrive=i,this.inputArr.push(s),this.setState({inputArr:this.inputArr}),d.a.success("\u6dfb\u52a0\u6210\u529f")):d.a.error("\u8868\u5355\u672a\u586b\u5199\u5b8c\uff0c\u8bf7\u586b\u5199\uff01\uff01")}},{key:"addJobToReserveArr",value:function(){var e=this.inputArr;if(!e.length)return d.a.error("\u8bf7\u6dfb\u52a0\u4f5c\u4e1a\u518d\u8fd0\u884c\uff01\uff01"),this.time=0,window.clearInterval(this.timer),!1;for(var t=0;t<e.length;t++)this.time===parseInt(e[t].submitTime)&&this.reserveArr.push(this.copy(e[t]));return this.setState({reserveArr:this.reserveArr}),!0}},{key:"addJobToReadyArr",value:function(){var e=this.reserveArr,t=this.readyArr;if(e.length){for(;e.length&&this.allotRam(e[0].ram)&&e[0].tapeDrive<=this.tapeDrive;)this.tapeDrive-=e[0].tapeDrive,e[0].alreadyRunTime=0,console.log(),t.push(e[0]),e.shift();this.setState({reserveArr:this.reserveArr,readyArr:this.readyArr,tapeDrive:this.tapeDrive})}}},{key:"allotRam",value:function(e){var t=this.ramArr,a=0;for(a=0;a<t.length;a++)if(!t[a].status&&t[a].size>=e){if(this.reserveArr[0].num=a+1,t[a].size-e<this.minSize)t[a].status=1;else{var n=this.copy(this.RCB),i=t[a].size;console.log(i),t[a].status=1,t[a].size=e,n.num=parseInt(t[a].num)+1,n.size=parseInt(i)-parseInt(e),n.adress=parseInt(t[a].adress)+parseInt(e),n.status=0,console.log(n),t.splice(a+1,0,n),this.ramNunPlusOne(a+2)}return this.setState({ramArr:this.ramArr}),!0}return!1}},{key:"ramNunPlusOne",value:function(e){for(var t=this.ramArr,a=e;a<t.length;a++)if(t[a].status||(t[a].num+=1),t[a].status){var n=t[a].num;t[a].num+=1,this.updateReadyArr(t[a].num,n)}return!0}},{key:"updateReadyArr",value:function(e,t){for(var a=this.readyArr,n=0;n<a.length;n++)parseInt(a[n].num)===parseInt(t)&&(a[n].num=e);this.runningArr.length&&parseInt(this.runningArr[0].num)===parseInt(t)&&(this.runningArr[0].num=e)}},{key:"ramNunLessOne",value:function(e){for(var t=this.ramArr,a=e;a<t.length;a++)if(t[a].status||(t[a].num-=1),t[a].status){var n=t[a].num;t[a].num-=1,this.updateReadyArr(t[a].num,n)}return!0}},{key:"initRamPartition",value:function(){if(!this.ram)return d.a.error("\u8bf7\u9009\u62e9\u7cfb\u7edf\u7684\u5185\u5b58\uff01\uff01\uff01"),!1;var e=this.copy(this.RCB);e.num=1,e.size=this.ram,e.adress=0,e.status=0,this.ramArr.push(e),this.setState({ramArr:this.ramArr})}},{key:"addJobToRunningArr",value:function(){var e=this.readyArr,t=this.runningArr;if(e.length){if(e.sort(function(e,t){return e.runTime-t.runTime}),t.length){if(e[0].runTime<t[0].runTime){var a=e.shift();t.push(a),e.push(t.shift())}}else t.push(e.shift());this.setState({readyArr:this.readyArr,runningArr:this.runningArr})}}},{key:"cpuRunning",value:function(){var e=this.runningArr;e.length&&(e[0].alreadyRunTime+=1,e[0].alreadyRunTime>=e[0].runTime&&(this.recycleRam(),e[0].finishTime=this.time+1,e[0].turnoverTime=parseInt(e[0].finishTime)-parseInt(e[0].submitTime),e[0].rightTurnoverTime=parseInt(e[0].turnoverTime)/e[0].runTime,this.finishArr.push(e.shift()))),this.setState({finishArr:this.finishArr,runningArr:this.runningArr})}},{key:"recycleRam",value:function(){for(var e=this.runningArr,t=this.ramArr,a=e[0].num,n=0;n<t.length;n++)if(parseInt(t[n].num)===parseInt(a)){if(t[n].status=0,0===n){if(t[n+1]&&0===parseInt(t[n+1].status)){var i=t.splice(n+1,1);t[n].size=parseInt(t[n].size)+parseInt(i[0].size),this.ramNunLessOne(n+1)}console.log(t),t[n].status=0}else if(n===t.length-1&&n-1>=0)if(t[n-1].status)t[n].status=0,console.log(t);else{var s=t.pop();console.log(s),t[n-1].size=parseInt(t[n-1].size)+parseInt(s[0].size),t[n-1].status=0,console.log(t)}else if(t[n-1].status&&!t[n+1].status){var r=t.splice(n+1,1);console.log(r),t[n].size=parseInt(t[n].size)+parseInt(r[0].size),t[n].status=0,this.ramNunLessOne(n+1)}else if(!t[n-1].status&&t[n+1].status){var l=t.splice(n,1);console.log(l),t[n-1].size=parseInt(t[n-1].size)+parseInt(l[0].size),t[n-1].status=0,this.ramNunLessOne(n)}else if(t[n-1].status||t[n+1].status)t[n].status=0;else{var u=t.splice(n,2);console.log(u),t[n-1].size=parseInt(t[n-1].size)+parseInt(u[0].size),t[n-1].size=parseInt(t[n-1].size)+parseInt(u[1].size),t[n-1].status=0,this.ramNunLessOne(n),this.ramNunLessOne(n)}break}}},{key:"updateTurnover",value:function(){for(var e,t,a=this.finishArr,n=a.length,i=0,s=0,r=0;r<n;r++)i+=a[r].turnoverTime,s+=a[r].rightTurnoverTime;e=(parseFloat(i)/n).toFixed(2),t=(parseFloat(s)/n).toFixed(2),this.setState({averTurnoverTime:e,averRightTurnoverTime:t})}},{key:"restart",value:function(){this.timer&&window.clearInterval(this.timer),this.time=0,this.inputArr=[],this.reserveArr=[],this.readyArr=[],this.runningArr=[],this.finishArr=[],this.ramArr=[],this.tapeDrive=15,this.setState({tapeDrive:this.tapeDrive,time:this.time,inputArr:this.inputArr,reserveArr:this.reserveArr,readyArr:this.readyArr,runningArr:this.runningArr,finishArr:this.finishArr,ramArr:this.ramArr})}},{key:"footer",value:function(){return i.a.createElement("div",null,i.a.createElement("span",null,"\u5e73\u5747\u5468\u8f6c\u65f6\u95f4\uff1a",this.state.averTurnoverTime," "),i.a.createElement("span",null,"\u5e73\u5747\u5e26\u6743\u5468\u8f6c\u65f6\u95f4\uff1a",this.state.averRightTurnoverTime))}},{key:"copy",value:function(e){var t,a={};for(t in e)a[t]=e[t];return a}},{key:"copyArr",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(this.copy(e[a]));return t}},{key:"render",value:function(){var e=this,t=v.a.Option,a=p.a.Panel,n=[{title:"\u4f5c\u4e1a",dataIndex:"name",key:"name"},{title:"\u5230\u8fbe\u65f6\u95f4",dataIndex:"submitTime",key:"submitTime"},{title:"\u4f30\u8ba1\u8fd0\u884c\u65f6\u95f4",dataIndex:"runTime",key:"runTime"},{title:"\u5185\u5b58",dataIndex:"ram",key:"ram"},{title:"\u78c1\u5e26\u673a",dataIndex:"tapeDrive",key:"tapeDrive"}];return i.a.createElement("div",{className:"mainpanel"},i.a.createElement("div",{className:"leftPanel"},i.a.createElement("div",{className:"leftPanel-header"},i.a.createElement("div",null,i.a.createElement("span",null,"\u65f6\u95f4\uff1a",this.state.time)),i.a.createElement("div",null,i.a.createElement("span",null,"\u78c1\u5e26\u673a\uff1a",this.state.tapeDrive)),i.a.createElement("div",null,i.a.createElement("span",null,"\u4f5c\u4e1a\u8c03\u5ea6\uff1a \u5148\u6765\u5148\u670d\u52a1")),i.a.createElement("div",null,i.a.createElement("span",null,"\u8fdb\u7a0b\u8c03\u5ea6\uff1a \u53ef\u62a2\u5360\u7684\u6700\u77ed\u4f5c\u4e1a\u4f18\u5148\u7b97\u6cd5")),i.a.createElement("div",{className:"leftPanel-header-lastItem"},i.a.createElement("span",null,"\u52a8\u6001\u5206\u533a\uff1a \u9996\u6b21\u9002\u5e94\u7b97\u6cd5")),i.a.createElement("div",{className:"leftPanel-header-btn"},i.a.createElement(f.a,{size:"small",type:"primary",onClick:function(){return e.restart()}},"\u91cd\u542f"),i.a.createElement(f.a,{size:"small",type:"primary",onClick:function(){return e.setMadalVisible()}},"\u6dfb\u52a0\u4f5c\u4e1a"),i.a.createElement(f.a,{size:"small",type:"primary",onClick:function(){return e.timerFunc()}},"\u8fd0\u884c"))),i.a.createElement("div",{className:"leftPanel-input"},i.a.createElement(y.a,{title:"\u6dfb\u52a0\u4f5c\u4e1a",visible:this.state.visible,onOk:function(){return e.addJob()},onCancel:function(){return e.handleCancel()},maskClosable:!0,centered:!0,width:300},i.a.createElement("div",{className:"modal-item"},i.a.createElement("span",null,"\u4f5c\u4e1a\u540d\uff1a"),i.a.createElement("div",{className:"modal-item-input"},i.a.createElement(T.a,{ref:"name",placeholder:"\u4f5c\u4e1a\u540d",size:"small"}))),i.a.createElement("div",{className:"modal-item"},i.a.createElement("span",null,"\u5230\u8fbe\u65f6\u95f4\uff1a"),i.a.createElement("div",{className:"modal-item-input"},i.a.createElement(T.a,{ref:"submitTime",placeholder:"\u5230\u8fbe\u65f6\u95f4",size:"small"}))),i.a.createElement("div",{className:"modal-item"},i.a.createElement("span",null,"\u4f30\u8ba1\u8fd0\u884c\u65f6\u95f4\uff1a"),i.a.createElement("div",{className:"modal-item-input"},i.a.createElement(T.a,{ref:"runTime",placeholder:"\u4f30\u8ba1\u8fd0\u884c\u65f6\u95f4",size:"small"}))),i.a.createElement("div",{className:"modal-item"},i.a.createElement("span",null,"\u6240\u9700\u5185\u5b58\uff1a"),i.a.createElement("div",{className:"modal-item-input"},i.a.createElement(T.a,{ref:"ram",placeholder:"\u6240\u9700\u5185\u5b58",size:"small"}))),i.a.createElement("div",{className:"modal-item"},i.a.createElement("span",null,"\u78c1\u5e26\u673a\uff1a"),i.a.createElement("div",{className:"modal-item-input "},i.a.createElement(v.a,{ref:"tapeDrive",defaultValue:"1",style:{width:50}},i.a.createElement(t,{value:"1"},"1"),i.a.createElement(t,{value:"2"},"2"),i.a.createElement(t,{value:"3"},"3"),i.a.createElement(t,{value:"4"},"4"),i.a.createElement(t,{value:"5"},"5"),i.a.createElement(t,{value:"6"},"6"),i.a.createElement(t,{value:"7"},"7")))))),i.a.createElement("div",{className:"leftPanel-table"},i.a.createElement("div",null,"\u9884\u8f93\u5165"),i.a.createElement(E.a,{size:"small",dataSource:this.state.inputArr,columns:n}))),i.a.createElement("div",{className:"rightPanel"},i.a.createElement(p.a,{defaultActiveKey:["1"]},i.a.createElement(a,{header:"\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b",key:"1"},i.a.createElement("div",{className:"rightPanel-teble"},i.a.createElement(E.a,{size:"small",dataSource:this.state.runningArr,columns:[{title:"\u4f5c\u4e1a",dataIndex:"name",key:"name"},{title:"\u5230\u8fbe\u65f6\u95f4",dataIndex:"submitTime",key:"submitTime"},{title:"\u4f30\u8ba1\u8fd0\u884c\u65f6\u95f4",dataIndex:"runTime",key:"runTime"},{title:"\u5185\u5b58",dataIndex:"ram",key:"ram"},{title:"\u78c1\u5e26\u673a",dataIndex:"tapeDrive",key:"tapeDrive"}]}))),i.a.createElement(a,{header:"\u5185\u5b58\u5c31\u7eea\u961f\u5217",key:"2"},i.a.createElement("div",{className:"rightPanel-teble"},i.a.createElement(E.a,{size:"small",dataSource:this.state.readyArr,columns:[{title:"\u4f5c\u4e1a",dataIndex:"name",key:"name"},{title:"\u5230\u8fbe\u65f6\u95f4",dataIndex:"submitTime",key:"submitTime"},{title:"\u4f30\u8ba1\u8fd0\u884c\u65f6\u95f4",dataIndex:"runTime",key:"runTime"},{title:"\u5185\u5b58",dataIndex:"ram",key:"ram"},{title:"\u78c1\u5e26\u673a",dataIndex:"tapeDrive",key:"tapeDrive"},{title:"\u6240\u5728\u5185\u5b58",dataIndex:"num",key:"num"}]}))),i.a.createElement(a,{header:"\u5916\u5b58\u5c31\u7eea\u961f\u5217",key:"3"},i.a.createElement("div",{className:"rightPanel-teble"},i.a.createElement(E.a,{size:"small",dataSource:this.state.reserveArr,columns:n}))),i.a.createElement(a,{header:"\u5df2\u5b8c\u6210\u5217\u8868",key:"4"},i.a.createElement(E.a,{footer:function(){return e.footer()},size:"small",dataSource:this.state.finishArr,columns:[{title:"\u4f5c\u4e1a",dataIndex:"name",key:"name"},{title:"\u5230\u8fbe\u65f6\u95f4",dataIndex:"submitTime",key:"submitTime"},{title:"\u4f30\u8ba1\u8fd0\u884c\u65f6\u95f4",dataIndex:"runTime",key:"runTime"},{title:"\u5185\u5b58",dataIndex:"ram",key:"ram"},{title:"\u78c1\u5e26\u673a",dataIndex:"tapeDrive",key:"tapeDrive"},{title:"\u5b8c\u6210\u65f6\u95f4",dataIndex:"finishTime",key:"finishTime"},{title:"\u5468\u8f6c\u65f6\u95f4",dataIndex:"turnoverTime",key:"turnoverTime"},{title:"\u5e26\u6743\u5468\u8f6c\u65f6\u95f4",dataIndex:"rightTurnoverTime",key:"rightTurnoverTime"}]})),i.a.createElement(a,{header:"\u5185\u5b58\u5206\u533a\u8868",key:"5"},i.a.createElement(E.a,{size:"small",dataSource:this.state.ramArr,columns:[{title:"\u5206\u533a\u53f7",dataIndex:"num",key:"num"},{title:"\u5206\u533a\u5927\u5c0f",dataIndex:"size",key:"size"},{title:"\u5206\u533a\u59cb\u5740",dataIndex:"adress",key:"adress"},{title:"\u72b6\u6001",dataIndex:"status",key:"status"}]})))),i.a.createElement("div",null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[143,2,1]]]);
//# sourceMappingURL=main.01ac37e7.chunk.js.map