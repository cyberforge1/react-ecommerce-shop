// HomePage.jsx

import React, { useEffect, useRef } from 'react';
import HomePageSection from '../../components/HomePageSection/HomePageSection';
import sampleImage1 from '/background-1.png'; // Replace with the path to your first image
import sampleImage2 from '/background-2.png'; // Replace with the path to your second image
import sampleImage3 from '/background-3.png'; // Replace with the path to your third image
import 'fullpage.js/dist/fullpage.css'; // Import fullpage.js CSS

const HomePage = () => {
    const sectionRefs = useRef([]);
    const currentIndex = useRef(0);

    useEffect(() => {
        const handleWheel = (event) => {
            if (event.deltaY > 0) {
                // Scroll down
                if (currentIndex.current < sectionRefs.current.length - 1) {
                    currentIndex.current += 1;
                    sectionRefs.current[currentIndex.current].scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Scroll up
                if (currentIndex.current > 0) {
                    currentIndex.current -= 1;
                    sectionRefs.current[currentIndex.current].scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div>
            <div ref={(el) => (sectionRefs.current[0] = el)}>
                <HomePageSection imageUrl={sampleImage1} />
            </div>
            <div ref={(el) => (sectionRefs.current[1] = el)}>
                <HomePageSection imageUrl={sampleImage2} />
            </div>
            <div ref={(el) => (sectionRefs.current[2] = el)}>
                <HomePageSection imageUrl={sampleImage3} />
            </div>
        </div>
    );
};

export default HomePage;
