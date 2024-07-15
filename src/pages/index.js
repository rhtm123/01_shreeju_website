import Link from "next/link";
// import ImageWithBlurhash from "@/components/ImageWithBlurhash";

export default function Home() {
  return (
   
    <main>

<section className="py-4 px-4 sm:px-6 lg:px-8">
  {/* <!-- Grid --> */}
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 lg:items-center">
    <div className="py-6" data-aos="fade">
      <h1 className="block text-3xl font-bold sm:text-4xl md:text-4xl lg:text-4xl ">Rohit Maurya [Developer & Trainer]</h1>
      <p data-aos="flip-left" className="my-3 text-lg">
      I am a passionate developer with a strong zeal to work with emerging startups. I love to work with the
              latest technologies and build modern and blazing fast websites.        
        </p>

      
      <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        
        <Link  href={"/thoughts/"+"why-did-i-choose-to-become-an-educator-than-an-employee"}>
          <button data-aos="flip-left" className="btn btn-primary">
          Know More 
          </button>
        </Link>
      </div>


      {/* <!-- Brands --> */}
      
      {/* <!-- End Brands --> */}
    </div>
    {/* <!-- End Col --> */}

    


    <div className="my-10" data-aos="fade-up">

      <img src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full rounded-xl"  />
    </div>
  </div>

</section>




    </main>
  );
}
