export const sortStatusTask = ({showTasks:tasks, status}) => {
    
    let ordered_tasks = [];

    if(tasks.length > 0){
        if(status == 1){
            ordered_tasks = tasks.filter( item => item.completedTask)
        }else if(status == 2){
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