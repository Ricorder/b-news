const path = require('path')
const headers = require('./core/utils/security')
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' }, { generateStatsFile: true }, { defaultSizes: 'gzip' })

module.exports = {
	async headers() {
		return [{ source: '/(.*)', headers }]
	},
	sassOptions: { includePaths: [path.join(__dirname, '/assets/scss')] },
	images: {
		domains: ['localhost', 'b-news.ru', 'api.biocadless.com'],
		formats: ['image/avif', 'image/webp']
	},
	devIndicators: { autoPrerender: false },
	experimental: { removeConsole: true },
	useFileSystemPublicRoutes: true,
	reactStrictMode: false,
	poweredByHeader: false,
	generateEtags: false,
	swcMinify: true,
	compress: true
}

module.exports = (phase, config) => withBundleAnalyzer(config)
