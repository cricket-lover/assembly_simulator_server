(this.webpackJsonpassembly_simulator=this.webpackJsonpassembly_simulator||[]).push([[0],{15:function(e,t,a){e.exports=a(59)},20:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),r=a.n(c),u=(a(20),a(14)),m=a.n(u),o=a(6),s=function(e){var t=e.setValue;return l.a.createElement("div",null,l.a.createElement("textarea",{type:"text",className:"text-area",onChange:function(e){return t(e.target.value)}}))},i=function(e){var t=e.output;return l.a.createElement("div",{className:"output"},t.map((function(e,t){return l.a.createElement("div",{key:t},e)})))},E=function(e){return e.map((function(e,t){return function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.CL),l.a.createElement("td",null,e.NL),l.a.createElement("td",{className:"instruction"},e.INST),l.a.createElement("td",null,e.A),l.a.createElement("td",null,e.B),l.a.createElement("td",null,e.C),l.a.createElement("td",null,e.D),l.a.createElement("td",null,e.EQ),l.a.createElement("td",null,e.NE),l.a.createElement("td",null,e.GT),l.a.createElement("td",null,e.LT),l.a.createElement("td",{className:"instruction"},e.PRN))}(e,t)}))},d=function(e){var t=e.steps;return l.a.createElement("div",{className:"result-table"},l.a.createElement("table",{className:"registerTable"},l.a.createElement("thead",{className:"heading"},l.a.createElement("tr",null,l.a.createElement("th",null,"CL"),l.a.createElement("th",null,"NL"),l.a.createElement("th",null,"INST"),l.a.createElement("th",null,"A"),l.a.createElement("th",null,"B"),l.a.createElement("th",null,"C"),l.a.createElement("th",null,"D"),l.a.createElement("th",null,"EQ"),l.a.createElement("th",null,"NE"),l.a.createElement("th",null,"GT"),l.a.createElement("th",null,"LT"),l.a.createElement("th",null,"PRN"))),l.a.createElement("tbody",null,E(t))))},h=function(e,t){return l.a.createElement("div",{className:"stack-table"},l.a.createElement("table",{className:"registerTable"},l.a.createElement("thead",{className:"heading"},l.a.createElement("tr",null,l.a.createElement("th",null,"STACK")))))},b=function(e){var t=e.machine,a=Object(n.useState)(""),c=Object(o.a)(a,2),r=c[0],u=c[1],m=Object(n.useState)([]),E=Object(o.a)(m,2),b=E[0],p=E[1],N=Object(n.useState)([]),v=Object(o.a)(N,2),f=v[0],g=v[1],S=Object(n.useState)(!1),T=Object(o.a)(S,2),O=(T[0],T[1],Object(n.useState)(!0)),j=Object(o.a)(O,2),k=(j[0],j[1],function(){console.log("called updateApp"),p(t.getPrn().slice()),g(t.getTable().slice())});return l.a.createElement("div",{className:"main-container"},l.a.createElement("p",null,"ASSEMBLY SIMULATOR"),l.a.createElement("div",{className:"input-output"},l.a.createElement("div",{className:"input-box"},l.a.createElement(s,{setValue:u}),l.a.createElement("div",{className:"button-div"},l.a.createElement("button",{onClick:function(e){t.load(r),t.executeStepWise(k),console.log("Entered handleStepInto",t.getTable())}},"Step Into"),l.a.createElement("button",{onClick:function(e){t.load(r),t.execute(),k()}},"Run"),l.a.createElement("button",{onClick:function(){t.nextStep()}},"Next"))),l.a.createElement(i,{output:b})),l.a.createElement("div",{className:"input-output"},l.a.createElement(d,{steps:f}),l.a.createElement(h,null)))};a(58);var p=function(){return l.a.createElement(b,{machine:new m.a})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.06a7c453.chunk.js.map