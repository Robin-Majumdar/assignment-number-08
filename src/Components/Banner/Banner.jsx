import React from 'react';
import bannerImage from '../../assets/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero bg-[#9538E2] text-white">
            <div className="text-center pt-12">
                <div>
                    <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>

                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level.<br /> From smart devices to the coolest accessories, we have it all!
                    </p>

                    <button className="btn text-[#9538E2] mb-6">Shop Now</button>

                </div>

            </div>
            {/* <div className='border rounded-xl p-4 mt-80 bg-white bg-opacity-30'>
                <img src={bannerImage} alt="Banner Image" className="small-banner-image" />
            </div> */}

        </div>
    );
};

export default Banner;