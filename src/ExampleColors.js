import React from 'react'

const exampleColors = ['#19d577', '#f10345', '#6800d1']
const ExampleColors = () => {
  return (
    <div className='example'>
      {exampleColors.map((hex, index) => {
        return (
          <article
            key={index}
            className='color color-light gap'
            style={{ background: hex }}
          >
            <p className='percent-value'>{hex}</p>
          </article>
        )
      })}
      <h4>Example colors</h4>
    </div>
  )
}

export default ExampleColors
