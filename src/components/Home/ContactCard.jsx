import React from 'react'
import { PropTypes } from 'prop-types'
import { useSelector } from 'react-redux'
import { Card, CardContent, CardActionArea } from '@mui/material'

ContactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dropShadow: PropTypes.string,
  link: PropTypes.string.isRequired,
}

ContactCard.defaultProps = {
  dropShadow: '0px 0px 10px #45CFDD5',
  icon: '',
  text: '@iamPranayGupta',
  link: '',
}

export default function ContactCard({ icon, text, dropShadow, link }) {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const handleClick = () => {
    setTimeout(() => {
      window.open(link, '_blank')
    }, 1000)
  }
  return (
    <Card
      onClick={handleClick}
      className=""
      style={{ backgroundColor: colorTheme.secondaryBg }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            padding: '.5rem',
            paddingBottom: '.5rem !important',
          }}
          className="p-2"
        >
          <img
            style={{ filter: `drop-shadow(${dropShadow})` }}
            src={icon}
            width={100}
            alt=""
          />
          <span
            style={{
              fontFamily: 'Pacifico, cursive',
              color: colorTheme.primaryText,
            }}
            className="font-bold text-sm"
          >
            {text}
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
