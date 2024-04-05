import './globals.css';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import ExitDraftModeLink from './ExitDraftModeLink';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Felipe Ramos - Desenvolvedor',
  description: 'Desenvolvedor FrontEnd',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { locale: string },
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (err) {
    notFound();
  }
  return (

    <html lang={params.locale}>
      <body className={inter.className}>
        <>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {draftMode().isEnabled && (
              <p className='bg-orange-200 py-4 px-[6vw]'>
                Draft mode is enabled! <ExitDraftModeLink className="underline" />
              </p>
            )}
            {children}
          </NextIntlClientProvider>
          <Analytics />
        </>
      </body>
    </html>
  )
}
