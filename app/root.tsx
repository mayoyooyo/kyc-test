import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import antdStyles from 'antd/dist/antd.css'

// export const meta: MetaFunction = () => ({
//   charset: 'utf-8',
//   title: 'New Remix App',
//   viewport: 'width=device-width,initial-scale=1',
// })

export const meta: MetaFunction = () => {
  return { title: 'KYC' }
}
export function links() {
  return [{ rel: 'stylesheet', href: antdStyles }]
}

export default function App() {
  return (
    <html lang='en'>
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
