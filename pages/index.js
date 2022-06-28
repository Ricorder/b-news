import useAction from 'core/api'
import { getCategories } from 'core/api/records'

import { HeadSeo } from 'components/common'
import { Special, Subscrible } from 'components/widgets'
import { Posts } from 'components/records'

const Main = ({ data, categories, records }) => {
	return (
		<>
			<HeadSeo {...data?.seo} />
			{/* <pre>{JSON.stringify(records, null, 2)}</pre> */}

			<div className="row page-main">
				<div className="row main-content">
					<div className="main-posts">
						<div className="side-left">
							<Special
								reading="7"
								category="Для сотрудников"
								image="/articles/special.jpeg"
								title="Дело NOG-мышей ведут знатоки!"
								url="http://biocad-preclinical-studies.tilda.ws/newfonts"
							/>
						</div>

						<div className="side-right grid">
							<Posts data={records} categories={categories} className="grid-inner" />

							<div className="loadmore">
								<button type="button" className="button red">
									Показать ещё...
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="main-sidebar">
					<div className="sidebar-inner">
						<div className="widget-tags">
							<h4>Подборки по темам</h4>
							<ul>
								<li>
									<a>
										Тестовая коллекция <b>2</b>
									</a>
								</li>
							</ul>
						</div>

						<Subscrible desc="Не пропустите новые статьи. Мы не отправляем спам, только лучшие подборки" />
					</div>
				</div>
			</div>
		</>
	)
}

export async function getStaticProps() {
	const data = await useAction.get(`pages/main`)

	const categories = await getCategories()

	const records = await useAction.get(`posts`, { limit: 100, fields: 'title slug excerpt content media source categories tags stats readingtime' }).then((res) => {
		if (!res || res?.error) return []
		if (categories?.length > 0) {
			return res.map((r) => {
				const category = r?.categories?.length > 0 && categories.find((c) => c.slug === r?.categories[0].slug)
				return { ...r, category, color: category?.color || 'dark' }
			})
		}
		return res
	})

	return { props: { data, categories, records }, revalidate: 1 }
}

export default Main
