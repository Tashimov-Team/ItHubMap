import React from "react";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function RoomTwo(){
const [modalContent, setModalContent] = useState({
    isActive: false,
    title: "",
    description: ""
});

const CABINETS = {
    1: {
        title: "Кабинет 1",
        description: "Описание для первого кабинета",

    },
    2: {
        title: "Кабинет 2",
        description: "Информация о втором кабинете",

    },
    3: {
        title: "Кабинет 3",
        description: "Третий кабинет - технический",

    },
    4: {
        title: "Кабинет 4",
        description: "Четвертый кабинет администрации",

    },
    5: {
        title: "Кабинет 5",
        description: "Пятый кабинет переговоров",

    },

    6: {
        title: "Кабинет 5",
        description: "Пятый кабинет переговоров",

    },

    7: {
        title: "Кабинет 5",
        description: "Пятый кабинет переговоров",

    },

    8: {
        title: "Кабинет 5",
        description: "Пятый кабинет переговоров",

    }
    };

const headerPathClick = (cabinetNum) => {
const cabinet = CABINETS[cabinetNum];
    setModalContent({
        isActive: true,
        title: cabinet.title,
        description: cabinet.description
    });
}
const closeModal = () => {
    setModalContent(prev => ({
        ...prev,
        isActive: false
    }));
};


    return(
    <>
        <div className=" w-[100%] h-[100%] flex items-center content-center">
            <motion.div className="relative w-full h-full"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
            >
                <svg viewBox="0 0 1038 309" className="absolute -top-3 left-0 w-[100%] h-[100%]"> 
                    <path   onClick={() => headerPathClick(1)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 223.01494,291.50994 V 176.4264 L 316,176.5 v 115.10937 z" />
                    <path   onClick={() => headerPathClick(2)}  className="fill-[#276545] stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 223.01494,291.50994 H 19.4375 L 19.51563,221.4375 132.5,221.5 H 223 Z" />
                    <path   onClick={() => headerPathClick(3)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 19.51563,221.4375 19.484375,85.9375 132.5,86 v 46 h -8 v 44.5 h 8 v 45 z" />
                    <path   onClick={() => headerPathClick(4)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 19.484375,85.9375 19.470372,18.548674 223,19 v 67 z" />
                    <path   onClick={() => headerPathClick(5)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 222.99637,130.33166 316,130.355 315.99796,18.600595 223.005,18.553655 Z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="m 383.46867,130.4619 0.0127,-111.733202 103.49155,0.0488 L 487,130.501 Z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 487,130.501 H 627.47713 L 627.5,19 H 487 Z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 801.5,132.5 v -36 H 740 V 19 h 179 v 113.5 z" />
                    <path   onClick={() => headerPathClick(7)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 740.99441,289.99183 741,177 h 91 v 112.98117 z" />
                    <path   onClick={() => headerPathClick(8)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 832,289.98117 h 187.656 L 1019.4088,175.97027 832,177 Z" />
                    <path   onClick={() => headerPathClick(8)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="" />
                </svg>
                <img src="./public/map2.svg" alt="SVG map" className="w-full h-full object-contain"/>;
            </motion.div>
        </div>

            {modalContent.isActive && (
                <AnimatePresence>
                    <motion.div
                        className="fixed inset-0 bg-[#171A24]/90 backdrop-blur-sm flex items-center justify-center z-[999]"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-[#171A24]/90 rounded-2xl mx-4 border border-white/10 shadow-2xl overflow-hidden"
                            style={{
                                height: '70vh',
                                maxWidth: '800px',
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
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
        )}
        
    </>
    )
}