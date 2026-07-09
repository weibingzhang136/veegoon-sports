"use client";
import { motion } from "framer-motion";
export default function HeroVisual() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center">


      {/* Background Glow */}

      <motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.5, 0.8, 0.5],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  h-[420px]
  w-[420px]
  rounded-full
  bg-blue-500/20
  blur-3xl
  "
/>


      {/* Digital Field */}

      <div
        className="
        absolute
        h-[380px]
        w-[380px]
        rounded-full
        border
        border-blue-200/40
        "
      />


      <div
        className="
        absolute
        h-[300px]
        w-[300px]
        rounded-full
        border
        border-dashed
        border-blue-300/40
        animate-spin
        "
        style={{
          animationDuration:"20s"
        }}
      />



      {/* Main AI Vision Panel */}

      <div
        className="
        relative
        flex
        h-[300px]
        w-[300px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-white
        bg-white/70
        backdrop-blur-xl
        shadow-2xl
        "
      >


        {/* Detection Box */}

<motion.div
  animate={{
    opacity: [0.6, 1, 0.6],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="
  absolute
  left-20
  top-16
  h-16
  w-14
  rounded-lg
  border-2
  border-blue-500
  "
>

    <motion.div
    animate={{
      y:[0,55,0],
    }}
    transition={{
      duration:2,
      repeat:Infinity,
      ease:"linear",
    }}
    className="
    absolute
    left-0
    top-0
    h-px
    w-full
    bg-blue-500
    "
  />

          <span
            className="
            absolute
            -top-7
            left-0
            text-xs
            font-medium
            text-blue-600
            "
          >
            PLAYER DETECTED
          </span>


        </motion.div>



        {/* Athlete Symbol */}

        <div
          className="
          text-6xl
          -translate-x-2
          "
        >
          🏃
        </div>



        <div
          className="
          mt-4
          text-sm
          font-semibold
          tracking-widest
          text-blue-600
          "
        >
          AI SPORTS VISION
        </div>


        <motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.7, 1, 0.7],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  mt-2
  text-3xl
  font-bold
  text-blue-600
  "
>
  98.6%
</motion.div>


        <div
          className="
          mt-2
          text-xs
          text-gray-500
          "
        >
          Motion Analysis Accuracy
        </div>


      </div>



      {/* Floating Card Left */}

      <motion.div
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  left-4
  top-28
  rounded-2xl
  border
  border-gray-100
  bg-white
  px-5
  py-4
  shadow-xl
  "
>

  <div className="text-xs text-gray-500">
    Motion Tracking
  </div>


  <div className="mt-1 text-lg font-bold text-blue-600">
    ACTIVE
  </div>


</motion.div>



      {/* Floating Card Right */}

    <motion.div
  animate={{
    y: [0, 8, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  bottom-28
  right-4
  rounded-2xl
  border
  border-gray-100
  bg-white
  px-5
  py-4
  shadow-xl
  "
>

  <div className="text-xs text-gray-500">
    Smart Venue
  </div>


  <div className="mt-1 text-lg font-bold text-blue-600">
    CONNECTED
  </div>


</motion.div>



      {/* Bottom Data Stream */}

      <div
        className="
        absolute
        bottom-10
        flex
        items-center
        gap-3
        rounded-full
        border
        border-blue-100
        bg-white/80
        px-6
        py-3
        text-sm
        text-gray-600
        backdrop-blur
        "
      >

        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />

        AI Engine Running

        <span className="text-blue-600">
          •
        </span>

        Real-time Data

      </div>


    </div>
  );
}