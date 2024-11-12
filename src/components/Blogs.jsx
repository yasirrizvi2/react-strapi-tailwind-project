import React from 'react'

const Blogs = () => {
    const  blogs = [
        {
            "id"        : 1,
            "title"     : "Blog ",
            "desc"      : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perferendis commodi voluptatibus enim repellat, iure magni, ducimus sint eum facere earum cupiditate, quae adipisci nobis accusamus asperiores nemo delectus dolore?",
            "coverImg"  : "https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/64309f16d7ce84563bc2c254_Slide%201%20(43).webp"
        },
        {
            "id"        : 2,
            "title"     : "Blog 2",
            "desc"      : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perferendis commodi voluptatibus enim repellat, iure magni, ducimus sint eum facere earum cupiditate, quae adipisci nobis accusamus asperiores nemo delectus dolore?",
            "coverImg"  : "https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/64309f16d7ce84563bc2c254_Slide%201%20(43).webp"
        },
        {
            "id"        : 3,
            "title"     : "Blog 3",
            "desc"      : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit perferendis commodi voluptatibus enim repellat, iure magni, ducimus sint eum facere earum cupiditate, quae adipisci nobis accusamus asperiores nemo delectus dolore?",
            "coverImg"  : "https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/64309f16d7ce84563bc2c254_Slide%201%20(43).webp"
        },
        
    ]
  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black'>
                
             {blogs.map((blog) => 
            
            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                 <img className='h-56 w-full object-cover' src={blog.coverImg}/>
                 <div className='p-8'>
                     <h3 className='font-bold text-2xl my-1 '>{blog.title}</h3>
                     <p className='text-gray-600 text-xl'>{blog.desc}</p>
                 </div>
             </div>
             )}


            </div>

        </div>
        
    </div>
  )
}

export default Blogs