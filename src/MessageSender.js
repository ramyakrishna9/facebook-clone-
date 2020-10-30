import React, { useState } from 'react';
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvide";
import db from "./firebase";
import firebase from "firebase";
import './MessageSender.css';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] =useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
         db.collection('posts').add({
             message: input,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
             profilePic: user.photoURL,
             username: user.displayName,
             image: imageUrl,
         })
        setInput("");
        setImageUrl("");
    } 
   
  return (
    <div className="messagesender">
        <div className="messagesender__top">
            <Avatar  src={user.photoURL}/>
            <form>
                <input
                   value={input}
                   onChange={(e) => setInput(e.target.value)}  
                   className="messagesender__input" 
                   palceholder={`what's on your mind, ${user.displayName} ? ` } 
                />
                
                <input 
                 value={imageUrl}
                 onChange={(e)=> setImageUrl(e.target.value)}
                placeholder="image URL (optional)"/>

                <button onClick={handleSubmit} type="Submit">Hidden Submit </button>
            </form>

        </div>
        <div className="messagesender__bottom">
            <div className="messagesender__option">
                <VideocamIcon style={{ color: "red"}} />
                 <h3>Live Video</h3>
            </div>
            <div className="messagesender__option">
                <PhotoLibraryIcon style={{ color: "green"}} />
                 <h3>Photo/Video</h3>
            </div>
            <div className="messagesender__option">
                <InsertEmoticonIcon style={{ color: "Orange"}} />
                 <h3>Feeling/Activity</h3>
            </div>

        </div>
      
    </div>
  );
}

export default MessageSender;