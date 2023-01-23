import '../app/styles/globals.scss'
// import '../styles/menu.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import ReduxToastrLib from 'react-redux-toastr'
import { persistor, store } from '../app/component/account/store'
import { PersistGate } from 'redux-persist/integration/react'
import NextProgressBar from 'nextjs-progressbar'
import AuthProvider from './../app/providers/AuthProvider';
import { TypeComponentAuthFields } from '../app/providers/private-route.interface'

type TypeAppProps = AppProps & TypeComponentAuthFields
function MyApp({ Component, pageProps }: TypeAppProps) {
  return (
    <>
    <NextProgressBar color='#ff7652' startPosition={0.3} stopDelayMs={200} height={3}/>
      <Provider store={store }>
        <PersistGate persistor={persistor} loading={null}>
        <AuthProvider Component={Component}>
          <ReduxToastrLib 
          newestOnTop={false} 
          preventDuplicates 
          progressBar 
          closeOnToastrClick
          timeOut={4000} 
          transitionIn='fadeIn' 
          transitionOut='fadeOut'
          />
          <Component {...pageProps} /> 
         </AuthProvider> 
        </PersistGate>
      </Provider>
    </>
  )
  
}

export default MyApp 
