import React from 'react'
import Cookies from './Cookies'
import NewsLetter from './NewsLetter'

const Popup = ({darkPop}) => {
  return (
    <>
      <div id="brownies" className={`has_transition_1500 ${darkPop ? 'dark' : ''}`} data-disabled="true" >
          <Cookies/>
          <NewsLetter/>
	    </div>
    </>
  )
}

export default Popup