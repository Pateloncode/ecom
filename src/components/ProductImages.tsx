"use client"
import Image from 'next/image';
import { useState } from 'react';

// const images=[
//     {
//         id:1,url:"https://images.pexels.com/photos/18794605/pexels-photo-18794605/free-photo-of-a-young-man-in-a-white-long-sleeve.jpeg?auto=compress&cs=tinysrgb&w=1200"
//     },
//     {
//         id:2,url:"https://images.pexels.com/photos/15289920/pexels-photo-15289920/free-photo-of-portrait-of-a-man-sitting-with-his-arms-crossed.jpeg?auto=compress&cs=tinysrgb&w=1200"
//     },
//     {
//         id:3,url:"https://images.pexels.com/photos/18211109/pexels-photo-18211109/free-photo-of-black-and-white-photo-of-a-bearded-man-in-a-jacket-and-hat.jpeg?auto=compress&cs=tinysrgb&w=1200"
//     },
//     {
//         id:4,url:"https://images.pexels.com/photos/16539588/pexels-photo-16539588/free-photo-of-nike-trainers-on-sofa.jpeg?auto=compress&cs=tinysrgb&w=1200"
//     },
// ]


const ProductImages = ({items}:{items:any}) => {
    const [index,setIndex]=useState(0)
    return (
        

        <div className="">
            <div className="h-[500px] relative">

            
                <Image 
                    src={items[index].image?.url}
                    alt="Product Image" 
                    fill 
                    sizes="50vw" 
                    className="object-cover rounded-md" 
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {items.map((items:any,i:number)=>(
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" 
                    key={items._id} 
                    onClick={()=>setIndex(i)}>
                    <Image 
                            src={items.image?.url}
                            alt="Product Image" 
                            fill 
                            sizes="30vw" 
                            className="object-cover rounded-md" 
                        />
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default ProductImages
