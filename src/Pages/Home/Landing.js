import React from 'react';
import bucketgirl from '../../assets/Images/bucketgirl.png'

const Landing = () => {
    return (
        <div className=''>
            <div class="hero h-screen  lg:h-[60vh] lg:bg-accent z-10 mt-16 ">
                <div class="hero-content flex-col lg:flex-row">

                    <div data-aos="fade-right">
                        <p
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='200'
                        >Best Quality</p>
                        <h1 class="
                        data-aos='fade-right'
                        data-aos-delay='400'
                        data-aos-duration='900'
                        text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="
                         data-aos='fade-right'
                         data-aos-delay='600'
                         data-aos-duration='800'
                        py-6 max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button class="
                         data-aos='zoom-in'
                         data-aos-delay='1300'
                        btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh]  shrink-0'>
                        <img src={bucketgirl} alt="" class="h-full " />
                    </div>
                </div>
            </div>
            <div className='rounded-2xl mx-auto w-5/6 mt-[-30px] bg-base-200 relative shadow-lg p-10 '>
                <h2 className='text-2xl mb-5 text-primary'>Get Free Estimate</h2>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 z-15'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>
        </div>
    );
};

export default Landing;