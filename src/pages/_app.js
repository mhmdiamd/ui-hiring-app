import '@/styles/globals.css'
import '@/styles/navbarStyle.css'
import '@/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js')
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
