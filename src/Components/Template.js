import React from 'react'
import "./Template.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton/IconButton";
import UnfoldMore from "@mui/icons-material/UnfoldMore";
import AddIcon from '@mui/icons-material/Add';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ContactsIcon from '@mui/icons-material/Contacts';
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

function Template() {

    const navigate = useNavigate();

    const createForm=()=>{
        const id_ = uuid();
        navigate.push('/survey_form/' + id_)
    }
  return (
    <div className='template_section'>
     <div className='template_top'>
       <div className='template_left'>
         <span style={{fontSize:"16px",color:"#202124"}}>
           Start New form
         </span>
       </div>
       <div className='template_right'>
         <div className='gallery_button'>
           Template gallery
           <UnfoldMore/>
         </div>
         <IconButton>
           <MoreVertIcon/>
         </IconButton>
       </div>
     </div>
     <div className='template_body'>
       <div className='card' onClick={createForm}>
         <AddIcon className="card_image"/>
         <p className='card_title'>Blank</p>
       </div>
       <div className='card'>
         <CelebrationIcon className="card_image"/>
         <p className='card_title'>Party Invite</p>
       </div>
       <div className='card'>
         <ContactsIcon className="card_image"/>
         <p className='card_title'>Contact Info</p>
       </div>
     </div>
      
    </div>
  )
}

export default Template
