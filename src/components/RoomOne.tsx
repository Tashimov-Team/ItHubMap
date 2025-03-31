import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomOne(){
const [modalContent, setModalContent] = useState({
    isActive: false,
    title: "",
    description: "",
    teacher: ""
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
        description: cabinet.description,
        teacher : cabinet.teacher,
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
            <motion.div
                className="relative w-full h-full"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
                >
                <svg viewBox="0 0 1038 309" className="absolute -top-3 left-0 w-[100%] h-[100%]"> 
                    <path   onClick={() => headerPathClick(1)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 558,114.896 657.92719,139.45804 658,23 558.07634,22.986528 Z" />
                    <path   onClick={() => headerPathClick(2)}  className="fill-[#276545] stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="m 462.76927,113.2414 1.21829,-90.402657 94.08878,0.147785 L 558,114.896 551,113 l -21.5,-1.5 -20.42,-6.555 z" />
                    <path   onClick={() => headerPathClick(3)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 358,131.798 V 23 l 105.98756,-0.161257 -1.21829,90.402657 z" />
                    <path   onClick={() => headerPathClick(4)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 294.99737,291.554 20.488982,291.5438 c 0,0 -0.0033,-268.555124 -0.01907,-268.543554 C 20.454179,23.011766 358,23 358,23 l -0.22197,109.684 -62.80487,-0.17256 z" />
                    <path   onClick={() => headerPathClick(5)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 720.5182,196.17961 -0.008,-173.191578 296.9772,-0.01586 0.039,172.265958 L 913,195 v -33.259 l -93.5,-0.499 V 196 Z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 720.4836,291.59049 720.5182,196.17961 819.5,196 v -34.758 l 93.5,0.499 V 195 l 104.5264,0.23813 v 96.37156 z" />
                    <path   onClick={() => headerPathClick(7)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 456.96904,291.60451 2.04838,-109.76274 100.01825,0.85249 -2.03939,108.98554 z" />
                    <path   onClick={() => headerPathClick(8)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 556.99628,291.6798 655.49419,291.54524 656,184.7 559.03567,182.69426 Z" />
                </svg>
                <img src="/public/map.svg" alt="SVG map" className="w-full h-full object-contain"/>;
            </motion.div>
        </div>

            {modalContent.isActive && (
                <AnimatePresence>
                    <motion.div
                        className="fixed inset-0 bg-[#171A24]/90 backdrop-blur-sm flex items-center justify-center z-50"
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