(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{164:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(168),s=a(191),l=(a(192),a(194)),o=a.n(l),c=a(158),d=a.n(c);function u(e){var t=e.data,a=e.author,i=Object(r.useState)(!1),s=i[0],l=i[1],c=Object(r.useState)(!0),u=c[0],f=c[1];Object(r.useEffect)(function(){var e;return s&&(e=setTimeout(function(){f(!1)},1e3)),function(){clearTimeout(e)}},[s,f]);var p=Object(r.useCallback)(function(){u?l(!0):f(!0)},[u]),m=Object(r.useCallback)(function(){u&&l(!1)},[u]);return n.a.createElement("span",{className:(u?d.a.showImage:"")+" "+d.a.container,onMouseDown:p,onMouseUp:m,onMouseLeave:m,onTouchStart:p,onTouchEnd:m,onContextMenu:function(e){return e.preventDefault()}},n.a.createElement(o.a,{className:d.a.image1,fixed:t.largeAvatar.childImageSharp.fixed,alt:a,style:{padding:4,border:"4px dotted #8b679b",borderRadius:"50%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement(o.a,{className:d.a.image2,fixed:t.qrCode.childImageSharp.fixed,alt:a}))}var f="112480951",p=function(){return n.a.createElement(i.b,{query:f,render:function(e){var t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{margin:"auto"}},n.a.createElement("div",{style:{margin:"0px auto 60px",textAlign:"center",maxWidth:"100%"}},n.a.createElement(u,{data:e,author:t}),n.a.createElement("h1",null,"Tan Li Hau"),n.a.createElement("h2",null,"Frontend Developer at ",n.a.createElement("a",{href:"https://www.linkedin.com/company/shopee/","aria-label":"Shopee LinkedIn page"},"Shopee"))))},data:s})},m=a(170),h=a(171),g=a(167),b=a(159),E=a.n(b);a.d(t,"pageQuery",function(){return y});t.default=function(e){var t=e.data,a=e.location,r=t.site.siteMetadata.title,s=t.portfolios.edges,l=t.blogs.edges,o=t.talks.edges;return n.a.createElement(m.a,{location:a,title:r},n.a.createElement(h.a,{title:"Home",keywords:["blog","gatsby","javascript","react"]}),n.a.createElement(p,null),n.a.createElement("h3",null,"Interesting Facts",n.a.createElement("span",{role:"img",className:"emoji"},"✌️")),n.a.createElement("ul",{style:{marginBottom:Object(g.a)(.25)}},n.a.createElement("li",{className:E.a.list},"I'm from Penang, Malaysia ",n.a.createElement("span",{role:"img",className:"emoji"},"🇲🇾")," and live in Singapore ",n.a.createElement("span",{role:"img",className:"emoji"},"🇸🇬"),"."),n.a.createElement("li",{className:E.a.list},"I love ",n.a.createElement("span",{role:"img",className:"emoji"},"⚛")," ","React, and I build ",n.a.createElement(i.a,{to:"/projects"},"projects")," with ",n.a.createElement("span",{role:"img",className:"emoji"},"⚛")," React."),n.a.createElement("li",{className:E.a.list},"I contribute to open source projects, such as"," ",n.a.createElement("a",{href:"https://github.com/babel/babel",target:"_blank",rel:"noopener noreferrer"},"babel")),n.a.createElement("li",{className:E.a.list},"You can find me on ",n.a.createElement("a",{href:"https://twitter.com/lihautan","aria-label":"Twitter handle: lihautan",target:"_blank",rel:"noreferrer noopener"},"twitter"),", ",n.a.createElement("a",{href:"https://github.com/tanhauhau","aria-label":"tanhauhau Github Repository",target:"_blank",rel:"noreferrer noopener"},"Github")," and ",n.a.createElement("a",{href:"https://www.linkedin.com/in/lihautan/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer noopener"},"LinkedIn"),".")),n.a.createElement("h3",null,"Articles"," ",n.a.createElement("span",{role:"img",className:"emoji"},"📚")),n.a.createElement("p",{className:E.a.p},"Thoughts and lessons I've learned:"),n.a.createElement("ul",{style:{marginBottom:Object(g.a)(.25)}},l.map(function(e){var t=e.node,a=t.frontmatter.title,r=t.fields.slug;return n.a.createElement("div",{key:r},n.a.createElement("li",{className:E.a.list},n.a.createElement(i.a,{style:{boxShadow:"none"},to:r},a)))})),n.a.createElement("p",{className:E.a.p},"You can find the full list of articles ",n.a.createElement(i.a,{to:"/blogs"},"here"),"."),n.a.createElement("h3",null,"Open Source"," ",n.a.createElement("span",{role:"img",className:"emoji"},"❤️")),n.a.createElement("p",{className:E.a.p},"Since"," ",n.a.createElement(i.a,{to:"/parsing-error-flow-type-parameter-instantiation"},"I stumbled upon a bug in babel"),", I've been actively contributing to"," ",n.a.createElement("a",{href:"https://github.com/babel/babel",target:"_blank",rel:"noopener noreferrer"},"babel"),". I am now currently a member of the babel organisation."),n.a.createElement("h3",null,"Projects"," ",n.a.createElement("span",{role:"img",className:"emoji"},"💻")),n.a.createElement("p",{className:E.a.p},"Cool stuff that I've been working on:"),n.a.createElement("ul",{style:{marginBottom:Object(g.a)(.25)}},s.map(function(e){var t=e.node,a=t.frontmatter,r=a.title,i=a.description,s=t.fields.website;return n.a.createElement("li",{key:r,className:E.a.list},n.a.createElement("a",{style:{boxShadow:"none"},href:s},r)," ",n.a.createElement("small",null,i))})),n.a.createElement("h3",null,"Talks"," ",n.a.createElement("span",{role:"img",className:"emoji"},"🎤")),n.a.createElement("ul",{style:{marginBottom:Object(g.a)(.25)}},o.map(function(e){var t=e.node,a=t.frontmatter,r=a.date,s=a.title,l=a.occasion,o=t.fields.slug;return n.a.createElement("div",{key:o},n.a.createElement("li",{style:{marginBottom:0,marginTop:0}},r," - ",l," -"," ",n.a.createElement(i.a,{style:{boxShadow:"none"},to:o},s)))})))};var y="326799571"},166:function(e,t,a){var r;e.exports=(r=a(169))&&r.default||r},167:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return c});var r=a(173),n=a.n(r),i=a(174),s=a.n(i);a(152);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#612e77",textDecoration:"underline",fontWeight:600,textShadow:"initial",backgroundImage:"initial"},pre:{overflow:"scroll"},blockquote:{borderLeftColor:"#612e77"}}};var l=new n.a(s.a);var o=l.rhythm,c=l.scale},168:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(34),o=a.n(l);a.d(t,"a",function(){return o.a});a(166);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},169:function(e,t,a){"use strict";a.r(t);a(35);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(57),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},170:function(e,t,a){"use strict";var r=a(7),n=a.n(r),i=a(0),s=a.n(i),l=a(168),o=a(167),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?null:s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,n),s.a.createElement("footer",{style:{marginTop:Object(o.a)(2)}},"Built with ",s.a.createElement("span",{role:"img",className:"emoji"},"💻")," and ",s.a.createElement("span",{role:"img",className:"emoji"},"❤️")," • ",s.a.createElement(l.a,{to:"/notes"},"notes")," • ",s.a.createElement("a",{href:"https://twitter.com/lihautan"},"twitter")," • ",s.a.createElement("a",{href:"https://github.com/tanhauhau"},"github")," • ",s.a.createElement("a",{href:"https://github.com/tanhauhau/tanhauhau.github.io/issues/new?assignees=&labels=grammar%2C+typo&template=fix-typos-and-grammars.md&title=%5BTYPO%5D"},"discuss")))},t}(s.a.Component);t.a=c},171:function(e,t,a){"use strict";var r=a(172),n=a(0),i=a.n(n),s=a(4),l=a.n(s),o=a(175),c=a.n(o);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,l=e.title,o=r.data.site,d=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Tan Li Hau",description:"Tan Li Hau is a frontend engineer who is currently working in Shopee",author:"Tan Li Hau"}}}}},191:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEz0lEQVQ4ywHEBDv7AOf8+9/6+uD8+/H9/OTm3Pf59npwYTMpHyslICMeGiQdGh8ZFzEpIUY/LWBgQWJkRF9hPl5eOl1bQFdUNwDw///1///y///4/v7r8OimqKcuKCcsJSIkHRsdGBYYFRMXFRQfGhcfFxQ6MiJaVzZpXzpuYDxdUjRkXkQA1+vg3uzi2unf3+7kp6+jMiwrJSAiHRsbFRIVGhITJxcTKxcTIxUUGBEQEw0NW083k4BUYlIwd2xKc2xTAOnr4ers5Ojq4fL064qMiCAcHRsZHC8cGlg0JHFAKHlBJm44IXE6Ik4rHAcGCUM3J3BbN1ZHKntuT3hwVgD////////8/Pz///+ChIYyIyFzSzusa02+dlO5dEyxaUKeWTWQTy17QiUhFRAYExBMOyBlVDJ1aUuLgGUA/v79/f39+/v7////jYmIn3NYrHhbtXRUt3BOq2dEj1Q3dEMrfUgsf0QnMRoUEg8OW0gshnBJgnNSm41tAPv9/f3+/vz8/P///5uYlKR1WHhLNm5DLaNkQpFUNF8zIVwvH3NAKYNKKzwfFREODXpgPq+RZKWPZ72pggDi7u76/f35+/z///6GkIuGY1RqRDZaNih3SzRmOypoOSZEKB1aMCBWMiIyIRkSEA1+ZTucgVOii2DMtIkA5+7o9/z8+fz78fv1uMXFuZyNjlg/f047kV1Fe0cve0MqbzsneEEqcUIpPiUaMhwWc1wygG9Fh3VNy7KLALXc6NPu9vv//rjO7Lmtt8mNbaxuUqZpTcF6WplWN35GK5FTNI1RNI5TMWk2JH9BK2pXMW5iQHJlQ9C1jwDR8fnZ8vjj8vrH1urMzc7Yk3WyZ0mrYkXLfF2mXT+MSS2dVTahWjqSVTRwLRplOx9XSyllVzd8dFPUvJkA5fH2+Pz78Pj65O71zuLx6rqismNDrGJDql5CkEkxi0YunFg3nVo6jU8vrH5kv7ysx8Khy8ut2t7Q58urAP////////3+/undzdvMvMSmlLhxT6FdQKReQpZQNIVGLoRILZVVNIdMLr2lit/WxfPszO744+328+nZzQD06ePy6OHy5tzToomlc1+IU1jCcl2YVjqcVUKxYkuEOS2ISC6VUTKPTD6ZaVebalDIpIHc08Ld3Njj4NwAfk9DhldL1Ghw6F5y2llr1EhjukJQtmxOvWNOq0w+nEs1mFQzfTsliTI4qUVPs0ZR0V9mxVhgrVNYpHRYAGg5NMpjbdlHYJ4iN4wbLKYmOpQdNKNOQbdxTaRdPaFaOopFK3AvHmMTGW0RHZQqN6UyP5wkM54gMaY+PgC1WGDlUGevJz6PHC57FCSVHC5+ECWfRDqkXzumWz2QSi91MyFtLB5sEx1nDxtyEh6GGSiFFieSHSylJjUA3VBkui1Emx8xhhUlgRYngBQkiBUqlC00jEssk0oufTckdTMhYiEbcRAgdhIhfxYkgxkmexIjihcomyAuAMg3TqMgNpEaLYATI4EWJ3gRIZIZLpYeNk0fF3I2IHgzIWMqGmAUGoEUI3wUJIsYJ3YUInASH5EaKpYdLQCxKkCQGSt4EiBxEB16EyN9EiKTGS+zJkFdFSEtDQtFFxFNFRSAFieBFSZ3EiCSGSpvEx9vER6NGSiVGyy0bRHvMSBLiwAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/65797d16af424cddbffebd0e19ab2f56/dc6f3/profile-pic.png",srcSet:"/static/65797d16af424cddbffebd0e19ab2f56/dc6f3/profile-pic.png 1x,\n/static/65797d16af424cddbffebd0e19ab2f56/b7fb3/profile-pic.png 1.5x,\n/static/65797d16af424cddbffebd0e19ab2f56/bcd71/profile-pic.png 2x,\n/static/65797d16af424cddbffebd0e19ab2f56/0b2cc/profile-pic.png 3x"}}},largeAvatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEz0lEQVQ4ywHEBDv7AOf8+9/6+uD8+/H9/OTm3Pf59npwYTMpHyslICMeGiQdGh8ZFzEpIUY/LWBgQWJkRF9hPl5eOl1bQFdUNwDw///1///y///4/v7r8OimqKcuKCcsJSIkHRsdGBYYFRMXFRQfGhcfFxQ6MiJaVzZpXzpuYDxdUjRkXkQA1+vg3uzi2unf3+7kp6+jMiwrJSAiHRsbFRIVGhITJxcTKxcTIxUUGBEQEw0NW083k4BUYlIwd2xKc2xTAOnr4ers5Ojq4fL064qMiCAcHRsZHC8cGlg0JHFAKHlBJm44IXE6Ik4rHAcGCUM3J3BbN1ZHKntuT3hwVgD////////8/Pz///+ChIYyIyFzSzusa02+dlO5dEyxaUKeWTWQTy17QiUhFRAYExBMOyBlVDJ1aUuLgGUA/v79/f39+/v7////jYmIn3NYrHhbtXRUt3BOq2dEj1Q3dEMrfUgsf0QnMRoUEg8OW0gshnBJgnNSm41tAPv9/f3+/vz8/P///5uYlKR1WHhLNm5DLaNkQpFUNF8zIVwvH3NAKYNKKzwfFREODXpgPq+RZKWPZ72pggDi7u76/f35+/z///6GkIuGY1RqRDZaNih3SzRmOypoOSZEKB1aMCBWMiIyIRkSEA1+ZTucgVOii2DMtIkA5+7o9/z8+fz78fv1uMXFuZyNjlg/f047kV1Fe0cve0MqbzsneEEqcUIpPiUaMhwWc1wygG9Fh3VNy7KLALXc6NPu9vv//rjO7Lmtt8mNbaxuUqZpTcF6WplWN35GK5FTNI1RNI5TMWk2JH9BK2pXMW5iQHJlQ9C1jwDR8fnZ8vjj8vrH1urMzc7Yk3WyZ0mrYkXLfF2mXT+MSS2dVTahWjqSVTRwLRplOx9XSyllVzd8dFPUvJkA5fH2+Pz78Pj65O71zuLx6rqismNDrGJDql5CkEkxi0YunFg3nVo6jU8vrH5kv7ysx8Khy8ut2t7Q58urAP////////3+/undzdvMvMSmlLhxT6FdQKReQpZQNIVGLoRILZVVNIdMLr2lit/WxfPszO744+328+nZzQD06ePy6OHy5tzToomlc1+IU1jCcl2YVjqcVUKxYkuEOS2ISC6VUTKPTD6ZaVebalDIpIHc08Ld3Njj4NwAfk9DhldL1Ghw6F5y2llr1EhjukJQtmxOvWNOq0w+nEs1mFQzfTsliTI4qUVPs0ZR0V9mxVhgrVNYpHRYAGg5NMpjbdlHYJ4iN4wbLKYmOpQdNKNOQbdxTaRdPaFaOopFK3AvHmMTGW0RHZQqN6UyP5wkM54gMaY+PgC1WGDlUGevJz6PHC57FCSVHC5+ECWfRDqkXzumWz2QSi91MyFtLB5sEx1nDxtyEh6GGSiFFieSHSylJjUA3VBkui1Emx8xhhUlgRYngBQkiBUqlC00jEssk0oufTckdTMhYiEbcRAgdhIhfxYkgxkmexIjihcomyAuAMg3TqMgNpEaLYATI4EWJ3gRIZIZLpYeNk0fF3I2IHgzIWMqGmAUGoEUI3wUJIsYJ3YUInASH5EaKpYdLQCxKkCQGSt4EiBxEB16EyN9EiKTGS+zJkFdFSEtDQtFFxFNFRSAFieBFSZ3EiCSGSpvEx9vER6NGSiVGyy0bRHvMSBLiwAAAABJRU5ErkJggg==",width:230,height:230,src:"/static/65797d16af424cddbffebd0e19ab2f56/95d8d/profile-pic.png",srcSet:"/static/65797d16af424cddbffebd0e19ab2f56/95d8d/profile-pic.png 1x,\n/static/65797d16af424cddbffebd0e19ab2f56/f59b0/profile-pic.png 1.5x,\n/static/65797d16af424cddbffebd0e19ab2f56/6280a/profile-pic.png 2x"}}},qrCode:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAD8klEQVQ4yxVTZ09bVxi+/69f2n7ql6pVUpEmTZqWkEEIUJIwgo1tYvDe43rv6z2uFzbe4I0XGBwcbFOcJg1KIlV9Ih0dHR296xkvMWxe5tzVw9DRuDvtH77tZM+yVCXjrNTi3VHnqkK3O7mz88Yk76nh3c6c9gqDWqybpapIJPArW7AolqxWdkC3ThmZPvZtxeNvGKoVe4VuxQ05cp3yCGOqv2zCh3rBnC6mzyGS/au8kewRRV9d+tQknNMHFXuGVx6vOL59R4kg9XOHieGVL1qq0U5QkcLZ/UMbVKaSpqJ5y8+6JasnesS4Nw3I9+LGPMWnt39TIlm2YC54ag5uGP94C+b0+g23WxAlV10ohGR0Bszryy/ERfvKuRsh11z1eJfWZGqxDsq/vqtCq6guF1bvi58YTUwfECkWrWnrQdZV5txWWNiBL//8R5TDLe7v6pSlhD7Aj9+wOu3cpf2ypHjeKH5iStsPkeyX7ek23Lo1SvTIIHqkx1zvh9fEUerELYwplm0hZTplK0W0GTzy7hr6F32NiGYf5UAYDuuWHFWUS1Zam/FKEkfpPnFWuXALYuDWygnYtoOoDZygRDpvAp8FX13zwuHYCVP8qHrFjtvFo5PmYtZV+Tj+REDDkr8RUoJMjYsX4c+SNJkFQiSQa5Ru3Y3OfmkyaS7EDDnk2F+Hdu9rMcj07ANxcjCESRAtXTAfBJvNvWMnL8KakaqWbRiScVMCqpXLNtCmX3cjzM4NYTp8/jv6RIy6Vxs/C3mzJJDzH5A44APCQALpU7NqxYFyeXfVxadRGg21qy44ZO1H/uT43VfCQD1KtrOnPmlC/swS02UtLD8eAF+OtDLOMsZGKzPLD/5ggY2fhEvfcya9d8S4M4Xo+lce8WMDVC0FGuoVB8ppXzqNmx4T0wsiuffUkGDnvgaiQn/cz75lw13Em9qIc0fB+1MLM3LvqsATpgV+uM246V38jg3zGTY96IlyMJlXFId5GTfEp4dDohRoRskspPKI4lCScVPskyQSxrzmhTNtO4BmmAsSgnMc8IJCsDAs2M0PvmI2M31ACEsxZ2ToZuMEwS0i0A1pjeQxaBc80D3/YQciQ0iYkjer7aNzLz+gyQy8uTUjLfobPmkS+4QFBIXAon3pKnjrUBt7jhiKR0MwcpXi3lPBIASW3soJOnYiUM+85YN7Wvt90AttIQxa5agqQCWMBfgc0+F4RDHBQ/1F628CpmH8IgGTcDytzQIFGkJ5WB8TYW8l86bNG2JgwRTQAgDxg+neDz8Sw+YEa91M9lrp/vXl5/PGOOMoHxffDBuTk9J5NdrGksIe08GHSW+K4Lg+D6oG1dH15PP/+g89cTLU1e8AAAAASUVORK5CYII=",width:230,height:230,src:"/static/3fa9f097daa4768fc959d070dcfad511/95d8d/vcard-qr-code.png",srcSet:"/static/3fa9f097daa4768fc959d070dcfad511/95d8d/vcard-qr-code.png 1x,\n/static/3fa9f097daa4768fc959d070dcfad511/f59b0/vcard-qr-code.png 1.5x,\n/static/3fa9f097daa4768fc959d070dcfad511/6280a/vcard-qr-code.png 2x,\n/static/3fa9f097daa4768fc959d070dcfad511/b99a7/vcard-qr-code.png 3x"}}},site:{siteMetadata:{author:"Tan Li Hau"}}}}},192:function(e,t,a){"use strict";a(193)("fixed",function(e){return function(){return e(this,"tt","","")}})},193:function(e,t,a){var r=a(12),n=a(15),i=a(21),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},194:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(36)),l=r(a(82)),o=r(a(83)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+l+o+a+n+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},u,{onLoad:s,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,E=e.backgroundColor,y=e.Tag,A=e.itemProp,S="boolean"==typeof E?"lightgray":E,v=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),I=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),w={title:t,alt:this.state.isVisible?"":a,style:v,className:p};if(m){var k=m;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&c.default.createElement(b,(0,o.default)({src:k.base64},w)),k.tracedSVG&&c.default.createElement(b,(0,o.default)({src:k.tracedSVG},w)),S&&c.default.createElement(y,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:k.sizes,src:k.src,srcSet:k.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},k))}}))}if(h){var x=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&c.default.createElement(b,(0,o.default)({src:x.base64},w)),x.tracedSVG&&c.default.createElement(b,(0,o.default)({src:x.tracedSVG},w)),S&&c.default.createElement(y,{title:t,style:{backgroundColor:S,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(b,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,srcSet:x.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:A})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),A=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:y,sizes:A,fixed:y,fluid:A,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=E;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-7fdbd8540bbdcbd0587e.js.map