import React from 'react'
import logo from './icon/logo.png';
import twitter from './icon/twitter.png';
import dribble from './icon/dribbble.png';
import figma from './icon/figma.png';
import github from './icon/github.png';
import './navbar.css';

const Navigation = [
    {image: twitter, alt: 'twitter'},
    {image: dribble, alt: 'Dribble'},
    {image: figma, alt: 'Figma'},
    {image: github, alt: 'Github'}
]

const Navbar = () => {
  return (
    <div className='Nav-wrapper'>
    <div>
    <img src={logo} alt='logo'/>
    </div>
        
    <div className='navigation'>
        <ul >
        {Navigation.map((items,idx) => {
                return (
                    <li key={idx}> <a href= {items.Path}>
                        <img src={items.image} alt={items.title}/>
                    </a></li>
                )
            })}
        </ul>
    </div>

    </div>
  )
}

export default Navbar