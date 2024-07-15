import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LaCryptaLogo from '~/components/LaCryptaLogo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chorizo Seco</title>
        <meta name="description" content="chorizoseco.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <div className="background"></div>
        <main className="flex-grow flex justify-center">
          <div
            className="container flex flex-col items-center justify-center gap-12 px-4 py-16"
            style={{ marginTop: '130px' }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
              <p>Chorizo Seco</p>
            </h1>
            <div className="text-lg" style={{ marginTop: '-40px' }}>
              Tu alias y mail de Bitcoin bien campero.
            </div>
            <Link
              className="gap-4 rounded-x1 p-4 text-black"
              href="https://wallet.chorizoseco.com/signup"
              target="_blank"
            >
              <div
                style={{ display: 'flex', alignItems: 'center', marginTop: '-40px' }}
                className="p-4 rounded-xl bg-white/40 hover:bg-black/20"
              >
                <Image src="/logo.png" alt="Chorizo Seco" width={32} height={32} />
                <div className="text-lg">
                  <b>Quiero un Chorizo Seco</b>
                </div>
                <Image src="/logo.png" alt="Chorizo Seco" width={32} height={32} />
              </div>
            </Link>
          </div>
        </main>
        <footer className="flex h-20 items-center justify-center" style={{ marginBottom: '25px' }}>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl p-4 text-black"
            href="https://lacrypta.ar"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">
              <LaCryptaLogo />
            </h3>
          </Link>
        </footer>
      </div>
    </>
  );
}
