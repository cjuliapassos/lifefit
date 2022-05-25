// import { useEffect } from 'react';
// import { getSession, signIn, useSession, Session } from 'next-auth/client';
import React from 'react';
// import { useRouter } from 'next/router';
import Head from 'next/head';

// import { GoMarkGithub } from 'react-icons/go';
// import { FaGoogle } from 'react-icons/fa';
// import { FiLogIn } from 'react-icons/fi';

import styles from '../styles/pages/Home.module.css';

// interface HomeProps {
//   session: Session;
// }

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   if(session) {
  //     router.push('/dashboard');
  //   }
  // }, [session, router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Life Fit</title>
      </Head>

     

      <div className={styles.container}>
        <img src="/logo.png" alt="Move.it" width="400" height="300"/>

        <h2>Bem-vindo </h2>
    
     
     

        <a className={styles.botao} href='/dashboard' type="button" >
          {/* <FaGoogle size={24} /> */}
          Clique aqui para continuar
        </a>
      </div>
    </div>
  )
}
