import { Alert } from 'antd'
import PropTypes from 'prop-types'

const Message = ({ data, ...props }) => {
	const { type, msg, title } = data
	return (
		msg.length > 0 && (
			<div className="alert-message">
				{title ? <Alert closable showIcon type={type} message={title} description={msg} /> : <Alert closable type={type} message={msg} />}
			</div>
		)
	)
}

Message.propTypes = {
	data: PropTypes.shape({
		type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
		msg: PropTypes.string,
		title: null
	})
}

Message.defaultProps = {
	data: {
		type: 'error',
		title: false,
		msg: ''
	}
}

export default Message
