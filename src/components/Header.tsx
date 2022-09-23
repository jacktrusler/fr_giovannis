import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex">
      <div className="z-10 flex fixed justify-around bg-gray-900 pb-2 h-24 border-white border-double border-b-4 w-full">
        <div className="flex items-end hover:cursor-pointer">
          <Image 
            src="/barber-pole.svg" 
            width={60} 
            height={74}
            >
          </Image>
          <div className='flex hover-underline-animation hidden text-3xl items-end text-white'>
            <a href="#" className='hidden sm:block'>Giovannis Barbershop</a>
          </div>
        </div>

        <div className="flex items-end">
          <div className="h-12 text-3xl flex items-end text-white">
              <a href="#meet-the-barbers" className="hover-underline-animation ml-2 mr-5">Barbers</a>
              <a href="#pricing" className="hover-underline-animation ml-3">Pricing</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
