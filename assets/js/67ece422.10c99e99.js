"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[6129],{3006:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>k});var t=o(4848),n=o(8453);const s={},a="Create workbook",l={id:"code-snippets/workbook/create-workbook",title:"Create workbook",description:"This example demonstrates how to create a workbook when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/workbook/create-workbook.md",sourceDirName:"code-snippets/workbook",slug:"/code-snippets/workbook/create-workbook",permalink:"/xceed-docs-words/workbooks/code-snippets/workbook/create-workbook",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Workbooks",permalink:"/xceed-docs-words/workbooks/category/workbooks"},next:{title:"Calculate Workbook formulas",permalink:"/xceed-docs-words/workbooks/code-snippets/workbook/calculate-workbook-formulas"}},i={},k=[];function w(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"create-workbook",children:"Create workbook"})}),"\n",(0,t.jsx)(r.p,{children:"This example demonstrates how to create a workbook when using the API from the Xceed Workbooks for .NET."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-csharp",children:'    public static void CreateWorkbook()\r\n    {\r\n      using( var workbook = Workbook.Create( "CreateWorkbook.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Create a Workbook";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Generate stats.\r\n        var rnd = new Random();\r\n        var northDivisionTeams = new Dictionary<string, Data>()\r\n        {\r\n          { "Montreal Canadiens", GetStats(rnd) },\r\n          { "Toronto Maple Leafs", GetStats(rnd) },\r\n          { "Edmonton Oilers", GetStats(rnd) },\r\n          { "Calgary Flames", GetStats(rnd) },\r\n          { "Winnipeg Jets", GetStats(rnd) },\r\n          { "Ottawa Senators", GetStats(rnd) },\r\n          { "Vancouver Canucks", GetStats(rnd) }\r\n        };\r\n\r\n        // Fill cells values and row styles/size.\r\n        worksheet.Rows[ 4 ].Cells[ 2 ].Value = "2021 NHL Standings";\r\n        worksheet.Rows[ 4 ].Style.Font.Bold = true;\r\n        worksheet.Rows[ 4 ].Height = 50;\r\n\r\n        worksheet.Rows[ 5 ].Cells[ 0 ].Value = "North Division";\r\n        worksheet.Rows[ 6 ].Cells[ 1 ].Value = "Pts";\r\n        worksheet.Rows[ 6 ].Cells[ 2 ].Value = "Wins";\r\n        worksheet.Rows[ 6 ].Cells[ 3 ].Value = "%";\r\n        worksheet.Rows[ 6 ].Cells[ 4 ].Value = "In Playoffs";\r\n        worksheet.Rows[ 6 ].Cells[ 5 ].Value = "Last Win";\r\n        worksheet.Rows[ 6 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n\r\n        var teams = northDivisionTeams.OrderByDescending( entry => entry.Value.Pts );\r\n        for( int i = 0; i < teams.Count(); ++i )\r\n        {\r\n          var team = teams.ElementAt( i );\r\n          worksheet.Rows[ 7 + i ].Cells[ 0 ].Value = team.Key;\r\n          worksheet.Rows[ 7 + i ].Cells[ 1 ].Value = team.Value.Pts;\r\n          worksheet.Rows[ 7 + i ].Cells[ 2 ].Value = team.Value.Wins;\r\n          worksheet.Rows[ 7 + i ].Cells[ 3 ].Value = team.Value.Percent;\r\n          worksheet.Rows[ 7 + i ].Cells[ 4 ].Value = ( i <= 3 );\r\n          worksheet.Rows[ 7 + i ].Cells[ 5 ].Value = team.Value.LastWin;\r\n        }\r\n\r\n        // Set the style display format for all cells in column "D".\r\n        worksheet.Columns[ "D" ].Style.CustomFormat = "0.000";\r\n\r\n        // AutoFit all columns with content, from row 6 to 13, with a minimum width of 0 and a maximum width of 255.\r\n        worksheet.Columns.AutoFit( 0, 255, 6, 13 );\r\n\r\n        // Set Outline and inside borders for CellRange A7 to F14.\r\n        worksheet.Cells[ "A7", "F14" ].Style.Borders.SetOutline( LineStyle.Medium, System.Drawing.Color.Blue );\r\n        worksheet.Cells[ "A7", "F14" ].Style.Borders.SetInside( LineStyle.Medium, System.Drawing.Color.Blue );\r\n\r\n        // Set Fill for CellRange A7 to F7\r\n        worksheet.Cells[ "A7", "F7" ].Style.Fill.BackgroundColor = System.Drawing.Color.Orange;\r\n\r\n        // Save the created workbook.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: CreateWorkbook.xlsx\\n" );\r\n      }\r\n    }\r\n\r\n    static Data GetStats( Random rnd )\r\n    {\r\n      var wins = rnd.Next( 0, 57 );\r\n      var pts = ( wins * 2 ) + rnd.Next( 0, 56 - wins ) / 2;\r\n      var percent = Convert.ToDouble( wins ) / 56d;\r\n      var lastWin = new DateTime( 2021, rnd.Next( 3, 5 ), rnd.Next( 1, 31 ) );\r\n\r\n      return new Data() \r\n      { Pts = pts, \r\n        Wins = wins, \r\n        Percent = percent, \r\n        LastWin = lastWin\r\n      };\r\n    }\r\n\r\n    private struct Data\r\n    {\r\n      public int Pts;\r\n      public int Wins;\r\n      public double Percent;\r\n      public DateTime LastWin;\r\n    };\n'})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(w,{...e})}):w(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>l});var t=o(6540);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);