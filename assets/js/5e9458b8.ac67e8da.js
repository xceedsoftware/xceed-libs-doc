"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[5055],{4896:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>w,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var n=r(4848),s=r(8453);const t={},l="Freeze rows & columns",d={id:"code-snippets/sheetview/freeze-rows-columns",title:"Freeze rows & columns",description:"This example demonstrates how to freeze rows and columns when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/sheetview/freeze-rows-columns.md",sourceDirName:"code-snippets/sheetview",slug:"/code-snippets/sheetview/freeze-rows-columns",permalink:"/xceed-docs-words/workbooks/code-snippets/sheetview/freeze-rows-columns",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Set Zoom and view type",permalink:"/xceed-docs-words/workbooks/code-snippets/sheetview/set-zoom-view-type"},next:{title:"Split rows & columns",permalink:"/xceed-docs-words/workbooks/code-snippets/sheetview/split-rows-columns"}},i={},a=[];function c(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"freeze-rows--columns",children:"Freeze rows & columns"})}),"\n",(0,n.jsx)(o.p,{children:"This example demonstrates how to freeze rows and columns when using the API from the Xceed Workbooks for .NET."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:'    public static void FreezeRowsColumns()\r\n    {\r\n      using( var workbook = Workbook.Create( "FreezeRowsColumns.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Freeze Rows and Columns";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Fill cells content.\r\n        FillCellContent( worksheet );\r\n\r\n        // Freeze horizontally after first 5 rows and add a Fill Background on them.\r\n        worksheet.SheetView.FrozenRows = 5;\r\n        worksheet.Rows[ 0, 4 ].Style.Fill.BackgroundColor = System.Drawing.Color.Turquoise;\r\n\r\n        // Freeze vertically after first Column and add a Fill Background on it.\r\n        worksheet.SheetView.FrozenColumns = 1;\r\n        worksheet.Columns[ 0 ].Style.Fill.BackgroundColor = System.Drawing.Color.Tan;\r\n\r\n        // Save workbook to disk.\r\n        workbook.SaveAs( "FreezeRowsColumns.xlsx" );\r\n        Console.WriteLine( "\\tCreated: FreezeRowsColumns.xlsx\\n" );\r\n      }\r\n    }\r\n\r\n    private static void FillCellContent( Worksheet worksheet )\r\n    {\r\n      var random = new Random();\r\n\r\n      Debug.Assert( worksheet != null, "Worksheet whouldn\'t be null.");\r\n\r\n      for( var columnId = 1; columnId <= 50; ++columnId )\r\n      {\r\n        // First Rows of data cells.\r\n        worksheet.Cells[ 4, columnId ].Value = new DateTime( 2022, 6, 1 ).AddDays( columnId - 1 );\r\n      }\r\n      for( var rowId = 5; rowId < 53; ++rowId )\r\n      {\r\n        // First Columns of data cells.\r\n        worksheet.Cells[ rowId, 0 ].Value = new DateTime( 2022, 6, 1 ).AddMinutes( ( rowId - 5 ) * 30 );\r\n      }\r\n      for( var columnId = 1; columnId <= 50; ++columnId )\r\n      {\r\n        for( var rowId = 5; rowId < 53; ++rowId )\r\n        {\r\n          // Inner cells.\r\n          worksheet.Cells[ rowId, columnId ].Value = random.Next( 0, 2 ) == 1 ? "YES" : "NO";\r\n        }\r\n      }\r\n\r\n      // Format DateTimes.\r\n      worksheet.Rows[ 4 ].Style.CustomFormat = "yyyy/MM/dd";\r\n      worksheet.Columns[ 0 ].Style.CustomFormat = "HH:mm";\r\n\r\n      // Center cell content rowId, columnId from (4, 0) to (52, 50)\r\n      worksheet.Cells[ 4, 0, 52, 50 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n\r\n      // AutoFit Columns, with a width from 0 to 255, starting at rowId 4.\r\n      worksheet.Columns.AutoFit( 0, 255, 4 );\r\n    }\n'})})]})}function w(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>l,x:()=>d});var n=r(6540);const s={},t=n.createContext(s);function l(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);