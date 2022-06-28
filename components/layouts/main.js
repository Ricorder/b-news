import cn from 'classnames'
import { useRouter } from 'next/router'
import { Header, Footer } from './particles'

export default function MainLayout({ menu, sticky, element, children }) {
	const { query } = useRouter()

	// console.log(`route:`, query)
	return (
		<div
			className={cn('main-layout', {
				sticky,
				'is-category': query?.taxonomy && !query?.post,
				'is-post': query?.taxonomy && query?.post
			})}
			id="top">
			<div className="layout-wrap">
				<Header menu={menu?.header} />

				<section className="layout-inner" ref={element}>
					{children}
				</section>

				<Footer menu={menu?.footer} />
			</div>
		</div>
	)
}
