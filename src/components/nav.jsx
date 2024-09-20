import '../styles/application.css'
import logo from '../assets/profile-white.png'
const NavigationBar = () => {
  return (
    <>
    <div className="nav-container">
      <div className="logo">
        <img src={logo} width={50} alt="Logo" />
      </div>
      <div className="nav-links">
        <li className='about link'>
          <a href="/"><p>About-me</p></a>
        </li>
        <div className='button'><p>Download Resume</p></div>
      </div>
    </div>
    </>
  )
};

export default NavigationBar;