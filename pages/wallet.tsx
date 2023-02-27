import Head from "next/head";
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/navbar";

export default function wallet() {
    return (
        <>
            <Head>
                <title>Connect Wallet</title>
                <meta name="description" content="designed to pay for NFTs per view" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div className="container-md mt-3">
                    <h2>Select your wallet</h2>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">MetaMask</h5>
                                    <p className="card-text">Connect with MetaMask wallet</p>
                                    <button className="btn btn-primary" type="button">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">MetaMask</h5>
                                    <p className="card-text">Connect with MetaMask wallet</p>
                                    <button className="btn btn-primary" type="button">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}