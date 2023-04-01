import React from 'react';
import Button from '../Button/Button';
import image from '../../assets/vector-image/image-1.jpg'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const GuideLine = () => {
    const {ref,inView} = useInView({threshold:0.2})
    const animation = useAnimation()

    
    
    return (
        <div className='m-6 h-screen'>

            <div>
                <h1 className='text-7xl font-bold text-center text-slate-800'>Complete guideline from absolute beginners to getting hired</h1>
            </div>
            <div className='text-center'>
                <Button>Explore Course</Button>
                <Button>Hired List</Button>
            </div>

            <motion.div  className="m-20 card card-side  shadow-xl">
                <div className='w-2/5'><img src={image} alt="Movie" /></div>
                <div className="w-3/5 card-body">
                    <h2 className="text-4xl font-bold text-black">Complete Web Development Course With RM Rafat!</h2>
                    <p className='text-xl mt-7 text-black font-bold'>Enjoy the most effective and enjoyable journey with interactive lessons and guided support to become a web developer.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default GuideLine;