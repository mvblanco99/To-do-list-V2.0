import propTypes from 'prop-types'
import Button from './Button'
import stylesStatusTask from './StatusTasks.module.css'
import { setActive } from '../helper/setActive'

const StatusTasks = ({sortCategory, category, tasks}) => {

  return (
    <>  
      <div className={stylesStatusTask.container_status_tasks}>

          <h2>Select a state</h2>
          <div className={stylesStatusTask.container_buttons}>
            <Button 
              name='All' 
              func={sortCategory} 
              param='all' 
              active={setActive(category,0)}
              tasks = {tasks}
            />  
            <Button 
              name='Completed' 
              func={sortCategory} 
              param='completed' 
              active={setActive(category,1)}
              tasks = {tasks}
            /> 
            <Button 
              name='No Completed' 
              func={sortCategory} 
              param='noCompleted'
              active={setActive(category,2)}
              tasks = {tasks}
            />
          </div> 
              
      </div>
    </>
  )
}

StatusTasks.propTypes = {
  sortCategory : propTypes.func.isRequired,
  category : propTypes.number.isRequired,
  tasks: propTypes.arrayOf(Object)
}

export default StatusTasks