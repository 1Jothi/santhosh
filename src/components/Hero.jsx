import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-auto flex items-center justify-center mx-auto pt-16 sm:pt-20">
      <div className="max-w-7xl w-full flex flex-col sm:flex-row items-start gap-5 px-6">
        
        {/* Left Side (Indicator Bar + Text) */}
        <div className="flex flex-row items-start gap-4">
          
          {/* Indicator Bar */}
          <div className="flex flex-col justify-center items-center sm:mt-5 mt-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-12 sm:h-40 violet-gradient" />
          </div>

          {/* Text Content */}
          <div className="sm:mt-10 mt-3">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="">MURUGU SANTHOSH</span>
            </h1>
            <p className={`${styles.heroSubText} sm:mt-3 mt-2 text-white-100`}>
              Versatile Digital Marketer & BPO Professional  
              <br className="sm:block hidden" />
              with a track record of executing government projects.  
              <br className="sm:block hidden" />
              Experienced in SEO, content strategy, and social media marketing.  
              <br className="sm:block hidden" />
              Passionate about driving digital transformation through innovative solutions.
            </p>
          </div>
        </div>

        {/* Computers Canvas - Visible only on Desktop */}
        <div className="hidden sm:block w-full sm:w-[60%] mt-[-130px]">
          <ComputersCanvas />
        </div>

      </div>
    </section>
  );
};

export default Hero;
