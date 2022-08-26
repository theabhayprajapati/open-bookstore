import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import Product from '../components/Product';

const Home: NextPage = () => {
  const [login, setLogin] = React.useState(true);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Open Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-5">
        {login ? (
          <div className='grid 
            md:grid-cols-3 grid-cols-1 gap-2
          '>
            {[...Array(100)].map((_, i) => (
              <Product name='Backpack' image='https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia' location='New York' price={220} />
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-6xl font-bold">
              Welcome to{' '}
              <a className="text-blue-600" href="/">
                Open Books
              </a>
            </h1>
            <p className="mt-3 text-2xl">
              get paid for your books
            </p>
          </div>
        )}
        <BottomNavigation />
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          @abhayprajapati
        </a>
      </footer>
    </div>
  )
}

export default Home
