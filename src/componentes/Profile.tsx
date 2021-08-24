import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';
import { ChallengeContext } from '../contexts/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengeContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/72147915_513761342783244_7582955126923460608_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vSKPVCifIRgAX8z2J4v&_nc_ht=scontent-gru2-2.xx&oh=b931cd49aff9ed0da8f6d96a7a270f2e&oe=61433CC9" alt="foto de perfil" />
        
        <div>
            <strong>Leandro Delinger</strong>
            <p>
                <img src="icons/level.svg" alt="level" className={styles.levelicon}/>
                Level {level}
            </p>
        </div>
        </div>
    )
}
