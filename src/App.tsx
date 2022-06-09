import React from 'react';
import './App.css';
import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

class App extends React.Component {
  public kanbanRemoteDatasource : DataManager = new DataManager(
    {
      url: 'https://ej2services.syncfusion.com/production/web-services/api/Kanban',
      adaptor: new ODataAdaptor,
      crossDomain: true
    }
  ); 
  public kanbanDatasource : Object[] = [
    {
      "Id": "Task 1",
      "Title": "Task - 29001",
      "Status": "Open",
      "Summary": "Analyze the new requirements gathered from the customer.",
      "Type": "Story",
      "Priority": "Low",
      "Estimate": 3.5,
      "Assignee": "Nancy Davloio"
  },
  {
      "Id": "Task 2",
      "Title": "Task - 29002",
      "Status": "In Progress",
      "Summary": "Improve application performance",
      "Type": "Improvement",
      "Priority": "Normal",
      "Estimate": 6,
      "Assignee": "Andrew Fuller"
  },
  {
      "Id": "Task 3",
      "Title": "Task - 29003",
      "Status": "Open",
      "Summary": "Arrange a web meeting with the customer to get new requirements.",
      "Type": "Others",
      "Priority": "Critical",
      "Estimate": 5.5,
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 4",
      "Title": "Task - 29004",
      "Status": "In Progress",
      "Summary": "Fix the issues reported in the IE browser.",
      "Type": "Bug",
      "Priority": "Critical",
      "Estimate": 2.5,
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 5",
      "Title": "Task - 29005",
      "Status": "Review",
      "Summary": "Fix the issues reported by the customer.",
      "Type": "Bug",
      "Priority": "Low",
      "Estimate": "3.5",
      "Assignee": "Steven walker"
  },
  {
      "Id": "Task 6",
      "Title": "Task - 29007",
      "Status": "Testing",
      "Summary": "Testing new requirements",
      "Type": "Improvement",
      "Priority": "Low",
      "Estimate": 1.5,
      "Assignee": "Robert King"
  },
  {
      "Id": "Task 7",
      "Title": "Task - 29009",
      "Status": "Review",
      "Summary": "Fix the issues reported in Safari browser.",
      "Type": "Bug",
      "Priority": "Critical",
      "Estimate": 1.5,
      "Assignee": "Nancy Davloio"
  },
  {
      "Id": "Task 8",
      "Title": "Task - 29010",
      "Status": "Close",
      "Summary": "Test the application in the IE browser.",
      "Type": "Story",
      "Priority": "Low",
      "Estimate": 5.5,
      "Assignee": "Margaret hamilt"
  },
  {
      "Id": "Task 9",
      "Title": "Task - 29011",
      "Status": "Testing",
      "Summary": "Testing the issues reported by the customer.",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 1,
      "Assignee": "Steven walker"
  },
  {
      "Id": "Task 10",
      "Title": "Task - 29015",
      "Status": "Open",
      "Summary": "Show the retrieved data from the server in grid control.",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 5.5,
      "Assignee": "Margaret hamilt"
  },
  {
      "Id": "Task 11",
      "Title": "Task - 29016",
      "Status": "In Progress",
      "Summary": "Fix cannot open user’s default database SQL error.",
      "Priority": "Critical",
      "Type": "Bug",
      "Estimate": 2.5,
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 12",
      "Title": "Task - 29017",
      "Status": "Review",
      "Summary": "Fix the issues reported in data binding.",
      "Type": "Story",
      "Priority": "Normal",
      "Estimate": "3.5",
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 13",
      "Title": "Task - 29018",
      "Status": "Close",
      "Summary": "Analyze SQL server 2008 connection.",
      "Type": "Story",
      "Priority": "Critical",
      "Estimate": 2,
      "Assignee": "Andrew Fuller"
  },
  {
      "Id": "Task 14",
      "Title": "Task - 29019",
      "Status": "Testing",
      "Summary": "Testing databinding issues.",
      "Type": "Story",
      "Priority": "Low",
      "Estimate": 1.5,
      "Assignee": "Margaret hamilt"
  },
  {
      "Id": "Task 15",
      "Title": "Task - 29020",
      "Status": "Close",
      "Summary": "Analyze grid control.",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 2.5,
      "Assignee": "Margaret hamilt"
  },
  {
      "Id": "Task 16",
      "Title": "Task - 29021",
      "Status": "Close",
      "Summary": "Stored procedure for initial data binding of the grid.",
      "Type": "Others",
      "Priority": "Critical",
      "Estimate": 1.5,
      "Assignee": "Steven walker"
  },
  {
      "Id": "Task 17",
      "Title": "Task - 29022",
      "Status": "Close",
      "Summary": "Analyze stored procedures.",
      "Type": "Story",
      "Priority": "Critical",
      "Estimate": 5.5,
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 18",
      "Title": "Task - 29023",
      "Status": "Testing",
      "Summary": "Testing editing issues.",
      "Type": "Story",
      "Priority": "Critical",
      "Estimate": 1,
      "Assignee": "Nancy Davloio"
  },
  {
      "Id": "Task 19",
      "Title": "Task - 29024",
      "Status": "Review",
      "Summary": "Test editing functionality.",
      "Type": "Story",
      "Priority": "Normal",
      "Estimate": 0.5,
      "Assignee": "Nancy Davloio"
  },
  {
      "Id": "Task 20",
      "Title": "Task - 29025",
      "Status": "Open",
      "Summary": "Enhance editing functionality.",
      "Type": "Improvement",
      "Priority": "Low",
      "Estimate": 3.5,
      "Assignee": "Andrew Fuller"
  }
  ];
  public cardTooltipTemplate (data: any): JSX.Element {
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td><b>Assignee : </b></td>
              <td>{data.Assignee}</td>
            </tr>
            <tr>
              <td><b>Type : </b></td>
              <td>{data.Type}</td>
            </tr>
            <tr>
              <td><b>Estimate : </b></td>
              <td>{data.Estimate}</td>
            </tr>
            <tr>
              <td><b>Summary : </b></td>
              <td>{data.Summary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    return (<KanbanComponent dataSource={this.kanbanRemoteDatasource} keyField="Status"
    
    cardSettings={{ contentField: "Summary", headerField: "Id", selectionType: "Multiple" }}
    
    width="100%" height="100%" swimlaneSettings={ { keyField: "Assignee"} }
    
    enableTooltip={true} tooltipTemplate={this.cardTooltipTemplate}>
      <ColumnsDirective>
      <ColumnDirective headerText='To Do' keyField="Open"></ColumnDirective>
      <ColumnDirective headerText='In Progress' keyField="In Progress"></ColumnDirective>
      <ColumnDirective headerText='Review' keyField="Review"
      minCount={1} maxCount={3}></ColumnDirective>
      <ColumnDirective headerText='Testing' keyField="Testing"
      minCount={5} maxCount={8}></ColumnDirective>
      <ColumnDirective headerText='Close' keyField="Close"></ColumnDirective>
      </ColumnsDirective>
    </KanbanComponent>);
  }
}
   

export default App;