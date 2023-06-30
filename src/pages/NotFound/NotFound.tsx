import { motion } from 'framer-motion'
import './NotFound.scss'

export const NotFound = () => {
   return (
      <motion.main 
         className="main"
         
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
      >
         
      </motion.main>
   )
}
