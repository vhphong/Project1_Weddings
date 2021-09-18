import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
// import Table from 'react-bootstrap/Table';

import WeddingPlannerPage from './WeddingPlannerService/wedding-planner-page';
import WeddingManagementPage from './WeddingPlannerService/wedding-management-page';
import CreateNewWeddingForm from './WeddingPlannerService/create-wedding-form';
import AllWeddingViewerPage from './WeddingPlannerService/all-wedding-viewer-page';
import OneWeddingViewerPage from './WeddingPlannerService/one-wedding-viewer-page';
import UpdateWeddingForm from './WeddingPlannerService/update-wedding-form';
import DeleteWeddingForm from './WeddingPlannerService/delete-wedding-form';

import ExpenseManagementPage from './WeddingPlannerService/expense-management-page';
import CreateNewExpenseForm from './WeddingPlannerService/create-expense-form';
import AllExpenseViewerPage from './WeddingPlannerService/all-expense-viewer-page';
import OneExpenseViewerPage from './WeddingPlannerService/one-expense-viewer-page';
import UpdateExpenseForm from './WeddingPlannerService/update-expense-form';
import DeleteExpenseForm from './WeddingPlannerService/delete-expense-form';

import EmployeeLoginPage from './AuthorizationService/employee-login-page';

import MessageServicePage from './MessageService/message-service-page';
import CreateMessagePage from './MessageService/create-message-page';
import AllMessageViewerPage from './MessageService/all-message-viewer-page';
import AllMessageViewerPageOfSender from './MessageService/all-message-viewer-page-of-sender';
import AllMessageViewerPageOfRecipient from './MessageService/all-message-viewer-page-of-recipient';
import AllMessageViewerPageOfSenderRecipient from './MessageService/all-message-viewer-page-of-sender-recipient';


// import OneWeddingTable from './components/one-wedding-table';
// import './index.css';


// port: 3001
// https://www.w3spoint.com/router-reactjs
// https://www.w3adda.com/react-js-tutorial/reactjs-router
// https://stackoverflow.com/questions/51215209/react-js-button-not-calling-function-from-another-file
ReactDOM.render(
  <React.StrictMode>

    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>


      <button onClick={() => window.open("/login", "_self")}>Login Page</button>
      <button onClick={() => window.open("/messagesservice", "_self")}>Message Service Page</button>
      <button onClick={() => window.open("/weddingplanner", "_self")}>Wedding Planner Page</button>
      


      {/* <button onClick={() => window.open("/weddings", "_self")}>Wedding Page</button>
      <button onClick={() => window.open("/weddings", "_self")}>Wedding Page</button>
      <button onClick={() => window.open("/expenses", "_self")}>Expense Page</button> */}


      {/* There are 2 ways to integrate components in the routes */}
      <Route path="/weddingplanner"><WeddingPlannerPage></WeddingPlannerPage></Route>

      <Route path="/weddings" component={WeddingManagementPage} />

      <Route path="/weddings/create" component={CreateNewWeddingForm} />

      <Route path="/weddings/viewall" component={AllWeddingViewerPage} />

      <Route path="/weddings/view" component={OneWeddingViewerPage} />

      <Route path="/weddings/update" component={UpdateWeddingForm} />

      <Route path="/weddings/delete" component={DeleteWeddingForm} />



      <Route path="/expenses"><ExpenseManagementPage></ExpenseManagementPage></Route>

      <Route path="/expenses/create"><CreateNewExpenseForm></CreateNewExpenseForm></Route>

      <Route path="/expenses/viewall"><AllExpenseViewerPage></AllExpenseViewerPage></Route>

      <Route path="/expenses/view"><OneExpenseViewerPage></OneExpenseViewerPage></Route>

      <Route path="/expenses/update"><UpdateExpenseForm></UpdateExpenseForm></Route>

      <Route path="/expenses/delete"><DeleteExpenseForm></DeleteExpenseForm></Route>



      <Route path="/login"><EmployeeLoginPage></EmployeeLoginPage></Route>



      <Route path="/messagesservice"><MessageServicePage></MessageServicePage></Route>

      <Route path="/messages/create"><CreateMessagePage></CreateMessagePage></Route>

      <Route path="/messages/viewall"><AllMessageViewerPage></AllMessageViewerPage></Route>

      <Route path="/messages/sender"><AllMessageViewerPageOfSender></AllMessageViewerPageOfSender></Route>

      <Route path="/messages/recipient"><AllMessageViewerPageOfRecipient></AllMessageViewerPageOfRecipient></Route>
      
      <Route path="/messages/sender_recipient"><AllMessageViewerPageOfSenderRecipient></AllMessageViewerPageOfSenderRecipient></Route>

      





      




    </Router>


  {/* <OneWeddingTable></OneWeddingTable> */}

  </React.StrictMode>,
  document.getElementById('root')
);

