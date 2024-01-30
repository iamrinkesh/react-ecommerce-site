import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="decriptionbox-nav-box">Description</div>
            <div className="decriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            Discover an unparalleled online shopping experience at SHOPPER. 
            Explore a diverse range of products curated to cater to your every need. From trendy 
            fashion and electronics to home essentials and beyond, we bring you a seamless and 
            secure platform for all your shopping desires.
            </p>
            <p>
            "Experience the convenience of seamless online shopping with SHOPPER, where cutting-edge 
            technology meets personalized curation to bring you a tailored selection of products designed 
            to elevate your lifestyle."
            </p>
        </div>
    </div>
  )
}
