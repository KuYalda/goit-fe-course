(this["webpackJsonphomework-03-2"]=this["webpackJsonphomework-03-2"]||[]).push([[0],{23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},24:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},28:function(e,t,a){e.exports=a(72)},3:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchForm_button:"Searchbar_SearchForm_button__3eKQ3",SearchForm_button_label:"Searchbar_SearchForm_button_label__5zUwS",SearchForm_input:"Searchbar_SearchForm_input__11BIx"}},4:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1P7Nb"}},5:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),l=a(6),i=a(17),m=a(18),s=a(19),u=a(26),g=a(20),h=a(27),p=a(21),f=a.n(p),b=(a(54),a(22)),d=a.n(b),y=function(e,t){return d.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=14430375-fdc7eae3685172ff0386b04a1&image_type=photo&orientation=horizontal&per_page=12"))},_=a(25),S=a(3),v=a.n(S),I=function(e){var t=e.onSubmit,a=Object(n.useState)(""),o=Object(_.a)(a,2),c=o[0],l=o[1];return r.a.createElement("header",{className:v.a.Searchbar},r.a.createElement("form",{className:v.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c)}},r.a.createElement("button",{type:"submit",className:v.a.SearchForm_button},r.a.createElement("span",{className:v.a.SearchForm_button_label},"Search")),r.a.createElement("input",{className:v.a.SearchForm_input,type:"text",value:c,name:"seachValue",autoComplete:"off",placeholder:"Search images and photos",onChange:function(e){var t=e.target.value;l(t)}})))},O=a(4),E=a.n(O),w=function(e){var t=e.img,a=e.tags,n=e.modalImg,o=e.onClick;return r.a.createElement("li",{className:E.a.ImageGalleryItem},r.a.createElement("img",{alt:a,src:t,className:E.a.ImageGalleryItem_image,onClick:function(){return o(n,a)}}))},k=a(23),j=a.n(k),C=function(e){var t=e.items,a=e.onClick;return r.a.createElement("ul",{className:j.a.ImageGallery},t.map((function(e){return r.a.createElement(w,{key:e.id,img:e.webformatURL,tags:e.tags,modalImg:e.largeImageURL,onClick:a})})))},P=a(24),F=a.n(P),G=function(e){var t=e.onClick;return r.a.createElement("button",{type:"button",className:F.a.Button,onClick:t},"Load more")},x=a(5),D=a.n(x),N=function(e){var t=e.src,a=e.alt,o=e.onClick,c=e.onKeyDown;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var l=Object(n.createRef)();return r.a.createElement("div",{className:D.a.Overlay,onClick:function(e){var t=e.target;o(t,l)},ref:l},r.a.createElement("div",{className:D.a.Modal},r.a.createElement("img",{src:t,alt:a})))};function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L={images:[],searchQuery:"",page:1,isLoading:!1,modalProps:null},Q={textAlign:"centre"},K=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state=B({},L),a.getValue=function(e){var t=a.state,n=t.searchQuery,r=t.page;if(e){if(n!==e&&n)return a.setState(B({},L,{searchQuery:e,page:2})),void a.getImages(e,1);a.setState((function(t){return B({},t,{page:t.page+1,searchQuery:e})})),a.getImages(e,r)}else a.setState(B({},L))},a.handleChangePage=function(){var e=a.state,t=e.searchQuery,n=e.page;a.setState((function(e){return{page:e.page+1}})),a.getImages(t,n)},a.onImgClick=function(e,t){a.setState({modalProps:{src:e,alt:t}})},a.onModalClick=function(e,t){e===t.current&&a.setState({modalProps:null})},a.onModalKeyDown=function(e){27===e.keyCode&&a.setState({modalProps:null}),window.scrollTo({top:document.getElementById("root").scrollHeight,behavior:"smooth"})},a.getImages=function(e,t){a.setState({isLoading:!0}),e&&t&&y(e,t).then((function(e){var t=e.data;a.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t.hits))}}))})).catch((function(e){return console.log("err :",e)})).finally((function(){return a.setState({isLoading:!1})}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.page;t.page<a&&window.scrollTo({top:document.getElementById("root").scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.modalProps;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{onSubmit:this.getValue}),t.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{items:t,onClick:this.onImgClick}),r.a.createElement(G,{onClick:this.handleChangePage}),n&&r.a.createElement(N,{src:n.src,alt:n.alt,onClick:this.onModalClick,onKeyDown:this.onModalKeyDown})),a&&r.a.createElement(f.a,{type:"Grid",color:"#3f51b5",height:500,width:500,style:Q}))}}]),t}(n.Component);c.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1c765e51.chunk.js.map