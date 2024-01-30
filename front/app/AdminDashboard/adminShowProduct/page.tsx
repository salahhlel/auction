"use client"
import React, { useEffect, useState } from 'react'
import SideBare from '../AdminSidebar/page'
import axios from 'axios'
const showProduct = () => {
    const [oneProduct,setOneProduct]=useState <[]>([])
    const [imag,setImag]=useState('')
const sellerId=localStorage.getItem('sellerId')
const description = localStorage.getItem('description')

useEffect(() => {
    axios
      .get(`http://localhost:5000/dash/getOne/${sellerId}`)
      .then((res) => {
        const Data: [] = res.data;
        setOneProduct(Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const show = (img:string)=>{
    setImag(img)
  }

  return (
    <div className="flex-row lg:flex"> 
    <SideBare/>
    <div className="container mx-auto mt-4 lg:mt-12 overflow-y-auto">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
          <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>
<main className="profile-page">
  <section className="relative block h-[400px] mt-[-7%]">
    <div className=" top-0 w-full h-full bg-center bg-cover" style=
            {{"background-image": "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80)"}}
          >
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{"transform": "translateZ(0px)"}}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section >
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src={oneProduct[0]?.image} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600"></span><span className="text-sm text-blueGray-400"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
            {oneProduct[0]?.name} {oneProduct[0]?.lastName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {oneProduct[0]?.address}
            </div>
            <div className="mb-2 text-blueGray-600 ">
              <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>{oneProduct[0]?.telNumb}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-address-card mr-2 text-lg text-blueGray-400"></i>{oneProduct[0]?.cinNum}
            </div>
          </div>
          <div className=" py-10 border-t border-blueGray-200 text-center mt-[-5px] " >
            {/* <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4"> */}

              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700   flex-row">
  <div className="relative w-[35%] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
     <div className="grid gap-4">
    <div >
        <img className="h-auto max-w-full rounded-lg" src={imag?.imag} alt=""/>
    </div>
    <div className="grid grid-cols-5 gap-4">
    {oneProduct[0]?.items.images?.map(el=>(
        <div>
            <img className="h-auto max-w-full rounded-lg" src={el} alt="" onClick={()=>show(el)}/>
        </div>
        ))}
    </div>
</div>
  </div>
  <div className="p-6">
    <h6
      className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      DISCRIPTION
    </h6>
  
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
   {description}
    </p>
  </div>
</div>  
                
                
              </div>
     ,       {/* </div>
          </div> */}
        </div>
      </div>
    </div>
    {/* <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
      
      </div>
    </div>
  </div>
</footer> */}
  </section>
</main>

    {/* <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700   flex-row">
  <div
    class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
     <div class="grid gap-4">
    <div >
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
    </div>
    <div className="grid grid-cols-5 gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
        </div>
    </div>
</div>
  </div>
  <div class="p-6">
    <h6
      class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      startups
    </h6>
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Lyft launching cross-platform service this week
    </h4>
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a href="#" class="inline-block"><button
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>   */}
</div>
    </div>
    </div>
    
  )
}

export default showProduct