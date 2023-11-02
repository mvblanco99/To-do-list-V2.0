import StatusTasks from './components/StatusTasks'
import CreateTask from './components/CreateTask'
import ListTaks from './components/ListTaks'
import stylesApp from './App.module.css';
import SearchTask from './components/SearchTask';

function App() {
  
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

          <SearchTask />
          <br />
          <StatusTasks /> 
          <br />
          <CreateTask />
          <br />
          <ListTaks />
        </div>
    </>
  )
}

export default App
