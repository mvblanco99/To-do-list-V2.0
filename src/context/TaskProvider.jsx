import { useRef } from "react";
import { TaskContext } from "./TaskContext";
import { useReducer } from "react";
import { Reducer } from "../reducers/tasksReducer";

const initialState = {
    tasks: [],
    task: {
      nameTask: '',
      completedTask: false,
    },
    action: 'Save',
    status : 0,
    tasksFound: [],
    search : false,
    taskSearch : '',
};

const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const setIdTasks = useRef(0);
    

    return (
        <TaskContext.Provider value={{
            state,
            dispatch,
            setIdTasks,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider