import useApi from 'core/api/all'
import { HeadSeo } from 'components/common'
import { listToPaths, listToTree } from 'core/utils/converter'
import Link from 'next/link'
import useAction from 'core/api'

const SitemapPage = ({ data }) => {
	const { pages = [], terms = [], posts = [] } = data
	const seoProps = { slug: 'sitemap', title: 'Карта сайта', desc: 'Карта сайта' }
	return (
		<div className="page page-sitemap">
			<HeadSeo {...seoProps} />

			<section className="container">
				<div className="container-inner">
					<h1>Карта сайта</h1>
					<div className="row columns">
						<div className="column">
							<div className="head">Страницы</div>
							<ul>
								{pages &&
									pages?.map((a) => (
										<li key={a._id}>
											<Link href={a.slug}>
												<a>{a.title}</a>
											</Link>
										</li>
									))}
							</ul>
						</div>
						<div className="column">
							<div className="head">Колекции</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export async function getStaticProps(context) {
	const pages = await useAction.get(`pages`).then((res) => {
		return res && res?.map((a) => ({ id: a._id, title: a.title, slug: a.slug, parent: a?.parent?._id || null }))
	})
	return { props: { data: { pages } } }
}

export default SitemapPage
