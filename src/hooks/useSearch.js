import { useEffect, useRef, useState } from "react"

export const useSearch = () => {

    const [task, setTask] = useState('')
    const [search, setSearch] = useState([])
    const [isSearch, setIsSearch] = useState(false);
    const previousSearch = useRef(task);

    const handleChange = (e) => {
        const newTask = e.target.value;
        setTask(newTask)
    }

    const searchTask = ({tasks,taskSearch : task}) => {
        if(task === previousSearch.current) return
        if(task.length < 1) return
        setIsSearch(true);
        previousSearch.current = task;
        const task_found = tasks.filter( item => item.nameTask == task);
        setSearch(task_found);
    }
    
    useEffect(()=>{
        if(task.length < 1){
            setIsSearch(false)
        }
    },[task])

    return {
        search,
        searchTask,
        handleChange,
        task,
        isSearch
    }

}
