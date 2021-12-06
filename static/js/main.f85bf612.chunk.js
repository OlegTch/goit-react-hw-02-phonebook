(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={container:"Phonebook_container__3-qoB",form:"Phonebook_form__2OQko",label:"Phonebook_label__3gkHP",input:"Phonebook_input__3BS0N",button:"Phonebook_button__1bZxq"}},20:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);n(15);var a=n(2),c=n.n(a),r=n(12),s=n.n(r),o=(n(20),n(14)),i=n(5),u=n(6),l=n(8),b=n(7),m=n(11),d=n.n(m),h=n(1),j=n.n(h),p=n(13),f=n(3),_=n(0),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(f.a)(),t.numberInputId=Object(f.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onFormSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(_.jsx)("label",{htmlFor:this.nameInputId,className:j.a.label,children:"Name"}),Object(_.jsx)("input",{className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange,id:this.nameInputId,value:this.state.name}),Object(_.jsx)("label",{htmlFor:this.numberInputId,className:j.a.label,children:"Number"}),Object(_.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange,id:this.numberInputId,value:this.state.number}),Object(_.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=O,C=n(9),v=n.n(C),g=function(t){var e=t.filterValue,n=t.onChangeFilter,a=Object(f.a)();return Object(_.jsxs)("div",{className:v.a.FilterThumb,children:[Object(_.jsx)("label",{htmlFor:a,className:v.a.label,children:"Find contacts by name"}),Object(_.jsx)("input",{className:v.a.input,type:"text",name:"filter",required:!0,onChange:n,id:a,value:e})]})},N=n(4),F=n.n(N),I=function(t,e){var n=t.id,a=t.name,c=t.number;return Object(_.jsxs)("li",{className:F.a.contactsItem,id:n,children:[Object(_.jsxs)("p",{className:F.a.contactsName,children:[a,":"]}),Object(_.jsx)("p",{className:F.a.contactsNumber,children:c}),Object(_.jsx)("button",{className:F.a.contactsButton,type:"button",children:"Delete"})]})},y=function(t){var e=t.contacts;return console.log(e),Object(_.jsx)("ul",{className:F.a.contactsList,children:e.map((function(t){return Object(_.jsx)(I,{name:t.name,number:t.number},t.id)}))})},S=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(f.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getFilteredContacts();return Object(_.jsxs)("div",{className:j.a.container,children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(x,{onFormSubmit:this.addContact}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(g,{filterValue:this.state.filter,onChangeFilter:this.changeFilter}),Object(_.jsx)(y,{contacts:t})]})}}]),n}(c.a.Component);x.propTypes={contacts:d.a.array,filter:d.a.string};var k=S;s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(k,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__3s47a",contactsItem:"ContactList_contactsItem__3E-1F",contactsName:"ContactList_contactsName__bMTuS",contactsNumber:"ContactList_contactsNumber__2USIJ",contactsButton:"ContactList_contactsButton__2gxi3"}},9:function(t,e,n){t.exports={FilterThumb:"Filter_FilterThumb__1Ctc_",label:"Filter_label__2aOok",input:"Filter_input__3SIEZ"}}},[[24,1,2]]]);
//# sourceMappingURL=main.f85bf612.chunk.js.map