import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className=''>
      <Head />
      <body className='dark:bg-slate-900 dark:text-white' dir='rtl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
