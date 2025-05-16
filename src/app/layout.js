import './globals.css'

export const metadata = {
  title: 'MITTALIS Research India',
  description: 'Empowering underprivileged children across India through education, upskilling, and research',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-yellow-100">
        {children}
      </body>
    </html>
  )
}