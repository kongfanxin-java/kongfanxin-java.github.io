import{_ as s,d as p,a as t,o,c as d,b as g}from"./app.012aded6.js";const l=["href","title"],_=["src","alt"],i=p({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,required:!1,default:"next"}},setup(a){const e=a,n=t(()=>`https://www.npmjs.com/package/${e.package}`),c=t(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),r=t(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(c.value)}`);return(u,m)=>(o(),d("a",{class:"npm-badge",href:n.value,title:a.package,target:"_blank",rel:"noopener noreferrer"},[g("img",{src:r.value,alt:a.package},null,8,_)],8,l))}});var k=s(i,[["__scopeId","data-v-6c2ce24c"],["__file","NpmBadge.vue"]]);export{k as default};
