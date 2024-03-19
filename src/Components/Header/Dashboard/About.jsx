import React from 'react'

const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Welcome</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here at [Your Company], we are dedicated to offering the best services to our clients. Our team of experienced professionals is committed to delivering innovative solutions that meet the evolving needs of our industry.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Mission</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our mission is to empower our clients with comprehensive solutions that enable them to achieve their business goals and maximize their potential.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Vision</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We envision a world where our services become a cornerstone for the success of businesses around the globe.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-10">
          <img className="w-full rounded-lg" src="https://example.com/your-about-image.jpg" alt="About Us Image" />
        </div>
      </div>
    </div>
  
  


  )
}

export default About
