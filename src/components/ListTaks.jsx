import Table from './Table'
import stylesListTaks from './ListTasks.module.css'
import { sortIdTask, sortStatusTask } from '../helper/sortTasks';
import { useTodo } from '../hooks/useTodo';

const ListTaks = () => {

    const {state, dispatch} = useTodo();
    console.log('me renderice')
    const { tasks, status, tasksFound, search,taskSearch} = state;

    const handleClick = () => {
        dispatch({
            type : 'DELETE_TASKS'
        })
    }

    const showTasks = taskSearch.length < 1 
        ? tasks 
        : search && taskSearch.length > 0
            ? tasksFound
            : tasks

    let ordered_tasks = sortStatusTask({showTasks, status});
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
                onClick={handleClick} 
                className={stylesListTaks.button_delete_tasks}>
                Delete Tasks
            </button>
        }

        <Table 
            ordered_tasks={ordered_tasks} 
        />
    </>
  )
}

export default ListTaks
