import Image from "next/image";

function Navbar() {
  return (
    <header>
      <section className="flex justify-between items-center p-4">
        <div className="LOGO">
          <h1 className="">
            <Image src="/images/logo.svg" width={50} height={40} alt="Logo" />
          </h1>
        </div>
        <nav className="text-gray-500 cursor-pointer text-lg ">
          <ul className="hidden md:flex space-x-5 lg:space-x-10 ">
            <li className="hover:text-soft-red">Home</li>
            <li className="hover:text-soft-red">New</li>
            <li className="hover:text-soft-red">Popular</li>
            <li className="hover:text-soft-red">Trending</li>
            <li className="hover:text-soft-red">Categories</li>
          </ul>
          <Image
            src="/images/icon-menu.svg"
            className="md:hidden"
            width={50}
            height={40}
            alt="hamburgerMenu"
          />
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
