import Link from 'next/link'
import Router from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { Carousel } from 'antd'

import useAction from 'core/api'

const Posts = ({ data }) => {
	const [records, setRecords] = useState(data || [])

	useEffect(() => {
		if (!records.length && !data.length) loadData()
	}, [])

	const loadData = async () => {
		await useAction.get(`posts`, { limit: 5 }).then((data) => data && !data?.error && setRecords(data))
	}

	const slider = useRef(null)
	const settings = {
		dots: false,
		effect: 'fade',
		autoplay: true,
		infinite: false,
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		adaptiveHeight: true,
		responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }]
	}

	return (
		records?.length > 0 && (
			<section className="container main-questions">
				<div className="container-inner">
					<div className="row questions-inner">
						<div className="column heading">
							<h2>
								Ответы <br />
								на вопросы
							</h2>
							<p>Вы можете задать любой, интересующий вас вопрос и ознакомиться с уже заданными</p>
							<Link href="/qa">
								<a className="button">Задать вопрос</a>
							</Link>
						</div>
						<div className="column list">
							<div className="inner carousel">
								<Carousel {...settings} ref={slider}>
									{records.map((item, i) => (
										<div key={i} className="post">
											<div className="post-inner">
												<div className="post-heading">
													<h3>
														<Link href="/[post]" as={`/${item.slug}`}>
															<a title={item.title}>{item.title}</a>
														</Link>
													</h3>
												</div>
												{item.excerpt && <div className="post-desc" dangerouslySetInnerHTML={{ __html: item.excerpt }} />}
												<ul className="row post-tags">
													{item?.categories?.map((category, k) => (
														<li key={k}>
															<Link href="/[category]/[post]" as={`/${category.slug}/${item.slug}`}>
																<a title={category.name}>{category.name}</a>
															</Link>
														</li>
													))}
												</ul>
											</div>
										</div>
									))}
								</Carousel>

								<button type="button" className="button button-nav prev" onClick={() => slider.current.prev()} />
								<button type="button" className="button button-nav next" onClick={() => slider.current.next()} />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	)
}

export default Posts
