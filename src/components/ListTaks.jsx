import React from 'react';
import propTypes from 'prop-types'
import Table from './Table'
import stylesListTaks from './ListTasks.module.css'
import { sortIdTask, sortStatusTask } from '../helper/sortTasks';

const ListTaks = ({tasks, editTask, deleteTask, checked, category, deleteTasks}) => {

    let ordered_tasks = sortStatusTask({tasks, category});
    ordered_tasks = sortIdTask({ordered_tasks});

  return (
    <>
        <h2 style={
            {
                background:'#f2f2f2', 
                width:'90%', 
                padding:'10px', 
                borderRadius:'10px',
                border:'1px solid #d2d2d2', 
                textAlign:'center',
                marginBottom:'15px'
            }
        }>List Tasks</h2>

        {ordered_tasks.length > 0 && 
            <button 
                onClick={deleteTasks} 
                className={stylesListTaks.button_delete_tasks}>
                Delete Tasks
            </button>
        }

        <Table 
            ordered_tasks={ordered_tasks} 
            editTask={editTask} 
            deleteTask={deleteTask} 
            checked={checked}
        />
    </>
  )
}

ListTaks.propTypes = {
    tasks : propTypes.arrayOf(Object).isRequired,
    editTask : propTypes.func.isRequired,
    deleteTask : propTypes.func.isRequired,
    checked : propTypes.func.isRequired,
    category : propTypes.number,
    deleteTasks : propTypes.func.isRequired,
}

function areEqual(prevProps, nextProps) {
    // Aquí, solo estamos comparando si la prop 'value' ha cambiado
    return prevProps.tasks === nextProps.tasks 
        && prevProps.category === nextProps.category    
}

export default React.memo(ListTaks,areEqual)
