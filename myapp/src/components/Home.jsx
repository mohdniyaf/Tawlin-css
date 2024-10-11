import React from 'react';

const Home = () => {
  return (
    <div className='flex justify-between px-24 mb-32'>
      <div className="pt-16 ">
        {/* Wrapping "Let's" in a span and applying underline with custom color */}
        <h1 className='font-bold text-6xl leading-tight'>
          <span className='underline decoration-orange-300'>Let's</span> Create <br />
          Memorable <br /> Journey
        </h1>
        <p className='mt-9'>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />  elit, sed do eiusmod tempor incididunt ut labore et <br />        
          dolore magna aliqua.
        </p>
      </div>

      <div className="flex  gap-4 ">
        <div className="grid-cols-1  ">
        <img className='h-72 w-92 rounded-[20px] ml-14 mb-5' src="https://tripoholiic.com/wp-content/uploads/2023/03/manali.png.webp" alt="" />
        <img  className='h-72 w-92 rounded-[20px] ml-14 ' src="https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?cs=srgb&dl=pexels-julieaagaard-1374064.jpg&fm=jpg" alt="" />
        </div>
        <div className="grid-cols-1 pt-16 ">
        <img className='h-[425px] w-[285px] rounded-[20px] '  src="https://images.pexels.com/photos/4356143/pexels-photo-4356143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;
