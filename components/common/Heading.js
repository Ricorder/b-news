import PropTypes from 'prop-types'
import clx from 'classnames'

const Heading = ({ wrap, className, children, ...props }) => {
	return (
		<div className={clx("heading", className)} {...props}>
			{wrap ? <div className="row heading-inner">{children}</div> : children}
		</div>
	)
}

Heading.propTypes = {
	wrap: PropTypes.bool,
	className: PropTypes.any,
	children: PropTypes.node
}

Heading.defaultProps = {
	wrap:  false
}


export default Heading
