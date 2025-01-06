import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';

import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.appContainer}>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/welcome-page" element={<WelcomePage />} />
            </Routes>
        </div>
    );
}

export default App;
