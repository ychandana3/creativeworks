import React from 'react'
import LandingPageHeader from './LandingPageHeader';
import LandingPageBody from './LandingPageBody';
import LandingPageFooter from './LandingPageFooter';
const LandingPage = () => {
  return (
    <div className='m-16'>
      <LandingPageHeader/>
      <LandingPageBody/>
      <LandingPageFooter/>
    </div>

  )
}

export default LandingPage;