import PropTypes from 'prop-types'
import cn from 'classnames'

import Link from './Link'
import Drawer from './Drawer'

export const MenuDropdown = ({ data = [], onClick }) => {
	return data?.length > 0 && (
		<div className="dropdown-nav">
			<ul>
				{data.map((sitem, i) => (
					<li key={i}>
						<Link {...sitem.link}>
							<a onClick={onClick}>{sitem.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export const MenuItem = ({ name, link, onClick, children = [], ...props }) => {
	return (
		<li>
			<Link {...link}>
				<a className={cn({ dropdown: children?.length > 0 })} onClick={onClick}>
					{name}
				</a>
			</Link>
			<MenuDropdown data={children} onClick={onClick} />
		</li>
	)
}

/** Menu Drawer */
export const MenuDrawer = ({ visible, close, list = [], children, ...props }) => {
	return (
		<Drawer className="drawer-menu" visible={visible} onClose={close} {...props}>
			<div className="menu-inner">
				<Menu className="menu-list" list={list} onClick={close} />
			</div>
			{children}
		</Drawer>
	)
}

/** Menu */
const Menu = ({ list = [], className, onClick }) => {
	return (
		list.length > 0 && (
			<ul className={cn(`row menu`, className)}>
				{list.map((item, i) => (
					<MenuItem key={i} {...item} onClick={onClick} />
				))}
			</ul>
		)
	)
}
Menu.propTypes = {
	list: PropTypes.array,
	onClick: PropTypes.func,
	className: PropTypes.any
}
Menu.defaultProps = {
	list: [],
	onClick: null
}

export default Menu
