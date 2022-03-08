import './App.css';
import { motion } from 'framer-motion'
import { useRef, useEffect, useState} from "react"
import images from './Pictures/images'

function App() {
  // console.log(images);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="App">
      {/* <motion.h1 animate={{ x:-100 }}>HELLO WORLD</motion.h1> */}
      <motion.div className='carousel' ref={carousel} whileTap={{cursor: 'grabbing'}}>
        <motion.div className='inner-carousel' drag='x' dragConstraints={{ right: 0, left: -width}}>
          {images.map(image => {
            return(
              <motion.div className='item'>
                <img src={image}  key={image} />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
