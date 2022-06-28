import Link from '../common/Link'

export default function Tags ({ title, data, ...props }) {
	return (
		<div className="widget tags">
			<div className="widget-inner">
				<div className="widget-head">Post Tags</div>
				<div className="widget-content">
					{data.length > 0 && (
						<ul className="row">
							{data?.map((item, i) => (
								<li key={i}>
									<Link href={`/blog/[tag]`} as={`/blog/${item.slug}`}>
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