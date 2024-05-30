"use client";
import React, { useEffect, useRef } from 'react';

const EmailButton = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;

        const copyToClipboard = async () => {
            const text = button.textContent;
            
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(text);
                    alert('Copied to clipboard!');
                } else {
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    alert('Copied email to clipboard!');
                }
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        };

        button.addEventListener('click', copyToClipboard);

        return () => {
            button.removeEventListener('click', copyToClipboard);
        };
    }, []);

    return (
        <button ref={buttonRef} className="email link">
            <p>hello@1107.co</p>
        </button>
    );
};

export default EmailButton;