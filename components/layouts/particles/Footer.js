import { Icon, Link, Cookie } from 'components/common'

const terms = [
	{ name: 'Условия использования сайта', link: { href: '/[...page]', as: '/user-agreement' } },
	{ name: 'Политика в отношении обработки ПДн', link: { href: '/[...page]', as: '/user-agreement/politika-kompanii' } },
	{ name: 'Политика Cookies', link: { href: '/[...page]', as: '/user-agreement/cookies' } }
]

const Footer = ({ menu, ...props }) => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className="footer">
			<div className="container-inner">
				<div className="row top">
					<span className="copy">© BIOCAD {currentYear}</span>

					<div className="subsc">
						<div className="row inner">
							<div className="desc">
								Не пропустите новые статьи. <br />
								Мы не отправляем спам, только лучшие подборки
							</div>
							<div className="row formbox">
								<input type="text" className="ghost" placeholder="Ваш e-mail" />
								<button type="submit" className="button ghost submit">
									<Icon name="arrow-right" />
								</button>
							</div>
						</div>
					</div>

					<div className="row social">
						<a href="https://www.facebook.com/biocad" className="fb" target="_blank" rel="noreferrer">
							<Icon name="fb" />
						</a>
						<a href="https://vk.com/biocad" className="vk" target="_blank" rel="noreferrer">
							<Icon name="vk" />
						</a>
						<a href="https://instagram.com/biocad" className="inst" target="_blank" rel="noreferrer">
							<Icon name="inst" />
						</a>
						<a href="http://www.youtube.com/user/BIOCADcompany" className="yt" target="_blank" rel="noreferrer">
							<Icon name="yt" />
						</a>
					</div>
				</div>

				<div className="row bottom">
					{terms?.length > 0 && (
						<ul className="row terms">
							{terms.map((a, i) => (
								<li key={i}>
									<Link {...a.link}>
										<a title={a.name}>{a.name}</a>
									</Link>
								</li>
							))}
						</ul>
					)}

					<div className="contacts">
						<a href="mailto:bnews@biocad.ru">Связаться с нами</a>
					</div>
				</div>
			</div>

			<Cookie data={null} />
		</footer>
	)
}

export default Footer
