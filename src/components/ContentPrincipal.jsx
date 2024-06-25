import React from 'react'
import ButtonPrincipal from '../common/ButtonPrincipal'

const ContentPrincipal = () => {
  return (
    <section>
        <h1 className='text-blueDark text-[4rem] font-bold drop-shadow-lg'>llcoment</h1>
        <p className='text-colorText'>Explora y crea en un sitio dedicado al desarrollo web: <strong>encuentra</strong>conocimientos frescos y <strong>comparte</strong> tu pasión por la programación y el diseño.</p>
        <div className='space-x-5 py-10'>
            <ButtonPrincipal content='elabora' />
            <ButtonPrincipal content='descubre' />
        </div>
    </section>
  )
}

export default ContentPrincipal