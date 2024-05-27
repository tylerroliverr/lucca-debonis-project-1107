"use client";
import { useEffect, useRef } from 'react';

class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>PSW\\Y[]{}AD=+*^?#_01323';
      this.update = this.update.bind(this);
    }
  
    setText(newText) {
      const oldText = this.el.innerText.split('<br>').join('\n');
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 50);
        const end = start + Math.floor(Math.random() * 50);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span className="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output.replace(/\n/g, '<br>');
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  
  const TextScrambleComponent = () => {
    const elRef = useRef(null);
  
    useEffect(() => {
      const phrases = [
        '1107 DESIGN STUDIO <br> ALL RIGHTS RESERVED <br> MOVING CULTURE <br> 28.0167° S, 153.4000° E'
      ];
      const el = elRef.current;
      const fx = new TextScramble(el);
  
      fx.setText(phrases[0]);
    }, []);

  return <div className="textScramble" ref={elRef}></div>;
};

export default TextScrambleComponent;
