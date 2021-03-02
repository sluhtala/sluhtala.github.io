(this.webpackJsonpsluhtala_2=this.webpackJsonpsluhtala_2||[]).push([[0],{19:function(t){t.exports=JSON.parse('{"name":"Sasu Luhtala","description":"I am a full-stack programmer interested in proplem solving, visalization, user-experience and climbing. As a student at Hive Helsinki (one of the top coding schools in the world) I believe that solid fundamentals and deep understanding is what thrives success in long term and helps adapting new tools and technologies fast. I have projects done with C, C++ and Javascript but I also have a grasp with HTML, CSS, React and Node.js.","img":"images/self_image_stretch.jpg"}')},25:function(t){t.exports=JSON.parse('{"img_path":"./images/","projects":[{"title":"Game of life","description":"Conway\'s game of life with c++ and SDL2. Simple rules can create complicated patterns.","img":"gameoflife_image.png","link":"https://github.com/sluhtala/gameoflife"},{"title":"ft_printf","description":"A good way to learn is not to use dependencies. So lets create my own library. Over 50 standard C functions recreated including my own version of printf.","img":"printf_image.png","link":"https://github.com/sluhtala/libft"},{"title":"FDF","description":"\'Fils de fer\' is French for wireframe. It uses linedrawing algorithm to visualize a 3D map from 2D height data.","img":"fdf_image.jpg","link":"https://github.com/sluhtala/fdf"},{"title":"Fractol","description":"This project explores the endless patterns of fractals. I implemented mandelbrot, julia and the burning ship.","img":"fractol_image.png","link":"https://github.com/sluhtala/fractol"},{"title":"RTv1","description":"Raytracer version number 1. My first raytracer that render simple 3D spahes in space.","img":"rtv_image.jpg","link":"https://github.com/sluhtala/rtv1"},{"title":"RT","description":"Another raytracing project. This time with a small team and much more complicated features.","img":"rt_image.jpg","link":"https://github.com/wehard/rt"}]}')},30:function(t,e,a){},31:function(t,e,a){},40:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a(14),s=a.n(n),r=(a(30),a(6)),c=a(7),o=a(9),l=a(8),h=(a(31),a(1)),d=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={social:[{name:"linkedin",src:"https://www.linkedin.com/in/sasu-luhtala-4abb7885/",img:"linkedin.png"},{name:"twitter",src:"https://twitter.com/themalmana",img:"twitter.png"},{name:"github",src:"https://github.com/sluhtala",img:"github.png"},{name:"email",src:"mailto:sluhtala@me.com",img:"email.png"}]},t}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"social",children:this.state.social.map((function(t){return Object(h.jsx)("a",{href:t.src,children:Object(h.jsx)("img",{src:"./images/logos/"+t.img,alt:t.name})},t.name)}))})}}]),a}(i.Component),m=a(19),p=a(42),u=a(13),j=a(11),b=a(47),g=a(45),f=a.p+"static/media/chevron-bottom.8dea4467.svg",v=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={isOn:!1,description:"",logo_style:{width:"20px",filter:"invert(1)",transform:"",transition:"transform 0.3s ease"}},n.state.description=t.description,n.handleClick=n.handleClick.bind(Object(j.a)(n)),n.img_ref=Object(i.createRef)(null),n}return Object(c.a)(a,[{key:"handleClick",value:function(){var t=Object(u.a)({},this.state);t.isOn=!this.state.isOn,t.logo_style=Object(u.a)({},this.state.logo_style),t.logo_style.transform=this.state.isOn?"":"rotate(180deg)",this.setState(t)}},{key:"render",value:function(){var t=this,e=Object(h.jsx)(b.a.Body,{className:"bg-dark",id:"dropdata",children:this.state.description});return Object(h.jsx)(g.a,{className:"",children:Object(h.jsxs)("div",{className:"border-none",children:[Object(h.jsx)(g.a.Toggle,{as:b.a.Header,className:"dropdown-button vh-3",variant:"link",eventKey:"0",onClick:function(){return t.handleClick()},children:Object(h.jsx)("img",{ref:this.img_ref,className:"isRotated",src:f,alt:"button-arrow",style:this.state.logo_style},"button-arrow")}),Object(h.jsx)(g.a.Collapse,{eventKey:"0",children:e})]})})}}]),a}(i.Component);var x=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={name:m.name,description:m.description,img:m.img},t}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App my-header",children:[Object(h.jsxs)(p.a,{fluid:!0,className:"my-header__basic text-white p-1 p-sm-auto",children:[Object(h.jsx)("div",{className:"my-header__bg-image text-white p-1 p-sm-auto",style:(t=this.state.img,{backgroundImage:"url("+t+")",backgroundPosition:"center 10%",backgroundSize:"cover",backgroundRepeat:"no-repeat",filter:"brightness(90%) contrast(115%)",position:"absolute",left:"0",right:"0",top:"0",bottom:"0"})}),Object(h.jsx)(p.a,{className:"mx-2 col-12 col-sm-8 col-xl-8",children:Object(h.jsxs)("div",{className:"d-table d-sm-block p-2 p-sm-auto",children:[Object(h.jsx)("h1",{children:this.state.name}),Object(h.jsx)("p",{className:"p-2 h-auto d-none d-sm-block m-xl-4",children:this.state.description}),Object(h.jsx)("div",{className:"d-block d-sm-none p-1"}),Object(h.jsx)(d,{})]})})]}),Object(h.jsx)(p.a,{fluid:"true",className:"text-white d-block d-sm-none",children:Object(h.jsx)(v,{description:this.state.description})})]});var t}}]),a}(i.Component),O=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={anim:!0},t.handle_move_animation=function(){var e=t.props.activeIndex===t.props.index,a={};return a={backgroundImage:"url("+t.props.img+")",backgroundSize:"auto 200%",backgroundPosition:e?"100% 100%":"0% 0%",position:"absolute",width:"100%",maxHeight:"inherit",minHeight:"inherit",transition:"background-position 100s linear"},t.state.anim&&e&&(a.animation="bg-image-movement linear 100s",a.animationDirection="alternate",a.animationIterationCount="infinite",t.setState.anim=!1),a},t}return Object(c.a)(a,[{key:"render",value:function(){var t=0,e=0,a=0,i=.1,n=this.handle_move_animation();return Object(h.jsxs)(b.a,{className:"project-card border-0",style:this.props.projectStyle,children:[Object(h.jsx)("div",{className:"project-card__bg-image",style:n}),Object(h.jsx)("div",{style:{backgroundColor:"rgba("+t+","+e+","+a+","+i+")",backgroundImage:"linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0))",width:"100%",position:"absolute"},className:"h-100 m-0 p-3",children:Object(h.jsxs)("div",{className:"project-card__text",children:[Object(h.jsx)(b.a.Title,{as:"h4",children:Object(h.jsx)("a",{className:"text-white",href:this.props.link,children:this.props.title})}),Object(h.jsx)("p",{className:"project-descript w-sm-auto",children:this.props.description})]})})]})}}]),a}(i.Component),k=a(25),y=a(46),_=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(t){var i;return Object(r.a)(this,a),(i=e.call(this)).state={},i.state.titles=t.titles,i.state.index=0,i.handleClick=i.handleClick.bind(Object(j.a)(i)),i}return Object(c.a)(a,[{key:"handleClick",value:function(t){var e=Object(u.a)({},this.state);e.index=t,this.setState(e)}},{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"project-buttons__navbar row",children:Object(h.jsx)(y.a,{className:"flex-column w-100",children:this.state.titles.map((function(e,a){return Object(h.jsx)(y.a.Link,{className:"project-buttons__button "+(a===t.props.activeIndex?"project-buttons__button--active":""),onClick:function(){return t.props.handlePress(a)},children:Object(h.jsx)("p",{role:"button",children:e.title})},e.key)}))})})}}]),a}(i.Component),w=a(43),N=a(44),C=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).state={},t.state.project_info=k,t.create_projects=t.create_projects.bind(Object(j.a)(t)),t.state.projects=t.create_projects(),t.handlePress=t.handlePress.bind(Object(j.a)(t)),t.state.activeIndex=0,t}return Object(c.a)(a,[{key:"create_projects",value:function(){var t=this;return this.state.project_info.projects.map((function(e,a){var i=t.state.activeIndex!==a,n={position:"absolute",opacity:a===t.state.activeIndex?1:0,zIndex:i?0:3,transition:"opacity 1s ease",width:"100%",maxHeight:"500px",minHeight:"500px",minWidth:"0px"};return Object(h.jsx)(O,{title:e.title,description:e.description,img:t.state.project_info.img_path+e.img,index:a,link:e.link,activeIndex:t.state.activeIndex,projectStyle:n},e.title)}))}},{key:"handlePress",value:function(t){var e=Object(u.a)({},this.state);e.activeIndex=t,this.setState(e)}},{key:"render",value:function(){return Object(h.jsx)(p.a,{fluid:"xl",className:"main-content",style:{minWidth:"430px"},children:Object(h.jsxs)(w.a,{className:"h-100",style:{minHeight:"500px"},children:[Object(h.jsx)(N.a,{xs:3,md:2,className:"project-buttons bg-dark",children:Object(h.jsx)(_,{titles:this.titles_to_array(this.state.project_info.projects),activeIndex:this.state.activeIndex,handlePress:this.handlePress})}),Object(h.jsx)(N.a,{xs:9,md:10,className:"bg-secondary text-white p-0",children:this.create_projects()})]})})}},{key:"titles_to_array",value:function(t){var e=[];return t.map((function(t){return e.push({title:t.title,key:t.title}),t})),e}}]),a}(i.Component);a(39);var I=function(t){return Object(h.jsx)("div",{className:"flex-grow-1 p-3",id:"footer",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://github.com/sluhtala",className:"m-1",children:"Github"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"CV.pdf",className:"m-1",children:"CV"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://hive.fi",className:"m-1",children:"hive.fi"})})]})})},S=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={},t}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)(p.a,{fluid:"xl",className:"bg-light p-0",children:Object(h.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[Object(h.jsx)(x,{}),Object(h.jsx)(C,{}),Object(h.jsx)(I,{})]})})}}]),a}(i.Component),P=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(e){var a=e.getCLS,i=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),i(t),n(t),s(t),r(t)}))};s.a.render(Object(h.jsx)(S,{}),document.getElementById("root")),P()}},[[40,1,2]]]);
//# sourceMappingURL=main.eaa5557c.chunk.js.map