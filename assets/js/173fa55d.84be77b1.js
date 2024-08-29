"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[6441],{8387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const r={},i="Identifying notes comments",a={id:"code-snippets/annotation/identifying-notes-comments",title:"Identifying notes comments",description:"This example demonstrates how to identify a note comment when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/annotation/identifying-notes-comments.md",sourceDirName:"code-snippets/annotation",slug:"/code-snippets/annotation/identifying-notes-comments",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/identifying-notes-comments",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Changing Note formatting",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/changing-note-formatting"},next:{title:"Cell",permalink:"/xceed-docs-words/workbooks/category/cell"}},d={},c=[];function m(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"identifying-notes-comments",children:"Identifying notes comments"})}),"\n",(0,o.jsx)(n.p,{children:"This example demonstrates how to identify a note comment when using the API from the Xceed Workbooks for .NET."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'    public static void IdentifyNotesOrComments()\r\n    {\r\n      using( var workbook = Workbook.Create( "IdentifyNotesFromComments.xlsx" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n        var annotations = workbook.Worksheets[ 0 ].Annotations;\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Identify Notes Or Comments";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        //Add a Comment.\r\n        annotations.AddComment( "This is the title of the document." , "B3" );\r\n\r\n        //Add a Note.\r\n        annotations.AddNote( new FormattedText( "This is a note" ) , "B5" , false );\r\n\r\n        worksheet.Cells[ "C3" ].Value = annotations[ "B3" ].AnnotationType;\r\n        worksheet.Cells[ "C5" ].Value = annotations[ "B5" ].AnnotationType;\r\n\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: IdentifyNotesOrComments.xlsx\\n" );\r\n      }\r\n    }\r\n\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);