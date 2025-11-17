"use client"

import { useState, useRef, useEffect } from 'react'
import { Globe, Check } from 'lucide-react'
import { Country, Language, localeConfigs, countryNames, languageNames, saveLocalePreference } from '@/lib/i18n'

interface LanguageSelectorProps {
  currentCountry: Country
  currentLanguage: Language
  onLocaleChange: (country: Country, language: Language) => void
}

export default function LanguageSelector({ currentCountry, currentLanguage, onLocaleChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const countries: Country[] = ['BR', 'PT', 'US', 'GB', 'ES', 'FR', 'DE', 'IT']

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCountrySelect = (country: Country) => {
    const locale = localeConfigs[country]
    saveLocalePreference(country, locale.language)
    onLocaleChange(country, locale.language)
    setIsOpen(false)
  }

  const getFlagEmoji = (country: Country): string => {
    const flags: Record<Country, string> = {
      BR: '🇧🇷',
      PT: '🇵🇹',
      US: '🇺🇸',
      GB: '🇬🇧',
      ES: '🇪🇸',
      FR: '🇫🇷',
      DE: '🇩🇪',
      IT: '🇮🇹'
    }
    return flags[country]
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-blue-500/30 hover:border-blue-400/50 rounded-lg transition-all duration-300"
        aria-label="Select language and country"
      >
        <Globe className="w-5 h-5 text-blue-400" />
        <span className="text-2xl">{getFlagEmoji(currentCountry)}</span>
        <span className="text-white font-semibold hidden sm:inline">
          {countryNames[currentCountry][currentLanguage]}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-blue-500/30 rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="p-3 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-b border-blue-500/30">
            <h3 className="text-white font-bold text-sm">
              {currentLanguage === 'pt' ? 'Selecione seu país' :
               currentLanguage === 'en' ? 'Select your country' :
               currentLanguage === 'es' ? 'Selecciona tu país' :
               currentLanguage === 'fr' ? 'Sélectionnez votre pays' :
               currentLanguage === 'de' ? 'Wählen Sie Ihr Land' :
               'Seleziona il tuo paese'}
            </h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {countries.map((country) => {
              const locale = localeConfigs[country]
              const isSelected = country === currentCountry
              
              return (
                <button
                  key={country}
                  onClick={() => handleCountrySelect(country)}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:bg-blue-600/20 transition-colors ${
                    isSelected ? 'bg-blue-600/30' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getFlagEmoji(country)}</span>
                    <div className="text-left">
                      <div className="text-white font-semibold">
                        {countryNames[country][currentLanguage]}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {languageNames[locale.language][currentLanguage]} • {locale.currencySymbol}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <Check className="w-5 h-5 text-green-400" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
