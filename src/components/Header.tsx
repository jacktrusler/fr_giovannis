import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex">
      <div className="flex justify-center bg-red-500 h-32 border-white border-double border-b-8 w-full">
        <Link href="/">
          <div className="items-self-end hover-underline-animation mt-2 h-24">
            <Image 
              src="/barber-pole.svg" 
              width={60} 
              height={100}
              >
            </Image>
          </div>
        </Link>
        <div className="flex items-end">
          <div className="pb-4 h-12 text-3xl flex items-end text-orange-200 ">
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
