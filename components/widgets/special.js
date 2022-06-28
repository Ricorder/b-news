export default function Special({ url, title, image, reading, category, ...props }) {
	return (
		<div className="special">
			<div className="post">
				<div className="post-cover">{image && <img src={image} alt={title} />}</div>
				<div className="post-content">
					<h3 className="post-title">
						<a href={url} target="blank" rel="noreferrer">
							{title}
						</a>
					</h3>
					<div className="post-text"></div>
				</div>
				<div className="post-preview red">
					<div className="post-preview-wrap">
						<div className="row post-meta top">
							<span className="post-category">{category}</span>
							{reading && <span className="post-reading">{reading} минут</span>}
						</div>
						<div className="post-content">
							<h3 className="post-title">
								<a href={url} target="blank" rel="noreferrer">
									{title}
								</a>
							</h3>
							<div className="post-text"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
