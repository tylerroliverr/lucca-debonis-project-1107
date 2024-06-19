import React, { useEffect } from 'react';

const ProjectNav = ({ handlePrev, handleNext }) => {

    useEffect(() => {
        const buttonContainerLeft = document.getElementById('buttonContainerLeft');
        const buttonContainerRight = document.getElementById('buttonContainerRight');
        const prevButton = document.getElementById('prevButtonText');
        const nextButton = document.getElementById('nextButtonText');

        const updateButtonPosition = (button, e) => {
            const { clientX: x, clientY: y } = e;
            button.style.transform = `translate3d(${x - button.clientWidth / 2}px, ${y - button.clientHeight / 2}px, 0)`;
        };

        const handleButtonMouseover = (buttonContainer, button, updateHandler) => {
            button.style.display = 'flex';
            const handler = (e) => updateHandler(button, e);
            document.addEventListener('mousemove', handler);
            buttonContainer.addEventListener('mouseout', () => {
                button.style.display = 'none';
                document.removeEventListener('mousemove', handler);
            }, { once: true });
        };

        buttonContainerLeft.addEventListener('mouseover', () => {
            handleButtonMouseover(buttonContainerLeft, prevButton, updateButtonPosition);
        });

        buttonContainerRight.addEventListener('mouseover', () => {
            handleButtonMouseover(buttonContainerRight, nextButton, updateButtonPosition);
        });

        return () => {
            // Cleanup event listeners if component unmounts
            buttonContainerLeft.removeEventListener('mouseover', handleButtonMouseover);
            buttonContainerRight.removeEventListener('mouseover', handleButtonMouseover);
        };
    }, []);

    return (
        <div className="navigationButtons">
            <div id='buttonContainerLeft' className='link' onClick={handlePrev}></div>
            <div id='buttonContainerRight' className='link' onClick={handleNext}></div>
            <div id="prevButtonText"><p>{'<'}Prev</p></div>
            <div id="nextButtonText"><p>Next{'>'}</p></div>
            <div className="prevButton link navLink">
                <div className='arrowDiv leftArrow'>
                    <svg className='leftArrowSvg' version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#fff" stroke="none">
                            <path d="M3172 4365 c-19 -8 -357 -338 -822 -802 -692 -691 -790 -793 -799
-828 -23 -91 -58 -51 782 -893 433 -433 787 -779 806 -788 90 -43 221 45 221
149 0 21 -6 50 -14 65 -8 15 -234 245 -501 512 -267 267 -581 583 -697 703
l-211 217 714 715 c392 393 720 727 727 741 34 66 -12 169 -92 205 -49 22 -70
23 -114 4z"/>
                        </g>

                    </svg>
                </div>
            </div>
            <div className='middleButton'></div>
            <div className="nextButton link navLink">
                <div className='arrowDiv rightArrow'>
                    <svg className='rightArrowSvg' version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#fff" stroke="none">
                            <path d="M1735 4296 c-81 -36 -128 -139 -92 -203 7 -12 331 -342 722 -733
l709 -711 -711 -712 c-787 -788 -745 -738 -708 -832 19 -50 73 -101 118 -111
81 -17 45 -50 880 784 428 427 785 789 793 804 18 35 18 91 0 126 -18 33
-1562 1575 -1593 1591 -29 15 -81 13 -118 -3z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ProjectNav;
