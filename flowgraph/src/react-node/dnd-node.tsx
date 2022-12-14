import React from 'react'
import './dnd-node.css'

export const DndNode = (props:any) => {
  const { size = { width: 126, height: 104 }, data } = props
  const { width, height } = size
  const { label, stroke, fill, fontFill, fontSize } = data

  return (
    <div
      className="container"
      style={{
        width,
        height,
        borderColor: stroke,
        backgroundColor: fill,
        color: fontFill,
        fontSize,
      }}
    >
      <span>{label}</span>
    </div>
  )
}