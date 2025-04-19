import React from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function RoomTwo({ cabinets,setModalContent }){

const headerPathClick = (cabinetNum) => {
const cabinet = cabinets[cabinetNum];
    setModalContent({
        isActive: true,
        title: cabinet.title,
        description: cabinet.description,
        teacher: cabinet.teacher,
        url: cabinet.url,
        images: cabinet.images,
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
                    <path   onClick={() => headerPathClick(7)}  className="fill-[#276545]  stroke-[#36BA6B] hover:opacity-50 opacity-10 cursor-pointer" d="M 487,130.501 H 627.47713 L 627.5,19 H 487 Z" />
                    <path   onClick={() => headerPathClick(8)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 801.5,132.5 v -36 H 740 V 19 h 179 v 113.5 z" />
                    <path   onClick={() => headerPathClick(9)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="M 740.99441,289.99183 741,177 h 91 v 112.98117 z" />
                    <path   onClick={() => headerPathClick(10)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 832,289.98117 h 187.656 L 1019.4088,175.97027 832,177 Z" />
                    <path   onClick={() => headerPathClick(11)}  className="fill-[#7E5B3E]  stroke-[#3D3129] hover:opacity-50 opacity-10 cursor-pointer" d="m 919,177 h 100.4569 L 1019,19 H 919 Z" />
                </svg>
                <img src="/map2.svg" alt="SVG map" className="w-full h-full object-contain"/>;
            </motion.div>
        </div>
    </>
    )
}