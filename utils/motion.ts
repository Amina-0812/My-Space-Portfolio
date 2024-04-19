//function to define slide-in from left animation
//it accepts a delay parameter to customize the delay before the animation starts
export function slideInFromLeft(delay: number) {
    return { 
      hidden: { x: -100, opacity: 0 }, //initial state: positioned 100 pixels left and fully transparent
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  //this function to define slide-in from right animation
//this function also uses a 'delay' parameter similar to slideInFromLeft
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  
//constant to define slide-in from top animation
//this does not take a delay parameter and uses a fixed delay
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };