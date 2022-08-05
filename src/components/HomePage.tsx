import Image from 'next/image';
import { signOut } from 'next-auth/react'

type TechnologyCardProps = {
  name: string;
  description: string;
  about: string;
};

const TechnologyCard = ({ name, description, about }: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-10 bg-orange-300 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={about}
        target="_blank"
        rel="noreferrer"
      >
        About Page
      </a>
    </section>
  );
};

function HomePage() {
   
  return(
    <>
      <div className="bg-wrap">
        <Image
          className="opacity-100"
          src="/barbershop.jpg"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
        <button onClick={() => signOut()}>Sign Out</button>
      <div
        style={{ backgroundColor: 'rgba(255,165,0,0.2)' }}
        className="flex flex-col items-center bg-orange-200 border-white border-double border-t-8"
      >
        <div className="text-3xl pt-8">Meet the Barbers</div>
        <div className="text-2xl pt-4">Click to check their availability</div>
        <div className="grid  justify-center gap-3 pt-3 my-3 text-center md:grid-cols-1 lg:w-2/5">
          <TechnologyCard
            name="Giovanni"
            description="The Man with the plan"
            about="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="Dan"
            description="Barber Extordinaire"
            about="https://nextjs.org/"
          />
          <TechnologyCard
            name="Other Guy"
            description="who's name i'm forgetting"
            about="https://tailwindcss.com/"
          />
        </div>
      </div>
    </>
  )
}

export default HomePage;

