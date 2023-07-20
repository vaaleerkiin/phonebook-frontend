"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[271],{9271:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t,i,a,s,o,l=r(4165),c=r(5861),u=r(9439),d=r(2791),p=r(9286),f=r(9910),m=r(7309),x=r(995),h=r(9071),g=r(168),j=r(7872),Z=j.Z.div(t||(t=(0,g.Z)(["\n  border: solid #000000 1px;\n  width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 16px;\n  border-radius: 8px;\n  overflow: hidden;\n  label {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  h2 {\n    font-size: 32px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  ul {\n    list-style: none;\n    padding: 0;\n    padding-left: 32px;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n\n    li {\n      width: 100%;\n      hr {\n        margin: 0;\n      }\n    }\n  }\n  p {\n    padding: 0;\n\n    margin: 0;\n\n    font-size: 20px;\n    font-weight: 500;\n  }\n"]))),y=j.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  span {\n    font-size: 20px;\n    font-weight: 500;\n  }\n"]))),w=j.Z.div(a||(a=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 16px;\n  @media screen and (max-width: 500px) {\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: column-reverse;\n  }\n  input::placeholder {\n    color: black;\n  }\n"]))),b=j.Z.div(s||(s=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  margin: 0;\n  gap: 10px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  justify-content: center;\n  span {\n    text-align: center;\n  }\n"]))),v=j.Z.div(o||(o=(0,g.Z)(["\n  width: 100%;\n  padding-top: 16px;\n  font-size: 32px;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 16px;\n  align-items: center;\n"]))),k=r(3458),P=r(9085),C=r(8431),E=r(184),F=function(){var e=f.Z.useForm(),n=(0,u.Z)(e,1)[0],r=(0,d.useState)(!1),t=(0,u.Z)(r,2),i=t[0],a=t[1],s=(0,k.F3)(),o=(0,u.Z)(s,2),g=o[0],j=o[1],Z=j.isSuccess,w=j.isError,b=(0,k.wY)().data,v=function(){a((function(e){return!e}))};return(0,d.useEffect)((function(){w&&P.Am.error("Fail")}),[w]),(0,d.useEffect)((function(){Z&&P.Am.success("Success")}),[Z]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(y,{children:[(0,E.jsx)("span",{children:"Add contact"}),(0,E.jsx)(m.ZP,{type:"primary",style:{backgroundColor:"#4BB543"},icon:(0,E.jsx)(p.Z,{}),size:"large",onClick:v})]}),(0,E.jsx)(x.Z,{title:(0,E.jsx)("h3",{style:{textAlign:"center"},children:"Add contact"}),open:i,onOk:v,onCancel:v,footer:null,children:(0,E.jsxs)(f.Z,{form:n,name:"create",labelCol:{span:4},style:{maxWidth:600},initialValues:{name:"",phone:"",email:""},onFinish:function(e){v(),n.resetFields(),b&&b.some((function(n){return e.name.toLowerCase().includes(n.name.toLowerCase())}))?P.Am.error("".concat(e.name," is already in contacts")):g(e)},children:[(0,E.jsx)(f.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:""},{validator:function(){var e=(0,c.Z)((0,l.Z)().mark((function e(n,r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.abrupt("return",Promise.reject(new Error("Please input your Name!")));case 4:if(!(r.trim().length<6||r.trim().length>10)){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Please input your Name! (Min is 6 & Max is 10)")));case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}],children:(0,E.jsx)(h.Z,{})}),(0,E.jsx)(f.Z.Item,{label:"Email",name:"email",children:(0,E.jsx)(h.Z,{})}),(0,E.jsx)(f.Z.Item,{label:"Phone",name:"phone",rules:[{required:!0,message:""},{validator:function(){var e=(0,c.Z)((0,l.Z)().mark((function e(n,r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!r.includes("_")){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("Please input your phone!")));case 2:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}],children:(0,E.jsx)(C.CX,{mask:"+00(000)-000-00-00"})}),(0,E.jsx)(f.Z.Item,{wrapperCol:{offset:10,span:16},children:(0,E.jsx)(m.ZP,{type:"primary",htmlType:"submit",children:"Submit"})})]})})]})},A=r(5048),_=r(7169),z=r.n(_),S=function(e){var n=e.open,r=e.toogleModal,t=e.id,i=e.name,a=e.phone,s=(e.data,e.email),o=f.Z.useForm(),p=(0,u.Z)(o,1)[0],g=(0,k.Xd)(),j=(0,u.Z)(g,2),Z=j[0],y=j[1],w=y.isError,b=y.isSuccess;return(0,d.useEffect)((function(){w&&P.Am.error("Fail")}),[w]),(0,d.useEffect)((function(){b&&P.Am.success("Success")}),[b]),(0,E.jsx)(x.Z,{title:(0,E.jsx)("h3",{style:{textAlign:"center"},children:"Edit contact"}),open:n,onOk:r,onCancel:r,footer:null,children:(0,E.jsxs)(f.Z,{form:p,name:"edit ".concat(t),labelCol:{span:4},style:{maxWidth:600},initialValues:{name:"".concat(i),phone:"".concat(a),email:"".concat(s)},onFinish:function(e){r(),Z({id:t,values:e})},onFinishFailed:function(){return p.resetFields},children:[(0,E.jsx)(f.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:""},{validator:function(){var e=(0,c.Z)((0,l.Z)().mark((function e(n,r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.abrupt("return",Promise.reject(new Error("Please input your Name!")));case 4:if(!(r.trim().length<6||r.trim().length>10)){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Please input your Name! (Min is 6 & Max is 10)")));case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}],children:(0,E.jsx)(h.Z,{})}),(0,E.jsx)(f.Z.Item,{label:"Email",name:"email",children:(0,E.jsx)(h.Z,{})}),(0,E.jsx)(f.Z.Item,{label:"Phone",name:"phone",rules:[{required:!0,message:""},{validator:function(){var e=(0,c.Z)((0,l.Z)().mark((function e(n,r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&!r.includes("_")){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("Please input your phone!")));case 2:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}],children:(0,E.jsx)(C.CX,{mask:"+00(000)-000-00-00"})}),(0,E.jsx)(f.Z.Item,{wrapperCol:{offset:10,span:16},children:(0,E.jsx)(m.ZP,{type:"primary",htmlType:"submit",children:"Submit"})})]})})},I=r(292),L=r(9214),M=function(e){var n=e.name,r=e.phone,t=e.email,i=e.id,a=e.data,s=(0,d.useState)(!1),o=(0,u.Z)(s,2),l=o[0],c=o[1],p=(0,k.zr)(),f=(0,u.Z)(p,2),x=f[0],h=f[1],g=h.isLoading,j=h.isSuccess,Z=h.isError,y=function(){c((function(e){return!e}))};return(0,d.useEffect)((function(){Z&&P.Am.error("Fail")}),[Z]),(0,d.useEffect)((function(){j&&P.Am.success("Success")}),[j]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("li",{children:[(0,E.jsx)("hr",{}),(0,E.jsxs)(v,{children:[(0,E.jsxs)(b,{children:[(0,E.jsxs)("span",{children:[n,":"]}),(0,E.jsx)("span",{children:r})]}),(0,E.jsx)(m.ZP,{loading:g,disabled:g,size:"large",onClick:y,children:"Edit"}),(0,E.jsx)(m.ZP,{loading:g,disabled:g,type:"primary",size:"large",onClick:function(){x(i)},children:"Delete"}),(0,E.jsx)(m.ZP,{type:"primary",style:{backgroundColor:"#4BB543"},icon:(0,E.jsx)(I.Z,{}),size:"large",href:"tel:".concat(r)}),t&&(0,E.jsx)(m.ZP,{type:"primary",icon:(0,E.jsx)(L.Z,{}),size:"large",href:"mailto:".concat(t)})]})]}),(0,E.jsx)(S,{open:l,toogleModal:y,id:i,name:n,phone:r,data:a,email:t})]})},N=function(){var e=(0,A.v9)((function(e){return e.filter})),n=(0,k.wY)(),r=n.data,t=n.isLoading,i=n.error;return(0,E.jsxs)(E.Fragment,{children:[t&&(0,E.jsx)(z(),{cssOverride:{marginLeft:"auto",marginRight:"auto"}}),(0,E.jsx)("ul",{style:{width:"100%",padding:0},children:!t&&(null!==r&&void 0!==r&&r.length?(r?r.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):[]).map((function(e){var n=e.name,t=e.phone,i=e._id,a=e.email;return(0,E.jsx)(M,{id:i,name:n,phone:t,data:r,email:a},i)})):(0,E.jsxs)("li",{children:[(0,E.jsx)("hr",{}),(0,E.jsx)("h3",{style:{textAlign:"center"},children:"Nothing here"})]}))}),void(i&&"error"in i&&(console.log(i),P.Am.error(i.error)))]})},q=r(9643),B=function(){var e=(0,A.v9)((function(e){return e.filter})),n=(0,A.I0)();return(0,E.jsx)(h.Z,{type:"text",name:"filter",placeholder:"Find contacts by name",value:e,style:{maxWidth:200},onChange:function(e){return n((0,q.M)({value:e.target.value}))}})},O=function(){return(0,E.jsxs)(Z,{children:[(0,E.jsx)("h2",{children:"Phonebook"}),(0,E.jsxs)(w,{children:[(0,E.jsx)(B,{})," ",(0,E.jsx)(F,{})]}),(0,E.jsx)(N,{})]})}}}]);
//# sourceMappingURL=271.544d6fda.chunk.js.map