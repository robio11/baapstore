import { Link } from 'react-router-dom'
import liveMaxpeek from '../assets/liveMaxpeek.png'
import DemoA from '../assets/DemoA.png'
import DemoB from '../assets/DemoB.png'
import DemoC from '../assets/DemoC.png'
import DemoD from '../assets/DemoD.png'
import DemoE from '../assets/DemoE.png'
import { Button } from './ui/button'

const Demostores = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="flex text-4xl font-bold my-5">Demo Stores</h1>
        <p className="flex my-5 text-lg">Below are 5 different themes.</p>
        <p className="flex my-5 text-lg">
          Click one by one to see the various theme designs.
        </p>
        <p className="flex text-center mb-10 text-lg">
          <b>Note:</b>Clicking on any of these links will take you to a new tab.
          After browsing the design, please close that tab and come back to this
          page.
        </p>
      </div>
      <div>
        <div className="flex flex-col items-center text-center justify-center mt-10">
          <Link
            to="/"
            className="cursor-pointer text-center justify-center items-center flex"
          >
            <img
              className="flex w-[80%] md:w-[60%] "
              src={liveMaxpeek}
              alt=""
            />
          </Link>
          <h1 className="flex text-center justify-center md:font-bold md:text-3xl text-2xl my-5">
            Live site
          </h1>
        </div>
        <div className="flex justify-center my-10">
          <div className="md:grid md:grid-cols-3 gap-8 flex flex-col md:w-[60%]">
            <Link to="/" className="flex justify-center ">
              <img src={DemoA} alt="" className="md:w-fit" width={500} />
            </Link>
            <Link to="/" className="flex justify-center">
              <img src={DemoB} alt="" className="flex md:w-fit" width={500} />
            </Link>
            <Link to="/" className="flex justify-center">
              <img src={DemoC} alt="" className="flex md:w-fit" width={500} />
            </Link>
            <Link to="/" className="flex justify-center">
              <img src={DemoD} alt="" className="flex md:w-fit" width={500} />
            </Link>
            <Link to="/" className="flex justify-center">
              <img src={DemoE} alt="" className="flex md:w-fit" width={500} />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex w-[70%]">
            <b className="flex mr-2"> Disclaimer:</b> Please be known that the
            demo store is only for the purpose of showing the store designs. The
            products are different from what you see in these stores and you can
            see the actual products in the 'Products' menu.
          </div>
        </div>
        <div className="flex gap-3 items-center justify-center my-10 px-3">
          <div className="flex md:flex-row flex-col w-full md:w-[70%] gap-3" >
            <Button className="flex w-full md:w-[70%] text-md bg-green-500 hover:bg-red-500 h-12">
              VIEW PRODUCTS
            </Button>
            <Button className="flex w-full md:w-[70%] text-md bg-green-700 hover:bg-red-500 h-12">
              CONTACT US
            </Button>
            <Button className="flex w-full md:w-[70%] text-md bg-green-500 hover:bg-red-500 h-12">
              VIEW PLANS
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demostores
