export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de' | 'it'
export type Country = 'BR' | 'US' | 'ES' | 'FR' | 'DE' | 'IT' | 'PT' | 'GB'

export interface LocaleConfig {
  language: Language
  country: Country
  currency: string
  currencySymbol: string
  dateFormat: string
}

export const localeConfigs: Record<Country, LocaleConfig> = {
  BR: {
    language: 'pt',
    country: 'BR',
    currency: 'BRL',
    currencySymbol: 'R$',
    dateFormat: 'DD/MM/YYYY'
  },
  PT: {
    language: 'pt',
    country: 'PT',
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD/MM/YYYY'
  },
  US: {
    language: 'en',
    country: 'US',
    currency: 'USD',
    currencySymbol: '$',
    dateFormat: 'MM/DD/YYYY'
  },
  GB: {
    language: 'en',
    country: 'GB',
    currency: 'GBP',
    currencySymbol: '£',
    dateFormat: 'DD/MM/YYYY'
  },
  ES: {
    language: 'es',
    country: 'ES',
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD/MM/YYYY'
  },
  FR: {
    language: 'fr',
    country: 'FR',
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD/MM/YYYY'
  },
  DE: {
    language: 'de',
    country: 'DE',
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD.MM.YYYY'
  },
  IT: {
    language: 'it',
    country: 'IT',
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD/MM/YYYY'
  }
}

export const countryNames: Record<Country, Record<Language, string>> = {
  BR: { pt: 'Brasil', en: 'Brazil', es: 'Brasil', fr: 'Brésil', de: 'Brasilien', it: 'Brasile' },
  PT: { pt: 'Portugal', en: 'Portugal', es: 'Portugal', fr: 'Portugal', de: 'Portugal', it: 'Portogallo' },
  US: { pt: 'Estados Unidos', en: 'United States', es: 'Estados Unidos', fr: 'États-Unis', de: 'Vereinigte Staaten', it: 'Stati Uniti' },
  GB: { pt: 'Reino Unido', en: 'United Kingdom', es: 'Reino Unido', fr: 'Royaume-Uni', de: 'Vereinigtes Königreich', it: 'Regno Unito' },
  ES: { pt: 'Espanha', en: 'Spain', es: 'España', fr: 'Espagne', de: 'Spanien', it: 'Spagna' },
  FR: { pt: 'França', en: 'France', es: 'Francia', fr: 'France', de: 'Frankreich', it: 'Francia' },
  DE: { pt: 'Alemanha', en: 'Germany', es: 'Alemania', fr: 'Allemagne', de: 'Deutschland', it: 'Germania' },
  IT: { pt: 'Itália', en: 'Italy', es: 'Italia', fr: 'Italie', de: 'Italien', it: 'Italia' }
}

export const languageNames: Record<Language, Record<Language, string>> = {
  pt: { pt: 'Português', en: 'Portuguese', es: 'Portugués', fr: 'Portugais', de: 'Portugiesisch', it: 'Portoghese' },
  en: { pt: 'Inglês', en: 'English', es: 'Inglés', fr: 'Anglais', de: 'Englisch', it: 'Inglese' },
  es: { pt: 'Espanhol', en: 'Spanish', es: 'Español', fr: 'Espagnol', de: 'Spanisch', it: 'Spagnolo' },
  fr: { pt: 'Francês', en: 'French', es: 'Francés', fr: 'Français', de: 'Französisch', it: 'Francese' },
  de: { pt: 'Alemão', en: 'German', es: 'Alemán', fr: 'Allemand', de: 'Deutsch', it: 'Tedesco' },
  it: { pt: 'Italiano', en: 'Italian', es: 'Italiano', fr: 'Italien', de: 'Italienisch', it: 'Italiano' }
}

export function formatPrice(price: number, locale: LocaleConfig): string {
  return `${locale.currencySymbol} ${price.toFixed(2).replace('.', ',')}`
}

export function saveLocalePreference(country: Country, language: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userCountry', country)
    localStorage.setItem('userLanguage', language)
  }
}

export function getLocalePreference(): { country: Country; language: Language } | null {
  if (typeof window !== 'undefined') {
    const country = localStorage.getItem('userCountry') as Country
    const language = localStorage.getItem('userLanguage') as Language
    
    if (country && language) {
      return { country, language }
    }
  }
  return null
}

export function detectUserLocale(): LocaleConfig {
  // Try to get saved preference
  const saved = getLocalePreference()
  if (saved) {
    return localeConfigs[saved.country]
  }

  // Try to detect from browser
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language.toLowerCase()
    
    if (browserLang.startsWith('pt-br')) return localeConfigs.BR
    if (browserLang.startsWith('pt')) return localeConfigs.PT
    if (browserLang.startsWith('es')) return localeConfigs.ES
    if (browserLang.startsWith('fr')) return localeConfigs.FR
    if (browserLang.startsWith('de')) return localeConfigs.DE
    if (browserLang.startsWith('it')) return localeConfigs.IT
    if (browserLang.startsWith('en-gb')) return localeConfigs.GB
    if (browserLang.startsWith('en')) return localeConfigs.US
  }

  // Default to Brazil
  return localeConfigs.BR
}
