import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex">
      <div className="flex fixed justify-around bg-black pb-2 h-24 border-white border-double border-b-4 w-full">
        <div className="flex items-end hover:cursor-pointer">
          <Image 
            src="/barber-pole.svg" 
            width={60} 
            height={74}
            >
          </Image>
          <div className='flex hover-underline-animation hidden text-3xl items-end text-white'>
            <span className='hidden sm:block'>Giovannis Barbershop</span>
          </div>
        </div>

        <div className="flex items-end">
          <div className="h-12 text-3xl flex items-end text-red-500 ">
            <Link href="/barbers">
              <span className="hover-underline-animation ml-2 mr-5">Barbers</span>
            </Link>
            <Link href="/pricing">
              <span className="hover-underline-animation ml-3">Pricing</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
