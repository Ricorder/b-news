import PropTypes from 'prop-types'
import clx from 'classnames'

const Section = ({ inner, innerClass, className, children, ...props }) => {
	return (
		<div className={clx('container', className)} {...props}>
			{wrap ? <div className={clx('container-inner', className)}>{children}</div> : children}
		</div>
	)
}

Section.propTypes = {
	inner: PropTypes.bool,
	children: PropTypes.node,
	innerClass: PropTypes.string
}

Section.defaultProps = {
	wrap: true,
  innerClass: null
}

export default Section
