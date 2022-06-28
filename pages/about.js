import useAction from 'core/api'
import { HeadSeo } from 'components/common'

const AboutPage = ({ page }) => {
	const seoProps = {
		slug: page.slug,
		title: page.seo?.title,
		desc: page.seo?.description,
		robots: page.seo?.robots
	}

	return (
		<div className="page page-biocad">
			<HeadSeo {...seoProps} />

			<section className="container">
				<div className="container-inner">
					<div className="columns row anim animate__fadeInUp">
						<div className="column">
							<div className="column-block">
								<div className="inner">
									<div className="head">
										<h1>О Biocad</h1>
									</div>
									<div className="desc">
										<p>
											Одна из крупнейших международных инновационных биотехнологических компаний в России, объединившая научно-исследовательские центры мирового уровня, современное
											фармацевтическое и биотехнологическое производство, доклинические и клинические исследования, соответствующие международным стандартам.
										</p>
										<p>
											BIOCAD – компания полного цикла создания лекарственных препаратов от поиска молекулы до массового производства и маркетинговой поддержки. Компания
											фокусируется на препаратах для терапии онкологических, аутоиммунных и инфекционных заболеваний, также ведет разработки в области терапии других социально
											значимых заболеваний.
										</p>
										<p>В продуктовый портфель входит 58 лекарственных препаратов, 16 из которых – биологические. Еще более 40 продуктов находятся на разных стадиях разработки.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="column-block">
								<div className="stats">
									<div className="side s1 top">
										<b>Портфель</b>
										<p>
											58 продуктов, 16 из которых — <br />
											биологические препараты
										</p>
									</div>

									<div className="side s2">
										<b>Разработка</b>
										<p>
											Более 40 препаратов <br />
											находятся в разработке <br />
											на данный момент
										</p>
									</div>

									<div className="side s3">
										<b>Сотрудники</b>
										<p>
											Более 2200 сотрудников, <br />
											40% — научные сотрудники <br />и исследователи
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
export async function getStaticProps() {
	const page = await useAction.get(`pages/about`)
	if (!page || page.error) return { notFound: true }
	return { props: { page }, revalidate: 60 }
}

export default AboutPage
