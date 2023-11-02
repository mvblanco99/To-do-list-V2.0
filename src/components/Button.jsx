import propTypes from 'prop-types'
import stylesButton from './Button.module.css'
import { useTodo } from '../hooks/useTodo';

const Button = ({name,task,param,active=''}) => {

    const { dispatch } = useTodo();

    const handleClick = () => {
        
      if(name === 'Edit'){
        dispatch({
          type : 'EDIT_TASK',
          payload : { task }
        });
  
      }else if(name === 'Delete'){   
        dispatch({
          type : 'DELETE_TASK',
          payload : { task }
        });
  
      }else{
        dispatch({
          type : 'UPDATE_STATUS',
          payload : { param }
        });
      }
    }

  return (
    <button 
      onClick={handleClick} 
      className={`${stylesButton.input} ${active != '' && stylesButton.active}`}
      >
         {name}
    </button>
  )
}

Button.propTypes = {
    param: propTypes.oneOfType([
      propTypes.object,
      propTypes.string
    ]),
    name: propTypes.string,
    active: propTypes.string,
    task: propTypes.object,
};


export default Button;