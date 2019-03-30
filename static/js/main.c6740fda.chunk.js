(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(56),o=a.n(c),i=(a(67),a(9)),s=a(10),l=a(14),u=a(11),m=a(13),d=a(19),E=a(20),p=a(57),g=a.n(p)()(),v=a(12),h=a(17),f=a(59),y=a(5),b=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length||Array.isArray(e)&&0===e.length},S={user:{},isAuthenticated:!1,error:null},N={data:[],error:null,isLoading:!1},O={data:[],error:null,isLoading:!1},C=Object(h.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return{isAuthenticated:!b(t.payload),user:t.payload,error:null};case"LOGIN_FAILURE":return Object(y.a)({},e,{error:t.payload.error});case"LOGOUT_SUCCESS":return Object(y.a)({},S);default:return e}},games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_GAMES_REQUEST":return Object(y.a)({},e,{isLoading:!0,error:null});case"FETCH_GAMES_SUCCESS":return{data:t.payload,isLoading:!1,error:null};case"FETCH_GAMES_FAILURE":return{data:[],isLoading:!1,error:t.payload};default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES_REQUEST":return Object(y.a)({},e,{isLoading:!0,error:null});case"FETCH_CATEGORIES_SUCCESS":return{data:t.payload,isLoading:!1,error:null};case"FETCH_CATEGORIES_FAILURE":return{data:[],isLoading:!1,error:t.payload};default:return e}}}),w=[f.a],j=void 0;j=Object(h.d)(h.a.apply(void 0,w));var F=Object(h.e)(C,{},j),_=a(60),A=Object(v.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(_.a)(e,["component","auth"]);return r.a.createElement(E.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(E.a,{to:"/login"})}}))});var U=function(e){var t=e.src;return r.a.createElement("div",{className:"ui one column center aligned page grid"},r.a.createElement("div",{className:"column twelve wide"},r.a.createElement("img",{src:t,alt:"logo"})))},L=a(29),G=a(16),T=a.n(G),k=function(e,t){return{type:"LOGIN_SUCCESS",payload:Object(y.a)({},e,{username:t.username})}},I=function(e){return{type:"LOGIN_FAILURE",payload:e}},R=function(){return{type:"LOGOUT_SUCCESS"}},H=a(23),M=a.n(H),x=a(40),D=a.n(x),P=function(e){var t={};return e.username=b(e.username)?"":e.username,e.password=b(e.password)?"":e.password,D.a.isEmpty(e.username)&&(t.username="username"),D.a.isEmpty(e.password)&&(t.password="password"),{errors:t,isValid:b(t)}},Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={credentials:{username:"",password:""},validationErrors:{}},a.onChange=function(e){a.setState(Object(y.a)({},a.state,{credentials:Object(y.a)({},a.state.credentials,Object(L.a)({},e.target.name,e.target.value))}))},a.onSubmit=function(e){e.preventDefault();var t=a.state.credentials,n=P(t);n.isValid?a.setState({validationErrors:{}},function(){a.props.loginUser(t)}):a.setState({validationErrors:Object(y.a)({},n.errors)},function(){a.props.resetErrors()})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.credentials,a=e.validationErrors,n=t.username,c=t.password,o=this.props.error;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"ui grid centered"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"fields"},r.a.createElement("div",{className:"required field"},r.a.createElement("div",{className:M()("ui icon input",{error:a.username})},r.a.createElement("input",{type:"text",name:"username",value:n,placeholder:"Username",onChange:this.onChange}),r.a.createElement("i",{className:"user icon"}))),r.a.createElement("div",{className:"required field"},r.a.createElement("div",{className:M()("ui icon input",{error:a.password})},r.a.createElement("input",{type:"password",name:"password",value:c,placeholder:"Password",onChange:this.onChange}),r.a.createElement("i",{className:"lock icon"}))),o&&r.a.createElement("label",{className:"error"},"Username or password is incorrect."),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{type:"submit",value:"Login"}),r.a.createElement("i",{className:"right chevron icon"})))))))}}]),t}(n.Component);Q.getDerivedStateFromProps=function(e,t){return e.auth.isAuthenticated&&e.history.push("/casino"),t};var B=Object(v.b)(function(e){return{auth:e.auth,error:e.auth.error}},{loginUser:function(e){return function(t){T.a.post("/login",e).then(function(a){t(k(a.data,e))}).catch(function(e){t(I(e.response&&e.response.data))})}},resetErrors:function(){return function(e){e({type:"RESET_LOGIN_ERROR"})}}})(Q),q=function(){return{type:"FETCH_GAMES_REQUEST"}},J=function(e){return{type:"FETCH_GAMES_SUCCESS",payload:e}},V=function(e){return{type:"FETCH_GAMES_FAILURE",payload:e}},W=function(){return{type:"FETCH_CATEGORIES_REQUEST"}},$=function(e){return{type:"FETCH_CATEGORIES_SUCCESS",payload:e}},z=function(e){return{type:"FETCH_CATEGORIES_FAILURE",payload:e}},K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selected:0},a.componentDidMount=function(){a.props.getCategories()},a.onSelect=function(e){a.state.selected!==e&&(a.setState({selected:e}),a.props.onSelect(e))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selected,a=this.props.categories;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui dividing header"},"Categories"),r.a.createElement("div",{className:"ui selection animated list category items"},a.map(function(a){return r.a.createElement("div",{className:M()("category item",{active:t===a.id}),key:a.id},r.a.createElement("a",{href:"#/",onClick:function(t){t.preventDefault(),e.onSelect(a.id)}},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},a.name))))})))}}]),t}(n.Component),X=Object(v.b)(function(e){return{categories:e.categories.data,error:e.categories.error}},{getCategories:function(){return function(e){e(W()),T.a.get("/categories").then(function(t){e($(t.data))}).catch(function(t){e(z(t.response&&t.response.data))})}}})(K);var Y=function(e){var t=e.game;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui small image"},r.a.createElement("img",{src:t.icon,alt:"game-icon"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},r.a.createElement("b",{className:"name"},t.name)),r.a.createElement("div",{className:"description"},t.description),r.a.createElement("div",{className:"extra"},r.a.createElement(d.b,{to:"/games/play/".concat(t.code)},r.a.createElement("div",{className:"play ui right floated secondary button inverted"},"Play",r.a.createElement("i",{className:"right chevron icon"}))))))};var Z=function(e){var t=e.games;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"ui dividing header"},"Games"),r.a.createElement("div",{className:"ui relaxed divided game items links"},t.map(function(e,t){return r.a.createElement("div",{className:"game item",key:t},r.a.createElement(Y,{game:e}))})))},ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={games:[],searchFilter:"",categoryFilter:0},a.componentDidMount=function(){a.props.getGames()},a.onLogoutClick=function(e){e.preventDefault();var t=a.props.auth;a.props.logoutUser(t.user.username)},a.onSearch=function(e){a.setState({searchFilter:e.target.value},function(){a.setState({games:a.getFilteredGames()})})},a.onCategorySelect=function(e){a.state.categoryFilter!==e&&a.setState({categoryFilter:e},function(){a.setState({games:a.getFilteredGames()})})},a.getFilteredGames=function(){var e=a.state,t=e.categoryFilter,n=e.searchFilter,r=a.props.games;return n&&(r=r.filter(function(e){var t=e.name.toString().trim().toLocaleUpperCase("en-EN");return!(!t||-1===t.indexOf(n.trim().toLocaleUpperCase("en-EN")))})),t&&(r=r.filter(function(e){return e.categoryIds.includes(t)})),r},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.games,t=this.props.auth.user.player;return r.a.createElement("div",{className:"casino"},r.a.createElement("div",{className:"ui stackable grid centered"},r.a.createElement("div",{className:"twelve wide column"},r.a.createElement("div",{className:"ui list"},r.a.createElement("div",{className:"player item"},r.a.createElement("img",{className:"ui avatar image",src:t.avatar,alt:"avatar"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},r.a.createElement("b",{className:"name"},t&&t.name)),r.a.createElement("div",{className:"description event"},t&&t.event)))),r.a.createElement("a",{href:"#/",onClick:this.onLogoutClick},r.a.createElement("div",{className:"logout ui left floated secondary button"},r.a.createElement("i",{className:"left chevron icon"}),"Log Out"))),r.a.createElement("div",{className:"four wide column"},r.a.createElement("div",{className:"search ui small icon input "},r.a.createElement("input",{type:"text",placeholder:"Search Game",onChange:this.onSearch}),r.a.createElement("i",{className:"search icon"})))),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"twelve wide column"},r.a.createElement(Z,{games:e})),r.a.createElement("div",{className:"four wide column"},r.a.createElement(X,{onSelect:this.onCategorySelect}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.searchFilter||t.categoryFilter?null:{games:e.games}}}]),t}(n.Component),te=Object(v.b)(function(e){return{auth:e.auth,games:e.games.data,error:e.auth.error}},{getGames:function(){return function(e){e(q()),T.a.get("/games").then(function(t){e(J(t.data))}).catch(function(t){e(V(t.response&&t.response.data))})}},logoutUser:function(e){return function(t){T.a.post("/logout",{username:e}),t(R())}}})(ee),ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.comeon.game.launch(a.props.match.params.gameId)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui grid centered"},r.a.createElement("div",{className:"three wide column"},r.a.createElement(d.b,{to:"/casino"},r.a.createElement("div",{className:"ui right floated secondary button inverted"},r.a.createElement("i",{className:"left chevron icon"}),"Back"))),r.a.createElement("div",{className:"ten wide column"},r.a.createElement("div",{id:"game-launch"})),r.a.createElement("div",{className:"three wide column"})))}}]),t}(n.Component),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){T.a.defaults.baseURL="https://comeon-casino-app.herokuapp.com"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{store:F},r.a.createElement(d.a,{history:g},r.a.createElement(U,{src:"./images/logo.svg"}),r.a.createElement("div",{className:"main container"},r.a.createElement(E.d,null,r.a.createElement(E.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(E.b,{exact:!0,path:"/login",component:B}),r.a.createElement(A,{exact:!0,path:"/casino",component:te}),r.a.createElement(A,{path:"/games/play/:gameId",component:ae})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a(159)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.c6740fda.chunk.js.map