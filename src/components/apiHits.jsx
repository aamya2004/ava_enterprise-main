"use client";
const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) { // Generate data for 5 days, adjust as needed
      data.push(Math.floor(Math.random() * 100)); // Generate a random number between 0 and 100
    }
    return data;
  };
  
  export default generateRandomData;