import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
        <GoogleOAuthProvider>
                <Provider store={store}>
                        <App />
                </Provider>
        </GoogleOAuthProvider>
)
