import CookieConsent from 'react-cookie-consent'
import Link from './Link'

const Cookie = (props) => {
	return (
		<CookieConsent
			expires={150}
			location="bottom"
			disableStyles={true}
			enableDeclineButton={false}
			declineButtonText=""
			cookieName="cookieAccept"
			containerClasses="cookie-box"
			contentClasses="cookie-inner"
			buttonClasses="button cookie-accept"
			declineButtonClasses="cookie-close"
			buttonText="Принимаю">
			<div className="cookie-text">
				Мы используем cookie
				<br /> для персонализации сервисов и удобства пользователей. <br />
				Вы можете запретить сохранение cookie в настройках своего браузера.{' '}
				<Link href="/user-agreement/[slug]" as={`/user-agreement/cookie`}>
					<a target="_blank">Подробнее</a>
				</Link>
			</div>
		</CookieConsent>
	)
}

export default Cookie
