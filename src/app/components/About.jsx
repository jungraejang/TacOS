import React from "react";

const About = () => {
  const asciiArt = `
  ____  ____  _____ ____  _____  _____ ____ 
  /   _\/  __\/  __//  _ \/__ __\/  __//  _ \
  |  /  |  \/||  \  | / \|  / \  |  \  | | \|
  |  \__|    /|  /_ | |-||  | |  |  /_ | |_/|
  \____/\_/\_\\____\\_/ \|  \_/  \____\\____/
                                             
   ____ ___  _                               
  /  __\\  \//                               
  | | // \  /                                
  | |_\\ / /                                 
  \____//_/                                  
                                             
      _  ____     _                          
     / |/  __\   / |                         
     | ||  \/|   | |                         
  /\_| ||    //\_| |                         
  \____/\_/\_\\____/                         
                                             
`;

  return (
    <div className="About h-full">
      {/* <pre>{asciiArt}</pre> */}
      <p className="text-black">
        TacOS v.0.0.1 <br /> Created By JRJ <br /> All Rights Reserved 2024{" "}
      </p>
    </div>
  );
};

export default About;
