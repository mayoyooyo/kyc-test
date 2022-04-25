import { useTranslation } from 'react-i18next'

export default function Nav() {
  const { i18n } = useTranslation()

  const changeLanguage = () => {
    console.log(i18n.language)
    if (i18n.language === 'th') {
      i18n.changeLanguage('en')
    } else if (i18n.language === 'en') {
      i18n.changeLanguage('th')
    }
  }
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <button className=' bg-white text-black' onClick={() => changeLanguage()}>
        change lang
      </button>
    </div>
  )
}
