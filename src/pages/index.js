import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CopyToClipboardButton from '../components/CopyToClipboardButton';
import Input from '../components/Input';
import GoToLinkButton from '../components/GoToLinkButton';
import ResetButton from '../components/ResetButton';
import useShortUrl from "./hooks/useShortUrl";
import FeatureCard from "../components/FeatureCard";


const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    icon: 'like.png', 
    title: 'Easy',
    description: 'ShortURL is easy and fast, enter the long link to get your shortened link.'
  },
  {
    icon: 'link.png', 
    title: 'Shortened',
    description: 'Use any link, no matter ehat size, ShortURL always shortens.'
  },
  {
    icon: 'secure.png', 
    title: 'Secure',
    description: 'Is fast and secure, HTTPS protocol and encryption.'
  },
];

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
        <meta name="description" content="url shortener acortador" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <p>con amor por <code>ssanjua ❤️</code></p>
        </header>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>SHORT URL</h1>
          <p className={styles.description}>Shorten your URL easy, fast and:</p>
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
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
