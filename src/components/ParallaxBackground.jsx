import { section } from 'motion/react-client'
import {motion, useScroll, useSpring, useTransform} from 'motion/react'
import React from 'react'

const ParallaxBackground = () => {

    const {scrollYProgress} = useScroll()
    const x = useSpring(scrollYProgress, {damping: 50})
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"])
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"])
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"])
    const planets = useTransform(x, [0, 0.5], ["0%", "-20%"])
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            {/* Backgorund Sky */}
            <div className='absolute inset-0 w-full h-screen -z-50'
                 style={{
                    backgroundImage: "url(./assets/sky.jpg)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                 }}
            />
            {/* Mountain layer 3 */}
            <motion.div className='absolute inset-0 -z-40'
                 style={{
                    backgroundImage: "url(./assets/mountain-3.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y:mountain3Y,
                 }}
            />
            {/* Planets */}
            <motion.div className='absolute inset-0 -z-30'
                 style={{
                    backgroundImage: "url(./assets/planets.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y:planets
                 }}
            />
            {/* Mountain Layer 2 */}
            <div className='absolute inset-0 -z-20'
                 style={{
                    backgroundImage: "url(./assets/mountain-2.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y:mountain2Y
                 }}
            />
            {/* Mountain Layer 1 */}
            <div className='absolute inset-0 -z-10'
                 style={{
                    backgroundImage: "url(./assets/mountain-1.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y:mountain1Y
                 }}
            />
        </div>
    </section>
  )
}

export default ParallaxBackground