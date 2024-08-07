import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
// import {AddNewItem} from '../components';
// import {addNewElementToKanban} from '../components';
const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl relative">
    <Header category="App" title="Kanban" />
    
    
    {/* <addNewElementToKanban info1="Id" info2="Title" info3="Status" info4="Summary" info5="Type" info6="Priority" info7="Tags" info8="Estimate" info9="Assignee" info10="RankId" info11="Color"/> */}
    
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
    
  </div>
);

export default Kanban;
