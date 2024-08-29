"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[9423],{6012:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>u,contentTitle:()=>n,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>k});var l=r(4848),s=r(8453);const t={},n="Calculate Workbook formulas",a={id:"code-snippets/workbook/calculate-workbook-formulas",title:"Calculate Workbook formulas",description:"This example demonstrates how to calculate Workbook formulas when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/workbook/calculate-workbook-formulas.md",sourceDirName:"code-snippets/workbook",slug:"/code-snippets/workbook/calculate-workbook-formulas",permalink:"/xceed-docs-words/workbooks/code-snippets/workbook/calculate-workbook-formulas",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Create workbook",permalink:"/xceed-docs-words/workbooks/code-snippets/workbook/create-workbook"},next:{title:"Load Workbook with filename",permalink:"/xceed-docs-words/workbooks/code-snippets/workbook/load-workbook-from-filename"}},u={},k=[];function c(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.header,{children:(0,l.jsx)(o.h1,{id:"calculate-workbook-formulas",children:"Calculate Workbook formulas"})}),"\n",(0,l.jsx)(o.p,{children:"This example demonstrates how to calculate Workbook formulas when using the API from the Xceed Workbooks for .NET."}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-csharp",children:'    public static void CalculateWorkbookFormulas()\r\n    {\r\n      using( var workbook = Workbook.Create( "CalculateWorkbookFormulas.xlsx" ) )\r\n      {\r\n        // Add a second worksheet in workbook.\r\n        workbook.Worksheets.Add();\r\n\r\n        var worksheetA = workbook.Worksheets[ 0 ];\r\n        var worksheetB = workbook.Worksheets[ 1 ];\r\n\r\n        // Add a title.\r\n        worksheetA.Cells[ "B1" ].Value = "Calculate Workbook Formulas";\r\n        worksheetA.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Fill cells values in WorksheetA.\r\n        worksheetA.Cells[ "A5" ].Value = "Employees";\r\n        worksheetA.Cells[ "B5" ].Value = "Salary";\r\n        worksheetA.Cells[ "A6" ].Value = "Mike Jones";\r\n        worksheetA.Cells[ "B6" ].Value = 52000;\r\n        worksheetA.Cells[ "A7" ].Value = "Cathy Smith";\r\n        worksheetA.Cells[ "B7" ].Value = 46000;\r\n        worksheetA.Cells[ "A8" ].Value = "Kevin Malcolm";\r\n        worksheetA.Cells[ "B8" ].Value = 77000;\r\n        worksheetA.Cells[ "A9" ].Value = "Jenny McIntyre";\r\n        worksheetA.Cells[ "B9" ].Value = 61000;\r\n        worksheetA.Cells[ "A10" ].Value = "AVERAGE:";\r\n\r\n        // AutoFit first column in WorksheetA.\r\n        worksheetA.Columns["A"].AutoFit();\r\n\r\n        // Set Font for 5th and 10th row.\r\n        worksheetA.Rows[ 4 ].Style.Font.Bold = true;\r\n        worksheetA.Rows[ 9 ].Style.Font.Bold = true;\r\n\r\n        // Set second column\'s format in WorksheetA and width.\r\n        worksheetA.Columns[ "B" ].Style.CustomFormat = "$#,###";\r\n        worksheetA.Columns[ "B" ].Width = 12d;\r\n\r\n        // Set average employees salary formula in WorksheetA.\r\n        worksheetA.Cells[ "B10" ].Formula = "=AVERAGE(B6:B9)";\r\n\r\n        // Fill cells values in WorksheetB.\r\n        worksheetB.Cells[ "A1" ].Value = "Item number";\r\n        worksheetB.Cells[ "B1" ].Value = "Screws required";\r\n        worksheetB.Cells[ "A2" ].Value = "G017";\r\n        worksheetB.Cells[ "B2" ].Value = 22;\r\n        worksheetB.Cells[ "A3" ].Value = "K147";\r\n        worksheetB.Cells[ "B3" ].Value = 32;\r\n        worksheetB.Cells[ "A4" ].Value = "A689";\r\n        worksheetB.Cells[ "B4" ].Value = 12;\r\n        worksheetB.Cells[ "A5" ].Value = "B127";\r\n        worksheetB.Cells[ "B5" ].Value = 16;\r\n        worksheetB.Cells[ "A6" ].Value = "TOTAL:";\r\n\r\n        // AutoFit all columns in WorksheetB.\r\n        worksheetB.Columns.AutoFit();\r\n\r\n        // Set Font for 1st and 6th row.\r\n        worksheetB.Rows[ 0 ].Style.Font.Bold = true;\r\n        worksheetB.Rows[ 5 ].Style.Font.Bold = true;\r\n\r\n        // Set total screws required formula in WorksheetB.\r\n        worksheetB.Cells[ "B6" ].Formula = "=SUM(B2:B5)";\r\n\r\n        // Cells with formula do not set their Value property until opened with MS Excel or CalculateFormulas() is called.\r\n        var worksheetA_averageValue = worksheetA.Cells[ "B10" ].Value;\r\n        var worksheetB_sumValue = worksheetB.Cells[ "B6" ].Value;\r\n        Debug.Assert( worksheetA_averageValue == null );\r\n        Debug.Assert( worksheetB_sumValue == null );\r\n\r\n        // Calculate formulas for all worksheets.\r\n        workbook.CalculateFormulas();\r\n\r\n        // Cells with formula now have their Value property calculated .\r\n        worksheetA_averageValue = worksheetA.Cells[ "B10" ].Value;\r\n        worksheetB_sumValue = worksheetB.Cells[ "B6" ].Value;\r\n        Debug.Assert( worksheetA_averageValue != null );\r\n        Debug.Assert( worksheetB_sumValue != null );\r\n\r\n        // Display calculation results in other cells.\r\n        worksheetA.Cells[ "C15" ].Value = "Result of formula calculation for Sheet1 is:  " + worksheetA_averageValue;\r\n        worksheetA.Cells[ "C16" ].Value = "Result of formula calculation for Sheet2 is:  " + worksheetB_sumValue;\r\n\r\n        // Save workbook to disk.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: CalculateWorkbookFormulas.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>n,x:()=>a});var l=r(6540);const s={},t=l.createContext(s);function n(e){const o=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),l.createElement(t.Provider,{value:o},e.children)}}}]);