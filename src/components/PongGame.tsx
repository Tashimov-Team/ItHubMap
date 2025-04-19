import React, { useState, useEffect, useRef, useCallback } from 'react';

const PongGame = () => {
    const [playerY, setPlayerY] = useState(50);
    const [computerY, setComputerY] = useState(50);
    const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
    const [score, setScore] = useState({ player: 0, computer: 0 });
    const [gameSize, setGameSize] = useState({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.6 });

    const ballSpeed = useRef({ dx: 0.8, dy: 0.4 });
    const requestRef = useRef();
    const previousTimeRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setGameSize({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.6 });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const movePlayer = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPlayerY(Math.max(0, Math.min(100, y)));
    }, []);

    const gameLoop = (time) => {
        if (previousTimeRef.current !== undefined) {
            setBallPosition((prev) => {
                let newX = prev.x + ballSpeed.current.dx;
                let newY = prev.y + ballSpeed.current.dy;
                let dx = ballSpeed.current.dx;
                let dy = ballSpeed.current.dy;

                if (newY <= 0 || newY >= 100) dy = -dy;
                if (newX <= 5 && newY >= playerY && newY <= playerY + 20) dx = -dx;
                if (newX >= 95 && newY >= computerY && newY <= computerY + 20) dx = -dx;

                if (newX < 0) {
                    setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
                    return { x: 50, y: 50 };
                }
                if (newX > 100) {
                    setScore(prev => ({ ...prev, player: prev.player + 1 }));
                    return { x: 50, y: 50 };
                }

                ballSpeed.current = { dx, dy };
                return { x: newX, y: newY };
            });
            setComputerY(() => Math.min(Math.max(ballPosition.y - 10, 0), 80));
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(gameLoop);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(gameLoop);
        return () => cancelAnimationFrame(requestRef.current);
    }, [playerY, computerY, ballPosition]);

    return (
        <div
            className="m-auto relative bg-[#171A24]/90 cursor-pointer"
            onMouseMove={movePlayer}
            style={{ width: gameSize.width, height: gameSize.height }}
        >
            <div className="absolute bg-white" style={{ left: 0, top: `${playerY}%`, width: '10px', height: '20%' }} />
            <div className="absolute bg-white" style={{ right: 0, top: `${computerY}%`, width: '10px', height: '20%' }} />
            <div className="absolute bg-white rounded-full" style={{ left: `${ballPosition.x}%`, top: `${ballPosition.y}%`, width: '10px', height: '10px' }} />
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl">
                {score.player} - {score.computer}
            </div>
        </div>
    );
};

export default PongGame;
