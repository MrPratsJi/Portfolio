import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      //   console.log('in view')
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          delay: 0.2,
          duration: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className=" w-full h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 max-w-[600px]"
      id="about"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Pacifico, cursive',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">About</h1>
        <p className="text-lg">
          Hi I am Pratyush, an AI Engineer & Developer with a strong passion for
          building intelligent systems that bridge the gap between technology
          and real-world impact. My expertise lies in AI, NLP, and Computer
          Vision, where I create solutions that enhance user experiences and
          drive innovation. Currently, I am working on EmoSense - A Engagement
          Analyzer for the Emotion detection as well as engagement time on the
          screen and NLP-powered Applications, pushing the boundaries of
          assistive technology and automation.
        </p>
        <div className="w-full flex justify-center mt-8">
          <Button
            onClick={() => navigate('/About')}
            variant="outlined"
            sx={{
              // Initial text color
              borderColor: '#ff5722', // Initial border color
              backgroundColor: '#ff5722', // Ensure it's transparent initially
              color: '#fff',
              fontFamily: 'Pacifico, cursive',
              '&:hover': {
                backgroundColor: '#d84315', // Fill color on hover
                color: '#fff', // Text color on hover\
                borderColor: '#d84315',
              },
            }}
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  )
}
