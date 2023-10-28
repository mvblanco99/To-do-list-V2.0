import propTypes from 'prop-types'
import stylesSearchTask from './SearchTask.module.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchTask = ({tasks,taskSearch,searchTask,handleChangeSearch}) => {
    
    const handleClick = () => {
        searchTask({tasks,taskSearch})
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
                        value={taskSearch}
                        onChange={handleChangeSearch}
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
    tasks : propTypes.arrayOf(Object).isRequired,
    taskSearch : propTypes.string.isRequired,
    searchTask : propTypes.func.isRequired,
    handleChangeSearch : propTypes.func.isRequired,
}

export default SearchTask