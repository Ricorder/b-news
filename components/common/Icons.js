const icons = {
	search: <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10zm0 2A7 7 0 1 0 7 0a7 7 0 0 0 0 14z" fill="#102654"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.882 14.47l-3.967-2.939 1.19-1.607 3.967 2.94-1.19 1.606z" fill="#102654"></path></svg>,
	'arrow-right': <svg width="27" height="10" viewBox="0 0 27 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5h24M20.268 8.268L25 5l-4.732-3.268" stroke="currentColor" strokeWidth="1.5"></path></svg>,
	fb: <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.304 16.257V9.39h3.13l.523-2.943H6.303V4.976c0-.981.523-1.472 1.566-1.472h1.565V.562H6.826c-2.609 0-3.652 1.471-3.652 3.923v1.962H.044V9.39h3.13v6.867h3.13z" fill="currentColor"></path></svg>,
	vk: <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.884.718c.114-.387 0-.672-.546-.672h-1.806c-.46 0-.672.245-.785.517 0 0-.92 2.265-2.22 3.733-.42.424-.614.56-.844.56-.114 0-.288-.136-.288-.523V.718c0-.465-.13-.672-.51-.672h-2.84c-.288 0-.46.217-.46.418 0 .44.65.542.718 1.781v2.69c0 .588-.104.696-.334.696-.614 0-2.104-2.274-2.988-4.876-.178-.505-.352-.71-.816-.71H1.36c-.515 0-.62.246-.62.518 0 .483.614 2.884 2.856 6.056 1.493 2.166 3.597 3.34 5.511 3.34 1.15 0 1.292-.26 1.292-.71 0-2.069-.105-2.264.472-2.264.267 0 .727.136 1.8 1.18 1.227 1.24 1.43 1.794 2.117 1.794h1.806c.515 0 .776-.26.626-.775-.344-1.08-2.666-3.305-2.77-3.454-.267-.347-.19-.502 0-.811.003-.003 2.208-3.138 2.435-4.2z" fill="currentColor"></path></svg>,
	yt: <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.223 0H4.777C2.139 0 0 2.234 0 4.99v7.02C0 14.767 2.139 17 4.777 17h13.446C20.861 17 23 14.766 23 12.01V4.99C23 2.233 20.861 0 18.223 0zm-3.23 8.842l-6.29 3.133c-.167.083-.36-.044-.36-.238V5.275c0-.197.198-.325.366-.236l6.29 3.33a.269.269 0 0 1-.006.473z" fill="currentColor"></path></svg>,
	inst: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 3a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm11-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM6.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" fill="currentColor"></path></svg>,
	tg: <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.785 1.497l-2.527 11.918c-.191.84-.688 1.05-1.395.654l-3.85-2.838-1.858 1.787c-.205.206-.377.378-.774.378l.277-3.922 7.136-6.448c.31-.276-.067-.43-.482-.153L4.49 8.428.692 7.239c-.826-.258-.841-.826.172-1.222L15.719.294c.688-.258 1.29.153 1.066 1.203z" fill="currentColor"></path></svg>,
	tw: <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.435 1.59a5.77 5.77 0 0 1-1.655.46A2.92 2.92 0 0 0 14.048.436a5.684 5.684 0 0 1-1.83.707A2.862 2.862 0 0 0 10.113.22c-1.593 0-2.881 1.307-2.881 2.918 0 .229.024.452.074.666A8.134 8.134 0 0 1 1.367.752c-.247.43-.39.933-.39 1.467a2.93 2.93 0 0 0 1.283 2.43 2.787 2.787 0 0 1-1.306-.364v.036a2.91 2.91 0 0 0 2.312 2.861 2.868 2.868 0 0 1-.759.102c-.185 0-.366-.018-.542-.054A2.89 2.89 0 0 0 4.66 9.257 5.734 5.734 0 0 1 .39 10.465a8.001 8.001 0 0 0 4.413 1.319c5.304 0 8.202-4.448 8.202-8.307 0-.126-.003-.252-.009-.376a5.954 5.954 0 0 0 1.438-1.512z" fill="currentColor"></path></svg>
}

const Icon = ({ name,  ...props }) => {
	return typeof icons[name] !== "undefined" && icons[name]
}

export default Icon
