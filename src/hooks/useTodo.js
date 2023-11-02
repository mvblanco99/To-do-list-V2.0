import { useContext, useEffect } from "react"
import { TaskContext } from "../context/TaskContext"

export const useTodo = () => {
    
    const context = useContext(TaskContext);

    if(context === undefined)  throw new Error('Cannot access task context');
    
    const { dispatch, setIdTasks, state } = context;
    const { taskSearch } = state 
    
    useEffect(()=>{
        dispatch({
            type: 'GET_TASKS_LOCAL_STORAGE',
            payload: {setIdTasks}
        })
    },[])

    useEffect(()=>{
        if(taskSearch.length < 1){
            dispatch({
                type: 'UPDATE_SEARCH_VALUE',
            })
        }
    },[taskSearch])

    return context
}