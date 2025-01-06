import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

export const ConfettiComponent = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setShowConfetti(true);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 3000);
        }, 4000);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!showConfetti) {
        return null;
    }

    return (
        <Confetti
            width={windowWidth}
            height={windowHeight}
            numberOfPieces={200}
            style={{
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 1s ease-out',
            }}
        />
    );
};
