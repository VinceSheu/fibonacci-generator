(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),c=(a(14),a(3)),i=a(4),u=a(6),s=a(5),m=a(7),b=(a(15),function(e){if(1===e)return[0];if(2===e)return[0,1];for(var t=[0,1],a=t[0],n=t[1],r=0;r<e-2;r++){var l=a+n;t.push(l),a=n,n=l}return t});a(16);var d=function(e){var t=e.fibonacciArray;return r.a.createElement("table",{className:"fib-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"left-column"},"n"),r.a.createElement("th",null,"F(n)"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{className:"left-column"},t),r.a.createElement("td",null,e))})))},f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",fibonacciArray:[],error:null,loading:!1},a.handleSubmit=function(){a.setState({fibonacciArray:[],loading:!0});var e=b(Number(a.state.value));a.setState({fibonacciArray:e,loading:!1})},a.onChange=function(e){var t=e.target.value,n=null;t<=0&&(n="Please enter a non-negative, non-zero number"),t>1476&&(n="The result would surpass the largest number represented in javascript"),a.setState({value:t,error:n})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.fibonacciArray,n=e.loading,l=e.error,o=t||0===t?t:"";return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Fibonacci Generator"),r.a.createElement("p",null,"Please enter the number of fibonacci numbers you would like to generate (up to 1476)"),r.a.createElement("input",{className:"input-field",type:"number",value:o,onChange:this.onChange}),r.a.createElement("button",{className:"submit-btn",onClick:this.handleSubmit,disabled:n||l}," Submit "),r.a.createElement("div",{className:"error-msg"},l),n&&r.a.createElement("div",{className:"loader"}),a.length>0&&r.a.createElement(d,{fibonacciArray:a}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.8fe68398.chunk.js.map