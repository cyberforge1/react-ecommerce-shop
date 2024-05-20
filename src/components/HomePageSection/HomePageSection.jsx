import React from 'react';
import styles from './HomePageSection.module.scss';

const HomePageSection = ({ imageUrl }) => {
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>See Collection</button>
            </div>
        </div>
    );
};

export default HomePageSection;
