import Icon from "../common/Icons";

export default function Subscrible({title, desc, ...props}) {
	return (
		<div className="widget widget-subsc">
			<div className="desc">{title ? title : desc}</div>
			<form className="row form-subsc" onSubmit={(e) => e.preventDefault()}>
				<input type="text" name="email" className="ghost" placeholder="Ваш e-mail" />
				<button type="submit" className="button ghost submit" aria-label="Отправить">
					<Icon name="arrow-right" />
				</button>
			</form>
		</div>
	)
}
