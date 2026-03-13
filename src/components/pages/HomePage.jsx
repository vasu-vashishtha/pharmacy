import React from 'react'
import Hero from '../home/Hero';
import Notification from '../home/Notification';
import Administrators from '../home/Administrators';
import Facilities from '../home/Facilities';
import FacultyMembers from '../home/Facultymembers';

const HomePage = () => {
  return (
    <>
      <Hero/>
      <Notification/>
      <Administrators/>
      <Facilities/>
      <FacultyMembers/>
    </>
  )
}

export default HomePage