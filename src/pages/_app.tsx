import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Google_Sans } from 'next/font/google';
import { IoCloseOutline } from 'react-icons/io5';
import { Flip, ToastContainer } from 'react-toastify';

import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const font = Google_Sans({
  variable: '--font-primary',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
          retry: 0,
          throwOnError: false,
        },
      },
    }),
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add(font.variable);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>ESG Report Convert AI</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
      </QueryClientProvider>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Flip}
        pauseOnHover
        closeButton={CloseButton}
      />
    </div>
  );
}

const CloseButton = ({ closeToast }: any) => (
  <button
    onClick={closeToast}
    className="btn btn-square btn-ghost hover:text-white hover:bg-white/30 border-none btn-xs rounded-sm absolute top-0 right-0"
  >
    <IoCloseOutline className="w-4 h-4" />
  </button>
);
