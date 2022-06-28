import NextLink from 'next/link'
import PropTypes from 'prop-types'
import React, { Children } from 'react'
import { useRouter } from 'next/router'

const Link = ({ children, ...props }) => {
	const { asPath } = useRouter()
	const child = Children.only(children)
	const childClassName = child.props.className || ''
	const className = asPath === props.href || asPath === props.as ? `${childClassName} active`.trim() : childClassName
	return <NextLink {...props}>{React.cloneElement(child, { className })}</NextLink>
}

Link.propTypes = {
	href: PropTypes.string.isRequired
}

export default Link
