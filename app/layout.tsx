import './globals.css'

export const metadata = {
  title: 'Sneakers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@500;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  )
}
