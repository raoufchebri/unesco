import Head from 'next/head';
import { useEffect, useState } from 'react';
import Container from '../components/Container';
import Site from '../components/Site';

const defaultSites = Array.apply(null, Array(10)).map((_, i) => ({ id_no: i }));

export default function Home() {
  const [data, setData] = useState({
    nearestSites: defaultSites,
  });
  useEffect(() => {
    fetch('https://neon-cf-pg-test.jawj.workers.dev/')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Head>
        <title>UNESCO WOrld Heritage Sites</title>
        <link rel='icon' href='https://whc.unesco.org/favicon.ico' />
      </Head>
      <div className='dark dark:bg-slate-900'>
        <Container>
          <header>
            <div className='lg:flex lg:items-center lg:justify-between p-12 mb-10'>
              <div className='min-w-0 flex-1'>
                {/* <h1 className='text-2xl font-bold leading-7 text-gray-400 sm:truncate sm:text-4xl sm:tracking-tight '>
                Nearest world heritage sites {data && data.location}
              </h1> */}
                <h1 class='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
                  World heritage sites near {data && data.location}
                </h1>
              </div>
              <div className='mt-5 flex lg:mt-0 lg:ml-4'>
                <span className='hidden sm:block'>
                  <button
                    id='dropdownUsersButton'
                    data-dropdown-toggle='dropdownUsers'
                    data-dropdown-placement='bottom'
                    class='text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    type='button'
                  >
                    Cloudflare{' '}
                    <svg
                      class='ml-2 w-4 h-4'
                      aria-hidden='true'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M19 9l-7 7-7-7'
                      ></path>
                    </svg>
                  </button>
                  <div
                    id='dropdownUsers'
                    class='hidden z-10 w-60 bg-white rounded shadow dark:bg-gray-700'
                  >
                    <ul
                      class='overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200'
                      aria-labelledby='dropdownUsersButton'
                    >
                      <li>
                        <a
                          href='#'
                          class='flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          <img
                            class='mr-2 w-6 h-6 rounded-full'
                            src='/docs/images/people/profile-picture-1.jpg'
                            alt='Jese image'
                          />
                          Jese Leos
                        </a>
                      </li>
                    </ul>
                    <a
                      href='#'
                      class='flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline'
                    >
                      <svg
                        class='mr-1 w-5 h-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z'></path>
                      </svg>
                      Add new user
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </header>
          <main>
            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
              {data &&
                data.nearestSites.map((site) => (
                  <Site key={site.id_no} {...site} />
                ))}
            </div>
          </main>
        </Container>
        <footer className='text-gray-600 text-center py-12'>
          <p className='mb-10'>
            Heritage site data copyright © 1992 – 2022{' '}
            <a href='https://whc.unesco.org'>UNESCO/World Heritage Centre</a>.
            All rights reserved.
          </p>
          <p className='text-xs uppercase text-gray-600 text-center font-bold tracking-[0.3em]'>
            Brought to you by
          </p>
          <div className='flex flex-col items-center space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-3'>
            <div className='flex items-center justify-center'>
              <a href='https://cloudflare.com' aria-label='cloudflare.com Link'>
                <img
                  src='/cloudflare.svg'
                  alt='cloudflare.com Logo'
                  className='h-6 text-white'
                />
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a href='https://neon.tech' aria-label='neon.tech Link'>
                <img
                  src='/neon.svg'
                  alt='neon.tech Logo'
                  className='h-6 text-white'
                />
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a href='https://vercel.com' aria-label='Vercel.com Link'>
                <img
                  src='/vercel.svg'
                  alt='Vercel.com Logo'
                  className='h-4 text-white'
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
