import PropTypes from 'prop-types'

const Code = ({ data, json, console, ...props }) => {
	if (console) {
		console.log(`pre console: `, JSON.stringify(data, null, 2))
	}
	return (
		<code>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</code>
	)
}

Code.propTypes = {
	data: PropTypes.any,
	console: PropTypes.bool,
	json: PropTypes.bool
}

Code.defaultProps = {
	data: {},
	console: false,
	json: true
}

export default Code

/* Use: <Pre console data={data} /> */