import Button from './Button'
import propTypes from 'prop-types'
import stylesTable from './Table.module.css'

const Table = ({ordered_tasks, editTask, deleteTask, checked}) => {

    const handleChecked = (e,task) => {
        checked({task})
    }

    return (
    <>
         {
            ordered_tasks.length > 0
            ?    
                ordered_tasks.map((task) => {
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
                                                {!task.completedTask && 
                                                <form action="">
                                                    <input 
                                                        type="checkbox" 
                                                        name="checked" 
                                                        id="checked"
                                                        value={task.completedTask}
                                                        onClick={(e) => {handleChecked(e,task)}}
                                                    />
                                                </form>}
                                            </div>
                                            
                                        </th>
                                        <td>{task.completedTask ? 'Completed' : 'No Completed'}</td>
                                        <td>
                                            <Button name='Edit' func={editTask} param={task}/>
                                            <Button name='Delete' func={deleteTask} param={task}/>
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
    ordered_tasks : propTypes.arrayOf(Object).isRequired,
    editTask : propTypes.func.isRequired,
    deleteTask : propTypes.func.isRequired,
    checked : propTypes.func.isRequired,
}

export default Table