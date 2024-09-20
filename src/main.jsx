import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import NavigationBar from './components/nav'
import HeroSection from './components/hero'
import AboutSection from './components/about'
import ProjectsSection from './components/project'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationBar/>
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
  </StrictMode>
)
