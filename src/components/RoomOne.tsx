import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomOne({ setModalContent }){


    const CABINETS = {
        1: {
            title: "Кабинет 1",
            description: "Описание для первого кабинета",

        },
        2: {
            title: "Кабинет 2",
            description: "Информация о втором кабинете",
            teacher: "eefefef"

        },
        3: {
            title: "Комната отдыха",
            description: "Третий кабинет - технический",

        },
        4: {
            title: "Мягкая зона",
            description: "Четвертый кабинет администрации",

        },
        5: {
            title: "VR зона",
            description: "Пятый кабинет переговоров",

        },

        6: {
            title: "Работотехника",
            description: "Пятый кабинет переговоров",

        },

        7: {
            title: "Рабочая зона",
            description: "Пятый кабинет переговоров",

        },

        8: {
            title: "Амфитеатр",
            description: "Пятый кабинет переговоров",

        }
    };

    const headerPathClick = (cabinetNum) => {
        if (cabinetNum === 3) {
            setModalContent({
                isActive: true,
                modalType: 'pong',
            });
        } else {
            const cabinet = CABINETS[cabinetNum];
            setModalContent({
                isActive: true,
                title: cabinet.title,
                description: cabinet.description,
                teacher: cabinet.teacher,
                modalType: 'default',
            });
        }
    };
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
                    <path   onClick={() => headerPathClick(7)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 720.5182,196.17961 -0.008,-173.191578 296.9772,-0.01586 0.039,172.265958 L 913,195 v -33.259 l -93.5,-0.499 V 196 Z" />
                    <path   onClick={() => headerPathClick(8)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 720.4836,291.59049 720.5182,196.17961 819.5,196 v -34.758 l 93.5,0.499 V 195 l 104.5264,0.23813 v 96.37156 z" />
                    <path   onClick={() => headerPathClick(5)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 456.96904,291.60451 2.04838,-109.76274 100.01825,0.85249 -2.03939,108.98554 z" />
                    <path   onClick={() => headerPathClick(6)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 556.99628,291.6798 655.49419,291.54524 656,184.7 559.03567,182.69426 Z" />
                </svg>
                <img src="/public/map.svg" alt="SVG map" className="w-full h-full object-contain"/>;
            </motion.div>
        </div>
    </>
    )
}