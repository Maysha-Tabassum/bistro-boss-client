import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredimg from '../../../assets/home/featured.jpg'
import './Featured.css';
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
            ></SectionTitle>
            <div className='md:flex justify-center items-center py-20 pt-12 px-36'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2025</p>
                    <p>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil iure enim eum, laudantium fuga magnam odit cupiditate pariatur ducimus commodi blanditiis modi accusantium sapiente deserunt praesentium? Impedit dolores ullam laboriosam inventore, eius corporis repellat, molestiae dignissimos corrupti tempore eum!</p>
                    <button className="btn btn-outline  hover:bg-black hover:text-white border-black  border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;