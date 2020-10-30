import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import './Sidebar.css';
import { useStateValue } from "./StateProvide";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
       <SidebarRow  
       src={user.photoURL}
       title={user.displayName}
       />
       <SidebarRow  
       Icon={LocalHospitalIcon}
       title='covid-19 information center'
       />
       <SidebarRow Icon ={EmojiFlagsIcon} title="pages" />
       <SidebarRow Icon ={PeopleIcon} title="Friends" />
       <SidebarRow Icon ={ChatIcon} title="Messenger" />
       <SidebarRow Icon ={StorefrontIcon} title="Market Place" />
       <SidebarRow Icon ={VideoLibraryIcon} title="Videos" />
       <SidebarRow Icon ={ExpandMoreIcon} title="MarketPlace" />

       

    </div>
  );
}

export default Sidebar;