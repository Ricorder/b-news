import Link from 'next/link'
import { useRouter } from 'next/router'

const categories = [
	{ name: 'Новости', slug: 'news' },
	{ name: 'Терапия РС', slug: 'terapiya-rs' },
	{ name: 'Образ жизни', slug: 'obraz-zhizni' },
	{ name: 'Энциклопедия', slug: 'ensiklopedija' },
	{ name: 'Воспроизведенные ПИТРС', slug: 'vosproizvedennye-pitrs' },
	{ name: 'У ребенка РС', slug: 'u-rebenka-rs', term: { name: 'Вопрос-ответ', slug: 'question-answer' } },
	{ name: 'Близкий больного', slug: 'blizkij-bolnogo', term: { name: 'Вопрос-ответ', slug: 'question-answer' } },
	{ name: 'Подозрение на РС', slug: 'podozrenie-na-rs', term: { name: 'Вопрос-ответ', slug: 'question-answer' } },
	{ name: 'Диагностирован РС', slug: 'diagnostirovan-rs', term: { name: 'Вопрос-ответ', slug: 'question-answer' } },
	{ name: 'Пациент со стажем', slug: 'pacient-so-stazhem', term: { name: 'Вопрос-ответ', slug: 'question-answer' } },
	{ name: 'Назначили терапию', slug: 'naznachili-terapiyu', term: { name: 'Вопрос-ответ', slug: 'question-answer' } }
]

const Breadcrumbs = ({ current, ...props }) => {
	const router = useRouter()
	const { tag, category, post } = router.query

	const categorydata = category && categories.find((a) => a.slug === category)

	const showCategory = () => {
		if (!categorydata) return

		if (!post && categorydata?.name) return <span>{categorydata?.name}</span>

		if (post && categorydata?.slug) {
			const { name, slug, term } = categorydata
			const link = term?.slug ? { href: `/[${term.slug}]/[category]`, as: `/${term.slug}/${slug}` } : { href: `/[category]`, as: `/${slug}` }
			return (
				<>
					<Link {...link}>
						<a>{name}</a>
					</Link>

					<span className="sep">→</span>
					<span>{current}</span>
				</>
			)
		}
	}

	return (
		<section className="container breadcrumbs">
			<div className="container-inner">
				<Link href="/">
					<a>Главная</a>
				</Link>
				<span className="sep">→</span>
				{tag && (
					<>
						<Link href="/status">
							<a>Статусы</a>
						</Link>
						<span className="sep">→</span>
					</>
				)}
				{showCategory()}

				{!post && !category && current && <span>{current}</span>}
			</div>
		</section>
	)
}

export default Breadcrumbs
