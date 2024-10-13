import { Link } from 'react-router-dom'
import baapstore from '../assets/baapstore.png'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from './ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarTrigger,
} from './ui/menubar'
import { MenubarMenu } from '@radix-ui/react-menubar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import Marquee from 'react-fast-marquee'


const Navbar = () => {
  const admin = true

  return (
    <div>
      <Marquee className="bg-green-500 h-12" speed={100}>
        <div className="flex text-white text-sm">
          {' '}
          <span className="text-yellow-400">
            {' '}
            --- Join Now & Get up to Rs.7,500 OFF on our Subscription Plans (Use
            Coupon Code: Diwali){''}{' '}
          </span>{' '}
          --- Earn 300% Profits on All Orders --- Ship @ Flat 39rs ---{' '}
        </div>
      </Marquee>
      <div className="max-w-7xl mx-auto md:bg-red-600">
        <div className="flex items-center justify-between h-14 w-full px-8">
          <Link to="/">
            <img src={baapstore} className="w-12" alt="" />
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="flex font-bold text-xl text-white hover:bg-green-400 h-14 items-center"
              >
                All Categories
              </Link>
              <Link
                to="/profile"
                className="flex font-bold text-xl text-white hover:bg-green-400 h-14 items-center"
              >
                Winning products
              </Link>
              <Link
                to="/order/status"
                className="flex font-bold text-xl text-white hover:bg-green-400 h-14 items-center"
              >
                Website Demo
              </Link>
              <Link
                to="/order/status"
                className="flex font-bold text-xl text-white hover:bg-green-400 h-14 items-center"
              >
                Client Stories
              </Link>
              <Link
                to="/order/status"
                className="flex font-bold text-xl text-white hover:bg-green-400 h-14 items-center"
              >
                Profit Calculator
              </Link>
            </div>
            {admin && (
              <Menubar className="bg-red-600 hover:bg-green-600 h-14 rounded-none border-none cursor-pointer outline-none ">
                <MenubarMenu>
                  <MenubarTrigger className="flex text-xl font-bold text-white h-14 border-none rounded-none">
                    More
                  </MenubarTrigger>
                  <MenubarContent>
                    <Link to="/admin/restaurant">
                      <MenubarItem>Pdf catalog</MenubarItem>
                    </Link>
                    <Link to="/admin/menu">
                      <MenubarItem>Handbook</MenubarItem>
                    </Link>
                    <Link to="/admin/orders">
                      <MenubarItem>Ecom Features</MenubarItem>
                    </Link>
                    <Link to="/admin/orders">
                      <MenubarItem>Baapstore vs others</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
            <div className="flex text-white bg-green-400 hover:bg-green-700 h-14 items-center font-bold text-xl cursor-pointer">
              Contact Us
            </div>
          </div>
          <div className="md:hidden lg:hidden">
            {/* mobile */}
            <MobileNavbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <Button
          variant="outline"
          size="icon"
          className="text-black outline-none border-none"
        >
          <Menu size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-col items-center justify-between mt-2"></SheetHeader>
        <SheetDescription className="flex-1 gap-5">
          <Link
            to="/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer font-medium text-lg text-gray-900"
          >
            <span>All Categories</span>
          </Link>
          <Link
            to="/order/status"
            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer font-medium text-lg text-yellow-400"
          >
            <span>Winning products</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer font-medium text-lg text-gray-900"
          >
            <span>Website Demo</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer font-medium text-lg text-gray-900"
          >
            <span>Client Stories</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer font-medium text-lg text-gray-900"
          >
            <span>Profit Calculator</span>
          </Link>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer font-medium text-lg text-gray-900">
            {/* <span>More</span> */}
            <Accordion className="w-full" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">More</AccordionTrigger>
                <AccordionContent className="text-xl text-gray-500">
                  PDF Catalog
                </AccordionContent>
                <AccordionContent className="text-xl text-gray-500">
                  Handbook
                </AccordionContent>
                <AccordionContent className="text-xl text-gray-500">
                  Ecom Features
                </AccordionContent>
                <AccordionContent className="text-xl text-gray-500">
                  Baapstore vs others
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Link
            to="/cart"
            className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer font-medium text-lg text-gray-900 bg-green-600"
          >
            <span>Contact Us</span>
          </Link>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}
