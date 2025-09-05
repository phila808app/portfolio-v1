import React from 'react'

const Midde: React.FC = () => {

    const projects = ['Task Manager / To-Do App','Weather or Movie Search App (API Integration)','Blog Platform with Authentication',
        'E-Commerce Website','Chat App (Real-Time)','AI-Powered Resume Analyzer','Machine Learning Project (Prediction App)',
        'Cybersecurity Project (Vulnerability Scanner Lite)','Full SaaS Clone (Capstone Project)'
    ]
    
  return (
    
        <div className="p-9 text-white max-w-2xl mx-auto">
        <h1 className='text-4xl'>My Projects</h1>
        <ul className='text-2xl text-white'>
        {
            projects.map((project,index)=>(
                <li key={index} className='hover:bg-black w-full '>{project}</li>
            )
        )}
        </ul>

    </div>
  )
}

export default Midde