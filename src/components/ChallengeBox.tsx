import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={ activeChallenge.image ? `/exercicios/${activeChallenge.image}` : `icons/${activeChallenge.type}.svg`} width="300" height="200"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        type='button'
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}>
                            Falhei
                        </button>
                        <button 
                        type='button'
                        className={styles.challengeSuccededButton}
                        onClick={handleChallengeSucceded}>

                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                
                <div className={styles.challengeNotActive}>
                <strong>
                    Finalize um ciclo para receber desafios
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de nível completando desafios.
                </p>
            </div>
                
            )}
        </div>
    );
}