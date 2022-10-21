import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src='https://localhost:8082/bootstrap.js' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
