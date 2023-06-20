import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Login Screen',
  description: 'Criando uma página de login com NextJS e Material UI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
