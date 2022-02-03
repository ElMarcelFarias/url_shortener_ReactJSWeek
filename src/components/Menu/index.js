import './menu.css'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Menu(){
  return(
    <div className='menu'>
      <a className='social' href='https://www.linkedin.com/in/marcel-leite-de-farias-38b62b220/'>
        <BsLinkedin color='#FFF' size={24}/>
      </a>
      <a className='social' href='https://github.com/ElMarcelFarias'>
        <BsGithub color='#FFF' size={24}/>
      </a>
      <Link className='menu-item' to="/links">
        Meus Links  
      </Link>
    </div>
  )
}