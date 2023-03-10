import '@/styles/globals.css'
import '@/styles/navbarStyle.css'
import '@/styles/style.css'
import '@/styles/swiper.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js')
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider >
  )
}
