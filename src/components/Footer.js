import { useTheme } from 'next-themes'


function Footer() {
  const { theme, setTheme } = useTheme();


    return (
        <footer  className="footer footer-center bg-base-300 p-10" >
  <aside data-aos="fade" >
    <div className='py-4'>
      <span>Select Theme: </span>
      <select className="select select-sm" value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>

    <p className="font-bold">
      Coding Chaska | Lagao Coding Chaska
    </p> 
        
    <p >Copyright © 2024 - Learning Setu Private Limited</p>
  </aside> 
  
</footer>
    )
}

export default Footer