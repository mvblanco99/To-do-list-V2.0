import stylesSearchTask from './SearchTask.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useTodo } from '../hooks/useTodo';
import { useRef } from 'react';

const SearchTask = () => {
    
    const { dispatch, state } = useTodo()
    const { taskSearch } = state 
    const previousSearchTask = useRef('')

    const handleChange = (e) => {
        dispatch({
            type : 'HANDLE_INPUT_CHANGE_TASK_SEARCH',
            payload : { e }
        })
    }

    const handleClick = () => {

        if(previousSearchTask.current === taskSearch) return
        previousSearchTask.current = taskSearch

        dispatch({
            type : 'SEARCH_TASK',
        })
    }

    return (
    <>
        <div className={stylesSearchTask.container_form_search}>
            <form className="form-search">
                <label htmlFor="search">
                    <input 
                        type="text" 
                        name="search" 
                        id="search"
                        placeholder="Insert task name"
                        className={stylesSearchTask.input} 
                        onChange={handleChange}
                        value={taskSearch}
                    />
                </label>
                
            </form>
        
            <button 
                onClick={handleClick}
                className={stylesSearchTask.container_button}>
                <SearchIcon/> 
            </button>       
        </div>   
    </>
  )
}

SearchTask.propTypes = {
   
}

export default SearchTask