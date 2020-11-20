import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)

  const bcg = rgb.join(',')
  const hexValue = rgbToHex(...rgb)

  const handleClick = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <article
      className={`color ${index > 9 && 'color-light'}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      <p className='alert'>{alert ? 'Copied to clipboard' : null}</p>
    </article>
  )
}

export default SingleColor
