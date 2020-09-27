import Head from "next/head";
import Header from "@components/Header";
// import Footer from "@components/Footer";

export default function Home() {
  let currentYear = new Date().getFullYear()
  return (
    <div className="container">
      <Head>
        <title>Joe Gallegos - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion>
          <Header title="Hi, I'm Joe 👋" />
          {/* <p className="description">
            In 2017, I decided to make a career change. Not to say that small
            business and home mortgage loans aren't fun... I just wanted to start
            building things. Fast forward to the year {currentYear.valueOf()}, and
            I'm building complex web and mobile apps.
          </p> */}
          <p className="description">
            You can find me on{" "}
            <a href="https://linkedin.com/in/joebgallegos">LinkedIn</a> and{" "}
            <a href="https://github.com/joeblas">GitHub</a>.
          </p>
          <code>// TODO: Make site more fun.</code>
        </motion>
      </main>

      {/* <Footer /> */}

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 30rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          line-height: 1.5rem;
          font-size: 1.2rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }

        a {
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
