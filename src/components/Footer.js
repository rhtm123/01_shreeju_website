import { useTheme } from 'next-themes'
import Link from 'next/link';


function Footer() {
  const { theme, setTheme } = useTheme();


    return (
      <div>
  <footer className="grid gap-4 grid-cols-1 md:grid-cols-4 footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Our Company</span>   
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Contact Us</a>
  </div> 
  <div>
    <span className="footer-title">Our Services</span> 
    
    <a className="link link-hover">Life Insurance</a>
    <a className="link link-hover">Health Insurance</a>
    <a className="link link-hover">Financial Consultancy</a>
    <a className="link link-hover">Demat Account</a>
    

  </div> 

  <div>
    <span className="footer-title">GET IN TOUCH</span> 
    <a className="" >We are here to listen:</a>
        <div className="">

        <div class="">
              
              <div class="grow">
                
                <p class="">
                  +91 9518-90-1902
                </p>
              </div>
            </div>


          <br />
            <div class="">
              
              <div class="grow">
                <p class="mb-1 font-bold">
                  Address
                </p>
                <p class="">
                  005/3, Jai Vijay Nagar Building
                </p>
                <p class="">
                  Opposite Seven Square School, Naigaon East, Mumbai
                </p>
              </div>
            </div>



        </div>
      

  </div>

  <div>
    
  <br />

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.141237962605!2d72.85877647402981!3d19.36303618190148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7955fc5b6f45d%3A0x9fe0324917bbbc9e!2sCoding%20Chaska%20(Computer%20Classes)!5e0!3m2!1sen!2sin!4v1696424627632!5m2!1sen!2sin" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



  </div> 
</footer>

<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by Learning Setu Private Ltd | <span id="gt"></span></p>
  </div>
</footer>
</div>

//         <footer  className="footer footer-center bg-base-300 p-10" >
//   <aside data-aos="fade" >
//     <div className='py-4'>
//       <span>Select Theme: </span>
//       <select className="select select-sm" value={theme} onChange={e => setTheme(e.target.value)}>
//         <option value="system">System</option>
//         <option value="light">Light</option>
//         <option value="dark">Dark</option>
//       </select>
//     </div>

//     <p className="font-bold">
//       Coding Chaska | Lagao Coding Chaska
//     </p> 
        
//     <p >Copyright © 2024 - Learning Setu Private Limited</p>
//   </aside> 
  
// </footer>
    )
}

export default Footer