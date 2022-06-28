import useAction from 'core/api'
import { getCategories } from 'core/api/records'

import { CategoryLayout } from 'components/layouts'
import { Posts } from 'components/records'

const TaxonomyPage = ({ taxonomy = {}, records = [] }) => {
	const { fields } = taxonomy

	const color = fields?.color || 'dark'

	return (
		<CategoryLayout {...taxonomy}>
			<div className="category-heading">
				<h1>{taxonomy.name}</h1>
				<div className="excerpt" dangerouslySetInnerHTML={{__html: taxonomy?.excerpt }} />
			</div>

			<Posts data={records} color={color} />
		</CategoryLayout>
	)
}

export async function getStaticPaths() {
	const paths = await useAction.get('taxonomies/paths', { only: 'taxonomy' })
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const data = await useAction.get(`taxonomies/${params.taxonomy}`, { skip: 0, limit: 100 }).then((res) => {
		const { slug, name, fields } = res?.taxonomy 
		return {
			...res,
			records: res?.records?.map((a) => ({ ...a, category: { slug, name, color: fields?.color || 'dark' } }))
		}
	})

	// const related = []

	if (!data || data.error) return { notFound: true }

	return { props: { ...data }, revalidate: 1 }
}

export default TaxonomyPage