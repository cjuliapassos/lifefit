import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} =useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="image.jpg" alt="José Freitas" />
            <div>
                <strong>José Freitas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>    
                    Nível {level}
                </p>
            </div>
        </div>
    );
}