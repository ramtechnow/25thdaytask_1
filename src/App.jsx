import './App.css'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

export default function App() {
  return (
    <div className="overall">
      <nav>
        <h1 id='heading'><span>Tasty</span> Desserts</h1>
        <div className='search'>
          <input type='text' className='inputbox' placeholder='Search for your need' />
          <button className='searchbtn'><CiSearch /></button>
        </div>
        <button className='cart'><FaShoppingCart />
        </button>
      </nav>
      <div className='Productes'>
        <div className='box pro_0'>
          <h1>100</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_1'>
          <h1>200</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_2'>
          <h1>350</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_3'>
          <h1>300</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_4'>
          <h1>400</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_5'>
          <h1>250</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_6'>
          <h1>200</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_7'>
          <h1>100</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_8'>
          <h1>150</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
        <div className='box pro_9'>
          <h1>400</h1>
          <div className='inside'></div>
          <h2 className='inside_color'>Normal cake</h2>
        </div>
      </div>
    </div>
  )
}
