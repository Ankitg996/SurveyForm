import { React } from "react";
import './Header.css';
// import MenuIcon from '@mui/icons-material/Menu'
import IconButton from "@mui/material/IconButton/IconButton";
import Image01 from "../Images/DocPNG.png";
// import Image01 from "@mui/icons-material/Article"
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import AvatarImage from "../Images/images.png";
import TemporaryDrawer from "./TemporaryDrawer.js"

function Header() {
    return (
        <div className="header">
            <div className="header_info">
            <TemporaryDrawer/>
            <img src={Image01} alt="png" style= {{height:'30px', width:"30px"}} className="doc_image"/> 
                <div className="info">Survey_Form</div>  

        </div>
        
        <div className="header_search">
            <IconButton><SearchIcon/></IconButton>
            <input type="text" name ="search" placeholder="search"/>
        </div>

        <div className="header_right">
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <Avatar src ={AvatarImage}/>
            </IconButton>
        </div>
            
        </div>
    )
}

export default Header;