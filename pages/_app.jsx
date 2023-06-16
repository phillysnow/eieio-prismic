import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const space_grotesk = Space_Grotesk({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${space_grotesk.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
