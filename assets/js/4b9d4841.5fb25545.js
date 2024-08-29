"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[7323],{1633:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=t(4848),n=t(8453),i=t(1470),a=t(9365);const o={},c="Copying items to a tar archive",l={id:"basic-concepts/tar-gzip-capabilities/tar/copy-item-tar-archive",title:"Copying items to a tar archive",description:"This topic demonstrates how to copy files and folders to a GZipped Tar archive using a disk folder as the source where the files to process are located.",source:"@site/zip/basic-concepts/tar-gzip-capabilities/tar/copy-item-tar-archive.md",sourceDirName:"basic-concepts/tar-gzip-capabilities/tar",slug:"/basic-concepts/tar-gzip-capabilities/tar/copy-item-tar-archive",permalink:"/xceed-docs-words/zip/basic-concepts/tar-gzip-capabilities/tar/copy-item-tar-archive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Removing items from a tar archive",permalink:"/xceed-docs-words/zip/basic-concepts/tar-gzip-capabilities/tar/removing-item-tarfile"},next:{title:"Extracting items from a tar archive",permalink:"/xceed-docs-words/zip/basic-concepts/tar-gzip-capabilities/tar/extract-item-tar-archive"}},d={},u=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"copying-items-to-a-tar-archive",children:"Copying items to a tar archive"})}),"\n",(0,s.jsx)(r.p,{children:"This topic demonstrates how to copy files and folders to a GZipped Tar archive using a disk folder as the source where the files to process are located."}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsx)(r.p,{children:"Tar and FileSystem-based GZip are not currently available in Xceed's .NET Compact Framework products."})}),"\n",(0,s.jsx)(r.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,s.jsx)(r.p,{children:"To copy items to a Tar archive, the following steps must be performed:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Retrieve a reference to a folder whose files will be added to the Tar archive, using a ",(0,s.jsx)(r.code,{children:"DiskFolder"}),", ",(0,s.jsx)(r.code,{children:"ZipArchive"}),", ",(0,s.jsx)(r.code,{children:"MemoryFolder"})," or ",(0,s.jsx)(r.code,{children:"IsolatedFolder"})," class. With Xceed's FileSystem-based products, a folder is a folder: it does not matter if it is located within a Tar archive, on disk or in memory."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Retrieve a reference to an ",(0,s.jsx)(r.code,{children:"AbstractFile"}),"-derived class (such as ",(0,s.jsx)(r.code,{children:"DiskFile"}),"), using the name of the Tar archive."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Retrieve a reference to a GZip file using the ",(0,s.jsx)(r.code,{children:"GZippedFile"})," class, passing the AbstractFile-based object retrieved in the previous step to its constructor."]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsx)(r.p,{children:"To create a non-GZipped Tar archive, omit this step."})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Retrieve a reference to a new or existing Tar archive using the ",(0,s.jsx)(r.code,{children:"TarArchive"})," class, passing the GZippedFile retrieved in the previous step to its constructor (or the DiskFile object from the first step for a non-GZipped Tar archive)."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Call the ",(0,s.jsx)(r.code,{children:"CopyFilesTo"})," method to copy the entire contents of the folder to the Tar archive."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["When performing many operations on an archive, you may wish to consider optimizing your code by using ",(0,s.jsx)(r.a,{href:"/zip/basic-concepts/optimizing-batch-updates-to-folder",children:"batch updates"}),"."]})}),"\n",(0,s.jsx)(r.p,{children:"Using a non-GZipped Tar archive may be preferable in some situations, for example, when read/write speed is essential but storage space is not, when you need to access individual files in the Tar archive without uncompressing the entire archive, or when the files inside the Tar archive are already compressed."}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsx)(r.p,{children:"Setting the LicenseKey property with Tar also unlocks the GZip capabilities."})}),"\n",(0,s.jsx)(r.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,s.jsx)(r.p,{children:"This example demonstrates how to copy files from a disk folder to a GZipped Tar archive."}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",children:'  using Xceed.Tar;\r\n  using Xceed.GZip;\r\n  using Xceed.FileSystem;\r\n\r\n  DiskFolder source = new DiskFolder(@"c:\\temp");\r\n  DiskFile dest = new DiskFile(@"c:\\test.tar.gz");\r\n  TarArchive tar = new TarArchive(new GZippedFile(dest, "test.tar")); \r\n\r\n  source.CopyFilesTo(tar, true, true);\n'})})}),(0,s.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-vb.NET",children:'  Imports Xceed.Tar\r\n  Imports Xceed.GZip\r\n  Imports Xceed.FileSystem\r\n\r\n  Dim source As New DiskFolder("c:\\temp")\r\n  Dim dest As New DiskFile("c:\\test.tar.gz")\r\n  Dim gzip As New GZippedFile(dest, "test.tar)\r\n  Dim tar As New TarArchive(gzip) \r\n\r\n  source.CopyFilesTo(tar, True, True)\n'})})})]}),"\n",(0,s.jsx)(r.p,{children:"This example demonstrates how to copy files from a disk folder to a non-GZipped Tar archive."}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",children:'  using Xceed.Tar;\r\n  using Xceed.FileSystem;\r\n\r\n  DiskFolder source = new DiskFolder(@"c:\\temp");\r\n  DiskFile dest = new DiskFile(@"c:\\test.tar");\r\n  TarArchive tar = new TarArchive(dest); \r\n\r\n  source.CopyFilesTo(tar, true, true);\n'})})}),(0,s.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-vb.NET",children:'  Imports Xceed.Tar\r\n  Imports Xceed.FileSystem\r\n\r\n  Dim source As New DiskFolder("c:\\temp")\r\n  Dim dest As New DiskFile("c:\\test.tar")\r\n  Dim tar As New TarArchive(dest) \r\n\r\n  source.CopyFilesTo(tar, True, True)\n'})})})]}),"\n",(0,s.jsx)(r.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,s.jsx)(r.p,{children:"The main questions you should ask yourself when copying items to a Tar archive are:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Do you want to copy a file rather than a folder or its contents? Create a ",(0,s.jsx)(r.code,{children:"DiskFile"})," class rather than a ",(0,s.jsx)(r.code,{children:"DiskFolder"})," class."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be added to the Tar archive? Use ",(0,s.jsx)(r.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Do you want to add items into a specific folder within the Tar archive file? Create an instance of a ",(0,s.jsx)(r.code,{children:"TarredFolder"})," object rather than a ",(0,s.jsx)(r.code,{children:"TarArchive"})," object."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,s.jsx)(r.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Do you want to move items rather than copy them? Use the ",(0,s.jsx)(r.code,{children:"MoveTo"})," and ",(0,s.jsx)(r.code,{children:"MoveFilesTo"})," methods."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Do you want to change the location of the temporary folder? Set the ",(0,s.jsx)(r.code,{children:"TarArchive"}),"'s ",(0,s.jsx)(r.code,{children:"TempFolder"})," property."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>a});t(6540);var s=t(4164);const n={tabItem:"tabItem_Ymn6"};var i=t(4848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,a),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>T});var s=t(6540),n=t(4164),i=t(3104),a=t(6347),o=t(205),c=t(7485),l=t(1682),d=t(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,i=h(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[l,u]=m({queryString:t,groupId:n}),[f,v]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,d.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),x=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var v=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function j(e){let{className:r,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),n=o[t].value;n!==s&&(l(r),a(n))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,n.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function g(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...r,...e}),(0,b.jsx)(y,{...r,...e})]})}function T(e){const r=(0,v.A)();return(0,b.jsx)(g,{...e,children:u(e.children)},String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var s=t(6540);const n={},i=s.createContext(n);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);