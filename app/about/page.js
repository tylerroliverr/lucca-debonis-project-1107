import React from 'react';
import getAboutData from '../components/getAboutData';
import Link from 'next/link';
import HoverLink from '../components/hoverLink';
import ImageHover from '../components/imageHover';
import ImageClickMobile from '../components/imageClickMobile';
import EmailButton from '../components/emailButton';

export default async function About() {
   const aboutData = await getAboutData();

   return (
      <>
         <HoverLink />

         <div className='aboutContainer'>
            <div className='aboutBlurb'>
               <p><span className='pop'>1107®</span> {aboutData.blurb}</p>
            </div>
            <div className='itemContainer grid'>
               <div className='capabilitiesContainer gridItem1'>
                  <p className='itemTitle'>Capabilities</p>
                  {aboutData.capabilities && aboutData.capabilities.map((capability, index) => (
                     <p className='itemText' key={index}>{capability}</p>
                  ))}
               </div>
               <div className='awardsContainer gridItem2'>
                  <p className='itemTitle'>Recognition</p>
                  {aboutData.awards && aboutData.awards.map((award, index) => (
                     <p className='itemText awardItem' key={index}>{award}</p>
                  ))}
               </div>
               <div className='experienceContainer gridItem3'>
                  <p className='itemTitle'>Experience</p>
                  {aboutData.experience && aboutData.experience.map((experience, index) => (
                     <p className='itemText' key={index}>{experience}</p>
                  ))}
               </div>
               <div className='creditsContainer gridItem4'>
                  <p className='itemTitle'>Credits</p>
                  <p className='itemText'>Mont Architects, Project developed at Friends Of</p>
                  <p className='itemText'>The Art of Healing, Project developed at Friends Of</p>
                  <p className='itemText'>Little Tommy’s, Project developed at Pennybridge Creative</p>
                  <p className='itemText'>Little Tommy’s, Photography by Frend</p>
               </div>
               <div className='contactContainer gridItem5'>
                  <p className='itemTitle'>Contact</p>
                  <p className='itemText link'><Link target='_blank' href={"https://www.instagram.com/luccadebonis/"}>Instagram</Link></p>
                  <p className='itemText link'><Link target='_blank' href={"https://www.linkedin.com/in/lucca-de-bonis-43151b194/"}>LinkedIn</Link></p>
                  <div className='itemText link email'>
                     <EmailButton />
                  </div>
               </div>
               <div className='acknowledgeContainer gridItem6'>
                  <p className='itemTitle'>Acknowledgments</p>
                  <p className='itemText'>1107® studio acknowledges the Traditional Custodians of the lands and waters we operate on, the Yugambeh people, and pay our respects to their Elders past, present and emerging.</p>
               </div>
            </div>
            <ImageHover />
            <div className='rightsContainer'>
               <div className='footerGrid1'>
                  <p>All Rights Reserved ©</p>
               </div>
               <div className='footerGrid2'>
                  <p className='itemText'>Website Design by 1107®, <Link target="_blank" href="https://www.blueroomstudios.com.au"><span className='link'>Development by Blueroom Studios</span></Link></p>
               </div>
            </div>
         </div>

         <ImageClickMobile aboutData={aboutData} />
      </>
   )
}