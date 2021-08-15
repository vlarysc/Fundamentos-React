import React, { cloneElement } from 'react';

export function Familia(props) {
  return (
    <div>
      {
        React.Children.map(props.children, (el) => {
          return cloneElement(el, props)
        })
      }
    </div>
  )
}