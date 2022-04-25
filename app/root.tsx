import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import antdStyles from 'antd/dist/antd.css'
import styles from './styles/app.css'
import { i18n } from './i18n.server'
import { useChangeLanguage } from 'remix-i18next'
import { useTranslation } from 'react-i18next'
import { json } from '@remix-run/node'
import Nav from './components/nav'

type LoaderData = { locale: string }

export let loader: LoaderFunction = async ({ request }) => {
  let locale = await i18n.getLocale(request)
  return json<LoaderData>({ locale })
}

export const meta: MetaFunction = () => {
  return { title: 'KYC' }
}

export function links() {
  return [
    { rel: 'stylesheet', href: antdStyles },
    { rel: 'stylesheet', href: styles },
  ]
}

export let handle = {
  // In the handle export, we could add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  i18n: ['common'],
}

export default function App() {
  let { locale } = useLoaderData<LoaderData>()

  let { i18n } = useTranslation()

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale)
  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
