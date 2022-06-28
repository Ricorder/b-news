import cn from 'classnames'
import { HeadSeo } from 'components/common'

export default function PageLayout({ data, ...props }) {
	const { slug, title, content, seo } = data
	return (
		data && (
			<div className={cn('page-layout', { [`page-${slug}`]: slug })}>
				<HeadSeo slug={slug} {...seo} />

				<div className="page-wrap">
					<div className="page-header">
						<h1>{title}</h1>
					</div>
					<div className="page-content" dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			</div>
		)
	)
}
