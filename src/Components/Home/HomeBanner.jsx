import React, { useEffect } from 'react';
import image1 from '../../assets/vector-image/21235128.jpg'
import image2 from '../../assets/vector-image/image-1.jpg'
import { motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const HomeBanner = () => {

    const { ref, inView } = useInView({threshold:0.2})
    const animation = useAnimation()
    

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        }

        else {
            animation.start({
                x: '-100vw'
            })
        }
        console.log(inView);

    }, [inView])
    return (
        <div  ref={ref} className=''>

            <div className='mt-2'>
                <div className='flex '>
                    <div className='w-1/2 mt-20 p-6'>
                        <p className='text-6xl font-bold'>Programming</p> <br />
                        <p className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500'>Just Got Fun</p>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minus in necessitatibus et quia dolor sequi similique perspiciatis doloribus ipsa nemo ullam non, eveniet sit consequuntur incidunt repellendus! Veniam, illum?</p>
                        <button className='mt-4 btn bg-gradient-to-r from-emerald-500 to-lime-500 text-white border-none'>
                            Explore Now
                        </button>
                    </div>
                    <div className='w-1/2'>
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
            <motion.div
                animate={animation}
               
            >
                <div   className='flex '>
                    <div className='w-1/2 mt-20 p-6'>
                        <p className='text-6xl font-bold'>Programming</p> <br />
                        <p className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500'>Just Got Fun</p>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minus in necessitatibus et quia dolor sequi similique perspiciatis doloribus ipsa nemo ullam non, eveniet sit consequuntur incidunt repellendus! Veniam, illum?</p>
                        <button className='mt-4 btn bg-gradient-to-r from-emerald-500 to-lime-500 text-white border-none'>
                            Explore Now
                        </button>
                    </div>
                    <div className='w-1/2'>
                        <img src={image1} alt="" />
                    </div>
                </div>
            </motion.div>
       
        </div>

    );

};

export default HomeBanner;