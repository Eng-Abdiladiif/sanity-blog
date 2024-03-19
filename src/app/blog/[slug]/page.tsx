import { fullBlog } from '@/app/lib/interface';
import { client } from '@/app/lib/sanity'
import SendEmail from '@/components/SendEmail';
import { PortableText } from 'next-sanity';
import React from 'react'

async function getData(slug:string) {
    
    const  query  = `
    
    
    *[_type == "blog" && slug.current == '${slug}'] {

 "currentSlug":slug.current,
   title, 
   contect,
   titleImage,
   smallDescription
  
}[0]
    
    `
    const  data =  await client.fetch(query);

    return data;
}
async function page({params}: {params: {slug:string}}) {

    const  data:fullBlog= await getData(params.slug)
    console.log(data)
  return (
    <div className='my-10 flex flex-col justify-center items-center text-xl capitalize
    font-DM'>

    
   <div>
   <h1>Abdiladiif <span 
   className='text-blue-300'>Blog</span></h1>
   </div>

   <div className='mt-10  border-b-2 border-gray-600 w-full rounded-md py-4'>

    <h1 className='text-center'>{data.title}</h1>
   </div>

   <div  className='my-5'>
      
   <h1 className='text-sm'>

<PortableText  value={data.contect}/>
</h1>
   </div>


   <div>

    <SendEmail/>
   </div>


    </div>

 
  )
}

export default page