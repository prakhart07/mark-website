import { useState } from 'react';
import DataTable from 'react-data-table-component';

function Admin(){

    const [taskData,setTaskData]=useState();

    function edit(){
            alert("edit");
    }

    function deleteTask(){
        alert("deletetask");
    }

    const columns = [
        {
            name: 'Section Name',
            selector: row => row.startdate,
        },
        {
            name: 'Task',
            selector: row => row.task,
        },
        {
            name: 'Status',
            selector: row => row.progress,
        },
      {
            name: 'End Date',
            selector: row => row.enddate,
        },
        {
          name: 'Complete',
          cell: row => <button className='btn btn-success' onClick={() => edit(row.task)}>Done</button>
        },

          {
            name: 'Action delete',
            cell: row => {
              return <button className='btn btn-danger'  onClick={() => deleteTask(row.task)}>Delete</button>
            }
          },
    ];

    return(
        <div className="container-fluid bg-light">
                <DataTable
         columns={columns}
        data={taskData}/>
        </div>
    )
}

export default Admin;