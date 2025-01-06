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
        }, 3000);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!showConfetti) {
        return null;
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
            }}
        >
            <Confetti
                width={windowWidth}
                height={windowHeight}
                numberOfPieces={200}
                style={{
                    opacity: fadeOut ? 0 : 1,
                    transition: 'opacity 1s ease-out',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};
