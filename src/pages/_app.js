import { LanguageProvider } from '@/context/LanguageProvider'
import 'tailwindcss/tailwind.css'
import '@/css/style.css'

function App({ Component, pageProps }) {
    return (
        <LanguageProvider>
            <Component {...pageProps} />
        </LanguageProvider>
    )
}

export default App
