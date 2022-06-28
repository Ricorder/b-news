import cn from 'classnames'
import { useState, useEffect } from 'react'
import { Link, Search, Menu, MenuDrawer, Icon } from 'components/common'
import { getCategories } from 'core/api/records'

const Header = ({ sticky, menu, ...props }) => {
	const [values, setValues] = useState({ nav: false, search: false, categories: [] })
	const { nav, search, categories } = values

	const clickToggle = (key) => setValues({ ...values, [key]: !values[key] })

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		await getCategories().then((res) => {
			setValues({ ...values, categories: res })
		})
	}

	return (
		<>
			<header className={cn('header', { sticky: sticky })}>
				<div className="row container-inner top">
					<div className={cn(`toggle-nav`, { active: nav })} onClick={() => clickToggle('nav')}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<Link href="/">
						<a className="logo">B-news.</a>
					</Link>

					{/*<div className={cn('searchbox', {active: search })}>
						<button className={cn(`search-toggle`, { active: search })} aria-label="Показать/Скрыть" onClick={() => clickToggle('search')}>
							<Icon name="search" />
							<i className="fa fa-search" />
						</button>
						<Search type="inline" visible={search} close={() => clickToggle('search')} />						
					</div>*/}

					 
					<div className="row right drwnav">
						<button className={cn(`button toggle-search`, { active: search })} aria-label="Показать/Скрыть" onClick={() => clickToggle('search')}>
							<Icon name="search" />
						</button>
						<button className={cn(`button toggle-nav`, { active: nav })} aria-label="Показать/Скрыть" onClick={() => clickToggle('nav')}>
							<i className="fas fa-bars" />
						</button>
					</div> 
				</div>

				{categories?.length > 0 && <Menu list={categories} className="categories" />}
			</header>

			<MenuDrawer visible={nav} list={menu?.filter((a) => a.access.includes('drawer'))} close={() => clickToggle('nav')} title={<span className="logo">B-news.</span>} />
		</>
	)
}

export default Header
