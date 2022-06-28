// import AntdModal from 'antd/lib/modal/index'
import { Modal as AntdModal } from 'antd'

import PropTypes from 'prop-types'
import clx from 'classnames'

const Modal = ({ children, ...props }) => {
	return (
		<AntdModal {...props} className="modal-notice">
			{children}
		</AntdModal>
	)
}

Modal.propTypes = {
	title: PropTypes.any,
	width: PropTypes.any,
	closable: PropTypes.bool,
	centered: PropTypes.bool,
	children: PropTypes.node
}

Modal.defaultProps = {
	title: null,
	width: false,
	closable: true,
	centered: true
}

export default Modal
