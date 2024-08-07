import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new   
 Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);   

  }, []);
  return (
    <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      ©{currentDate.toLocaleDateString()} All rights reserved by Admin dashboard
    </p>
  </div>
  )
}

export default Footer