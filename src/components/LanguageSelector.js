// LanguageSelector.js
import translations from '@/lang/translation.json'
import axios from '@/lib/axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import Button from '@/components/Buttons/ButtonPrimary'

const LanguageSelector = () => {

    const [language, setLanguage] = useState('en')

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/api/language')

            setLanguage(data.language)
        }
        fetchData()
    }, [])

    const t = (key, language) => {
        return translations[language][key]
    }
    const handleLanguageChange = newLanguage => {
        setLanguage(newLanguage)
        // Send a request to the backend to update the language
        async () => {
            axios.post('/api/language', {
                language: newLanguage,
            })
        }
    }
    return (
        <div>
            <h1>{t('welcome', language)}</h1>
            <Button
                onClick={() => handleLanguageChange('en')}>
                English
            </Button>
            <Button
                onClick={() => handleLanguageChange('es')}>
                Español
            </Button>
        </div>
    )
}

export default LanguageSelector
