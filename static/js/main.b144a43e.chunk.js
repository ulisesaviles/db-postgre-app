(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(15),i=n.n(s),r=n(35),o=n.n(r),l=n(46),d=n(10),p=(n(37),n(36)),u=n.n(p),j=(n(57),n(47)),b=n.n(j),h=n(4),m=function(e){var t=e.data,n=null!=t&&t.length>=1?Object.keys(t[0]):null;return n?Object(h.jsxs)("div",{className:"table",children:[Object(h.jsx)("div",{className:"tableRow",children:n.map((function(e){return Object(h.jsx)("div",{className:"cell cellHeader",children:Object(h.jsx)("p",{className:"cellText cellTextHeader",children:e})})}))}),t.map((function(e){return Object(h.jsx)("div",{className:"tableRow",children:n.map((function(n){return Object(h.jsx)("div",{className:"cell cell".concat(t.indexOf(e)%2),children:Object(h.jsx)("p",{className:"cellText",children:e[n]})})}))})}))]}):null},O=[{description:"Factura del servicio de estad\xeda en Hotel.",inputType:["id"]},{description:"Reporte de habitaciones disponibles clasificado por tipo de habitaci\xf3n.",inputType:[null]},{description:"Reporte de habitaciones ocupadas y n\xfamero de hu\xe9spedes por fecha determinada.",inputType:["twoDates"]},{description:"Reporte de ocupaci\xf3n del hotel clasificado por temporada en un rango de fechas dado.",inputType:["twoDates"]},{description:"Reporte del tipo de habitaci\xf3n con su descripci\xf3n y n\xfameros de habitaciones disponible del  hotel.",inputType:[null,"id"]},{description:"Reporte de los registros con mayor tiempo de ocupaci\xf3n por un rango de fechas determinado.",inputType:["twoDates"]},{description:"Reporte de los empleados totales que laboran en el hotel, clasificado por departamentos.",inputType:[null]},{description:"Reporte de los empleados de mostrador con mayor bono obtenido por el registro de los  hu\xe9spedes en base a una fecha determinada.",inputType:[null]},{description:"Reporte de las ventas realizadas (Registro de habitaci\xf3n, servicios adquiridos) en un  determinado rango de fechas.",inputType:["twoDates"]},{description:"Reporte de ganancias obtenidas por servicios adquiridos clasificados por tipo de servicio y en  base a un rango de fechas dado.",inputType:["twoDates"]},{description:"Reporte de quejas registradas en base a un rango de fechas dado y clasificado por el  departamento al que fue aplicada la queja.",inputType:[null]},{description:"Reporte de n\xfamero de hu\xe9spedes registrados y clasificados por el medio de registro (Internet,  Tel\xe9fono, Presencial) y muestre las ganancias obtenidas en base a rango de fechas dado.",inputType:["twoDates"]},{description:"Reporte del departamento con mejor rating de satisfacci\xf3n, en base a un rango de fechas dado.",inputType:[null]}],f=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(d.a)(s,2),r=i[0],p=i[1],j=Object(a.useState)(0),f=Object(d.a)(j,2),x=f[0],v=f[1],y=Object(a.useState)(new Date),g=Object(d.a)(y,2),N=g[0],T=g[1],w=Object(a.useState)(new Date),C=Object(d.a)(w,2),R=C[0],D=C[1],q=Object(a.useState)(null),I=Object(d.a)(q,2),S=I[0],k=I[1],H=Object(a.useState)(!1),z=Object(d.a)(H,2),E=z[0],F=z[1],J=Object(a.useState)(!1),M=Object(d.a)(J,2),B=M[0],P=M[1],Y={inputNames:{twoDates:"Fechas",null:"Sin entrada",id:"ID"}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())},G=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!1),t="","twoDates"===O[n].inputType[r]?t+="/".concat(A(N),"/").concat(A(R)):"id"===O[n].inputType[r]&&(t+="/".concat(x)),P(!0),console.log("http://localhost:3000/query".concat(n+1).concat(t)),e.prev=5,e.next=8,b.a.get("http://localhost:3000/query".concat(n+1).concat(t));case 8:a=e.sent,e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(5),P(!1),F(!0),e.abrupt("return");case 16:if(P(!1),200===a.status){e.next=20;break}return F(!0),e.abrupt("return");case 20:k(a.data);case 21:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)("img",{src:"https://raw.githubusercontent.com/ulisesaviles/db-postgre-app/main/app/public/logo1000.png",className:"logo",alt:"logo"}),Object(h.jsx)("h3",{children:"Consultas"}),Object(h.jsx)("div",{className:"nav-queries-container",children:O.map((function(e){var t=O.indexOf(e);return Object(h.jsxs)("div",{className:"nav-query-Container ".concat(n===t?"nav-query-Container-selected":""),onClick:function(){return e=t,p(0),c(e),P(!1),F(!1),void k(null);var e},children:["Consulta ",t+1]})}))})]}),Object(h.jsxs)("div",{className:"content-container",children:[Object(h.jsxs)("div",{className:"description-container",children:[Object(h.jsxs)("h1",{style:{fontSize:45},children:["Consulta ",n+1]}),Object(h.jsx)("h3",{children:"Descripci\xf3n"}),O[n].description]}),Object(h.jsxs)("div",{className:"content-subContainer border-bottom",children:[Object(h.jsx)("h1",{children:"Input"}),Object(h.jsx)("div",{className:"ipnutsContainer",children:O[n].inputType.map((function(e){var t=O[n].inputType.indexOf(e);return Object(h.jsx)("div",{className:r===t?"inputName":"margin",onClick:function(){return p(t)},children:Y.inputNames[e]})}))}),null===O[n].inputType[r]?Object(h.jsx)("p",{className:"noInput",children:"(Esta consulta no requiere input)"}):"twoDates"===O[n].inputType[r]?Object(h.jsxs)("div",{className:"datesContainer",children:[Object(h.jsx)(u.a,{selected:N,onChange:function(e){return T(e)}}),Object(h.jsx)(u.a,{selected:R,onChange:function(e){return D(e)}})]}):Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(h.jsx)("input",{onChange:function(e){return function(t){if(""!==t)try{if(isNaN(t))return;if((t=parseInt(t))<0)return;v(t)}catch(e){}else v(0)}(e.target.value)},value:x}),Object(h.jsx)("p",{className:"noInput",style:{fontSize:14},children:"(Recuerda ingresar enteros positivos)"})]}),Object(h.jsx)("div",{className:"nav-query-Container-selected btn",onClick:G,children:"Hacer consulta"})]}),Object(h.jsxs)("div",{className:"content-subContainer",children:[Object(h.jsx)("h1",{children:"Output"}),B?Object(h.jsx)("p",{className:"noInput",style:{margin:20},children:"Cargando..."}):E?Object(h.jsx)("p",{className:"noInput",style:{margin:20},children:"Error. Revisa tu conexi\xf3n."}):null!=S?Object(h.jsx)(m,{data:S}):Object(h.jsx)("p",{className:"noInput",style:{margin:20},children:'(Ingresa la informaci\xf3n solicitada y preciona "Hacer consulta")'})]})]})]})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))},37:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.b144a43e.chunk.js.map