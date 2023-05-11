import React, { createContext, useEffect, useState } from 'react'
import axios from '@/lib/axios'
import translations from '@/lang/translation.json'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')

    useEffect(() => {
        async function fetchLanguage() {
            const { data } = await axios.get('/api/language')

            setLanguage(data.language)
        }
        fetchLanguage()
    }, [])

    const t = (key) => {
        return translations[language][key]
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProvider }