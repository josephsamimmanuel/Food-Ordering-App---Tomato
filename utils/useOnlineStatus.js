import React, { useEffect, useState } from "react";

function useOnlineStatus() {
  const [onlineStatus,setOnlineStatus] = useState(true);

  // Check if Online

  useEffect(() => {
    // addEventListener version
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false)
      console.log("Poor network Connection.");
    });

    window.addEventListener("online", (event) => {
      setOnlineStatus(true)
      console.log("You are now connected to the network.");
    });


  }, []);

  // boolean Value

  return onlineStatus;
}

export default useOnlineStatus;
