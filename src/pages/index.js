import Head from "next/head";
import { Inter } from "next/font/google";
import React, { useState } from 'react';
import styles from "@/styles/Home.module.css";
import CopyToClipboardButton from '../components/CopyToClipboardButton';
import Input from '../components/Input';
import GoToLinkButton from '../components/GoToLinkButton';
import ResetButton from '../components/ResetButton';
import useShortUrl from "../hooks/useShortUrl";
import FeatureCard from "../components/FeatureCard";
import Footer from '../components/Footer';


const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    icon: 'like.png', 
    title: 'Easy',
    description: 'ShortURL offers a simple and rapid solution. Just enter your lengthy URL to obtain a shortened version.',
  },
  {
    icon: 'link.png', 
    title: 'Shortened',
    description: 'With ShortURL, you can shorten any link regardless of its length.'
  },
  {
    icon: 'secure.png', 
    title: 'Secure',
    description: 'Experience swift and secure URL shortening with HTTPS protocol and encryption.'
  },
];

export default function Home() {
  const {
    url,
    setUrl,
    shortURL,
    showShortUrl,
    handleSubmit,
    handleReset,
  } = useShortUrl();

  return (
    <>
      <Head>
        <title>shortURL by ssanjua</title>
        <meta name="description" content="url shortener acortador" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="www.ssanjua.com" target="_blank" rel="noopener noreferrer">
            <p>with love by <code>ssanjua ❤️</code></p>
          </a>
        </header>
      <main className={styles.mainContent}>
        <div className={styles.titleContainer}>
          <img src="/shortUrl.png" alt="Short URL Icon" className={styles.titleIcon} />
            <h1 className={styles.title}>SHORT URL</h1>
        </div>
          <p className={styles.description}>Shorten your URL easy, fast and secure</p>
          <p className={styles.descriptionEsp}>Acortá la URL de forma fácil, gratis y segura:</p>
          <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                  value={showShortUrl ? shortURL : url}
                  onValueChange={showShortUrl ? (e) => setShortURL(e.target.value) : (e) => setUrl(e.target.value)}
                  minLength="5"
                />
                {!showShortUrl && (
                  <button type="submit" className={styles.button}>SHORT</button>
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
          </div>
          <div className={styles.featuresContainer}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                descriptionEsp={feature.descriptionEsp}
              />
            ))}
          </div>
          </main>
        <Footer />
      </div>
    </>
  );
}
