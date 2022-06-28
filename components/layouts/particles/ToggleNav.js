import cn from 'classnames'
import useStore from 'core/store'

const ToggleNav = ({ sticky, menu, ...props }) => {
	const { store, setStore } = useStore()

	const clickToggle = (key) => setStore({ ...store, [key]: !store[key] })

	return (
		<div className={cn(`toggle-nav`, { active: store?.nav })} onClick={() => clickToggle('nav')}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default ToggleNav
