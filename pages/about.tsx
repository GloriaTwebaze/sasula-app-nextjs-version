import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'


export default function About() {
  return (
    <>
      <Head>
        <title>About Sasula</title>
        <meta name="description" content="designed to pay for NFTs per view" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
      <div className="landing container-md mt-3 text-center">
        <h2>Discover Extraordinary NFTs</h2>
        <p>
          Sasula helps you sell your NFTs and charge per view to other third
          party
        </p>
        <div className="buttons row" mt-6 justify-content-center>
          <div className="col-md-4">
            <a href="#" className="btn btn-success">
              Create
            </a>
          </div>
          <div className="col-md-4">
            <a href="./marketPlace" className="btn btn-success">
              Explore
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          © 2023 Sasula
        </div>
      </footer>
      </main>
    </>
  )
}
