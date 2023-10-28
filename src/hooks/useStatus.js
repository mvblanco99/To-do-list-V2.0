import { useState } from "react";

const useStatus = () => {
    const [category, setCategory] = useState(0);
    
    const sortCategory = ({param : option, tasks}) => {
        
        if(tasks.length < 1) return 
        const categories = {
            completed : 1,
            noCompleted : 2,
            all : 0
        }
    
        const selectCategory = categories[option]; 
        setCategory(selectCategory);
    }

    return {
        category,
        sortCategory
    }

}

export default useStatus

