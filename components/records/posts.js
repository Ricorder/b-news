import cn from 'classnames'
import settings from 'core/settings'
import { dateFormat, truncate } from 'core/utils/general'

import { Link } from 'components/common'

const Post = ({ slug, title, excerpt, media, stats, category, readingtime, createdAt }) => {
	const color = category?.color || 'dark'
	return (
		<div className="post">
			<div className="post-cover">{media?.file && <img src={`${settings.apiupl}/580x580_${media.file}`} alt={media?.title || title} />}</div>
			<div className="post-content">
				<h3 className="post-title">
					{category?.slug && (
						<Link href="/[taxonomy]/[post]" as={`/${category.slug}/${slug}`}>
							<a alt={title}>{title}</a>
						</Link>
					)}
				</h3>
				{excerpt && <div className="post-text">{truncate(excerpt, 200)}</div>}
			</div>
			<div className="post-meta bottom">
				<span className="date">{dateFormat(createdAt)}</span>
			</div>
			<div className={cn('post-preview', color)}>
				<div className="post-preview-wrap">
					<div className="row post-meta top">
						{category?.name && <div className="post-category">{category.name}</div>}
						{readingtime && <div className="post-reading">{readingtime} минут</div>}
					</div>
					<div className="post-content">
						<h3 className="post-title">
							{category?.slug && (
								<Link href="/[taxonomy]/[post]" as={`/${category.slug}/${slug}`}>
									<a alt={title}>{title}</a>
								</Link>
							)}
						</h3>
					</div>
					<div className="row post-meta bottom">
						<span className="date">{dateFormat(createdAt)}</span>
						<span className="row comments">
							<i className="fa-solid fa-message" />
							{stats?.comments}
						</span>
						<span className="row views">
							<i className="fa-solid fa-eye" />
							{stats?.visits}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

const Posts = ({ data = [], color }) => {
	return <div className="articles">{data?.length > 0 ? data?.map((post, i) => <Post key={i} color={color} {...post} />) : `Записей еще нет`}</div>
}

export default Posts
