// import AntdDrawer from 'antd/lib/drawer/index'
import { Drawer as AntdDrawer } from 'antd'

import PropTypes from 'prop-types'
import clx from 'classnames'


const Drawer = ({ children, ...props }) => {
	return (
		<AntdDrawer {...props}>
			{children}
		</AntdDrawer>
	)
}

Drawer.propTypes = {
	closable: PropTypes.bool,
	placement: PropTypes.oneOf(['top','right','bottom','left']),
	children: PropTypes.node,
	footer: PropTypes.any,
	title: PropTypes.any,
	width: PropTypes.any
}

Drawer.defaultProps = {
	width: false,
	closable: true,
	placement: 'right',
	footer: null,
	title: null
}

export default Drawer
