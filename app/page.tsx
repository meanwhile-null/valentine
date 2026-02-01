"use client";

import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      // English
      // "No",
      // "Are you sure??🙄",
      // "Really sure?🤔",
      // "Are you positive???😶",
      // "Please my love...🙏",
      // "Just think about it🥺",
      // "If you say no, I'll be very sad🙁",
      // "I'll be very very sad😕",
      // "I'll be very very very sad😓",
      // "I'll be very very very very sad😖",
      // "Ok fine😡, I'll stop asking...",
      // "Just kidding, PLEASE SAY YES🙏",
      // "I'll be very very very very very sad🥴",
      // "You're breaking my heart😥😥😥",
      
      
      "No",
      "Oops… misclick? 😇",
      "Are you positive???😶",
      "Bold choice. Wrong, but bold....🙏",
      "Just think about it🥺",
      "Error 404: No not accepted.",
      "This is my villain origin story. 😥 ",
      "I'll be a good girl, i promise😇",
      "That button felt wrong, didn’t it?",
      "Let's try that again 😌",
      "😡 Why are you still clicking this?",
      "This is a social experiment." ,
      "That ‘No’ felt like a ‘Yes'.🙏😌",
      "Alexa, play sad music 🎻😥",
      "I will never emotionally recover from this.😥😥😥",
    ];

    return phrases[noCount % phrases.length];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.webp" />
          <div className="text-[2rem] font-bold text-center leading-tight md:text-5xl md:leading-snug text-pink-500 space-y-2">
  <div>YESSS!!</div>
  <div>Look at you choosing happiness</div>
  <div>You’re officially my Valentine now 😈💘</div>
</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-[2rem] text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 inline-block text-transparent bg-clip-text">
            {/* Will you be my Valentine? */}
            Chrissy Poo, Will you be my Valentine?
          </h1>
          <div className="text-center space-y-5">
            <button
              className={`bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              {/* Yes */}
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? 
                // "No" 
                "No 😥"
                : getNoButtonText()
              }
            </button>
          </div>
        </>
      )}
    </div>
  );
}
