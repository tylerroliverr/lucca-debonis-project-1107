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
            <div className='itemContainer'>
               <div className='capabilitiesContainer'>
                  <p className='itemTitle'>Capabilities</p>
                  {aboutData.capabilities && aboutData.capabilities.map((capability, index) => (
                     <p className='itemText' key={index}>{capability}</p>
                  ))}
               </div>
               <div className='awardsContainer'>
                  <p className='itemTitle'>Recognition</p>
                  {aboutData.awards && aboutData.awards.map((award, index) => (
                     <p className='itemText awardItem' key={index}>{award}</p>
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
               <div className='creditack'>
               <div className='contactContainer credits'>
                  <p className='itemTitle'>Credits</p>
                  <p className='itemText awardItem creditItem'>Mont Architects, Project developed at Friends Of</p>
                  <p className='itemText awardItem creditItem'>The Art of Healing, Project developed at Friends Of</p>
                  <p className='itemText awardItem creditItem'>Little Tommy’s, Project developed at Pennybridge Creative</p>
                  <p className='itemText awardItem creditItem'>Little Tommy’s, Photography by Frend</p>
               </div>
               <div className='contactContainer ackCont'>
                  <p className='itemTitle'>Acknowledgments</p>
                  <p className='itemText awardItem ackItem'>1107® studio acknowledges the Traditional Custodians of the lands and waters we operate on, the Yugambeh people, and pay our respects to their Elders past, present and emerging.</p>
                  <p className='itemText ackItem ackDevItem'>Website Design by 1107®, <Link target="_blank" href="https://www.blueroomstudios.com.au"><span className='link'>Development by Blueroom Studios</span></Link></p>
               </div>
               </div>
            </div>
            <ImageHover />
            <div className='rightsContainer'>
               <p>All Rights Reserved ©</p>
            </div>
         </div>

         <ImageClickMobile aboutData={aboutData} />
      </>
   )
}