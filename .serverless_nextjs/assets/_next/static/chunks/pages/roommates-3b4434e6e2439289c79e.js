(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7880],{31967:function(e,s,a){"use strict";var t=a(85893),n=a(65988),r=a(67294);a(41664);s.Z=function(e){e.roomate;return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-1433680387 roommate-card",children:(0,t.jsxs)("a",{className:"jsx-1433680387 ticket-link",children:[(0,t.jsxs)("div",{className:"jsx-1433680387 d-flex align-items-center mb-3",children:[(0,t.jsx)("div",{className:"jsx-1433680387 flex-shrink-0",children:(0,t.jsx)("img",{src:"/img/roommate-pic.png",width:"100%",alt:"",className:"jsx-1433680387"})}),(0,t.jsx)("div",{className:"jsx-1433680387 flex-grow-1 ms-3 pt-4",children:(0,t.jsxs)("div",{className:"jsx-1433680387 d-flex justify-content-between",children:[(0,t.jsxs)("p",{className:"jsx-1433680387 support-ticket-card-text mb-0",children:["You",(0,t.jsx)("p",{className:"jsx-1433680387 text-muted",children:"SS/56/0644"})]}),(0,t.jsx)("p",{className:"jsx-1433680387 support-ticket-card-text mb-0",children:(0,t.jsx)("img",{src:"/img/CaretRight.png",width:"100%",alt:"",className:"jsx-1433680387"})})]})})]}),(0,t.jsx)("hr",{className:"jsx-1433680387 my-0"})]})}),(0,t.jsx)(n.default,{id:"1433680387",children:[".ticket-link{-webkit-text-decoration:none;text-decoration:none;}"]})]})}},71843:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSP:function(){return o}});var t=a(85893),n=(a(9008),a(25675),a(41664),a(11163),a(67294)),r=(a(75284),a(87428)),i=a(8035),c=(a(68668),a(46947),a(8032),a(35723)),l=(a(17534),a(31967));var o=!0;s.default=function(e){var s=(0,n.useState)(!1),a=(s[0],s[1],(0,n.useState)(!1)),o=(a[0],a[1],(0,c.ZP)("https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev/roommates",(function(s){return fetch(s,{method:"GET",headers:{authorization:"Bearer "+e.token}}).then((function(e){return e.json()}))}))),m=o.data;o.error,console.log("this is the data: ",m);var d=e.user.user;return(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(i.Z,{user:d,token:e.token}),(0,t.jsx)("div",{className:"profile-banner",children:(0,t.jsx)("div",{className:"profile-banner-content mx-auto",children:(0,t.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,t.jsxs)("div",{className:"profile-banner-text",children:[(0,t.jsxs)("p",{className:"profile-welcome-text",children:["Hi ",(0,t.jsx)("span",{className:"profile-welcome-name",children:d.profile.firstname})]}),(0,t.jsx)("p",{className:"profile-welcome-text-bold",children:"Welcome Home"}),(0,t.jsxs)("p",{className:"profile-breadcrum",children:[(0,t.jsx)("img",{src:"/img/Users2.png",width:"7%",alt:"pod home logo"}),(0,t.jsx)("span",{className:"px-2",children:"Roommate"})]})]}),(0,t.jsx)("div",{className:"profile-landing-bg",children:(0,t.jsx)("img",{src:"/img/profile-landing-banner.png",width:"100%",alt:"the pod"})})]})})}),(0,t.jsx)("div",{className:"dashboard-items mb-5",children:(0,t.jsx)("div",{className:"room-checklist-card mx-auto py-3 mt-5",children:(0,t.jsxs)("div",{className:"room-checklist-card-inner",children:[(0,t.jsx)("div",{className:"d-flex justify-content-between",children:(0,t.jsxs)("p",{className:"room-checklist-header mb-0",children:[(0,t.jsx)("img",{src:"/img/roommate.png",alt:""}),(0,t.jsx)("span",{className:"px-2",children:"Roommate"})]})}),(0,t.jsx)("hr",{className:"mt-1 mb-4"}),m?m.data?m.data.docs.map((function(e,s){return(0,t.jsx)(l.Z,{roommate:roommate})})):(0,t.jsxs)("div",{className:"container text-center",children:[(0,t.jsx)("p",{className:"support-done-logo",children:(0,t.jsx)("img",{src:"/img/noticket.png",alt:"done"})}),(0,t.jsx)("p",{className:"support-done-header",children:"No Roommate found"}),(0,t.jsxs)("p",{className:"support-done-text",children:["Looks like no roommate have",(0,t.jsx)("br",{}),"been assigned to you yet"]})]}):(0,t.jsx)("div",{className:"text-center my-4",children:(0,t.jsx)("div",{className:"spinner-border",role:"status",children:(0,t.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})]})})})]})}},93269:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/roommates",function(){return a(71843)}])}},function(e){e.O(0,[5445,1283,8180,5723,2645,3985,4568,9774,2888,179],(function(){return s=93269,e(e.s=s);var s}));var s=e.O();_N_E=s}]);