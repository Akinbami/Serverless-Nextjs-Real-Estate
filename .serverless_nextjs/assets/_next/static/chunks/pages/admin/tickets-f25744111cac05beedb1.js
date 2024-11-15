(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7713],{43674:function(e,t,n){"use strict";var r=n(85893),o=n(80018),s=n(96156),a=n(67294),c=(n(41664),n(25675),n(90044)),i=(n(9008),n(11163));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=[{name:"Number",selector:"number",sortable:!0},{name:"Type",selector:"type",sortable:!0,editable:!0},{name:"Specialty",selector:"specialty",sortable:!0,editable:!0,cell:function(e){return(0,r.jsx)("p",{children:e.specialty?"YES":"NO"})}},{name:"Taken",selector:"taken",sortable:!0,editable:!0,cell:function(e){return(0,r.jsx)("p",{children:e.taken?"YES":"NO"})}},{name:"Floor",selector:"floor",sortable:!0},{name:"CreatedAt",selector:"createdAt",sortable:!0}],p=function(e){var t=e.row,n=e.index,o=e.column,s=e.col,c=e.onChange,i=(0,a.useState)(t[o.selector]),l=i[0],u=i[1];return null!==o&&void 0!==o&&o.editing?(0,r.jsx)("input",{type:o.type||"text",name:o.selector,style:{width:"100%"},onChange:function(e){u(e.target.value),null===c||void 0===c||c(e)},value:l}):s.cell?s.cell(t,n,o):t[o.selector]};t.Z=function(e){var t=(0,a.useState)(!0),n=(t[0],t[1],(0,a.useState)(null)),l=n[0],f=n[1],h=(0,a.useState)(!1),m=(h[0],h[1]),b=(0,i.useRouter)(),j=(0,a.useState)(e.rooms),g=j[0],x=j[1],y=(0,a.useState)(""),v=y[0],w=y[1],O=(0,a.useRef)({}).current,k=function(e){return e._id===v},S=e.token,C=function(e){var t=e.target.name,n=e.target.value;O=u(u({},O),{},(0,s.Z)({},t,n))},N=function(){w("")},P=d.map((function(e){return e.editable?u(u({},e),{},{cell:function(t,n,o){var s=k(t);return(0,r.jsx)(p,{row:t,index:n,column:u(u({},o),{},{editing:s}),col:e,onChange:C})}}):e})),_=(0,a.useCallback)((function(){return[].concat((0,o.Z)(P),[{name:"Actions",allowOverflow:!0,minWidth:"200px",cell:function(e){return k(e)?(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",onClick:function(){return function(e){var t=u(u({},e),O),n=(0,o.Z)(g),r=n.findIndex((function(e){return v===e._id}));if(r>-1){var s=n[r];n.splice(r,1,u(u({},s),t)),w(""),x(n),console.log("this is the temporary payload: ",t),fetch("https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev"+"/rooms/".concat(t._id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer "+S},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),m(!1),e.error?(m(!1),f(e.message)):(m(!1),b.reload(window.location.pathname))})).catch((function(e){m(!1),f(e.message)}))}}(e)},style:{backgroundColor:"lightgreen"},children:"save"}),(0,r.jsx)("button",{type:"button",onClick:N,style:{backgroundColor:"orangered"},children:"cancel"})]}):(0,r.jsx)("button",{type:"button",onClick:function(){w(e._id)},className:"btn btn-primary btn-room-edit",children:"Edit"})}}])}),[P]);return(0,r.jsxs)(a.Fragment,{children:[l?(0,r.jsx)("p",{className:"text-danger",children:l}):"",(0,r.jsx)(c.ZP,{title:"All Rooms",columns:_(),data:g,selectableRows:!0,Clicked:!0,highlightOnHover:!0,striped:!0,onSelectedRowsChange:function(e){console.log("Selected Rows: ",e.selectedRows)},pagination:!0})]})}},25661:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return v},default:function(){return w}});var r=n(85893),o=n(65988),s=n(9008),a=(n(41664),n(25675),n(87428)),c=n(11163),i=n(67294),l=n(35723),u=n(8126),d=n(21727),p=(n(43674),n(85789)),f=n(80018),h=n(96156),m=n(90044);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=[{name:"Title",selector:"title",sortable:!0,editable:!0},{name:"Description",selector:"description",sortable:!0,editable:!0},{name:"Category",selector:"category",sortable:!0,editable:!0},{name:"Status",selector:"resolved",sortable:!0,editable:!0,cell:function(e){return(0,r.jsx)("p",{className:"mb-0",children:e.resolved?(0,r.jsx)("p",{className:"support-ticket-completed",children:"Completed"}):(0,r.jsx)("p",{className:"support-ticket-in-progress",children:"In progress"})})}},{name:"CreatedAt",selector:"createdAt",sortable:!0}],x=function(e){var t=e.row,n=e.index,o=e.column,s=e.col,a=e.onChange,c=(0,i.useState)(t[o.selector]),l=c[0],u=c[1];return null!==o&&void 0!==o&&o.editing?(0,r.jsx)("input",{type:o.type||"text",name:o.selector,style:{width:"100%"},onChange:function(e){u(e.target.value),null===a||void 0===a||a(e)},value:l}):s.cell?s.cell(t,n,o):t[o.selector]},y=function(e){var t=(0,i.useState)(!0),n=(t[0],t[1],(0,i.useState)(null)),o=n[0],s=n[1],a=(0,i.useState)(!1),l=(a[0],a[1]),u=(0,c.useRouter)(),d=(0,i.useState)(e.tickets),p=d[0],b=d[1],y=(0,i.useState)(""),v=y[0],w=y[1],O=(0,i.useRef)({}).current,k=function(e){return e._id===v},S=e.token,C=function(e){var t=e.target.name,n=e.target.value;O=j(j({},O),{},(0,h.Z)({},t,n))},N=function(){w("")},P=g.map((function(e){return e.editable?j(j({},e),{},{cell:function(t,n,o){var s=k(t);return(0,r.jsx)(x,{row:t,index:n,column:j(j({},o),{},{editing:s}),col:e,onChange:C})}}):e})),_=(0,i.useCallback)((function(){return[].concat((0,f.Z)(P),[{name:"Actions",allowOverflow:!0,minWidth:"200px",cell:function(e){return k(e)?(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",onClick:function(){return function(e){var t=j(j({},e),O),n=(0,f.Z)(p),r=n.findIndex((function(e){return v===e._id}));if(r>-1){var o=n[r];n.splice(r,1,j(j({},o),t)),w(""),b(n),console.log("this is the temporary payload: ",t),fetch("https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev"+"/tickets/".concat(t._id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer "+S},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),l(!1),e.error?(l(!1),s(e.message)):(l(!1),u.reload(window.location.pathname))})).catch((function(e){l(!1),s(e.message)}))}}(e)},style:{backgroundColor:"lightgreen"},children:"save"}),(0,r.jsx)("button",{type:"button",onClick:N,style:{backgroundColor:"orangered"},children:"cancel"})]}):(0,r.jsx)("button",{type:"button",onClick:function(){w(e._id)},className:"btn btn-primary btn-room-edit",children:"Edit"})}}])}),[P]);return(0,r.jsxs)(i.Fragment,{children:[o?(0,r.jsx)("p",{className:"text-danger",children:o}):"",(0,r.jsx)(m.ZP,{title:"All Rooms",columns:_(),data:p,selectableRows:!0,Clicked:!0,highlightOnHover:!0,striped:!0,onSelectedRowsChange:function(e){console.log("Selected Rows: ",e.selectedRows)},pagination:!0})]})};u.Z.addLocale(d);new u.Z("en-US");var v=!0,w=function(e){var t=(0,i.useState)(!1),n=(t[0],t[1],(0,i.useState)(null)),u=(n[0],n[1],(0,i.useState)(null)),d=(u[0],u[1],(0,i.useState)(!1)),f=(d[0],d[1],(0,c.useRouter)(),e.token),h=(0,l.ZP)("https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev/admins/tickets",(function(e){return fetch(e,{method:"GET",headers:{authorization:"Bearer "+f}}).then((function(e){return e.json()}))})),m=h.data,b=h.error;return console.log("this is the ticket data",m?m.data.docs:"empty"),b?(0,r.jsx)("p",{className:"support-done-header",children:"Failed to load tickets"}):(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("link",{href:"/css/sidebar.css",rel:"stylesheet",className:"jsx-4262498705"})}),(0,r.jsxs)("div",{className:"jsx-4262498705 row",children:[(0,r.jsx)("div",{className:"jsx-4262498705 col-md-2",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("div",{className:"jsx-4262498705 col-md-10",children:(0,r.jsxs)("div",{className:"jsx-4262498705 admin-dashboard-content",children:[(0,r.jsx)("p",{className:"jsx-4262498705 recent-transaction-header",children:"All Tickets"}),m&&m.data?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(y,{tickets:m.data.docs,token:f})}):(0,r.jsx)("div",{className:"jsx-4262498705 d-flex justify-content-center",children:(0,r.jsx)("div",{role:"status",className:"jsx-4262498705 spinner-border",children:(0,r.jsx)("span",{className:"jsx-4262498705 visually-hidden",children:"Loading..."})})})]})})]}),(0,r.jsx)(o.default,{id:"4262498705",children:[".modal-header.jsx-4262498705{background:#EEEEEE;border-radius:5px 5px 0px 0px;}",".modal-title.jsx-4262498705{font-family:Objektiv Mk2;font-style:normal;font-weight:bold;font-size:1rem;line-height:30px;color:#585858;}"]})]})}},55183:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/tickets",function(){return n(25661)}])}},function(e){e.O(0,[1283,8180,5723,2499,4488,44,4480,9774,2888,179],(function(){return t=55183,e(e.s=t);var t}));var t=e.O();_N_E=t}]);