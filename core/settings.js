const localServer = false
const apiUrl = localServer ? 'http://localhost:8000' : 'https://api.biocadless.com'
const siteUrl = process.env.NODE_ENV === 'production' ? 'https://new.b-news.ru' : 'http://localhost:3000'

export default {
	locale: 'ru',
	title: 'B-news.',
	site_name: 'B-news.',
	description: 'Журнал про биотехнологии',
	url: siteUrl,
	background_color: '#fefefe',
	theme_color: '#102654',
	imagemode: 'next', // enum: ['static','next']

	metrics: {
		gtm: 'GTM-5PLQWWX', // GTM-XXXXXXX
		yandex: 'aa3ffe3b3106a386', // yandex-verification
		google: 'Bx3s3Qo6T84CN_eMxLW1lf9WbkgvupC02odqkL0FXC0' // google-site-verification
	},

	api: `${apiUrl}/v1`,
	apiupl: `${apiUrl}/uploads/bnews`,
	client_id: process.env.CLIENT_ID || 'bnews',
	client_secret: process.env.CLIENT_SECRET
}
