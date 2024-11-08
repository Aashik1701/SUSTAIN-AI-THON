import React from 'react'
import "./Lock.css"
const Lock = ({className}) => {
  return (
    <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512"  xml:space="preserve">
<path d="M64,234.667h384V512H64V234.667z" fill="#FFFFFF"/>
<path class="shackle" fill="none" stroke="#FFFFFF" stroke-width="60" stroke-miterlimit="10" d="M362.666,436.5V128
	c0-58.901-47.766-106.667-106.666-106.667c-58.901,0-106.667,47.765-106.667,106.667v128"/>
</svg>
  )
}

export default Lock
