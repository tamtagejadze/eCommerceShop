import {motion} from "framer-motion"

const AnimationEngine = ({children, onClick}) =>{ 
    return(
    <motion.div
        className="animationEngine"
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        {children}
    </motion.div>)

};

export default AnimationEngine