import React from 'react'
import ImageList from '@mui/material/ImageList'

import HobbiyCard from './HobbyCard'
import { useSelector } from 'react-redux'

export default function Hobbies() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)

  return (
    <div
      style={{ color: colorTheme.primaryText }}
      className="text-center my-8 max-w-[1000px] "
    >
      <h1 className="text-4xl font-bold mb-8">My Hobbies</h1>
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="">
          <p className="text-xl lg:text-start ">
            In my free time, I love indulging in activities that keep me active
            and relaxed. One of my favorite pastimes is playing cricket—I enjoy
            the teamwork, strategy, and adrenaline rush that comes with being on
            the field. Music is another passion of mine; it helps me unwind and
            sets the perfect mood after a long day. I also find swimming
            incredibly refreshing, as it keeps me fit while allowing me to have
            fun. These hobbies not only bring me joy but also help me maintain a
            balanced and fulfilling lifestyle
          </p>
        </div>
        <ImageList>
          <HobbiyCard
            title="Playing Cricket"
            description="I love playing football"
            image="/images/playing-football.jpg"
          />
          <HobbiyCard
            title="Listening Music"
            description="I love playing football"
            image="/images/headphones.jpg"
          />
          <HobbiyCard
            cols={2}
            title="Swimming"
            description="I love playing football"
            image="/images/swimming.jpg"
          />
        </ImageList>
      </div>
    </div>
  )
}
