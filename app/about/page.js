import React from 'react';
import getAboutData from '../components/getAboutData';
import Link from 'next/link';
import HoverLink from '../components/hoverLink';
import ImageHover from '../components/imageHover';

export default async function About() {
    const aboutData = await getAboutData();

    return (
        <>
            <HoverLink />
            <ImageHover/>

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
                    <div className='contactContainer'>
                        <p className='itemTitle'>Contact</p>
                        <p className='itemText link'>Instagram</p>
                        <p className='itemText link'>LinkedIn</p>
                        <p className='itemText link email'>hello@1107.co</p>
                    </div>
                    <div className='awardsContainer'>
                        <p className='itemTitle'>Recognition</p>
                        {aboutData.awards && aboutData.awards.map((award, index) => (
                            <p className='itemText awardItem' key={index}>{award}</p>
                        ))}
                    </div>
                </div>
                <div className='imgContainer'>
                    <img className='aboutImage' src="/newlucca.png" />
                </div>
                <div className='rightsContainer'>
                    <p>All Rights Reserved ©</p>
                </div>
                <div className='siteContainer'>
                    <p>Website Design by 1107®, <Link target="_blank" href="https://www.blueroomstudios.com.au"><span className='link'>Development by Blueroom Studios</span></Link></p>
                    <p>1107® studio acknowledges the Traditional Custodians of the lands and waters we operate on, the Yugambeh people, and pay our respects to their Elders past, present and emerging.</p>
                </div>
            </div>

            <div className='aboutContainerMobile'>
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
                            <p className='itemText link'>Instagram</p>
                            <p className='itemText link'>LinkedIn</p>
                            <p className='itemText link email'>hello@1107.co</p>
                        </div>
                        <div className='awardsContainer'>
                            <p className='itemTitle'>Recognition</p>
                            {aboutData.awards && aboutData.awards.map((award, index) => (
                                <p className='itemText awardItem' key={index}>{award}</p>
                            ))}
                        </div>
                    </div>
                    <div className='imgContainer'>
                        <img className='aboutImage' src="/newlucca.png" />
                    </div>
                </div>
                <div className='siteContainer'>
                    <p>1107® studio acknowledges the Traditional Custodians of the lands and waters we operate on, the Yugambeh people, and pay our respects to their Elders past, present and emerging.</p>
                    <p>Website Design by 1107®, <Link target="_blank" href="https://www.blueroomstudios.com.au"><span className='link'>Development by Blueroom Studios</span></Link></p>
                </div>
                <div className='rightsContainer'>
                    <p>All Rights Reserved ©</p>
                </div>
            </div>
        </>
    )
}