import cn from 'classnames'
import { HeadSeo, Icon } from 'components/common'
import { Subscrible } from 'components/widgets'
import Link from 'next/link'
import ToggleNav from './particles/ToggleNav'

export default function CategoryLayout({ type, slug, seo, title, media, tags, children, ...props }) {
	return (
		<>
			<HeadSeo image={media?.file} {...seo} />

			<div className={cn('layout-category', { [`category-${slug}`]: slug })}>
				<aside className="category-side">
					<div className="cs-inner">
						<div className="row cs-head">
							<ToggleNav />
							<Link href="/">
								<a className="logo" title="B-news.">
									B-news.
								</a>
							</Link>
						</div>

						<div className="widget widget-tags">
							<h4>Категории</h4>
							<div className="list">
								{tags?.map((a, i) => (
									<div key={i} className="row">
										<input type="checkbox" id={`tag-${i}`} value={a.value} />
										<label htmlFor={`tag-${i}`}>{a.label}</label>
									</div>
								))}
							</div>
						</div>

						<div className="widget widget-dates">
							<h4>Дата</h4>
							<div className="daterange"></div>
						</div>

						<div className="buttons">
							<button type="reset" className="button ghost reset">
								Сбросить фильтр
							</button>
						</div>

						<Subscrible title="Подпишитесь на новости" />
					</div>
				</aside>

				<div className="category-content">{children}</div>
			</div>

			<ul className="social-sticker">
				<li>
					<a href="https://www.facebook.com/biocad" className="fb" target="_blank" rel="noreferrer">
						<Icon name="fb" />
					</a>
				</li>
				<li>
					<a href="https://vk.com/biocad" className="vk" target="_blank" rel="noreferrer">
						<Icon name="vk" />
					</a>
				</li>
				<li>
					<a href="https://instagram.com/biocad" className="inst" target="_blank" rel="noreferrer">
						<Icon name="inst" />
					</a>
				</li>
				<li>
					<a href="http://www.youtube.com/user/BIOCADcompany" className="yt" target="_blank" rel="noreferrer">
						<Icon name="yt" />
					</a>
				</li>
			</ul>
		</>
	)
}
