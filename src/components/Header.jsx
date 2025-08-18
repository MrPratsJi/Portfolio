import React, { useState, useEffect } from 'react'
import { Button, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MdDarkMode, MdSunny } from 'react-icons/md'
import { modeActions } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import Confetti from 'react-confetti'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const navigate = useNavigate()

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)

  const MyButton = styled(Button)({
    textTransform: 'capitalize',
  })

  const theme = useSelector((state) => state.mode.darkMode)
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const confetti = useSelector((state) => state.confetti.confetti)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch(modeActions.toggle())
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <div
      className="flex items-center justify-between w-full p-4 lg:px-[3rem] lg:py-[1rem] fixed top-0 left-0 z-50 transition-transform duration-300"
      style={{
        backgroundColor: theme ? '#1400c6' : '#1400c6',
        color: theme ? '#000000' : '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      {confetti && <Confetti />}
      <Link to="/">
        <h1
          className="text-3xl font-bold uppercase font-mono"
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          Pratyush
        </h1>
      </Link>
      {isHome && (
        <ul className="gap-5 items-center hidden lg:flex">
          {['Home', 'About', 'Skills', 'Projects', 'Exp', 'Contact'].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-bold animate-underline"
                  style={{ fontFamily: 'Pacifico, cursive' }}
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
      )}

      <div className="flex gap-3 items-center">
        <IconButton onClick={toggleTheme}>
          {!theme ? (
            <MdDarkMode />
          ) : (
            <MdSunny color={`${colorTheme.primaryText}`} />
          )}
        </IconButton>
        <MyButton
          onClick={() => navigate('/resume')}
          variant="outlined"
          sx={{
            borderColor: '#ff5722',
            backgroundColor: '#ff5722',
            color: '#fff',
            fontFamily: 'Pacifico, cursive',
            '&:hover': {
              backgroundColor: '#d84315',
              color: '#fff',
              borderColor: '#d84315',
            },
          }}
        >
          Resume
        </MyButton>
      </div>
    </div>
  )
}
