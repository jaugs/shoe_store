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

  const { children, reappear, threshold, right  } = props

  const visibleStyle = {
    opacity: '100',
    blur: 'none',
  }

  const notVisibleStyleLeft = {
    opacity: '0',
    transform: 'translate(-40px, 0)'
  }

  const notVisibleStyleRight = {
    opacity: '0',
    transform: 'translate(40px, 0)'
  }

  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });
  
  return (
    <>
    <div 
      ref={containerRef}
      className='animatedDiv'
      style={isVisible ? 
        visibleStyle : 
        right ? 
          notVisibleStyleRight : 
          notVisibleStyleLeft}>
      {children}
    </div>
    </>
    );
  }
  export default AnimateOnScroll
