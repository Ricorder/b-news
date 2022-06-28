import PropTypes from 'prop-types'
import clx from 'classnames'

const Button = ({ variant, className, children, ...props }) => {
  return (
    <button {...props} className={clx('button', { [`button-${variant}`]: variant }, className)}>{children}</button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default','outline','primary','dashed','link']),
  children: PropTypes.node
}

Button.defaultProps = {
  variant: 'default'
}

export default Button
