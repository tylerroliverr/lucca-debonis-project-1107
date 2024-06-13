"use client";
import React, { useState } from "react";
import EmailButton from "./emailButton";
import Link from "next/link";

export default function ImageClickMobile({ aboutData }) {
   const [isExpanded, setIsExpanded] = useState(false);

   const handleToggle = () => {
      setIsExpanded(!isExpanded);
   };

   return (
      <div
         className={`aboutContainerMobile ${isExpanded ? 'expanded' : ''}`}
         onClick={isExpanded ? handleToggle : null}
      >
         <div className='aboutBlurb'>
            <p><span className='pop'>1107®</span> {aboutData.blurb}</p>
         </div>
         <div className='itemContainer'>
            <div className='items'>
               <div className='capabilitiesContainer'>
                  <p className='itemTitle'>Capabilities</p>
                  {aboutData.capabilities && aboutData.capabilities.map((capability, index) => (
                     <p className='itemText' key={index}>{capability}</p>
                  ))}
               </div>
               <div className='contactContainer'>
                  <p className='itemTitle'>Contact</p>
                  <p className='itemText link'><Link target='_blank' href={"https://www.instagram.com/luccadebonis/"}>Instagram</Link></p>
                  <p className='itemText link'><Link target='_blank' href={"https://www.linkedin.com/in/lucca-de-bonis-43151b194/"}>LinkedIn</Link></p>
                  <div className='itemText link email'>
                     <EmailButton />
                  </div>
               </div>
               <div className='awardsContainer'>
                  <p className='itemTitle recTitle'>Recognition</p>
                  {aboutData.awards && aboutData.awards.map((award, index) => (
                     <p className='itemText awardItem' key={index}>{award}</p>
                  ))}
               </div>
               <div className='experienceContainer'>
                  <p className='itemTitle'>Experience</p>
                  {aboutData.experience && aboutData.experience.map((experience, index) => (
                     <p className='itemText' key={index}>{experience}</p>
                  ))}
               </div>
               <div className='creditContainer'>
                  <p className='itemTitle'>Credits</p>
                  <p className='itemText creditItem'>Mont Architects, Project developed at Friends Of</p>
                  <p className='itemText creditItem'>The Art of Healing, Project developed at Friends Of</p>
                  <p className='itemText creditItem'>Little Tommy’s, Project developed at Pennybridge Creative</p>
                  <p className='itemText'>Little Tommy’s, Photography by Frend</p>
               </div>
               <div className='acknowledgeContainer'>
                  <p className='itemTitle'>Acknowledgments</p>
                  <p className='itemText'>1107® studio acknowledges the Traditional Custodians of the lands and waters we operate on, the Yugambeh people, and pay our respects to their Elders past, present and emerging.</p>
               </div>
            </div>
         </div>
         <div className={`imgContainer ${isExpanded ? 'fade-out' : ''}`}
               onClick={handleToggle}
            >
               <img className='aboutImage' src="/newlucca.png" />
            </div>
         <div className='rightsContainer'>
            <p className='itemText'>Website Design by 1107®, <Link target="_blank" href="https://www.blueroomstudios.com.au"><span className='link'>Development by Blueroom Studios</span></Link></p>
            <p className="itemText">All Rights Reserved ©</p>
         </div>
      </div>
   );
};