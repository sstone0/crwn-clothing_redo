(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),a=n(48),i=n.n(a),s=n(35),l=n(18),o=n(59),u=n(34),b=n(47),d=n(60),p=n.n(d),m=n(61),h=n.n(m),j=n(14),O="SET_CURRENT_USER",g={currentUser:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return t.type===O?Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload}):e},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},x=n(26),y=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(x.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},w=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},k={hidden:!0,cartItems:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case v.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:y(e.cartItems,t.payload)});case v.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:w(e.cartItems,t.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},E={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"},I={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type===U.UPDATE_COLLECTIONS?Object(j.a)(Object(j.a)({},e),{},{collections:t.payload}):e},S={key:"root",storage:h.a,whitelist:["cart"]},A=Object(u.b)({user:f,cart:N,directory:C,shop:T}),P=Object(b.a)(S,A),M=[p.a];var _,B,D,R,L,G=Object(u.c)(P,u.a.apply(void 0,M)),W=Object(b.b)(G),H=(b.b,n(76),n(0)),z=n.n(H),V=n(1),q=n(2),F=n(3),J=n(10),Q=n(11),X=n(19),K=n(16),Y=function(){return{type:v.TOGGLE_CART_HIDDEN}},Z=function(e){return{type:v.ADD_ITEM,payload:e}},$=(n(78),n(7)),ee=Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:v.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Z(t))},removeItem:function(t){return e(function(e){return{type:v.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,c=e.removeItem,a=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object($.jsxs)("div",{className:"checkout-item",children:[Object($.jsx)("div",{className:"image-container",children:Object($.jsx)("img",{src:i,alt:"item"})}),Object($.jsx)("span",{className:"name",children:a}),Object($.jsxs)("span",{className:"quantity",children:[Object($.jsx)("span",{className:"arrow",onClick:function(){return c(t)},children:"\u276e"}),Object($.jsx)("span",{className:"value",children:l}),Object($.jsx)("span",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object($.jsx)("span",{className:"price",children:s}),Object($.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})})),te=n(62),ne=n.n(te),re=function(e){var t=e.price,n=100*t;return Object($.jsx)(ne.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,description:"Your total is ".concat(t),amount:n,panel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51GtGXSGW7kEkFvpaVySBkZXx7UHOonP4KDtK2fuUF6DIBWU7baBoeWH3LfnxNRXHQSsnVMULz8WsP3b4ji8ePzwE00Q5ADvxxQ"})},ce=function(e){return e.cart},ae=Object(K.a)([ce],(function(e){return e.cartItems})),ie=Object(K.a)([ce],(function(e){return e.hidden})),se=Object(K.a)([ae],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),le=Object(K.a)([ae],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),oe=(n(80),Object(K.b)({cartItems:ae,total:le})),ue=Object(l.b)(oe)((function(e){var t=e.cartItems,n=e.total;return Object($.jsxs)("div",{className:"checkout-page",children:[Object($.jsxs)("div",{className:"checkout-header",children:[Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Product"})}),Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Description"})}),Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Quantity"})}),Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Price"})}),Object($.jsx)("div",{className:"header-block",children:Object($.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object($.jsx)(ee,{cartItem:e})})),Object($.jsx)("div",{className:"total",children:Object($.jsxs)("span",{children:["TOTAL: ",n]})}),Object($.jsxs)("div",{className:"test-warning",children:["*please use the following test credit card for ",Object($.jsx)("payments",{}),Object($.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object($.jsx)(re,{price:n})]})})),be=(n(81),n(37)),de=Object(K.a)([function(e){return e.directory}],(function(e){return e.sections})),pe=(n(82),Object(X.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl,i=e.match;return Object($.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object($.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object($.jsxs)("div",{className:"content",children:[Object($.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object($.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),me=(n(84),["id"]),he=Object(K.b)({sections:de}),je=Object(l.b)(he)((function(e){var t=e.sections;return Object($.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(be.a)(e,me);return Object($.jsx)(pe,Object(j.a)({},n),t)}))})})),Oe=n(31),ge=n(32),fe=ge.b.div(_||(_=Object(Oe.a)(["\n  .homepage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),ve=(n(85),function(){return Object($.jsx)(fe,{children:Object($.jsx)(je,{})})}),xe=Object(ge.a)(B||(B=Object(Oe.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),ye=Object(ge.a)(D||(D=Object(Oe.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),we=Object(ge.a)(R||(R=Object(Oe.a)(["\n  background-color: #4285f4;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),ke=ge.b.button(L||(L=Object(Oe.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ',"\n"])),(function(e){return e.isGoogleSignIn?we:e.inverted?ye:xe})),Ne=["children"],Ee=function(e){var t=e.children,n=Object(be.a)(e,Ne);return Object($.jsx)(ke,Object(j.a)(Object(j.a)({},n),{},{children:t}))},Ce=(n(86),Object(l.b)(null,(function(e){return{addItem:function(t){return e(Z(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,a=t.imageUrl;return Object($.jsxs)("div",{className:"collection-item",children:[Object($.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object($.jsxs)("div",{className:"collection-footer",children:[Object($.jsx)("span",{className:"name",children:r}),Object($.jsxs)("span",{className:"price",children:["$",c]})]}),Object($.jsx)(Ee,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),Ue=(n(87),function(e){var t=e.title,n=e.items;return Object($.jsxs)("div",{className:"collection-preview",children:[Object($.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object($.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object($.jsx)(Ce,{item:e},e.id)}))})]})}),Ie=Object(K.a)([function(e){return e.shop}],(function(e){return e.collections})),Te=Object(K.a)([Ie],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),Se=(n(88),["id"]),Ae=Object(K.b)({collections:Te}),Pe=Object(l.b)(Ae)((function(e){var t=e.collections;return Object($.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(be.a)(e,Se);return Object($.jsx)(Ue,Object(j.a)({},n),t)}))})})),Me=(n(89),Object(l.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(K.a)([Ie],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return Object($.jsxs)("div",{className:"collection-page",children:[Object($.jsx)("h2",{className:"title",children:n}),Object($.jsx)("div",{className:"items",children:r.map((function(e){return Object($.jsx)(Ce,{item:e},e.id)}))})]})}))),_e=n(44);n(101),n(90);_e.a.initializeApp({apiKey:"AIzaSyBA20nhz4wQNTS_sMzuk6fyH7nTWX4O9n8",authDomain:"new-crwn-db.firebaseapp.com",projectId:"new-crwn-db",storageBucket:"new-crwn-db.appspot.com",messagingSenderId:"822105546347",appId:"1:822105546347:web:603bb052c42c0701475b2e"});var Be=function(){var e=Object(V.a)(z.a.mark((function e(t,n){var r,c,a,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Re.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(j.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),De=_e.a.auth(),Re=_e.a.firestore(),Le=new _e.a.auth.GoogleAuthProvider;Le.setCustomParameters({prompt:"select_account"});var Ge,We,He,ze,Ve,qe,Fe,Je,Qe,Xe,Ke,Ye,Ze,$e,et,tt=function(){return De.signInWithPopup(Le)},nt=(_e.a,function(e){Object(J.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(q.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromSnapshot=null,e}return Object(F.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.updateCollections,t=Re.collection("collections");this.unsubscribeFromSnapshot=t.onSnapshot(function(){var t=Object(V.a)(z.a.mark((function t(n){var r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{}),e(r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.match;return Object($.jsxs)("div",{className:"shop-page",children:[Object($.jsx)(X.b,{exact:!0,path:"".concat(e.path),component:Pe}),Object($.jsx)(X.b,{path:"".concat(e.path,"/:collectionId"),component:Me})]})}}]),n}(c.a.Component)),rt=Object(l.b)(null,(function(e){return{updateCollections:function(t){return e(function(e){return{type:U.UPDATE_COLLECTIONS,payload:e}}(t))}}}))(nt),ct=n(4),at=(n(92),["handleChange","label"]),it=function(e){var t=e.handleChange,n=e.label,r=Object(be.a)(e,at);return Object($.jsxs)("div",{className:"group",children:[Object($.jsx)("input",Object(j.a)({className:"form-input",onChange:t},r)),n?Object($.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},st=(n(93),function(e){Object(J.a)(n,e);var t=Object(Q.a)(n);function n(e){var r;return Object(q.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(V.a)(z.a.mark((function e(t){var n,c,a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,c=n.email,a=n.password,e.prev=2,e.next=5,De.signInWithEmailAndPassword(c,a);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(ct.a)({},c,n))},r.state={email:"",password:""},r}return Object(F.a)(n,[{key:"render",value:function(){return Object($.jsxs)("div",{className:"sign-in",children:[Object($.jsx)("h2",{children:"I already have an account"}),Object($.jsx)("span",{children:"Sign in with your email and password"}),Object($.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object($.jsx)(it,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object($.jsx)(it,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object($.jsxs)("div",{className:"buttons",children:[Object($.jsx)(Ee,{type:"submit",children:" Sign in "}),Object($.jsx)(Ee,{onClick:tt,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(c.a.Component)),lt=st,ot=(n(94),function(e){Object(J.a)(n,e);var t=Object(Q.a)(n);function n(){var e;return Object(q.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(V.a)(z.a.mark((function t(n){var r,c,a,i,s,l,o;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,De.createUserWithEmailAndPassword(a,i);case 8:return l=t.sent,o=l.user,t.next=12,Be(o,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(ct.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(F.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return Object($.jsxs)("div",{className:"sign-up",children:[Object($.jsx)("h2",{className:"title",children:"I do not have a account"}),Object($.jsx)("span",{children:"Sign up with your email and password"}),Object($.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object($.jsx)(it,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object($.jsx)(it,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object($.jsx)(it,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object($.jsx)(it,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object($.jsx)(Ee,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(c.a.Component)),ut=ot,bt=(n(95),function(){return Object($.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object($.jsx)(lt,{}),Object($.jsx)(ut,{})]})}),dt=["title","titleId"];function pt(){return pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pt.apply(this,arguments)}function mt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ht(e,t){var n=e.title,c=e.titleId,a=mt(e,dt);return r.createElement("svg",pt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ge||(Ge=r.createElement("g",null)),We||(We=r.createElement("g",null)),He||(He=r.createElement("g",null)),ze||(ze=r.createElement("g",null)),Ve||(Ve=r.createElement("g",null)),qe||(qe=r.createElement("g",null)),Fe||(Fe=r.createElement("g",null)),Je||(Je=r.createElement("g",null)),Qe||(Qe=r.createElement("g",null)),Xe||(Xe=r.createElement("g",null)),Ke||(Ke=r.createElement("g",null)),Ye||(Ye=r.createElement("g",null)),Ze||(Ze=r.createElement("g",null)),$e||($e=r.createElement("g",null)),et||(et=r.createElement("g",null)))}var jt,Ot,gt=r.forwardRef(ht),ft=(n.p,n(96),Object(K.b)({itemCount:se})),vt=Object(l.b)(ft,(function(e){return{toggleCartHidden:function(){return e(Y())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object($.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object($.jsx)(gt,{className:"shopping-icon"}),Object($.jsx)("span",{className:"item-count",children:n})]})})),xt=(n(97),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object($.jsxs)("div",{className:"cart-item",children:[Object($.jsx)("img",{src:n,alt:"item"}),Object($.jsxs)("div",{className:"item-details",children:[Object($.jsx)("span",{className:"name",children:c}),Object($.jsxs)("span",{className:"price",children:[a," x $",r]})]})]})}),yt=(n(98),Object(K.b)({cartItems:ae})),wt=Object(X.g)(Object(l.b)(yt)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object($.jsxs)("div",{className:"cart-dropdown",children:[Object($.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object($.jsx)(xt,{item:e},e.id)})):Object($.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object($.jsx)(Ee,{onClick:function(){n.push("/checkout"),r(Y())},children:"GO TO CHECKOUT"})]})}))),kt=Object(K.a)([function(e){return e.user}],(function(e){return e.currentUser})),Nt=["title","titleId"];function Et(){return Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Et.apply(this,arguments)}function Ct(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ut(e,t){var n=e.title,c=e.titleId,a=Ct(e,Nt);return r.createElement("svg",Et({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,jt||(jt=r.createElement("desc",null,"Created with Sketch.")),Ot||(Ot=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var It,Tt,St,At,Pt=r.forwardRef(Ut),Mt=(n.p,ge.b.div(It||(It=Object(Oe.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"])))),_t=Object(ge.b)(s.b)(Tt||(Tt=Object(Oe.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]))),Bt=ge.b.div(St||(St=Object(Oe.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),Dt=Object(ge.b)(s.b)(At||(At=Object(Oe.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),Rt=(n(99),Object(K.b)({currentUser:kt,hidden:ie})),Lt=Object(l.b)(Rt)((function(e){var t=e.currentUser,n=e.hidden;return Object($.jsxs)(Mt,{children:[Object($.jsx)(_t,{to:"/",children:Object($.jsx)(Pt,{className:"logo"})}),Object($.jsxs)(Bt,{children:[Object($.jsx)(Dt,{to:"/shop",children:"SHOP"}),Object($.jsx)(Dt,{to:"/shop",children:"CONTACT"}),t?Object($.jsx)(Dt,{as:"div",onClick:function(){return De.signOut()},children:"SIGN OUT"}):Object($.jsx)(Dt,{to:"/signin",children:"SIGN IN"}),Object($.jsx)(vt,{})]}),n?null:Object($.jsx)(wt,{})]})})),Gt=function(e){Object(J.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(q.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(F.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=De.onAuthStateChanged(function(){var t=Object(V.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,Be(n);case 3:t.sent.onSnapshot((function(t){e(Object(j.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object($.jsxs)("div",{children:[Object($.jsx)(Lt,{}),Object($.jsxs)(X.d,{children:[Object($.jsx)(X.b,{exact:!0,path:"/",component:ve}),Object($.jsx)(X.b,{path:"/shop",component:rt}),Object($.jsx)(X.b,{excact:!0,path:"/checkout",component:ue}),Object($.jsx)(X.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object($.jsx)(X.a,{to:"/"}):Object($.jsx)(bt,{})}})]})]})}}]),n}(c.a.Component),Wt=Object(K.b)({currentUser:kt}),Ht=Object(l.b)(Wt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))(Gt);i.a.render(Object($.jsx)(l.a,{store:G,children:Object($.jsx)(s.a,{children:Object($.jsx)(o.PersistGate,{persistor:W,children:Object($.jsx)(Ht,{})})})}),document.getElementById("root"))},76:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.8ebb9f06.chunk.js.map