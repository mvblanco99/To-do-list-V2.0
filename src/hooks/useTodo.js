import { useEffect, useRef, useState } from "react"

const initialState = {
    nameTask : '',
    completedTask : false,
}

export const useTodo = () => {
    
    const [task, setTask] = useState(initialState)
    const [tasks, setTasks] = useState([])
    const [action, setAction] = useState('Save');
    const setIdTasks = useRef(0);

    const handleChange = (e) => {

        if(e.target.value.length > 15) return 
        //Generamos una copia de la tarea
        const newTask = {...task, nameTask : e.target.value}
        setTask(newTask);
    }

    const saveTask = ({task}) => {

        if(task.nameTask.length < 1) return

        //Guardamos nueva Tarea
        if(task.id == null){

            const newTask = {
                nameTask : task.nameTask,
                completedTask : task.completedTask,
                id : setIdTasks.current
            }

            const newTasks = [...tasks, newTask];
            
            setTasks(newTasks);
            localStorage.setItem('tasks', JSON.stringify(newTasks))
            resetTask()
            
        }else{
            //Modificamos la tarea

            const newTask = {
                nameTask : task.nameTask,
                completedTask : task.completedTask,
                id : task.id
            }

            const newTasks = tasks.filter( item => task.id != item.id);
            newTasks.push(newTask);
            setTasks(newTasks);
            localStorage.setItem('tasks', JSON.stringify(newTasks))
            resetTask()
        }

    }

    const deleteTask = ({param : task}) => {
        const newTasks = tasks.filter( item => task.id != item.id);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        resetTask()
    }

    const editTask = ({param : task}) => {
        const newTask = {
            nameTask : task.nameTask,
            completedTask : task.completedTask,
            id : task.id
        }

        setAction('Update')
        setTask(newTask)
        resetTask()
    }

    const deleteTasks = () => {
        const newTasks = [];
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        resetTask()
    }

    const checked = ({task}) => {
        console.log('Checked')
        const newTask = {
            nameTask : task.nameTask,
            completedTask : !task.completedTask,
            id : task.id
        }

        const newTasks = tasks.filter( item => task.id != item.id);
        newTasks.push(newTask);
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    const resetTask = () => {
        setTask(initialState)
        setAction('Save')
    }

    useEffect(()=>{
        
        const getItemLocalStorage = localStorage.getItem('tasks');
        const tasksLocalStorage = JSON.parse(getItemLocalStorage);
        
        if(tasksLocalStorage == null){
            setIdTasks.current = 0;
        }else{
            const arrayId = tasksLocalStorage.map(taskId => taskId.id);
            const idMax = Math.max(...arrayId)
            setIdTasks.current = idMax
            setTasks(tasksLocalStorage);
        }
    },[])

    useEffect(() => {
        setIdTasks.current = setIdTasks.current + 1;
    },[tasks])

    return {
        handleChange, 
        task, 
        saveTask, 
        tasks, 
        deleteTask, 
        editTask, 
        checked, 
        action, 
        deleteTasks
    }
}