import React from 'react'
import  me from "../../../public/image/me_image.png"
import Image from 'next/image'

function page() {
  return (
    <div className='mx-w-4xl mx-auto p-4 mt-10'>

        
        <div className='text-center space-y-3'>

            <p className='text-sm dark:text-white text-blue-500'>Who Am I?</p>
            <h1 className='dark:text-blue-400 font-bold text-2xl 
            font-DM'>About Me</h1>
        </div>

        <div className='flex flex-col-reverse 
        md:flex-row  justify-between items-center my-20'>

          {/* image  and  contect */}
          <div className='px-3 mt-6 md:mt-0 space-y-3'>

            <h1 className='text-2xl font-bold '>Who  
             <span className='text-blue-500'>  Am I?</span></h1>
            <p className='text-[16px] leading-7
            font-DM'>Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Saepe officiis qui harum consequatur voluptatibus officia aspernatur? Repudiandae et ex dignissimos? Nisi voluptate vitae, voluptates facere ducimus, amet explicabo tenetur ab libero sint quis suscipit consequuntur quia quaerat totam. Nemo at necessitatibus assumenda fugit accusantium molestiae doloribus. 
              Iste beatae atque earum!</p>
          </div>

          <div>
            
            <Image src={me} className='max-w-sm rounded-md' width={0} height={0} alt='image'/>


          </div>


        </div>

        
       

      
    </div>
  )
}

export default page
