"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[9811],{7898:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=i(4848),r=i(8453),a=i(1470),s=i(9365);const o={},l="Copying an item to a gzip file",c={id:"basic-concepts/tar-gzip-capabilities/gzip/copy-item-to-gzip",title:"Copying an item to a gzip file",description:"This topic demonstrates how to create a GZip archive.",source:"@site/zip/basic-concepts/tar-gzip-capabilities/gzip/copy-item-to-gzip.md",sourceDirName:"basic-concepts/tar-gzip-capabilities/gzip",slug:"/basic-concepts/tar-gzip-capabilities/gzip/copy-item-to-gzip",permalink:"/xceed-docs-words/zip/basic-concepts/tar-gzip-capabilities/gzip/copy-item-to-gzip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Xceed GZip",permalink:"/xceed-docs-words/zip/basic-concepts/tar-gzip-capabilities/gzip/overview"},next:{title:"Extracting from a gzip file",permalink:"/xceed-docs-words/zip/basic-concepts/tar-gzip-capabilities/gzip/extracting-from-gzip"}},u={},d=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"copying-an-item-to-a-gzip-file",children:"Copying an item to a gzip file"})}),"\n",(0,n.jsx)(t.p,{children:"This topic demonstrates how to create a GZip archive."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"FileSystem-based GZip is not currently available in Xceed's .NET Compact Framework products."})}),"\n",(0,n.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,n.jsx)(t.p,{children:"To create a GZipped file, the following steps must be performed:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve a reference to the file that will be added to the GZip archive, using an ",(0,n.jsx)(t.code,{children:"AbstractFile-derived"})," class such as the ",(0,n.jsx)(t.code,{children:"DiskFile"}),", ",(0,n.jsx)(t.code,{children:"MemoryFile"})," or ",(0,n.jsx)(t.code,{children:"IsolatedFile"})," classes. With Xceed\u2019s FileSystem-based products, a file is a file: it does not matter if it is located in a GZip archive, on disk or in memory."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve a reference to a new GZip archive using the ",(0,n.jsx)(t.code,{children:"GZipArchive"})," class."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Call the ",(0,n.jsx)(t.code,{children:"CopyTo"})," method to copy the file to the GZip file."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["When performing many operations on an archive, you may wish to consider optimizing your code by using ",(0,n.jsx)(t.a,{href:"/zip/basic-concepts/optimizing-batch-updates-to-folder",children:"batch updates"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,n.jsx)(t.p,{children:"This example demonstrates how to copy a file to a GZip archive."}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.GZip;\r\n  using Xceed.FileSystem;\r\n\r\n  DiskFile sourceFile = new DiskFile(@"C:\\test.txt");\r\n\r\n  sourceFile.CopyTo(new GZipArchive(new DiskFile(@"C:\\test.gz")), true);\n'})})}),(0,n.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vb.NET",children:'  Imports Xceed.GZip\r\n  Imports Xceed.FileSystem\r\n\r\n  Dim sourceFile as New DiskFile(@"C:\\test.txt")\r\n\r\n  sourceFile.CopyTo(New GZipArchive(New DiskFile(@"C:\\test.gz")), True)\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,n.jsx)(t.p,{children:"The main questions you should ask yourself when copying items to a GZip file are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to copy the contents of a folder rather than a single file? Although not a typical use of GZip, the format and Xceed's implementation allows for this. See ",(0,n.jsx)(t.a,{href:"/zip/basic-concepts/tar-gzip-capabilities/gzip/performing-multifile-gzip",children:"Multi-file operations"})," for details."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to move items rather than copy them? Use the ",(0,n.jsx)(t.code,{children:"MoveTo"})," method."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,t,i)=>{i.d(t,{A:()=>s});i(6540);var n=i(4164);const r={tabItem:"tabItem_Ymn6"};var a=i(4848);function s(e){let{children:t,hidden:i,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:i,children:t})}},1470:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(6540),r=i(4164),a=i(3104),s=i(6347),o=i(205),l=i(7485),c=i(1682),u=i(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:r}}=e;return{value:t,label:i,attributes:n,default:r}}))}(i);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:i=!1,groupId:r}=e,a=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:i,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(i);return[r,(0,n.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:r}),g=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=i(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(4848);function x(e){let{className:t,block:i,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,i=l.indexOf(t),r=o[i].value;r!==n&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},t),children:o.map((e=>{let{value:t,label:i,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function y(e){let{lazy:t,children:i,selectedValue:a}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(6540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);