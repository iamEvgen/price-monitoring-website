import styles from './Home.module.scss';

import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import logo from './images/icon-128.png';

export const Home = () => {
    return (
        <div className={styles.pageContainer}>
            <h1>Price Monitoring User Manual</h1>
            <p>
                <img src={logo} className={styles.logo} alt="user manual" />
                Price Monitoring is a Google Chrome extension that works locally on your computer and monitors prices of
                the products you are interested in. It can also track any changes on websites and send notifications in
                case of changes to the monitored items. To use the extension, your computer must be turned on, and the
                Google Chrome browser must be running.
            </p>

            <h2>Creating a new tracking</h2>
            <p>
                Go to the page whose content you want to track. If you have just installed the extension, please refresh
                the page.
                <br />
                1. Click on the extension icon.
                <br />
                2.1 If the extension was able to find the price on the page, a button with the text "Track" and the
                price value will appear in the popup. Click on it for quick tracking creation.
                <br />
                2.2 To manually select an element for tracking, click the "Add tracking" button.
            </p>
            <img src={image1} className={styles.image} alt="user manual" />

            <p>
                3. The extension will switch to the element selection mode. Hover your mouse over the desired element on
                the page, and it will be highlighted with a red border. The content of the element will be displayed at
                the bottom of the page on a dark background. Click on the element. If you want to track the price, try
                to capture the element in such a way that the currency symbol is included.
            </p>
            <img src={image2} className={styles.image} alt="user manual" />

            <p>
                4. After successfully creating the tracking, a notification will appear with a button to go to the page
                with the list of all trackings. You can also navigate to this page from the extension popup by clicking
                the "Tracking List" button.
            </p>
            <img src={image3} className={styles.image} alt="user manual" />

            <h2>Exploring the created tracking card</h2>
            <img src={image4} className={styles.image} alt="user manual" />
            <p>
                5. Use the search field to find the desired tracking. Press Enter to save the search string as a tag.
                <br /> 6. Click on the tag to quickly return to the saved search.
                <br /> 7. Quantity of trackings.
                <br />
                8. Filter by tracking status. Cards can be enabled, disabled, or have errors if the tracked element has
                disappeared from the page.
                <br />
                9. Click on the link to go to the tracking page.
                <br /> 10. Date and time of the last change. Click to view the history.
                <br /> 11. Current value. Click to view the history.
                <br /> 12. Card title. It is generated automatically, but you can click on it and edit it.
            </p>

            <h2>Viewing history</h2>
            <img src={image5} className={styles.image} alt="user manual" />
            <p>
                13. Click on the date of the last change to open the history. Here you will see the date and time when
                the value changed and what it was.
                <br /> 14. Hover your mouse over the current value, and after 1 second, a tooltip will appear showing
                the minimum and maximum values. You can also see the date and time of the last check here.
            </p>

            <h2>Tracking settings</h2>
            <img src={image6} className={styles.image} alt="user manual" />
            <p>
                15. Click on the gear icon to configure the tracking.
                <br /> 16. Enable and disable tracking.
                <br /> 17. Set the interval between checks from 1 minute to 24 hours.
                <br />
                18. You can track not only prices but also any other values on websites. Feel free to try changing it.
                Don't worry, you won't break anything.
                <br />
                19. Enable and disable push notifications and messages in Telegram.
                <br />
                20. You can configure notifications to be sent only when the value meets a specific condition.
            </p>

            <h2>Deleting tracking</h2>
            <img src={image7} className={styles.image} alt="user manual" />
            <p>
                21. Click on the trash can icon to delete the tracking.
                <br />
                22. Confirm the deletion by clicking the "Delete" button.
            </p>

            <h2>Errors</h2>
            <img src={image8} className={styles.image} alt="user manual" />
            <p>
                23. Hover your mouse over the date of the last change in tracking. After a second, a tooltip will appear
                showing the tracking status. If everything is fine, the background color will be green, and the tooltip
                will say "Status: Ok". Otherwise, you will see an error message. If the error does not disappear within
                12 hours, the tracking will be automatically disabled.
            </p>

            <h2>Helpful tips</h2>
            <img src={image9} className={styles.image} alt="user manual" />
            <p>
                24. Press Escape to reset the filters.
                <br />
                25. Click once on the gray background to collapse the settings and history of all cards.
                <br />
                26. Double-click on the gray background to expand the settings of all cards.
            </p>

            <h2>Global settings</h2>
            <img src={image10} className={styles.image} alt="user manual" />
            <p className={styles.lastP}>
                Click on "Settings" in the left sidebar menu to access the global settings.
                <br /> 27. You can stop the extension from working.
                <br />
                28. You can enable notifications in Telegram.
                <br />
                29. To set up receiving notifications in Telegram, you need to get your Telegram User ID from the{' '}
                <a href="https://t.me/price_monitoring_robot" target="_blank">
                    @price_monitoring_robot
                </a>{' '}
                and insert it into this field.
                <br />
                30. You can enable push notifications from the Google Chrome browser.
                <br />
                31. The extension opens a tab and uses it to navigate websites. We recommend keeping this setting
                enabled so that the extension does not distract you from your work. If you disable this setting, the
                extension will always close the tab after the checking cycle, if you prefer that.
            </p>
        </div>
    );
};
