import React, { Component } from 'react'

function Hero({heroName}) {
  
    if(heroName === 'Joker')
    {
     throw new Error('Not a hero!')
    }
   
    return (
      <div>
        <h1>{heroName}</h1>
      </div>
    )
  }


export default Hero
