import propTypes from 'prop-types'
import stylesButton from './Button.module.css'

const Button = ({name, func, param, active = '', tasks}) => {

  const handleClick = () => {
      func({param,tasks});
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
  func: propTypes.func.isRequired,
  name: propTypes.string,
  active: propTypes.string,
  tasks: propTypes.arrayOf(Object)
};

export default Button