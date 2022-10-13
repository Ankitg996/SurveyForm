import React from'react';
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from "@mui/material/IconButton/IconButton";
import Drawer from "@mui/material/Drawer/Drawer";
import List from '@mui/material/List/List'
import ListItem from '@mui/material/List/List'
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Divider from "@mui/material/Divider/Divider";
import DescriptionIcon from '@mui/icons-material/Description';
import "./Drawer.css";
import {FiSettings} from 'react-icons/fi';
import { BsQuestionCircle } from "react-icons/bs";


function TemporaryDrawer() {

    const [state, setState] = React.useState({
        left:false
    })
    const toggleDrawer = (anchor,open) => (event) => {
        setState({...state, [anchor]:open})
    }
    const list =(anchor)=>{
        return(
        <div style={{width:'250px'}} role="presentation">
        <Divider/>
         <List>
          <ListItem>
           <ListItemText style={{fontSize:"48px",marginLeft:"5px"}}>
             <span style={{color:'blue',fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans',Arial,sans-serif"}}>G</span>
             <span style={{color:'red',fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans',Arial,sans-serif"}}>o</span>
             <span style={{color:'yellow',fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans',Arial,sans-serif"}}>o</span>
             <span style={{color:'blue',fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans',Arial,sans-serif"}}>g</span>
             <span style={{color:'green',fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans',Arial,sans-serif"}}>l</span>
             <span style={{color:'red',fontWeight:"500",fontSize:"22px",marginRight:"10px",fontFamily:"'Product Sans',Arial,sans-serif"}}>e</span>

             <span style={{color:'#5f6368',fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans',Arial,sans-serif"}}>Docs</span>
           </ListItemText>
          </ListItem>
         </List>
         <Divider/>
         <List style={{marginLeft:"08px",marginRight:"8px",marginTop:"15px"}}>
          <ListItem className = 'list_item'>
            <DescriptionIcon className="styling01" style={{color:"blue"}}/>
            <div className='styling02'> Docs </div>               
          </ListItem>         
          <ListItem className = 'list_item'>
            <DescriptionIcon className="styling01" style={{color:"green"}}/>
            <div className='styling02'> Excel </div>               
          </ListItem>         
          <ListItem className = 'list_item'>
            <DescriptionIcon className="styling01" style={{color:"yellow"}}/>
            <div className='styling02'> Sheet </div>               
          </ListItem>         
          <ListItem className = 'list_item'>
            <DescriptionIcon className="styling01" style={{color:"purple"}}/>
            <div className='styling02'> Form </div>               
          </ListItem>         
         
         </List>
         <Divider/>
         <List style={{marginLeft:'8px',marginRight:"8px",marginTop:"15px"}}>
           <ListItem className="list_item">
             <FiSettings/>
             <div style={{marginLeft:"20px",fontSize:"14px"}}>Settings</div>
           </ListItem>
           <ListItem className="list_item">
            <BsQuestionCircle/>
            <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Help & Feedback</div>
           </ListItem>
         </List>
        </div>
        )
    }
    return(
        <div>
            <React.Fragment>
                <IconButton onClick={toggleDrawer("left",true)}>
                    <MenuIcon/>
                </IconButton>

                <Drawer open={state['left']} onClose ={toggleDrawer('left',false)} anchor='left'>
                {list('left')}
                </Drawer>
            
            </React.Fragment>
               
        </div>
    )
}
export default TemporaryDrawer;