import {motion} from "framer-motion";
import { useState } from "react";
import React from 'react';
import NotificationVisual from '../NotificationVisual/NotificationVisual'

function Button() {
    const [noticationOpen , setNoticationOpen] = useState(false)
    const close = () => setNoticationOpen(false)
    const open = () => setNoticationOpen(true)
  return (
    <div >
      <motion.button
      whileHover={{scale :1.1 }}     
      whileTap = {{scale : 0.9}} 
      className= "create-btn"
      onClick={() => (noticationOpen ? close() : open())}
      
      >
        
      </motion.button>

      {noticationOpen && <NotificationVisual
      noticationOpen = {noticationOpen}
      handleClose = {close}
      text = {"Your comment was submitted successfully."}
      ></NotificationVisual>}
    </div>
  )
}

export default Button