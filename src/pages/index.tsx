import Head from 'next/head';

import { CompletedChallenges } from "../componentes/CompletedChallenges";
import { Countdown } from "../componentes/Countdown";
import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";
import { ChallengeBox } from "../componentes/ChallengeBox";


import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
      <section>

        <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  )
}
