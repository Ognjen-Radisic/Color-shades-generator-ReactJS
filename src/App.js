import React, { useState } from 'react'
import SingleColor from './SingleColor'
import ExampleColors from './ExampleColors'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f10345').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      setError(false)
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit} className=''>
          <label htmlFor='color'></label>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f10345'
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
        <ExampleColors />
      </section>
      <section className='divide'>
        <section className='colors'>
          {list.map((col, index) => {
            console.log(col)
            if (index < 10) {
              return <SingleColor key={index} {...col} index={index} />
            }
          })}
        </section>
        <section className='base'>
          <h4>BASE COLOR</h4>

          {list.map((col, index) => {
            if (index === 10) {
              return <SingleColor key={index} {...col} index={index} />
            }
          })}
        </section>
        <section className='colors'>
          {list.map((col, index) => {
            if (index > 10) {
              return <SingleColor key={index} {...col} index={index} />
            }
          })}
        </section>
      </section>
    </>
  )
}

export default App
