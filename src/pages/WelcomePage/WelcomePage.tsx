import ConfettiComponent from '../../shared/ConfettiComponent';
import styles from './WelcomePage.module.scss';

import image1 from './images/image1.png';
import image2 from './images/image2.png';

export const WelcomePage = () => {
    return (
        <>
            <div className={styles.pageContainer}>
                <h1>Price Monitoring has been installed 🎉</h1>
                <h2>1. Pin Price Monitoring extension for easy access</h2>
                <img src={image1} className={styles.image} alt="welcome page" />

                <h2>2. Click on the Price Monitoring extension icon to create your first tracking</h2>
                <img src={image2} className={styles.image} alt="welcome page" />

                <h2 className={styles.lastH2}>
                    3. Explore the <a href="https://iamevgen.github.io/price-monitoring-website/">user manual</a>
                </h2>
            </div>

            <ConfettiComponent />
        </>
    );
};
