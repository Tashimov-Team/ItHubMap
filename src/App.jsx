import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RoomOne from './components/RoomOne';
import RoomTwo from './components/RoomTwo';

function App() {
    const [currentFloor, setCurrentFloor] = useState(1);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2));
    const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#171A24]">
            {/* Floor Selector */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
                {[1, 2].map(floor => (
                    <motion.button
                        key={floor}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full ${
                            currentFloor === floor
                                ? 'bg-[#12141C] text-white'
                                : 'bg-[#171A24]/80 text-white'
                        } backdrop-blur-sm font-semibold`}
                        onClick={() => setCurrentFloor(floor)}
                    >
                        {floor}
                    </motion.button>
                ))}
            </div>

            {/* Zoom Controls */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[#12141C]/80 text-white backdrop-blur-sm"
                    onClick={handleZoomIn}
                >
                    +
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[#12141C]/80 text-white backdrop-blur-sm"
                    onClick={handleZoomOut}
                >
                    -
                </motion.button>
            </div>


            {/* Floor Content */}
            <motion.div
                className="w-full h-full origin-center"
                style={{
                    scale,
                    x: position.x,
                    y: position.y
                }}
                drag
                dragConstraints={{
                    left: -1000,
                    right: 1000,
                    top: -1000,
                    bottom: 1000
                }}
                dragElastic={0.1}
                dragTransition={{ power: 0.1, timeConstant: 200 }}
                onDrag={(event, info) => setPosition(info.point)}
            >
                <AnimatePresence mode='wait'>
                    {currentFloor === 2 && (
                        <motion.div
                            key="floor1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RoomOne />
                        </motion.div>
                    )}

                    {currentFloor === 1 && (
                        <motion.div
                            key="floor2"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RoomTwo />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default App;