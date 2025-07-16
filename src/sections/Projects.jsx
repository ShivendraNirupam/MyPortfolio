import React from 'react'
import { TextHoverEffect } from '../components/ui/text-hover-effect'
import { CardSpotlight } from '../components/ui/card-spotlight'
import { useMediaQuery } from 'react-responsive'
import { ProjectCard } from '../components/ProjectCard'

const Projects = ({id}) => {
    const isMobile = useMediaQuery({ maxWidth: 853 })
  return (
    <div id={id} className='flex items-center justify-center flex-col mt-[5rem] mb-[5rem] w-[100%] '>
      <div>
        {!isMobile ? (<TextHoverEffect text="Projects" />) : (<h1 className='headtext font-bold'>My Projects</h1>)}
      </div>
      <div className='w-[50rem] flex items-center justify-center'>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects