const PageHead = ({ wrap = true, children, ...props }) => {
	return (
		<div className="container pagehead" {...props}>
			{wrap ? <div className="container-inner">{children}</div> : children}
		</div>
	)
}

export default PageHead
