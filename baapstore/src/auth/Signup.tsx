import Navbar from '../components/Navbar'
import { Button } from '../components/ui/button'
import { Checkbox } from '../components/ui/checkbox'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <h1 className="text-center text-xl font-bold my-8">
          Please fill all fields in this page to view Products and Pricing
        </h1>
        <div className="">
          <div className="flex flex-col mx-auto md:max-w-2xl w-full gap-6 justify-center">
            <div className="md:flex px-10 justify-between">
              <h1 className="mb-4 font-semibold">Full Name *</h1>
              <Input
                className="md:w-[70%]  focus-visible:ring-transparent shadow-lg border-none hover:shadow-inner"
                placeholder="Full Name"
                type="text"
              />
            </div>
            <div className="md:flex justify-between px-10">
              <h1 className="mb-4 font-semibold">E-Mail *</h1>
              <Input
                placeholder="E-Mail"
                className="md:w-[70%] focus-visible:ring-0 shadow-lg border-none hover:shadow-inner"
                type="email"
              />
            </div>
            <div className="md:flex justify-between px-10">
              <h1 className="mb-4 font-semibold">Mobile Number *</h1>
              <Input
                placeholder="1234567890"
                className="md:w-[70%]  focus-visible:ring-transparent shadow-lg border-none hover:shadow-inner"
                type="text"
              />
            </div>
            <div className="md:flex justify-between px-10">
              <h1 className="mb-4 font-semibold">Online Selling Experience</h1>
              <Select>
                <SelectTrigger className="md:w-[70%]">
                  <SelectValue placeholder="No" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="1yr">0 - 1yr experience</SelectItem>
                    <SelectItem value="3yrs">1 - 3yrs experience</SelectItem>
                    <SelectItem value="6yrs">3 - 6yrs experience</SelectItem>
                    <SelectItem value="7yrs">6yrs+ experience</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="md:flex justify-between px-10 ">
              <h1 className="mb-4 font-semibold">City</h1>
              <Input
                placeholder="City"
                className="md:w-[70%] focus-visible:ring-transparent shadow-lg border-none hover:shadow-inner"
                type="text"
              />
            </div>
            <div className="md:flex justify-between px-10">
              <h1 className="mb-4 font-semibold">Language</h1>
              <Select>
                <SelectTrigger className="md:w-[70%]">
                  <SelectValue placeholder="Hindi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="Marathi">Marathi</SelectItem>
                    <SelectItem value="telugu">Telugu</SelectItem>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                    <SelectItem value="urdu">Urdu</SelectItem>
                    <SelectItem value="gujarati">Gujarati</SelectItem>
                    <SelectItem value="Kannada">Kannada</SelectItem>
                    <SelectItem value="odia">Odia</SelectItem>
                    <SelectItem value="punjabi">Punjabi</SelectItem>
                    <SelectItem value="malu">Malayalam</SelectItem>
                    <SelectItem value="assamese">Assamese</SelectItem>
                    <SelectItem value="meitei">Meitei</SelectItem>
                    <SelectItem value="sanskrit">Sanskrit</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="md:flex justify-between px-10">
              <h1 className="mb-4 font-semibold">Occupation</h1>
              <div className=" flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>IT Employee</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Non IT Employee</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Professionals - Doctor/Lawyer/Others</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Services Business</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Shop Owner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Online Seller</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Housewife</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Retired</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox className={` data-[state=checked]:bg-blue-500`} />
                  <Label>Other</Label>
                </div>
              </div>
            </div>
            <div className="md:flex px-10">
              <h1 className="mb-4 font-semibold">Gender</h1>
              <RadioGroup className="flex md:ml-[46%]">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem  className={` data-[state=checked]:text-blue-500`} value="male" id="r1" />
                  <Label htmlFor='r1' >Male</Label>
                </div>
                <div className="flex items-center space-x-2" >
                  <RadioGroupItem
                    className={` data-[state=checked]:text-blue-500`}
                    value="female"
                    id="r2"
                  />
                  <Label htmlFor='r2'>Female</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="text-center space-x-12 my-10" >
            <Button className="text-center bg-orange-700 hover:bg-blue-900 px-20 py-6 rounded-none text-lg" >LOGOUT</Button>
            <Button className="text-center bg-pink-700 hover:bg-green-600 px-20 py-6 rounded-none text-lg" >CONTINUE</Button>
        </div>
      </div>
    </div>
  )
}

export default Signup
