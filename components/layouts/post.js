import cn from 'classnames'
import settings from 'core/settings'
import { HeadSeo, Icon } from 'components/common'
import { useRouter } from 'next/router'

export default function PostLayout({ term, data = {}, children, ...props }) {
	const { asPath } = useRouter()
	const { slug, title, content, seo, media, stats, readingtime } = data

	const postpath = settings?.url + asPath

	return (
		data && (
			<div className={cn('post-layout', 'post-single', { [`post-${slug}`]: slug })}>
				<HeadSeo {...seo} image={media?.file} />

				<div className="post-wrap">
					<div className="post-header">
						<div className="row post-meta">
							<span className="row views">
								<i className="fa-solid fa-eye" />
								{stats?.visits}
							</span>
							{readingtime && <div className="post-reading">Читать {readingtime} минут</div>}
						</div>
						<h1>{title}</h1>
					</div>

					<div className="post-cover">
						{media?.file && <img src={`${settings.apiupl}/${media.file}`} alt={media?.title || title} />}
					</div>

					<div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />

					<div className="row post-share">
						<div className="desc">
							<p>Понравилась статья?</p>
							<span>Расскажи об этом друзьям в соицальных сетях</span>
						</div>
						<div className="icons">
							<a href={`https://www.facebook.com/sharer/sharer.php?u=${postpath}`} className="fb" target="_blank">
								<Icon name="fb" />
							</a>
							<a href={`https://telegram.me/share/url?url=${postpath}`} className="tg" target="_blank">
								<Icon name="tg" />
							</a>
							<a href={`https://vk.com/share.php?url=${postpath}`} className="vk" target="_blank">
								<Icon name="vk" />
							</a>
							<a href={`https://twitter.com/intent/tweet?url=${postpath}`} className="tw" target="_blank">
								<Icon name="tw" />
							</a>
						</div>
					</div>


					<div className='row posts-related'>
						<div className='title'>Другие материалы</div>
						<div className='articles'>

						</div>
					</div>
				</div>

				<pre>{JSON.stringify({ term, data }, null, 2)}</pre>
			</div>
		)
	)
}
