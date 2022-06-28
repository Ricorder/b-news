import Link from '../common/Link'

export default function Categories ({ title, data, ...props }) {
	return (
		<div className="widget categories">
			<div className="widget-inner">
				{title && <div className="widget-head">{title}</div>}
				<div className="widget-content">
					{data.length > 0 && (
						<ul>
							{data?.map((item, i) => (
								<li key={i}>
									<Link href={`/blog/[category]`} as={`/blog/${item.slug}`}>
										<a>{item.name}</a>
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}