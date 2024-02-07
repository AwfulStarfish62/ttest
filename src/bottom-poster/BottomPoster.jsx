import React, { useState, useEffect } from 'react';
import coverImage from '../assets/cover.png';
import "./style.css";

export const BottomPoster = () => {
    const [animate, setAnimate] = useState('');
    const [isPosterClosed, setPosterClosed] = useState();

    useEffect(() => {
        if (isPosterClosed === undefined) {
            if (localStorage.getItem('isPosterClosed')) {
                setPosterClosed(true)
            }
        } else  {
            localStorage.setItem('isPosterClosed', JSON.stringify(true))
        }
      }, [isPosterClosed]);

    useEffect(() => {
        if (window.scrollY >= 150) {
            setAnimate('animationUp');
        } 

        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;
      
        const updateScrollDir = () => {
          const scrollY = window.scrollY;
      
          if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
          }          
          if (window.scrollY >= 150 && scrollY > lastScrollY) {
            setAnimate('animationUp');
          } else if (window.scrollY <= 200 && scrollY < lastScrollY) {
            setAnimate('animationDown');
          }

          lastScrollY = scrollY > 0 ? scrollY : 0;
          ticking = false;
        };
      
        const onScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
          }
        };
      
        window.addEventListener("scroll", onScroll);
      
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        !isPosterClosed && <div className={'tablet ' + animate}>
            <div className="frame" style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="header-wrapper-1">Black Friday</div>
                <div className="header-wrapper-2"><b>10%OFF</b></div>
                <p className="use-code-at">
                    <span className="text-wrapper">Use code </span>
                    <span className="span">10FRIDAY</span>
                    <span className="text-wrapper"> at checkout</span>
                </p>
                <div className="button-wrapper" onClick={() => alert("Click!")}>
                    <div className="div">Shop now through Monday</div>
                </div>
                <div className="close-instance" onClick={() => setPosterClosed(true)}>
                    
                </div>
            </div>
        </div>
    );
};
