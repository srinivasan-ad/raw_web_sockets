'use client'
import React, { useEffect, useState } from 'react'


export default function Home() {
  const [socket,setSocket] =  useState<WebSocket | null>(null);
  const [message,setMessage] = useState<string>('');
 
    function sendMessage()
    {
       if(!socket)
       {
        return;
       }
       else{
  
        socket.send(message);
       }
    }
    useEffect(() => {
     const ws = new WebSocket("ws://localhost:8080")
     setSocket(ws);
     ws.onmessage = (ev) => {
      alert(ev.data)

     }

    },[])
  return (
<div className="flex h-screen w-full items-center bg-red-200 justify-center">
<div className=' flex  flex-col items-center justify-center h-[400px] w-[400px] gap-y-10'>
<input  type='text' placeholder='Messages...' value={message} name='message' onChange={(e) => setMessage(e.target.value)} className='py-6 px-16  w-80 h-20  rounded-md'></input>
<button onClick={sendMessage} className='rounded-md w-20 h-12 bg-green-500' >Send</button>
</div>
</div>
  )
}
