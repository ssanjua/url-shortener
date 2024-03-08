import Head from "next/head";
import { useRef, useState } from 'react'
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CopyToClipboardButton from '../components/CopyToClipboardButton';
import Input from '../components/Input';
import GoToLinkButton from '../components/GoToLinkButton';
import ResetButton from '../components/ResetButton';
import useShortUrl from "./hooks/useShortUrl";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    url,
    setUrl,
    shortURL,
    showShortUrl,
    errorMessage,
    handleSubmit,
    handleReset,
  } = useShortUrl();

  return (
    <>
      <Head>
        <title>shortURL by ssanjua</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <p>con amor por <code>ssanjua ❤️</code></p>
        </header>
      <main className={styles.mainContent}>
        <h1>SHORT URL</h1>
          <p>Shorten your URL easy, fast and:</p>
          <p>Acortá la URL de forma fácil, gratis y segura:</p>
          <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            value={showShortUrl ? shortURL : url}
            onValueChange={showShortUrl ? (e) => setShortURL(e.target.value) : (e) => setUrl(e.target.value)}
            minLength="5"
          />
          {!showShortUrl && (
            <button type="submit" className={styles.button}>SHORT ✂️</button>
          )}
          {showShortUrl && (
            <>
              <div className={styles.shortUrlDisplay}>
                <CopyToClipboardButton textToCopy={shortURL} />
                <GoToLinkButton url={shortURL} />
              </div>
              <ResetButton onReset={handleReset} />
            </>
            )}
          </form>
        </main>
      </div>
    </>
  );
}
