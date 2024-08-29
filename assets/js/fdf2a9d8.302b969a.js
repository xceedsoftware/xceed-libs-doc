"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[1995],{3396:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=i(4848),n=i(8453),a=i(1470),o=i(9365);const s={},l="Copying items to a zip file (zipping)",c={id:"basic-concepts/zipping/copy-items-zip-file",title:"Copying items to a zip file (zipping)",description:"This topic demonstrates how to copy files and folders to a zip file using a disk folder as the source where the files to process are located.",source:"@site/zip/basic-concepts/zipping/copy-items-zip-file.md",sourceDirName:"basic-concepts/zipping",slug:"/basic-concepts/zipping/copy-items-zip-file",permalink:"/xceed-docs-words/zip/basic-concepts/zipping/copy-items-zip-file",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Zipping",permalink:"/xceed-docs-words/zip/category/zipping"},next:{title:"Creating a zip file in memory",permalink:"/xceed-docs-words/zip/basic-concepts/zipping/create-zip-in-memory"}},d={},p=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"copying-items-to-a-zip-file-zipping",children:"Copying items to a zip file (zipping)"})}),"\n",(0,r.jsx)(t.p,{children:"This topic demonstrates how to copy files and folders to a zip file using a disk folder as the source where the files to process are located."}),"\n",(0,r.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,r.jsx)(t.p,{children:"To copy items to a zip file, the following steps must be performed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Step 1:"})," Retrieve a reference to a folder whose files will be added to the zip file, using either the ",(0,r.jsx)(t.code,{children:"DiskFolder"}),", ",(0,r.jsx)(t.code,{children:"ZippedFolder"}),", ",(0,r.jsx)(t.code,{children:"ZipArchive"}),", ",(0,r.jsx)(t.code,{children:"MemoryFolder"}),", or ",(0,r.jsx)(t.code,{children:"IsolatedFolder"})," classes. With Xceed's FileSystem-based products, a folder is a folder; it does not matter if it is located within a zip file, on disk, or in memory."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Step 2:"})," Retrieve a reference to a new or existing zip file using the ",(0,r.jsx)(t.code,{children:"ZipArchive"})," class."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Step 3:"})," Call the ",(0,r.jsx)(t.code,{children:"CopyFilesTo"})," method to copy the entire contents of the folder to the zip file."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,r.jsx)(t.p,{children:"This example demonstrates how to copy files from a disk folder to a zip file."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  public static void CopyItemsToZip()\r\n  {\r\n    // Select a file that will be our zip file\r\n    AbstractFile zipFile = new DiskFile( "CopyItemsToZip1.zip" );\r\n\r\n    /* The component doesn\'t have distinct add and update operations.\r\n      If you want any existing zip file to be overwritten, you need to delete the\r\n      zip file before starting to perform any operation. */\r\n\r\n    // If the zip file already exists\r\n    if( zipFile.Exists )\r\n      // Delete it\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    /* It may be tempting to Create() the zip file before starting to perform operations.\r\n      But this is an unnecessary step that will hinder performance. Indeed, if the component\r\n      sees that the zip file doesn\'t already exist, it can perform optimizations when adding\r\n      files. */\r\n    //zipFile.Create();\r\n\r\n    /* When performing multiple operations on a zip archive, the best performance can\r\n      be achieved by wrapping the operations in a \'batch update\'. This will make the\r\n      component wait until all relevant operations are completed before writing the \r\n      zip archive final structure and metadata, greatly improving performance with large\r\n      archives. */\r\n\r\n    // Wrap the operations that modify the zip archive in a batch update\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      // Select a source folder\r\n      AbstractFolder sourceFolder = new DiskFolder( @"D:\\Data" );\r\n\r\n      // Zip the files in the source folder into the zip archive\r\n      sourceFolder.CopyFilesTo( zip, true, true );\r\n\r\n      // Select an individual file\r\n      AbstractFile sourceFile = new DiskFile( @"SomeFile.dat" );\r\n\r\n      // Select a specific target name and path for the file in the archive\r\n      AbstractFile targetFile = zip.GetFile( @"MyFolder1\\MyFolder2\\MyNamedFile.mydata" );\r\n\r\n      // Zip it to the archive\r\n      sourceFile.CopyTo( targetFile, true );\r\n    }\r\n  }\n'})})}),(0,r.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:"  Public Shared Sub CopyItemsToZip()\r\n  ' Select a file that will be our zip file\r\n  Dim zipFile As AbstractFile = New DiskFile(\"CopyItemsToZip1.zip\")\r\n\r\n'       The component doesn't have distinct add and update operations.\r\n'         If you want any existing zip file to be overwritten, you need to delete the\r\n'         zip file before starting to perform any operation. \r\n\r\n  ' If the zip file already exists\r\n  If zipFile.Exists Then\r\n    ' Delete it\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n'       It may be tempting to Create() the zip file before starting to perform operations.\r\n'         But this is an unnecessary step that will hinder performance. Indeed, if the component\r\n'         sees that the zip file doesn't already exist, it can perform optimizations when adding\r\n'         files. \r\n  'zipFile.Create();\r\n\r\n'       When performing multiple operations on a zip archive, the best performance can\r\n'         be achieved by wrapping the operations in a 'batch update'. This will make the\r\n'         component wait until all relevant operations are completed before writing the \r\n'         zip archive final structure and metadata, greatly improving performance with large\r\n'         archives. \r\n\r\n  ' Wrap the operations that modify the zip archive in a batch update\r\n  Using batch As New AutoBatchUpdate(zip)\r\n    ' Select a source folder\r\n    Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\Data\")\r\n\r\n    ' Zip the files in the source folder into the zip archive\r\n    sourceFolder.CopyFilesTo(zip, True, True)\r\n\r\n    ' Select an individual file\r\n    Dim sourceFile As AbstractFile = New DiskFile(\"SomeFile.dat\")\r\n\r\n    ' Select a specific target name and path for the file in the archive\r\n    Dim targetFile As AbstractFile = zip.GetFile(\"MyFolder1\\MyFolder2\\MyNamedFile.mydata\")\r\n\r\n    ' Zip it to the archive\r\n    sourceFile.CopyTo(targetFile, True)\r\n  End Using\r\nEnd Sub\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,r.jsx)(t.p,{children:"The main questions you should ask yourself when copying items to a zip file are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you want to copy a file rather than a folder or its contents? Create a ",(0,r.jsx)(t.code,{children:"DiskFile"})," class rather than a ",(0,r.jsx)(t.code,{children:"DiskFolder"})," class."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be added to the zip file? Use ",(0,r.jsx)(t.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you want to add items into a specific folder within the zip file? Create an instance of a ",(0,r.jsx)(t.code,{children:"ZippedFolder"})," object rather than a ",(0,r.jsx)(t.code,{children:"ZipArchive"})," object."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,r.jsx)(t.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you want to move items rather than copy them? Use the ",(0,r.jsx)(t.code,{children:"MoveTo"})," and ",(0,r.jsx)(t.code,{children:"MoveFilesTo"})," methods."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you want to change the location of the temporary folder. Set the ZipArchive's ",(0,r.jsx)(t.code,{children:"TempFolder"})," or ",(0,r.jsx)(t.code,{children:"DefaultTempFolder"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you only want to do basic zip file operations? Use the ",(0,r.jsx)(t.a,{href:"/zip/basic-concepts/quick-zip",children:"QuickZip"})," class."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Do you want to modify the default extra headers that are stored to a zip file? Set the ZipArchive's DefaultExtraHeaders property."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["All zip files will automatically be created in the ",(0,r.jsx)(t.a,{href:"/zip/basic-concepts/zip64-zip-file-format",children:"Zip64 zip file format"})," if the limitations of the regular Zip format are reached."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,i)=>{i.d(t,{A:()=>o});i(6540);var r=i(4164);const n={tabItem:"tabItem_Ymn6"};var a=i(4848);function o(e){let{children:t,hidden:i,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,o),hidden:i,children:t})}},1470:(e,t,i)=>{i.d(t,{A:()=>w});var r=i(6540),n=i(4164),a=i(3104),o=i(6347),s=i(205),l=i(7485),c=i(1682),d=i(679);function p(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:i}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:i,attributes:r,default:n}}=e;return{value:t,label:i,attributes:r,default:n}}))}(i);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function u(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:i}=e;const n=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function m(e){const{defaultValue:t,queryString:i=!1,groupId:n}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=i.find((e=>e.default))??i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,p]=f({queryString:i,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Dv)(i);return[n,(0,r.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:n}),y=(()=>{const e=c??m;return u({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,a]),tabValues:a}}var b=i(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(4848);function v(e){let{className:t,block:i,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),n=s[i].value;n!==r&&(c(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":i},t),children:s.map((e=>{let{value:t,label:i,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:p,onClick:d,...a,className:(0,n.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":r===t}),children:i??t},t)}))})}function x(e){let{lazy:t,children:i,selectedValue:a}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function z(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(z,{...e,children:p(e.children)},String(t))}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var r=i(6540);const n={},a=r.createContext(n);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);