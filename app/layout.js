import './globals.css'

export const metadata = {
  title: 'CodeSage - Premium IT Solutions & Development',
  description: 'CodeSage delivers cutting-edge IT solutions, custom software development, and digital transformation services. Expert team specializing in web development, mobile apps, cloud solutions, and enterprise software.',
  keywords: 'IT company, software development, web development, mobile apps, cloud solutions, digital transformation, CodeSage',
  authors: [{ name: 'CodeSage Team' }],
  openGraph: {
    title: 'CodeSage - Premium IT Solutions & Development',
    description: 'CodeSage delivers cutting-edge IT solutions, custom software development, and digital transformation services.',
    url: 'https://codesage.com',
    siteName: 'CodeSage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeSage - Premium IT Solutions & Development',
    description: 'CodeSage delivers cutting-edge IT solutions, custom software development, and digital transformation services.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-amiamie">
        {children}
      </body>
    </html>
  )
}