import { createContext, useContext, useState } from 'react'
import AntdProvider from './AntdProvider'

const StoreContext = createContext({})

export const StoreProvider = ({ children }) => {
	const [swipeSlider, setSwipeSlider] = useState(false)
	const [loading, setLoading] = useState(true)
	const [message, setMessage] = useState('')
	const [store, setStore] = useState({ user: '', nav: false })
	const { user, nav } = store

	return (
		<AntdProvider>
			<StoreContext.Provider value={{ loading, message, store, setStore, swipeSlider, setSwipeSlider }}>{children}</StoreContext.Provider>
		</AntdProvider>
	)
}

export default function useStore() {
	return useContext(StoreContext)
}
