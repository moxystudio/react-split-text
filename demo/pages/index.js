import React from 'react';
import SplitText from '@moxy/react-split-text';
import styles from './index.module.css';

const Home = () => (
    <div className={ styles.home }>
        <h1>react-lib-template</h1>

        <div className={ styles.textWrapper }>
            <SplitText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SplitText>
            <span className={ styles.final }>BYE BYE!</span>
        </div>

        <div className={ styles.textWrapper }>
            <SplitText separator={ '-' }>
                Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit,-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua.
            </SplitText>
            <span className={ styles.final }>BYE BYE!</span>
        </div>
    </div>
);

export default Home;
