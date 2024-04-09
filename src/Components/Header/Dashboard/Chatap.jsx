import React, { useEffect, useState } from "react";


const Chatapp = () => {
    useEffect(()=>{

    },[ ])
  const [showhide, setshowhide] = useState(false);
  const showuser = () => {
    console.log("show userrrr");
    setshowhide(!showhide);
  };
  return (
    <div className=" flex flex-col sm:flex-row  justify-evenly  ">
      <div className={showhide ? 'block' : "hidden md:block"} onClick={showuser} >
        <div className="chatbox flex  justify-evenly text-red-400">
          <div>
            <div className="chat-card sm:w-[800px] ">
              <div className="chat-header ">
                <div className="h2">Active User</div> 
                {showhide ? <button className="bg-blue-400 text-white p-[4px] rounded-lg ms-7 sm:hidden">Back</button> : null}
              </div>
              <div className="chat-body">
                <div className="message incoming ">
                  <p>Hello, how can I assist you today?</p>
                </div>
                <div className="message outgoing ">
                  <p>I have a question about your services.</p>
                </div>
                <div className="message incoming">
                  <p>Sure, I'm here to help. What would you like to know?</p>
                </div>
              </div>
              <div className="chat-footer">
                <input placeholder="Type your message" type="text" />
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={showhide ? 'sm:block hidden' : 'block'}>
      <div className="rightchatuser w-[300px] ">
        <div className="user-box bg-[#E1E1E1] " onClick={showuser}>
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-details" >
            <div className="user-name">John Doe</div>
            <div className="user-status">Active now</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chatapp;
