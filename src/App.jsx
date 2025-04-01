import React, { useState } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import RoomOne from './components/RoomOne';
import RoomTwo from './components/RoomTwo';
import PongGame from "./components/PongGame";

function App() {
    const [currentFloor, setCurrentFloor] = useState(1);
    const [scale, setScale] = useState(0.8);
    const [position, setPosition] = useState({ x: 0, y: 100 });
    const [modalContent, setModalContent] = useState({
        isActive: false,
        title: "",
        description: "",
        teacher: "",
        modalType: 'default'
    });

    const scaleSpring = useSpring(0.8, { stiffness: 50, damping: 10 });
    const handleZoomIn = () => scaleSpring.set(Math.min(scaleSpring.get() + 0.2, 2));
    const handleZoomOut = () => scaleSpring.set(Math.max(scaleSpring.get() - 0.2, 0.5));
    const closeModal = () => setModalContent(prev => ({ ...prev, isActive: false }));

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#171A24]">
            <AnimatePresence>
                {modalContent.isActive && (
                    <motion.div
                        className="fixed inset-0 bg-[#171A24]/90 backdrop-blur-sm flex items-center justify-center z-[9999]"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-[#171A24]/90 rounded-2xl mx-4 border border-white/10 shadow-2xl overflow-hidden"
                            style={{
                                height: modalContent.modalType === 'pong' ? '90vh' : '70vh',
                                maxWidth: modalContent.modalType === 'pong' ? '90%' : '800px',
                                width: '90%',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 20,
                                duration: 0.4
                            }}
                        >
                            {modalContent.modalType === 'pong' ? (
                                <PongGame />
                            ) : (
                                <>
                                    {/* Верхняя секция с изображением */}
                                    <motion.div
                                        className="relative h-1/3 bg-[url('/background.png')] bg-cover bg-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#171A24]/70 to-transparent flex items-end p-6">
                                            <motion.h2
                                                className="text-4xl font-semibold text-[#EAA360] drop-shadow-md"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.2 }}
                                            >
                                                {modalContent.title}
                                            </motion.h2>
                                        </div>
                                    </motion.div>

                                    {/* Основной контент */}
                                    <div className="flex flex-col h-2/3 p-6">
                                        <div className="flex flex-1 gap-8">
                                            {/* Левая часть - описание */}
                                            <motion.div
                                                className="flex-1 pr-4 overflow-y-auto"
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.3 }}
                                            >
                                                <p className="text-white/80 leading-6 text-justify">
                                                    {modalContent.description}
                                                </p>
                                            </motion.div>

                                            {/* Правая часть - преподаватель */}
                                            <motion.div
                                                className="w-[200px] border-l border-white/10 pl-6 flex flex-col"
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.4 }}
                                            >
                                                <h3 className="text-sm font-medium text-[#36BA6B] mb-3">
                                                    Ответственный преподаватель
                                                </h3>
                                                <p className="text-white/80 font-semibold text-lg leading-tight">
                                                    {modalContent.teacher}
                                                </p>
                                            </motion.div>
                                        </div>

                                        {/* Кнопка закрытия */}
                                        <motion.div
                                            className="pt-6 mt-auto"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.5 }}
                                        >
                                            <motion.button
                                                className="w-full bg-[#36BA6B]/90 hover:bg-[#36BA6B] px-8 py-3.5 rounded-xl text-white font-medium
                         shadow-[0_8px_32px_rgba(54,186,107,0.2)] hover:shadow-[0_12px_48px_rgba(54,186,107,0.3)]"
                                                onClick={closeModal}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                Закрыть
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
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
                    scale: scaleSpring,
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
                            <RoomOne setModalContent={setModalContent} />
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
                            <RoomTwo setModalContent={setModalContent} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default App;