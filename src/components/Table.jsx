import Button from './Button'
import propTypes from 'prop-types'
import stylesTable from './Table.module.css'
import { useTodo } from '../hooks/useTodo'
import React from 'react'

const Table = ({ordered_tasks}) => {

    const { dispatch } = useTodo();

    const handleClick = (e,task) => {
        dispatch({
            type : 'TASK_CHECKED',
            payload : {task}
        })
    }

    return (
    <>
         {
            ordered_tasks.length > 0
            ?    
                ordered_tasks.map((task) => {
                    console.log('se Renderiza de nuevo')
                    return (
                        <div className={stylesTable.container_table} key={task.id}>
                            <table className={stylesTable.table}>
                                <thead className={stylesTable.thead}>
                                    <tr>
                                        <th scope="col">Task</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">actions</th>
                                    </tr>
                                </thead>

                                <tbody className={stylesTable.tbody}>
                                    <tr key={task.id}>
                                        <th scope="row">
                                            <div className={stylesTable.first_column}>
                                                {task.nameTask}
                                                {
                                                    !task.completedTask && 
                                                    <form action="">
                                                        <input 
                                                            type="checkbox" 
                                                            name="checked" 
                                                            id="checked"
                                                            value={task.completedTask}
                                                            onClick = {(e)=>{handleClick(e,task)}}
                                                        />
                                                    </form>
                                                }
                                            </div>
                                            
                                        </th>
                                        <td>{task.completedTask ? 'Completed' : 'No Completed'}</td>
                                        <td>
                                            <Button 
                                                name='Edit' 
                                                task={task}
                                            />
                                            <Button 
                                                name='Delete'  
                                                task={task}
                                            />
                                        </td>
                                
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }) 
            : <p className={stylesTable.no_results}>No hay resultados</p>
        } 
    </>     
    )
}

Table.propTypes = {
    ordered_tasks : propTypes.arrayOf(Object).isRequired
}

function areEqual(prevProps, nextProps) {
    // Aquí, estamos comparando si las props 'tasks' y 'checked' han cambiado
    console.log(prevProps.ordered_tasks)
    console.log('-----------------------------')
    console.log(nextProps.ordered_tasks)
    return prevProps.ordered_tasks === nextProps.ordered_tasks 
}

export default React.memo(Table, areEqual)