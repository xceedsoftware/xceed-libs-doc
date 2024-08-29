"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[6529],{8851:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(4848),r=s(8453),i=s(1470),a=s(9365);const o={},l="How to license the component",c={id:"installation-instructions/how-to-license-component",title:"How to license the component",description:"If you have a registered license key (available through subscriptions), here is how the licensing process works:",source:"@site/zip/installation-instructions/how-to-license-component.md",sourceDirName:"installation-instructions",slug:"/installation-instructions/how-to-license-component",permalink:"/xceed-docs-words/zip/installation-instructions/how-to-license-component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"How the 45-day trial works",permalink:"/xceed-docs-words/zip/installation-instructions/how-45-trial-works"},next:{title:"Installation for C#",permalink:"/xceed-docs-words/zip/installation-instructions/installation-csharp"}},u={},d=[{value:"LicenseKey property",id:"licensekey-property",level:2},{value:"Zip and Compression capabilities",id:"zip-and-compression-capabilities",level:2},{value:"Compression.Formats",id:"compressionformats",level:4},{value:"Compression only",id:"compression-only",level:4},{value:"Tar &amp; GZip",id:"tar--gzip",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"how-to-license-the-component",children:"How to license the component"})}),"\n",(0,t.jsx)(n.p,{children:"If you have a registered license key (available through subscriptions), here is how the licensing process works:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Receive your registered license key at the email address used during the purchase."}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"Licenser.LicenseKey"})," property with this license key. See the ",(0,t.jsx)(n.strong,{children:"LicenseKey property"})," section below for details."]}),"\n",(0,t.jsx)(n.li,{children:"Compile your application and deploy it."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you do not have a registered license key, please contact Xceed at ",(0,t.jsx)(n.a,{href:"mailto:sales@xceed.com",children:"sales@xceed.com"})," to purchase a subscription or to have your license key resent to you if you have lost it."]}),"\n",(0,t.jsx)(n.p,{children:"If you have an active subscription, you will be sent new license keys for every major, minor, or service release. Making sure you have an active subscription ensures that you can use the new features and bug fixes of the latest versions, and also receive priority support. Once your subscription expires, your license keys will still work, but will not unlock features and bug fixes in versions released after the version to which your latest registered license key corresponds."}),"\n",(0,t.jsx)(n.h2,{id:"licensekey-property",children:"LicenseKey property"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"LicenseKey"})," property of the ",(0,t.jsx)(n.strong,{children:"Licenser"})," class must be set with a valid license key, before any other method of your Xceed component is called. If you use an invalid or expired license key, fail to license the control with a registered license key after the trial period, or license it in the wrong place in your code, an exception will be thrown at runtime."]}),"\n",(0,t.jsxs)(n.p,{children:["We recommend that you set the LicenseKey property in the ",(0,t.jsx)(n.em,{children:"main"})," entry point of the application. For example, C# users can set the ",(0,t.jsx)(n.code,{children:"LicenseKey"})," property in the static main function. VB.NET users can set the ",(0,t.jsx)(n.code,{children:"LicenseKey"}),' property in the constructor of the main form or in the "Sub Main" procedure.']}),"\n",(0,t.jsx)(n.p,{children:"If no entry point is available, it is recommended that you set the LicenseKey property in a static constructor of a class that will be accessed systematically before any of the library's classes are instantiated, or you can simply set the LicenseKey property immediately BEFORE you instantiate a class."}),"\n",(0,t.jsx)(n.p,{children:"Xceed's .NET products are currently distributed for both .NET 4 and .NET 3.5; the product version numbers for these builds are different. However, only keys whose prefix contains .NET 4.0 build version numbers are distributed, which can be used to unlock both the .NET 4 and the corresponding .NET 3.5 version of the product."}),"\n",(0,t.jsx)(n.p,{children:"When a new version of the product is released and you receive a new license key during your subscription, download and install the new version and be sure to use the new license key instead."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'The keys you are sent must be used in their entirety: you cannot simply exchange "ZIN" for "FTN", for example, and use the rest of your "XX-XXXXX-XXXXX-XXXX" license key.'})}),"\n",(0,t.jsx)(n.h2,{id:"zip-and-compression-capabilities",children:"Zip and Compression capabilities"}),"\n",(0,t.jsxs)(n.p,{children:["To use the Zip capabilities, set the ",(0,t.jsx)(n.code,{children:"LicenseKey"}),' property as follows (using your own valid license key); note that the key begins with "ZIN". Older keys may begin with "SFN". Xamarin keys begin with "ZXA".']}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  Xceed.Zip.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX";\n'})})}),(0,t.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.net",children:'  Xceed.Zip.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX";\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Setting the ",(0,t.jsx)(n.code,{children:"LicenseKey"})," property of the ",(0,t.jsx)(n.code,{children:"Licenser"})," class in the ",(0,t.jsx)(n.code,{children:"Xceed.Zip"})," namespace will also automatically register the classes in the ",(0,t.jsx)(n.code,{children:"Xceed.FileSystem"})," and ",(0,t.jsx)(n.code,{children:"Xceed.Compression"})," namespaces."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The classes in the ",(0,t.jsx)(n.code,{children:"Xceed.Compression.Formats"})," namespace are not automatically registered. This is because they are not used by the Zip functionality. See below to learn how to activate them."]})}),"\n",(0,t.jsx)(n.h4,{id:"compressionformats",children:"Compression.Formats"}),"\n",(0,t.jsxs)(n.p,{children:["To use the classes under the ",(0,t.jsx)(n.code,{children:"Xceed.Compression.Formats"})," namespace (like ",(0,t.jsx)(n.code,{children:"XceedXCompressedStream"})," or ",(0,t.jsx)(n.code,{children:"GZipCompressedStream"}),"), set the ",(0,t.jsx)(n.strong,{children:"LicenseKey"})," property of the Licenser class contained within the namespace:"]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  Xceed.Compression.Formats.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX";\n'})})}),(0,t.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.net",children:'  Xceed.Compression.Formats.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX"\n'})})})]}),"\n",(0,t.jsx)(n.h4,{id:"compression-only",children:"Compression only"}),"\n",(0,t.jsx)(n.p,{children:"The same applies if you are only using the classes contained within the Xceed.Compression namespace"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  Xceed.Compression.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX";\n'})})}),(0,t.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.net",children:'  Xceed.Compression.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX"\n'})})})]}),"\n",(0,t.jsx)(n.h4,{id:"tar--gzip",children:"Tar & GZip"}),"\n",(0,t.jsx)(n.p,{children:"To use the Tar and GZip capabilities, the classes in the Xceed.Tar and Xceed.GZip namespace, set the LicenseKey of the Licenser class using the Zip key. Note that by setting the LicenseKey property on Tar, you also automatically unlock the GZip capabilities:"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  Xceed.Tar.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX";\n'})})}),(0,t.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.net",children:'  Xceed.Tar.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX"\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"If you only wish to use the GZip capabilities, set the LicenseKey property as follows:"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  Xceed.GZip.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX";\n'})})}),(0,t.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.net",children:'  Xceed.GZip.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX"\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var t=s(4164);const r={tabItem:"tabItem_Ymn6"};var i=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>g});var t=s(6540),r=s(4164),i=s(3104),a=s(6347),o=s(205),l=s(7485),c=s(1682),u=s(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function X(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=X({queryString:s,groupId:r}),[m,y]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,i]),tabValues:i}}var y=s(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function x(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,s=l.indexOf(n),r=o[s].value;r!==t&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function g(e){const n=(0,y.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);