export const Reducer = (state, action) => {

    const {type : actionType, payload : actionPayload} = action;

    const initialStateTask = {
        nameTask: '',
        completedTask: false,
    }

    switch(actionType){

        case 'ADD_TASK' : {

            const { setIdTasks }  = actionPayload;
            const { task } = state

            if(task.nameTask.length < 1) return {...state}
        
            //Guardamos nueva Tarea
            if(task.id == null){

                setIdTasks.current = setIdTasks.current + 1
    
                const newTask = {
                    nameTask : task.nameTask,
                    completedTask : task.completedTask,
                    id : setIdTasks.current
                }
                
                const { tasks } =  state;
                const newTasks = [...tasks, newTask];
                localStorage.setItem('tasks', JSON.stringify(newTasks))

                return {
                    ...state,
                    tasks : newTasks,
                    task : initialStateTask
                }

            }else{

                const newTask = {
                    nameTask : task.nameTask,
                    completedTask : task.completedTask,
                    id : task.id
                }

                const { tasks } =  state;
                const newTasks = tasks.filter( item => task.id != item.id);
                newTasks.push(newTask);
                localStorage.setItem('tasks', JSON.stringify(newTasks))
                
                return {
                    ...state,
                    tasks : newTasks,
                    action : 'Save',
                    task : initialStateTask
                }
            }
        }

        case 'HANDLE_INPUT_CHANGE' :{

            const { e } = actionPayload
            if(e.target.value.length > 15) return {...state}
            
            //Generamos una copia de la tarea
            const { task } = state;
            const newTask = {...task, nameTask : e.target.value}
            return{
                ...state,
                task : newTask,
            }
        }

        case 'HANDLE_INPUT_CHANGE_TASK_SEARCH' :{

            const { e } = actionPayload
            if(e.target.value.length > 15) return {...state}

            //Generamos una copia de la tarea
            const newTask = e.target.value
            return{
                ...state,
                taskSearch : newTask,
            }
        }

        case 'EDIT_TASK': {

            const { task } = actionPayload;
            
            const newTask = {
                nameTask : task.nameTask,
                completedTask : task.completedTask,
                id : task.id
            }
            
            return {
                ...state,
                action : 'Update',
                task:  newTask
            }
        }

        case 'DELETE_TASK': {
            
            const { task } = actionPayload
            const { tasks } = state

            const newTasks = tasks.filter( item => task.id != item.id);
            localStorage.setItem('tasks', JSON.stringify(newTasks))
            return {
                ...state,
                tasks : newTasks,
                task : initialStateTask
            }
        }

        case 'DELETE_TASKS': {
            return {
                ...state,
                tasks : [],
                task : initialStateTask
            }
        }

        case 'TASK_CHECKED':{

            const { task } = actionPayload
            const { tasks } = state

            const newTask = {
                nameTask : task.nameTask,
                completedTask : !task.completedTask,
                id : task.id
            }

            const newTasks = tasks.filter( item => task.id != item.id);
            newTasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(newTasks))

            return{
                ...state,
                tasks : newTasks
            }
        }
        
        case 'UPDATE_STATUS':{
            
            const {param} = actionPayload

            const { tasks } = state
            if(tasks.length < 1) return {...state}
            
            const status = {
                completed : 1,
                noCompleted : 2,
                all : 0
            }
    
            const selectStatus = status[param]; 
            return{
                ...state,
                status : selectStatus
            }
        }

        case 'GET_TASKS_LOCAL_STORAGE':{

            const { setIdTasks }  = actionPayload;

            const getItemLocalStorage = localStorage.getItem('tasks');
            const tasksLocalStorage = JSON.parse(getItemLocalStorage);
            
            if(tasksLocalStorage == null){
                setIdTasks.current = 0;
                return{
                    ...state
                }

            }else{
                const arrayId = tasksLocalStorage.map(taskId => taskId.id);
                const idMax = Math.max(...arrayId)
                setIdTasks.current = idMax
                return{
                    ...state,
                    tasks : tasksLocalStorage
                }
            } 
        }
        
        case 'SEARCH_TASK':{

            const { tasks, taskSearch } = state;

            if(taskSearch.length < 1){
                return {...state}
            }
            
            const task_found = tasks.filter( item => item.nameTask == taskSearch);

            return{
                ...state,
                tasksFound : task_found,
                search : true,
            }
        }

        case 'UPDATE_SEARCH_VALUE' : {
            return{
                ...state,
                search : false
            }
        }
    }

    return state;
}