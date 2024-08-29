"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[6593],{7911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=r(4848),n=r(8453);const s={},a="Import CSV",i={id:"code-snippets/import-data/import-csv",title:"Import CSV",description:"This example demonstrates how to import csv when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/import-data/import-csv.md",sourceDirName:"code-snippets/import-data",slug:"/code-snippets/import-data/import-csv",permalink:"/xceed-docs-words/workbooks/code-snippets/import-data/import-csv",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Import collections",permalink:"/xceed-docs-words/workbooks/code-snippets/import-data/import-collections"},next:{title:"Import datatables",permalink:"/xceed-docs-words/workbooks/code-snippets/import-data/import-datatables"}},p={},c=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"import-csv",children:"Import CSV"})}),"\n",(0,o.jsx)(t.p,{children:"This example demonstrates how to import csv when using the API from the Xceed Workbooks for .NET."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'    public static void ImportCSV()\r\n    {\r\n      using( var workbook = Workbook.Create( "ImportCSV.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Import CSV";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        worksheet.Cells[ "B4" ].Value = "Import a CSV from a string:";\r\n        worksheet.Cells[ "B4" ].Style.Font.Color = Color.Blue;\r\n\r\n        // Define a path to a csv document, the import options(which separator to use) and call the ImportData function.\r\n        var stringSCVData = ImportDataSample.ImportDataSampleResourcesDirectory + @"Book1.csv";\r\n        var stringCSVImportOptions = new CSVImportOptions() { DestinationTopLeftAddress = "C5", Separator = "," };\r\n        worksheet.ImportData( stringSCVData, stringCSVImportOptions );\r\n\r\n\r\n        worksheet.Cells[ "B11" ].Value = "Import a CSV from a stream:";\r\n        worksheet.Cells[ "B11" ].Style.Font.Color = Color.Blue;\r\n\r\n        // Define a stream from a csv document, the import options(which separator to use) and call the ImportData function.\r\n        var streamCSVData = new MemoryStream();\r\n        var file = new FileStream( ImportDataSample.ImportDataSampleResourcesDirectory + @"Book1.csv", FileMode.Open, FileAccess.Read );\r\n        var bytes = new byte[ file.Length ];\r\n        file.Read( bytes, 0, ( int )file.Length );\r\n        streamCSVData.Write( bytes, 0, ( int )file.Length );\r\n\r\n        var streamCSVImportOptions = new CSVImportOptions() { DestinationTopLeftAddress = "C12", Separator = "," };\r\n        worksheet.ImportData( stringSCVData, streamCSVImportOptions );\r\n\r\n        // Center data in columns 2 to 10 (columnId starts at 0).\r\n        worksheet.Columns[ 2, 10 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n      \r\n        // Save workbook to disk.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: ImportCSV.xslx\\n" );\r\n      }\r\n    }\r\n    \r\n    private enum Team\r\n    {\r\n      Chicago_Hornets,\r\n      Miami_Ducks,\r\n      NewYork_Bucs,\r\n      LosAngelese_Raiders\r\n    }   \r\n\r\n    private class Player\r\n    {\r\n      public string Name { get; set; }\r\n\r\n      public int Number { get; set; }\r\n\r\n      public Team Team { get; set; }\r\n    }\n'})})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var o=r(6540);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);