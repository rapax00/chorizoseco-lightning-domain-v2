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
        <main
          className="b g-gradient-to-b flex min-h-screen flex-col items-center
      justify-center from-[#d2d2d2] to-[#fefefe]"
        >
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/logo.png" alt="Chorizo Seco" width={64} height={64} />
                <p>Chorizo Seco</p>
              </div>
            </h1>
            <div className="text-lg" style={{ marginTop: '-40px' }}>
              Tu alias y mail de Bitcoin bien campero.
            </div>
          </div>
        </main>
        <footer className="flex h-20 items-center justify-center">
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
