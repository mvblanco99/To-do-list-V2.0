import stylesCreateTask from './CreateTask.module.css'
import { useTodo } from '../hooks/useTodo';

const CreateTask = () => {

  const { dispatch, setIdTasks, state } = useTodo();
  const { task, action } = state

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type : 'ADD_TASK',
      payload : {setIdTasks}
    })
  }

  const handleChange = (e) => {
    dispatch({
      type : 'HANDLE_INPUT_CHANGE',
      payload : {e}
    })
  }

  return (
    <>
      <div className={stylesCreateTask.container_form_create_task}>
        
        <h2>Create New Task</h2>
        
        <form className={stylesCreateTask.form_create_task} onSubmit={handleSubmit}>
          <label htmlFor="nameTask">
            <input 
              type="text" 
              name="nameTask" 
              id="nameTask" 
              value={task.nameTask}
              onChange={handleChange}
              className={stylesCreateTask.input}
              placeholder='Ingresa Nueva Tarea'
            />
          </label>
          

          <input 
            type="submit" 
            value={action}
            className={stylesCreateTask.input_submit}
          />
        </form>
      </div>
    </>
  )
}

export default CreateTask