// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='md:bg-bgp xl:bg-fit xl:bg-right xl:bg-no-repeat
    w-screen h-screen translate-z-0'>

      <div className='bg-primary/40 h-screen xl:bg-gradient-to-l from-transparent from-10% to-[#000000]'>
        <div>

          {/* text */}
          <div className='w-screen h-screen bg-gradient-to-r from-[#000000]/30
           via-black/30 to-black/10'>
            <div className='text-center flex flex-col justify-center
              xl:pt-40 xl:text-left h-screen container mx-auto'>
              {/* title */}
              <motion.h1
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h1'          >
                Helping To <span className='text-accent'>Transform</span> <br /> Water Transfer <span className='text-accent'>Plans</span> <br /> Into{' '}
                <span className='text-accent'>Reality</span>
              </motion.h1>
              {/* title end */}
              {/* subtitle */}
              <motion.p
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
                From monitoring temporary above ground pipelines and diesel pumps or pumping through underground pipelines infrastructure using water hub facilities or operating super heaters. <br /><br />We can help make it happen.
              </motion.p>
              {/* subtitle end */}
              {/* btn */}
              {/* <div className='flex justify-center items-center xl:hidden relative'>
                <ProjectsBtn />
              </div>
              <motion.div
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden xl:flex flex-shrink'>
                <ProjectsBtn />
              </motion.div> */}
              {/* btn end */}
            </div>
          </div>
          {/* image */}
          {/* <div className='w-[1200px] h-screen absolute right-0 bottom-0'> */}
            {/* bg img */}
            {/* <div className='xl:bg-bgp xl:bg-cover xl:bg-right xl:bg-no-repeat
            w-screen h-screen translate-z-0'></div> */}
            {/* particles */}
            {/* <ParticlesContainer /> */}
          {/* </div> */}

        </div>
      </div>

    </div>
  );
};

export default Home;
