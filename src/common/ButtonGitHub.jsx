import React from 'react'

const ButtonGitHub = ({color}) => {
  return (
    <button className={`border-2 border-${color} text-${color} text-[1rem] px-5 py-2 mt-5`}>ir a GitHub</button>
  )
}

export default ButtonGitHub