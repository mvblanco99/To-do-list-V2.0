export const sortStatusTask = ({tasks, category}) => {
    
    let ordered_tasks = [];

    if(tasks.length > 0){
        if(category == 1){
            ordered_tasks = tasks.filter( item => item.completedTask)
        }else if(category == 2){
            ordered_tasks = tasks.filter( item => !item.completedTask)
        }else{
            ordered_tasks = [...tasks];
        }
    }

    return ordered_tasks
}

export const sortIdTask = ({ordered_tasks : tasks}) => {
    const newOrderTask = tasks.sort((a,b) => a.id - b.id)
    return newOrderTask
}