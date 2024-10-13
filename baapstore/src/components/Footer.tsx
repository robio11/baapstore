import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center text-center gap-8">
          <a
            className="flex bg-red-600 text-white rounded-lg"
            href="https://www.youtube.com/"
          >
            <Youtube />
          </a>
          <a
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"
            href="https://www.instagram.com/"
          >
            <Instagram />
          </a>
          <a
            className="bg-blue-500 text-white p-1 rounded-full"
            href="https://www.facebook.com/"
          >
            <Facebook />
          </a>
          <a
            className="bg-blue-500 text-white p-1 rounded-full"
            href="https://www.twitter.com/"
          >
            <Twitter />
          </a>
          <a
            className="bg-blue-500 text-white p-1 rounded-full"
            href="https://www.linkedin.com/"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:items-center md:justify-center">
        <div className="mb-10 grid md:grid-cols-3 gap-4">
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Pricing
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Demo stores
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Ecommerce Features
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              About Affiliate
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Affilite Registration/Login
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Why Trust Baapstore?
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Terms & Conditions
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Privacy Policy
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Refund Policy
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Blog
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Contact Us
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              About us
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Baapstore vs Others
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Become our supplier
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={16}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-600 text-xl items-center justify-center">
              Invest @ baapstore
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-black justify-between" >
        <div className="flex flex-col ml-9 mt-7" >
          <div className="grid md:grid-cols-4 grid-cols-2 mt-3 gap-4" >
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship India Pricing
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship India Products
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Sarees
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Mens Tshirts
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Gowns
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Home & Decor
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Dupattas
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Innerwear
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Fashion
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Jewellery
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Mobile

            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Women's Footwear
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Mobile Cases
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Personal Care
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Kurtis
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Waist Coast
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Bags
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Shoes
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Accessories
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Night Lamps
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Intimates wear
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Kitchenware
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Kids Toys
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Nightwear
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Mens Shirts
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Mugs
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Salwar Suit Materials
            </h1>
          </Link>
          <Link to="/" className="flex items-center">
            <ChevronRight
              size={10}
              className="text-green-800 hover:text-red-400 text-center text-xs"
            />
            <h1 className="flex text-gray-400 text-xs items-center justify-center">
            Dropship Women T-Shirts
            </h1>
          </Link>
          </div>
        </div>
        <h1 className="flex items-center justify-center text-white my-10" >Uptail Private Limited
        Copyrights 2024</h1>
      </div>
    </div>
  )
}

export default Footer
