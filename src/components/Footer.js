import { useTheme } from 'next-themes'
import Link from 'next/link';


function Footer() {
  const { theme, setTheme } = useTheme();


    return (

    <div >

        <footer  className=" border-t-2 footer footer-center text-base-300 bg-primary opacity-90 p-10" >
  <aside data-aos="fade" >
    <div className='py-4'>
      <span>Select Theme: </span>
      <select className="select bg-primary select-sm select-bordered border-base-200" value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option  value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>

    <p className="m-auto md:w-1/2 opacity-90">
    Let Shreeju Investments be your guide on the path to financial security and a brighter future. Contact us today for a free consultation!
    </p> 
  </aside> 
  
</footer>

<footer className="footer footer-center p-4 bg-primary text-base-content">
  <div>
    <p>All rights reserved | <span id="gt"></span></p>
  </div>
</footer>

</div>
    )
}

export default Footer