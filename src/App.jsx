import StatusTasks from './components/StatusTasks'
import CreateTask from './components/CreateTask'
import ListTaks from './components/ListTaks'
import SearchTask from './components/SearchTask'
import { useTodo } from './hooks/useTodo'
import stylesApp from './App.module.css';
import { useSearch } from './hooks/useSearch'
import useStatus from './hooks/useStatus'

function App() {

  const {
    handleChange, 
    task,  
    saveTask, 
    tasks, 
    editTask, 
    deleteTask, 
    checked, 
    action, 
    deleteTasks 
  } = useTodo();

  const { 
    search, 
    searchTask,
    handleChange : handleChangeSearch,
    task : taskSearch,
    isSearch
  } = useSearch();

  const {
    category, 
    sortCategory
  } = useStatus();
  
  return (
    <>
        <div className={stylesApp.container_app}>

          <h1 style={
            {
              background:'#f2f2f2', 
              width:'90%', 
              padding:'10px', 
              borderRadius:'10px',
              border:'1px solid #d2d2d2', 
              textAlign:'center',
              marginBottom:'20px'
            }
          }>To Do List</h1>

          <SearchTask 
            tasks={tasks} 
            taskSearch={taskSearch} 
            searchTask={searchTask} 
            handleChangeSearch={handleChangeSearch}
          />
          <br />
          <StatusTasks 
            sortCategory={sortCategory}
            category={category}
            tasks = {tasks}
          />
          <br />
          <CreateTask 
            handleChange={handleChange} 
            task={task} 
            saveTask={saveTask} 
            action={action}
          />
          <br />

          {isSearch && taskSearch.length > 0
            ? 
            <ListTaks 
              tasks={search} 
              editTask={editTask} 
              deleteTask={deleteTask} 
              checked={checked} 
              category = {category}
              deleteTasks={deleteTasks}
            />
            :
            <ListTaks 
              tasks={tasks} 
              editTask={editTask} 
              deleteTask={deleteTask} 
              checked={checked} 
              category = {category}
              deleteTasks={deleteTasks}
            />
          } 
        </div>
    </>
  )
}

export default App
