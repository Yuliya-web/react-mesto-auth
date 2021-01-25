(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(18),i=n.n(o),r=(n(30),n(23)),l=n(2),u=n(3),d=n(8);function p(e){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",children:Object(a.jsxs)("div",{className:"header__info-container",children:[Object(a.jsx)("p",{className:"header__account",children:e.userData.email}),Object(a.jsx)(d.b,{to:"/sign-up",className:"header__link",onClick:function(){localStorage.removeItem("jwt"),e.handleLogOut()},children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(a.jsx)(u.b,{path:"/sign-up",children:Object(a.jsx)(d.b,{to:"/sign-in",className:"header__log-link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsx)(u.b,{path:"/sign-in",children:Object(a.jsx)(d.b,{to:"/sign-up",className:"header__log-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})}var j=s.a.createContext();function h(e){var t=s.a.useContext(j),n=e.card.owner._id===t._id?"element__delete-card":"element__delete-card_non-visible",c=e.card.likes.some((function(e){return e._id===t._id})),o="element__like ".concat(c&&"element__like_active");return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"element",children:[Object(a.jsx)("img",{className:"element__image",alt:e.card.name,src:e.card.link,onClick:function(){e.onCardClick(e.card)}}),Object(a.jsx)("button",{className:n,type:"button",id:"delete",onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsxs)("div",{className:"element__text-and-button",children:[Object(a.jsx)("p",{className:"element__title",children:e.card.name}),Object(a.jsxs)("div",{className:"element__like-block",children:[Object(a.jsx)("button",{className:o,type:"button",id:"like",onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("p",{className:"element__like-counter",children:e.card.likes.length})]})]})]})})}function m(e){var t=s.a.useContext(j);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("img",{className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440",src:t.avatar}),Object(a.jsx)("button",{className:"profile__edit-avatar",onClick:e.onEditAvatar,type:"button"}),Object(a.jsxs)("div",{className:"profile__person",children:[Object(a.jsxs)("div",{className:"profile__title-and-edit",children:[Object(a.jsx)("h1",{className:"profile__title",children:t.name}),Object(a.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile,type:"button"})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:t.about})]})]}),Object(a.jsx)("button",{className:"profile__add-button",onClick:e.onAddPlace,type:"button"})]}),Object(a.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(a.jsx)(h,{card:t,name:t.name,link:t.link,likes:t.likes,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})}function b(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})}function f(e){var t=e.isOpen?" popup_opened":"";return Object(a.jsx)("section",{className:"".concat(e.name,"popup")+t,children:Object(a.jsxs)("form",{className:"popup__container",name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:[Object(a.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{className:"popup__save-button",type:"submit",children:e.text})]})})}function _(e){var t=s.a.useContext(j),n=s.a.useState(""),c=Object(l.a)(n,2),o=c[0],i=c[1],r=s.a.useState(""),u=Object(l.a)(r,2),d=u[0],p=u[1];return s.a.useEffect((function(){i(t.name),p(t.about)}),[t]),Object(a.jsx)(f,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"",children:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(a.jsx)("input",{type:"text",className:"popup__name-field",id:"Name",name:"nameInput",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:o,onChange:function(e){i(e.target.value)}}),Object(a.jsx)("span",{id:"Name-error",className:"popup__name-field-error"}),Object(a.jsx)("input",{type:"text",className:"popup__name-field",id:"About",name:"jobInput",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,value:d,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("span",{id:"About-error",className:"popup__name-field-error"})]})}),text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:d})}})}function O(e){var t=s.a.useRef("");return Object(a.jsx)(f,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-",children:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(a.jsx)("input",{ref:t,type:"url",className:"popup__name-field",id:"linkAva",name:"linkAva",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(a.jsx)("span",{id:"linkAva-error",className:"popup__name-field-error"})]})}),text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}})}function x(e){var t=s.a.useState(""),n=Object(l.a)(t,2),c=n[0],o=n[1],i=s.a.useState(""),r=Object(l.a)(i,2),u=r[0],d=r[1];return Object(a.jsx)(f,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-",children:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(a.jsx)("input",{type:"text",className:"popup__name-field",id:"namePic",name:"namePic",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,value:c,onChange:function(e){o(e.target.value)}}),Object(a.jsx)("span",{id:"namePic-error",className:"popup__name-field-error"}),Object(a.jsx)("input",{type:"url",className:"popup__name-field",id:"link",name:"linkPic",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:u,onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{id:"link-error",className:"popup__name-field-error"})]})}),text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:u})}})}function g(e){var t=e.isOpen?" popup_opened":"";return Object(a.jsx)("section",{className:"".concat(e.name,"popup")+t,children:Object(a.jsxs)("div",{className:"pic-popup__container",children:[Object(a.jsx)("button",{className:"pic-popup__close-button",type:"button",onClick:e.onClose}),Object(a.jsxs)("figure",{className:"pic-popup__content-and-name",children:[Object(a.jsx)("img",{className:"pic-popup__content",alt:"\u0424\u043e\u0442\u043e \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435",src:e.card.link}),Object(a.jsx)("figcaption",{className:"pic-popup__name",children:e.card.name})]})]})})}function v(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),u=r[0],d=r[1];return Object(a.jsxs)("form",{className:"popup__container_black",name:"login",onSubmit:function(t){t.preventDefault(),e.handleLoggedIn(s,u)},noValidate:!0,children:[Object(a.jsx)("h3",{className:"popup__title_white",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(a.jsx)("input",{type:"email",className:"popup__name-field_black",id:"email",name:"email",placeholder:"Email",minLength:"6",maxLength:"30",required:!0,value:s,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("input",{type:"password",className:"popup__name-field_black",id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,value:u,onChange:function(e){return d(e.target.value)}})]}),Object(a.jsx)("button",{className:"popup__save-button_white",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}function N(e){var t=s.a.useState(""),n=Object(l.a)(t,2),c=n[0],o=n[1],i=s.a.useState(""),r=Object(l.a)(i,2),u=r[0],p=r[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:"popup__container_black",name:"register",onSubmit:function(t){t.preventDefault(),e.handleRegister(c,u)},noValidate:!0,children:[Object(a.jsx)("h3",{className:"popup__title_white",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(a.jsx)("input",{type:"email",className:"popup__name-field_black",id:"email",name:"email",placeholder:"Email",minLength:"6",maxLength:"30",required:!0,value:c,onChange:function(e){o(e.target.value)}}),Object(a.jsx)("input",{type:"password",className:"popup__name-field_black",id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,value:u,onChange:function(e){p(e.target.value)}})]}),Object(a.jsx)("button",{className:"popup__save-button_white",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)(d.b,{className:"popup__bottom-text",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438 "})]})})}var k=n(24),C=n(20);function y(e){var t=e.component,n=Object(C.a)(e,["component"]);return Object(a.jsx)(u.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(k.a)({},n)):Object(a.jsx)(u.a,{to:"/sign-up"})}})}var S=n.p+"static/media/green-icon.1b6082f8.svg",w=n.p+"static/media/union.7c6a020b.svg";function E(e){return Object(a.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("form",{className:"popup__container",name:"info",children:[Object(a.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose}),Object(a.jsx)("div",{className:"pic-popup__content",style:{backgroundImage:"url(".concat(e.loggedIn?S:w,")")}}),Object(a.jsx)("h3",{className:"popup__title",children:e.loggedIn?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})}var L=n(21),D=n(22),P=new(function(){function e(t){Object(L.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(D.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getCardsServer",value:function(){var e=this;return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"editProf",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"delMyCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/")+e._id,{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._url,"cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then((function(e){return n._getResponseData(e)})):fetch("".concat(this._url,"cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return n._getResponseData(e)}))}},{key:"editAvatar",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16/",headers:{authorization:"11833e84-e207-4192-9aba-df03c33b720c","content-type":"application/json"}}),A="https://auth.nomoreparties.co";function I(){var e=s.a.useState(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=s.a.useState(!1),i=Object(l.a)(o,2),d=i[0],h=i[1],k=s.a.useState(!1),C=Object(l.a)(k,2),S=C[0],w=C[1],L=s.a.useState(!1),D=Object(l.a)(L,2),I=D[0],T=D[1],R=s.a.useState({name:"",link:""}),q=Object(l.a)(R,2),F=q[0],U=q[1],J=s.a.useState({name:"",about:"",avatar:""}),M=Object(l.a)(J,2),B=M[0],G=M[1],V=s.a.useState([]),z=Object(l.a)(V,2),H=z[0],K=z[1],Q=s.a.useState(!1),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=s.a.useState({}),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=s.a.useState(!1),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],oe=Object(u.g)();function ie(){se(!0)}function re(){c(!1),h(!1),w(!1),T(!1),se(!1)}function le(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");(t=e,fetch("".concat(A,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(400===e.status)throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");if(401===e.status)throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d");return e.json()})).then((function(e){return e}))).then((function(e){e&&(te(e.data),Y(!0),oe.push("/"))})).catch((function(e){return console.log(e)}))}var t}return s.a.useEffect((function(){P.getUserInfo().then((function(e){G(e)})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){P.getCardsServer().then((function(e){K(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),s.a.useEffect((function(){le()})),Object(a.jsxs)(j.Provider,{value:B,children:[Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(p,{userData:ee,handleLogOut:function(){Y(!1)}}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(y,{exact:!0,path:"/",loggedIn:X,component:m,onEditProfile:function(){c(!0)},onEditAvatar:function(){h(!0)},onAddPlace:function(){w(!0)},onCardClick:function(e){T(!0),U({name:e.name,link:e.link})},cards:H,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===B._id}));P.changeLikeCardStatus(e,!t).then((function(t){var n=H.map((function(n){return n._id===e._id?t:n}));K(n)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){P.delMyCard(e).then((function(){var t=H.filter((function(t){return t._id!==e._id}));K(t)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(a.jsx)(u.b,{path:"/sign-in",children:Object(a.jsx)(v,{handleLoggedIn:function(e,t){(function(e,t){return fetch("".concat(A,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){if(400===e.status)throw new Error("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new Error("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c");return e.json()})).then((function(e){return e}))})(e,t).then((function(e){e.token&&(Y(!0),oe.push("/"),ie())})).catch((function(){ie()}))},handleInfoTooltipOpen:ie})}),Object(a.jsx)(u.b,{path:"/sign-up",children:Object(a.jsx)(N,{handleRegister:function(e,t){(function(e,t){return fetch("".concat(A,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){if(400===e.status)throw new Error("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");return e.json()})).then((function(e){return e}))})(e,t).then((function(e){e&&oe.push("/sign-in")})).catch((function(e){return console.log(e)}))}})}),Object(a.jsx)(u.b,{path:"/",children:X?Object(a.jsx)(u.a,{to:"/cards"}):Object(a.jsx)(u.a,{to:"/sign-in"})})]}),Object(a.jsx)(b,{})]}),Object(a.jsx)(_,{isOpen:n,onClose:re,onUpdateUser:function(e){var t=e.name,n=e.about;P.editProf({name:t,about:n}).then((function(e){G(e),re()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(O,{isOpen:d,onClose:re,onUpdateAvatar:function(e){var t=e.avatar;P.editAvatar({avatar:t}).then((function(e){G(e),re()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(x,{isOpen:S,onClose:re,onAddPlace:function(e){var t=e.name,n=e.link;P.addNewCard({name:t,link:n}).then((function(e){K([e].concat(Object(r.a)(H))),re()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(a.jsx)(f,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-",text:"\u0414\u0430"}),Object(a.jsx)(g,{name:"pic-",isOpen:I,onClose:re,card:F}),Object(a.jsx)(E,{loggedIn:X,isOpen:ce,onClose:re})]})}var T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(I,{})})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.390f18f0.chunk.js.map