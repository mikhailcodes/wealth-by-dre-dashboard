import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NhostNextProvider, NhostClient } from '@nhost/nextjs';
import { Navigation, Footer } from '../components/layout'

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <Navigation></Navigation>

      <Component {...pageProps} />
      <Footer></Footer>
    </NhostNextProvider>

  )
}

export default MyApp
