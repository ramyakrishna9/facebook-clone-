import React from 'react';
import Story from './Story';

import './StoryReel.css';

function StoryReel() {
  return (
    <div className="storyreel">
        <Story 
            profileSrc ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2t-_3eSW1IIE-au4SBCosUxFZjJQwas56Og&usqp=CAU"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRstgqVqLpNTfds8NH8ENCOX8JDUm88GwwCg&usqp=CAU"
            title="ramya dadi"
        />
        <Story 
            image ="https://static.toiimg.com/thumb/msid-60829850,width-800,height-600,resizemode-75,imgsize-112757,pt-32,y_pad-40/60829850.jpg"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvm3xJzlbDsHuiOYSXUw6x6m0zOSIGlfcEEA&usqp=CAU"
            title="srinivas bheemisetty"
        />
        <Story 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ8eDEplkUPOx2uXIH5exEFG6GjH2WD6ceUQ&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ0gYsXqkqsvxMrnn-yTBqtkST_sXqAZpb8w&usqp=CAU"
            title="maheera bheemisetty"
        />
        
      
    </div>
  );
}

export default StoryReel;