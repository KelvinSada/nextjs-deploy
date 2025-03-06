"use client"
import Image from "next/image";

export default function Home() {

  function handleClick (){
    alert(" it worked")
    console.log("")
  }
  
  const name = "Main Homepage"
  return (
    <div className="" onClick={handleClick}>
      <p>{name}</p>
    </div>
  );
}
