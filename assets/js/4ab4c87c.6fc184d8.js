"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4143],{124:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var n=o(4848),r=o(8453);const d={},s="Adding Note",a={id:"code-snippets/annotation/adding-note",title:"Adding Note",description:"This example demonstrates how to add Notes Note when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/annotation/adding-note.md",sourceDirName:"code-snippets/annotation",slug:"/code-snippets/annotation/adding-note",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/adding-note",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Annotations",permalink:"/xceed-docs-words/workbooks/category/annotations"},next:{title:"Adding Comment",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/adding-comment"}},i={},c=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"adding-note",children:"Adding Note"})}),"\n",(0,n.jsx)(t.p,{children:"This example demonstrates how to add Notes Note when using the API from the Xceed Workbooks for .NET."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'    public static void AddNote()\r\n    {\r\n      using( var workbook = Workbook.Create( "AddNote.xlsx" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n        var annotations = worksheet.Annotations;\r\n        var formattedText = new FormattedText( "This is the title of the document" );\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Add Note";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        //Add a note without the name of the person who wrote it.\r\n        annotations.AddNote( formattedText, "B1", false );\r\n\r\n        formattedText.Text = " This is a new text with color";\r\n        formattedText.Font.Color = Color.Green;\r\n\r\n        //Add a note with the name of the person who wrote it and adding style to the text.\r\n        annotations.AddNote( formattedText, "B3" );\r\n\r\n        //Add a note with the name of the person and modify the text of the author name.\r\n        annotations.AddNote( formattedText, "B5" );\r\n\r\n        //Cast the annotation to have the notes functionalities\r\n        Note note = (Note) worksheet.Annotations[ "B5" ];\r\n        note[ 0 ].Font.Color = Color.Red;\r\n        note.BackgroundColor = ColorHelper.FromIndexedColor( 11 );\r\n\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: AddNote.xlsx\\n" );\r\n      }\r\n    }\r\n\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(6540);const r={},d=n.createContext(r);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);