(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{1:function(e,t,n){e.exports={h2:"app_h2__1azsK",h1:"app_h1__2mUn8",button:"app_button__2-EE8",span:"app_span__3SgqX",name:"app_name__kssa4"}},11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),l=n.n(r),i=n(10),m=n(2),u=n(3),o=n(5),s=n(4),p=n(6),b=n(9),h=n(18),d=n(1),f=n.n(d),E=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:""},n.handleSubmit=function(e){e.preventDefault(),n.props.submitContact({name:n.state.name,number:n.state.number,id:Object(h.a)()}),n.setState({name:"",number:""})},n.handleChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",null,c.a.createElement("span",{className:f.a.name},"Name"),c.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:t})),c.a.createElement("div",null,c.a.createElement("span",{className:f.a.name},"Number"),c.a.createElement("input",{type:"tel",name:"number",onChange:this.handleChange,value:n})),c.a.createElement("div",null,c.a.createElement("button",{className:f.a.button,type:"submit"},"ADD"))))}}]),t}(a.Component),C=function(e){var t=e.contact,n=t.name,a=t.number,r=t.id,l=e.deleteContact;return c.a.createElement("li",null,c.a.createElement("span",{className:f.a.span},n,", "),c.a.createElement("span",{className:f.a.span},a),c.a.createElement("button",{className:f.a.button,onClick:l,type:"button",id:r},"Delete contact"))},v=function(e){var t=e.contacts,n=e.deleteContact;return c.a.createElement("ul",null,t.map((function(e){return c.a.createElement(C,{contact:e,key:e.id,deleteContact:n})})))},g=function(e){var t=e.nameFilter;return c.a.createElement("div",null,c.a.createElement("h2",null,"Find contact by name"),c.a.createElement("input",{type:"text",onChange:t}))},_=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.submitContact=function(e){n.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},n.deleteContact=function(e){var t=e.target.id;n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n.nameFilter=function(e){n.setState({filter:e.target.value})},n.getFilteredContacts=function(){return n.state.contacts.filter((function(e){return e.name.toLowerCase().includes(n.state.filter)}))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:f.a.h1},"Phonebook"),c.a.createElement(E,{submitContact:this.submitContact}),c.a.createElement("h2",{className:f.a.h2},"Contacts"),c.a.createElement(g,{nameFilter:this.nameFilter}),c.a.createElement(v,{contacts:this.getFilteredContacts(),deleteContact:this.deleteContact}))}}]),t}(a.Component);l.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.47f21c32.chunk.js.map