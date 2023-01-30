import '../public/styles/globals.scss'
import NextProgressBar from 'nextjs-progressbar'
import AppProvider from '../contexts/appContext'
function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextProgressBar color='#ff7652' startPosition={0.3} stopDelayMs={200} height={3} />
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </>
    )

}

export default MyApp 