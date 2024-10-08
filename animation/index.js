export const slideUpDownMenu={
    initial:{opacity:0, y:20},
    animate:{opacity:1,y:0},
    exit:{opacity:0, y:20},
}
export const OpenClose={
    initial:{height:0,opacity:0},
    animate:{height:"auto",opacity:1},
    exit:{height:0,opacity:0},
}

export const SlideInOut = {
    initial: { y: "-100%" },
    animate: { y: 0},
    exit: { y: "-100%" },
}

// export const fadeInOut={
//     initial:{opacity:0},
//     animate:{opacity:1},
//     exit:{opacity:0},
// }

export const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 , transition: { duration: 2.5 }},  // 0.5 seconds duration
    // exit: { opacity: 0}     // 0.5 seconds duration
  };
export const slidenScaleUpDown={
    initial:{opacity:0,y:20,scale:0.7},
    animate:{opacity:1,y:0,scale:1},
    exit:{opacity:0,y:20,scale:0.7},
}
export const slideleftScaleUpDown={
    initial:{opacity:0,x:50,scale:0.7},
    animate:{opacity:1,x:0,scale:1},
    exit:{opacity:0,x:50,scale:0.7},
}

export const scaleUpDown=(index)=>{
        return({
            initial:{opacity:0,scale:0.85},
            animate:{opacity:1,scale:1},
            exit:{opacity:0,scale:0.85},
            transition:{delay:(index+1)*0.35, ease:"easeInOut"}
        })
}

export const opacityINOut = (index) => {
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { delay: index * 0.1, ease: "easeInOut" },
    };
  };

  export default {
    SlideInOut,
    slideUpDownMenu,
    fadeInOut,
    slidenScaleUpDown,
    slideleftScaleUpDown,
    OpenClose,
    opacityINOut,
    scaleUpDown,
  }
