import { motion } from 'framer-motion'

export default function ImageAnimation({ src_1, src_2 }) {
  return (
    <div className={`translate-x-0`}>
      <motion.img
        style={{
          transform: "skew(4deg)",
          height: "auto",
          width: "700px",
        }}
        src={src_2}
        alt="bb-1"
        className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] absolute rounded-md right-20 "

        initial={{
          scale: 1,
          zIndex: 10
        }}
        animate={{
          translateX: [0,0,0,0,80,80,80,80,80,80,0,0],
          translateY: [-10, -10, -10, -10, -200, -200, -200, -200, -200, -200, -10, -10],
          scale: [1, 1, 1, 1, 1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        style={{
          transform: "skew(4deg) translate(50px, 150px)",
          height: "auto",
          width: "700px",
        }}
        src={src_1}
        alt="bb-1"
        className="shadow-[1.0px_4.0px_8.0px_rgba(0,0,0,0.38)] absolute rounded-md right-20"
        initial={{
          scale: 1,
          zIndex: 1
        }}
        animate={{
          translateX: [80,80,80,80,0,0,0,0,0,0,80,80],
          translateY: [-250, -250, -250, -250, -250, -250, -10, -10, -10, -10, -10, -250],
          scale: [1, 1, 1, 1, 1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 0 }}
      />
    </div>
  )
}
