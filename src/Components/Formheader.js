import React from 'react'
import form_image from '@mui/icons-material/Anchor';
import {FiStar, FiSettings  } from "react-icons/fi";
import { AiOutlineEye } from 'react-icons/ai'
import IconButton from '@mui/material/IconButton'
import avatarimage from '@mui/icons-material/AccountCircle';
import { IoMdFolderOpen } from 'react-icons/io'

import ColorLensIcon from '@mui/icons-material/ColorLens'
import MoreVertIcon from '@mui/icons-material/MoreVert'
// import Button from "@mui/material/Button/Button";
import  Avatar from "@mui/material/Avatar";


function Formheader() {
  return (
    <div className="form_header">
      <div className='form_header_left'>
        <img src={form_image} style={{height:"45px",width:"40px"}} alt='no_png'/>
        <input type="text" placeholder="untitled form" className='form_name'>Untitled form
        </input>
        <IoMdFolderOpen className="form_header_icon" style ={{marginRight:"10px"}}></IoMdFolderOpen>
        <FiStar className='form_header_icon' style={{marginRight:"10px"}}/>
        <span style={{fontSize:"12px",fontWeight:"600"}}>All changes saved in Drive</span>
      </div>
      <div className='form_header_right'>
        <IconButton>
          <ColorLensIcon size="small" className='form_header_icon'/>
        </IconButton>
        <IconButton>
          <AiOutlineEye className='form_header_icon'/>
        </IconButton>
        <IconButton>
          <FiSettings  className='form_header_icon'/>
        </IconButton>
        <IconButton>
          <MoreVertIcon  className='form_header_icon'/>
        </IconButton>
        <IconButton>
          <Avatar style={{heignt:"30px", widht:"30px"}} src={avatarimage}/>
        </IconButton>
      </div>
    </div>
  )
}

export default Formheader
