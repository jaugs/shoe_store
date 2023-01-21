import { useState, useRef, useEffect } from "react";

const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false)

    const makeAppear = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting)
          setIsVisible(true);
      };

      const makeAppearRepeating = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      };

      const callBack = options.reappear ? makeAppearRepeating : makeAppear;

      useEffect(() => {
        const containerRefCurrent = containerRef.current
        const observer = new IntersectionObserver(callBack, options);
        if (containerRefCurrent)
          observer.observe(containerRefCurrent);
    
        return () => {
          if (containerRefCurrent) {
            observer.unobserve(containerRefCurrent);
          }
        };
      }, [containerRef, options, callBack]);
    
      return [containerRef, isVisible];
    };
  



const AnimateOnScroll = (props) => {

    const { children, reappear, threshold  } = props

    const visibleStyle = {
        transitionDuration: '1000',
        opacity: '100',
        blur: 'none',
        color: 'red',
       // transform: 'translate(40px, 100px)'
    }

    const notVisibleStyle = {
        color: 'blue',
        transitionDuration: '1000',
        opacity: '0',
        blur: 'lg',
       transform: 'translate(-90px, 0)'
    }



    const [containerRef, isVisible] = useElementOnScreen({
      threshold: threshold,
      reappear: reappear,
    });
  
    return (
      <>
        <div ref={containerRef} className='newDiv' style={isVisible ? visibleStyle : notVisibleStyle}>
          {children}
        </div>
      </>
    );
  }
  export default AnimateOnScroll
  //{`transition duration-1000 ${isVisible ? "opacity-100 blur-none translate-x-0" : "opacity-0 blur-lg -translate-x-20"}  motion-reduce:transition-none motion-reduce:hover:transform-none`}