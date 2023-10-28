import React from 'react';
import propTypes from 'prop-types'
import stylesCreateTask from './CreateTask.module.css'

const CreateTask = ({ handleChange, task, saveTask, action }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask({task})
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

CreateTask.propTypes = {
  task : propTypes.object,
  handleChange : propTypes.func.isRequired,
  saveTask : propTypes.func.isRequired,
  action : propTypes.string.isRequired,
}

function areEqual(prevProps, nextProps) {
  // Aquí, solo estamos comparando si la prop 'value' ha cambiado
  return prevProps.task === nextProps.task;
}

export default React.memo(CreateTask, areEqual)