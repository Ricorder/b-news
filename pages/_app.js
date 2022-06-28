import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import MainLayout from 'components/layouts/main'
import useSticky from 'core/hooks/useSticky'
import { StoreProvider } from 'core/store'

import '../assets/scss/main.scss'

const webApp = ({ Component, pageProps, router }) => {
	const Layout = Component.Layout || MainLayout
	const { isSticky, element } = useSticky()
	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="format-detection" content="telephone=no" />
			</Head>

			<NextNprogress color="#3caaa8" options={{ easing: 'ease', speed: 200, startPosition: '0.3', stopDelayMs: 0, height: 3 }} />

			<StoreProvider>
				<Layout sticky={isSticky} element={element}>
					<Component {...pageProps} key={router.route} />
				</Layout>
			</StoreProvider>
		</>
	)
}

export default webApp
