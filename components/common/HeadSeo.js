import config from 'core/settings'
import PropTypes from 'prop-types'

import Head from 'next/head'
import { useRouter } from 'next/router'

export const HeadApp = ({ title, description, bgcolor, theme }) => {
	return (
		<Head>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1.0" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			<meta name="format-detection" content="telephone=no" />

			<title>{title}</title>
			<meta name="description" content={description} />

			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon/96x96.png" />

			<link rel="manifest" href="/favicon/manifest.json" />
			<meta name="msapplication-TileColor" content={bgcolor} />
			<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
			<meta name="theme-color" content={theme} />
		</Head>
	)
}

HeadApp.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	bgcolor: PropTypes.string,
	theme: PropTypes.string
}

HeadApp.defaultProps = {
	bgcolor: '#ffffff',
	theme: '#21145f'
}

const HeadSeo = ({ title, description, robots, image }) => {
	const { asPath } = useRouter()

	const url = asPath !== '/' ? config.url + asPath : config.url
	const ogdesc = description ? description : config.description
	const ogtitle = title ? `${config.title} — ${title}` : config.title
	const ogimage = image ? `${config.apiupl}/${image}` : `${config.url}/share.png`

	const getRobots = () => {
		const sia = robots.split(',')
		const isIndex = sia[0] !== 'index' ? 'noindex' : 'index'
		const isFollow = sia[1] !== 'follow' ? 'nofollow' : 'follow'
		const ogrobots = `${isIndex},${isFollow}`
		return (
			<>
				<meta name="robots" content={ogrobots} />
				<meta name="googlebot" content={ogrobots} />
			</>
		)
	}

	return (
		<Head>
			<title>{ogtitle}</title>
			<meta name="description" content={ogdesc} />

			{getRobots()}

			<meta property="og:type" content="website" />
			<meta property="og:locale" content="ru_RU" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={ogtitle} />
			<meta property="og:site_name" content={config.site_name} />
			<meta property="og:description" content={ogdesc} />
			<meta property="og:image" content={ogimage} />
			<meta property="og:image:secure_url" content={ogimage} />
			<meta property="og:image:type" content="image/png" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={ogtitle} />
			<meta name="twitter:description" content={ogdesc} />
			<meta name="twitter:image" content={ogimage} />
		</Head>
	)
}

HeadSeo.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	robots: PropTypes.string,
	image: PropTypes.string
}

HeadSeo.defaultProps = {
	robots: 'index,follow'
}

export default HeadSeo
