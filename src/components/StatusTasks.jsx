import Button from './Button'
import stylesStatusTask from './StatusTasks.module.css'
import { setActive } from '../helper/setActive'
import { useTodo } from '../hooks/useTodo'

const StatusTasks = () => {

  const { state } = useTodo();
  const { status } = state

  return (
    <>  
      <div className={stylesStatusTask.container_status_tasks}>

          <h2>Select a state</h2>
          <div className={stylesStatusTask.container_buttons}>
            <Button 
              name='All' 
              param='all' 
              active={setActive(status,0)}
            />  
            <Button 
              name='Completed' 
              param='completed' 
              active={setActive(status,1)}
            /> 
            <Button 
              name='No Completed'  
              param='noCompleted'
              active={setActive(status,2)}
            />
          </div> 
              
      </div>
    </>
  )
}

export default StatusTasks