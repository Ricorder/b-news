import Document, { Html, Head, Main, NextScript } from 'next/document'
import settings from 'core/settings'

const dev = process.env.NODE_ENV !== 'development' ? true : false

export default class webDocument extends Document {
	render() {
		return (
			<Html lang={settings.locale}>
				<Head>
					<meta charSet="UTF-8" key="charset" />
					{settings.metrics.yandex && <meta name="yandex-verification" content={settings.metrics.yandex} />}
					{settings.metrics.google && <meta name="google-site-verification" content={settings.metrics.google} />}

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
						rel="stylesheet"
					/>
					{/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" /> */}

					{!dev && settings?.metrics?.gtm && (
						<script
							async
							dangerouslySetInnerHTML={{
								__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${settings.metrics.gtm}');`
							}}
						/>
					)}
				</Head>
				<body>
					{!dev && settings?.metrics?.gtm && (
						<noscript
							dangerouslySetInnerHTML={{
								__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${settings.metrics.gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
							}}
						/>
					)}

					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
