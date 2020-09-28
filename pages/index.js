import Head from 'next/head';
import Header from '@components/Header';
import styles from './index.module.css';
// import Footer from "@components/Footer";

export default function Home() {
  // let currentYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <Head>
        <title>Joe Gallegos - Software Engineer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <Header title="Hi, I'm Joe 👋" />
        {/* <p className="description">
              In 2017, I decided to make a career change. Not to say that small
              business and home mortgage loans aren't fun... I just wanted to start
              building things. Fast forward to the year {currentYear.valueOf()}, and
              I'm building complex web and mobile apps.
            </p> */}
        <p style={{ color: '#F26671' }}>
          You can find me on{' '}
          <a
            style={{ color: '#F24452', fontWeight: 'bold' }}
            href='https://linkedin.com/in/joebgallegos'
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            style={{ color: '#F24452', fontWeight: 'bold' }}
            href='https://github.com/joeblas'
          >
            GitHub
          </a>
          .
        </p>
      </div>

      {/* <Footer /> */}

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #f2eadf;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
