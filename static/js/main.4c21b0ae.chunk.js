(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/loading.gif.f841c145.gif"},17:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(12),l=a.n(r),c=(a(26),a(27),a(5));var i=class extends s.Component{render(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(c.b,{className:"navbar-brand",to:"/generel"},"Daily News"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item "},n.a.createElement(c.b,{className:"nav-link ",to:"/generel"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/business"},"Business")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/entertainment"},"Entertainment")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/general"},"General")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/health"},"Health")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/science"},"Science")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/sports"},"Sports")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(c.b,{className:"nav-link",to:"/technology"},"Technology")))))))}};var o=class extends s.Component{render(){let{title:e,description:t,imageUrl:a,newsUrl:s,author:r,date:l,source:c}=this.props;return n.a.createElement("div",{className:"my-3"},n.a.createElement("div",{className:"card"},n.a.createElement("span",{class:"position-absolute top-0 translate-middle badge rounded-pill bg-danger ",style:{left:"90%",zIndex:"1"}},c),n.a.createElement("img",{src:a||"https://www.moneylife.in/media/uploads/article/responsive/rbi1908.jpg",className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e),n.a.createElement("p",{className:"card-text"},t),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{class:"text-body-secondary"},"By ",r||"Unkown"," on ",new Date(l).toGMTString())),n.a.createElement("a",{rel:" noopener noreferrer",href:s,target:"_blank",className:"btn btn-sm btn-dark"},"Read More"))))}},m=a(14),p=a.n(m);class g extends s.Component{render(){return n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{className:"my-3",src:p.a,alt:"loading"}))}}var h=a(15);class d extends s.Component{constructor(e){super(e),this.capitalizeFirstLetter=(e=>e.charAt(0).toUpperCase()+e.slice(1)),this.handleNextClick=(async()=>{this.setState({page:this.state.page+1}),this.updateNews()}),this.handlePrevClick=(async()=>{this.setState({page:this.state.page-1}),this.updateNews()}),this.fetchMoreData=(async()=>{this.setState({page:this.state.page+1});const e="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=7256e4cb98754e43990b1ffc568d57a3&page=").concat(this.state.page,"&pageSize=").concat(this.props.pageSize);let t=await fetch(e),a=await t.json();console.log(a),this.setState({articles:this.state.articles.concat(a.articles),totalResult:a.totalResult})}),this.state={articles:[],loading:!0,page:1,totalResult:0},document.title=" ".concat(this.capitalizeFirstLetter(this.props.category)," - DailyNews")}async updateNews(){this.props.setProgress(10);const e="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=7256e4cb98754e43990b1ffc568d57a3&page=").concat(this.state.page,"&pageSize=").concat(this.props.pageSize);this.setState({loading:!0});let t=await fetch(e);this.props.setProgress(30);let a=await t.json();this.props.setProgress(70),this.setState({articles:a.articles,totalResult:a.totalResult,loading:!1}),this.props.setProgress(100)}async componentDidMount(){this.updateNews()}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"text-center",style:{margin:"35px 0px"}},"Daily News - Top ",this.capitalizeFirstLetter(this.props.category)," Headlines"),this.state.loading&&n.a.createElement(g,null),n.a.createElement(h.a,{dataLength:this.state.articles.length,next:this.fetchMoreData,hasMore:this.state.articles.length!==this.state.totalResult,loader:n.a.createElement(g,null)},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.articles.map(e=>n.a.createElement("div",{className:"col-md-4",key:e.url},n.a.createElement(o,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name})))))))}}d.defaultProps={country:"in",pageSize:8,category:"general"};var u=d,E=a(1),y=a(16);class b extends s.Component{constructor(){super(...arguments),this.pageSize=5,this.state={progress:0},this.setProgress=(e=>{this.setState({progress:e})})}render(){return n.a.createElement("div",null,n.a.createElement(c.a,null,n.a.createElement(i,null),n.a.createElement(y.a,{height:3,color:"#f11946",progress:this.state.progress}),n.a.createElement(E.c,null,n.a.createElement(E.a,{exact:!0,path:"/generel"},"  ",n.a.createElement(u,{setProgress:this.setProgress,keys:"general",pageSize:this.pageSize,country:"in",category:"general"})),n.a.createElement(E.a,{exact:!0,path:"/business"}," ",n.a.createElement(u,{setProgress:this.setProgress,keys:"business",pageSize:this.pageSize,country:"in",category:"business"})),n.a.createElement(E.a,{exact:!0,path:"/entertainment"}," ",n.a.createElement(u,{setProgress:this.setProgress,keys:"entertainment",pageSize:this.pageSize,country:"in",category:"entertainment"})),n.a.createElement(E.a,{exact:!0,path:"/health"}," ",n.a.createElement(u,{setProgress:this.setProgress,keys:"health",pageSize:this.pageSize,country:"in",category:"health"})),n.a.createElement(E.a,{exact:!0,path:"/science"}," ",n.a.createElement(u,{setProgress:this.setProgress,keys:"science",pageSize:this.pageSize,country:"in",category:"science"})),n.a.createElement(E.a,{exact:!0,path:"/sports"}," ",n.a.createElement(u,{setProgress:this.setProgress,keys:"sports",pageSize:this.pageSize,country:"in",category:"sports"})),n.a.createElement(E.a,{exact:!0,path:"/general"}," ",n.a.createElement(u,{setProgress:this.setProgress,keys:"general",pageSize:this.pageSize,country:"in",category:"general"})),n.a.createElement(E.a,{exact:!0,path:"/technology"}," ",n.a.createElement(u,{setProgress:this.setProgress,keys:"technology",pageSize:this.pageSize,country:"in",category:"technology"})))))}}var v=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then(t=>{let{getCLS:a,getFID:s,getFCP:n,getLCP:r,getTTFB:l}=t;a(e),s(e),n(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.4c21b0ae.chunk.js.map