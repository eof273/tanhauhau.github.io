(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{155:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return d});a(35);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(168),s=a(170),c=a(171),u=a(176),m=a(167),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next,i=t.fields.wip;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(c.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.a.createElement("h1",null,i?"WIP: ":null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-.5)})},t.frontmatter.date,t.frontmatter.lastUpdated&&o.a.createElement("span",{style:{fontStyle:"italic",marginLeft:Object(m.a)(.2)}},"(Last updated: ",t.frontmatter.lastUpdated,")")),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement(u.a,{url:this.props.location.href}),o.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,n&&o.a.createElement(l.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(l.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},e}(o.a.Component);e.default=p;var d="1889397247"},166:function(t,e,a){var n;t.exports=(n=a(169))&&n.default||n},167:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return c});var n=a(173),r=a.n(n),i=a(174),o=a.n(i);a(152);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#612e77",textDecoration:"underline",fontWeight:600,textShadow:"initial",backgroundImage:"initial"},pre:{overflow:"scroll"},blockquote:{borderLeftColor:"#612e77"}}};var l=new r.a(o.a);var s=l.rhythm,c=l.scale},168:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(34),s=a.n(l);a.d(e,"a",function(){return s.a});a(166);var c=r.a.createContext({}),u=function(t){return r.a.createElement(c.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},169:function(t,e,a){"use strict";a.r(e);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(57),s=a(2),c=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},170:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(168),s=a(167),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?null:o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},o.a.createElement("header",null,t),o.a.createElement("main",null,r),o.a.createElement("footer",{style:{marginTop:Object(s.a)(2)}},"Built with ",o.a.createElement("span",{role:"img",className:"emoji"},"💻")," and ",o.a.createElement("span",{role:"img",className:"emoji"},"❤️")," • ",o.a.createElement(l.a,{to:"/notes"},"notes")," • ",o.a.createElement("a",{href:"https://twitter.com/lihautan"},"twitter")," • ",o.a.createElement("a",{href:"https://github.com/tanhauhau"},"github")," • ",o.a.createElement("a",{href:"https://github.com/tanhauhau/tanhauhau.github.io/issues/new?assignees=&labels=grammar%2C+typo&template=fix-typos-and-grammars.md&title=%5BTYPO%5D"},"discuss")))},e}(o.a.Component);e.a=c},171:function(t,e,a){"use strict";var n=a(172),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(175),c=a.n(s);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,l=t.title,s=n.data.site,u=e||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=u},172:function(t){t.exports={data:{site:{siteMetadata:{title:"Tan Li Hau",description:"Tan Li Hau is a frontend engineer who is currently working in Shopee",author:"Tan Li Hau"}}}}},176:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a(0),r=a.n(n),i=a(167);function o(t){var e=t.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{style:{marginBottom:Object(i.a)(1)}}),r.a.createElement("p",null,"Thank you for your time reading through this article.",r.a.createElement("br",null),"It means a lot to me."),r.a.createElement("p",null," If you like what you have just read,",r.a.createElement("br",null),r.a.createElement("a",{href:l(e)},"Tweet about it")," so I will write more related articles;",r.a.createElement("br",null),"If you disagree or you have opinions about this article,",r.a.createElement("br",null),r.a.createElement("a",{href:s(e)},"Tweet about it too")," so I can take your suggestions and improve on it."))}function l(t){return"https://twitter.com/intent/tweet?text="+encodeURIComponent("Insightful article from @lihautan")+"&url="+t}function s(t){return"https://twitter.com/intent/tweet?text="+encodeURIComponent("I disgree with @lihautan's article")+"&url="+t}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9943f32b423fe30dd333.js.map