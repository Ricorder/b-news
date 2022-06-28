import useAction from './'

export const getCategories = async () => {
	return await useAction.get('taxonomies', { type: 'category' }).then((res) => {
		if (!res || res?.error) return []

		return res?.map((a) => ({
			name: a.name,
			slug: a.slug,
			order: a?.fields?.order,
			color: a?.fields?.color,
			link: { href: '/[taxonomy]', as: `/${a.slug}` }
		})).sort((a,b) => a.order - b.order)
	})
}
