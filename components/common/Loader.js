import PropTypes from 'prop-types'

const Loader = ({ place }) => {
	const circleLoader = () => {
		return (
			<div className="loader">
				<style jsx>{`
					.loader {
						width: 40px;
						height: 40px;
						margin: 100px auto;
						border-radius: 50%;
						border: 5px solid #ebeef4;
						border-top: 5px solid #fa364a;
						animation: spin 2s linear infinite;
					}
					@keyframes spin {
						0% {
							transform: rotate(0deg);
						}
						100% {
							transform: rotate(360deg);
						}
					}
				`}</style>
			</div>
		)}

	return place ? <div className="loader-place">{circleLoader()}</div> : circleLoader()
}

Loader.propTypes = {
  place: PropTypes.bool
}
Loader.defaultProps = {
  place: true
}

export default Loader
