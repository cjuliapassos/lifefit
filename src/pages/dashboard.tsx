import { Profile } from "../components/Profile"
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallenges } from "../components/CompletedChallenges";
import styles from '../styles/pages/Home.module.css';
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";


import Head from 'next/head';
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { GetServerSideProps } from "next";

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}> 
        <Head>
          <title>Início | Life fit</title>
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
    </ChallengesProvider>
  )
}
//Aqui é o arquivo que mexe na estrutura do documento.

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}