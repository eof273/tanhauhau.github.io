(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),i=a(195),o=a(197),l=a(198);var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return r.a.createElement(o.a,{location:this.props.location,title:t},r.a.createElement(l.a,{title:"Talks"}),r.a.createElement("h1",null,"Talks"),a.map(function(e){var t=e.node,a=t.fields,n=t.frontmatter;return r.a.createElement("div",{key:a.slug},r.a.createElement("h3",null,r.a.createElement(i.a,{style:{boxShadow:"none"},to:a.slug},n.title)),r.a.createElement("div",null,r.a.createElement("span",{role:"img","aria-label":"venue",style:{marginRight:4}},"📍"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.venueLink},n.venue)),r.a.createElement("div",null,r.a.createElement("span",{role:"img","aria-label":"group",style:{marginRight:4}},"👥"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.occasionLink},n.occasion)),r.a.createElement("div",null,r.a.createElement("span",{role:"img","aria-label":"date",style:{marginRight:4}},"🗓"),n.date),r.a.createElement("div",null,r.a.createElement("span",{role:"img","aria-label":"slide",style:{marginRight:4}},"📝"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.slides},"Slides")),r.a.createElement("div",{style:{fontStyle:"italic",lineHeight:"1.5em",marginBottom:"2rem",color:"rgba(0,0,0,0.75)"}},n.description))}))},n}(r.a.Component);t.default=c;var s="918320275"},193:function(e,t,a){var n;e.exports=(n=a(196))&&n.default||n},194:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(200),r=a.n(n),i=a(201),o=a.n(i);a(180);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#612e77",textDecoration:"underline",fontWeight:600,textShadow:"initial",backgroundImage:"initial"},pre:{overflow:"scroll"},blockquote:{borderLeftColor:"#612e77"},li:{marginBottom:0},"li > p":{marginBottom:0},"li > ul":{marginTop:0}}};var l=new r.a(o.a);var c=l.rhythm,s=l.scale},195:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=a(59),c=a.n(l);a.d(t,"a",function(){return c.a});a(193);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},196:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=a(85),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(195),o=a(194);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,l=t.children;return e="/"===a.pathname?null:r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},r.a.createElement("header",null,e),r.a.createElement("main",null,l),r.a.createElement("footer",{style:{marginTop:Object(o.a)(2)}},"Built with ",r.a.createElement("span",{role:"img",className:"emoji"},"💻")," and ",r.a.createElement("span",{role:"img",className:"emoji"},"❤️")," • ",r.a.createElement(i.a,{to:"/notes"},"notes")," • ",r.a.createElement("a",{href:"https://twitter.com/lihautan"},"twitter")," • ",r.a.createElement("a",{href:"https://github.com/tanhauhau"},"github")," • ",r.a.createElement("a",{href:"https://github.com/tanhauhau/tanhauhau.github.io/issues/new?assignees=&labels=grammar%2C+typo&template=fix-typos-and-grammars.md&title=%5BTYPO%5D"},"discuss")))},n}(r.a.Component);t.a=l},198:function(e,t,a){"use strict";var n=a(199),r=a(0),i=a.n(r),o=a(11),l=a.n(o),c=a(202),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Tan Li Hau",description:"Tan Li Hau is a frontend engineer who is currently working in Shopee",author:"Tan Li Hau"}}}}}}]);
//# sourceMappingURL=component---src-pages-talks-js-bb4fc97bafc2f9f34977.js.map