import config from 'core/settings'
import Section from './Section'

export default function Banner({ type = '', bg, title, desc }) {
	const image = bg && type === 'post' ? `${config.apiupl}/${bg}` : `/images/banners/${bg}`
	return (
		<Section className="banner" style={{ backgroundImage: `url(${image})` }}>
			{title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
			{desc && <div className="desc" dangerouslySetInnerHTML={{ __html: desc }} />}
		</Section>
	)
}
