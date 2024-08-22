"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[5866],{6843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var o=n(4848),c=n(8453);const d={},r="Converting to PDF",s={id:"code-snippets/documents/converting-to-pdf",title:"Converting to PDF",description:"The following example demonstrates how to convert a docx Document to PDF.",source:"@site/docs/code-snippets/documents/converting-to-pdf.md",sourceDirName:"code-snippets/documents",slug:"/code-snippets/documents/converting-to-pdf",permalink:"/xceed-docs-words/docs/code-snippets/documents/converting-to-pdf",draft:!1,unlisted:!1,editUrl:"https://github.com/vargasrxceed/xceed-docs-words/docs/code-snippets/documents/converting-to-pdf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Replacing Text",permalink:"/xceed-docs-words/docs/code-snippets/documents/replacing-text"},next:{title:"Adding a Picture",permalink:"/xceed-docs-words/docs/code-snippets/pictures/adding-picture"}},i={},l=[];function a(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"converting-to-pdf",children:"Converting to PDF"})}),"\n",(0,o.jsx)(t.p,{children:"The following example demonstrates how to convert a docx Document to PDF."}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Most of the docx features will be converted to PDF."}),"\n",(0,o.jsxs)(t.li,{children:["You need the ",(0,o.jsx)(t.code,{children:"Xceed.Pdf.dll"})," reference in order to convert to PDF."]}),"\n",(0,o.jsxs)(t.li,{children:["To convert a Document with a specific font to PDF, the font (a ",(0,o.jsx)(t.code,{children:".ttf"})," file) must be installed in ",(0,o.jsx)(t.code,{children:"Control Panel\\All Control Panel Items\\Fonts"}),", otherwise the default Arial font will be used to generate the PDF Document."]}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'// Load a document\r\nusing (var document = DocX.Load("DocumentToConvert.docx"))\r\n{\r\n  // Convert the Document to PDF.\r\n  DocX.ConvertToPdf(document, "ConvertedDocument.pdf");\r\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const c={},d=o.createContext(c);function r(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);