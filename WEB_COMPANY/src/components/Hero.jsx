function Hero() {
  return (
    <section classname="my-8">
      {/* aside 1 */}
      <div className="flex flex-col md:flex-row justify-between md:space-x-12">
        <aside>
          <img
            src="/images/image-web-3-mobile.jpg"
            alt="hero"
            className="my-10 md:hidden "
          />
          <img
            src="/images/image-web-3-desktop.jpg"
            alt="hero"
            className="my-10 hidden md:inline-block"
          />
          <div className="mt-8 md:flex">
            <h1 className="text-4xl md:text-7xl font-bold">
              The Bright Future of Web 3.0
            </h1>
            <div className="">
              <p className="text-Dark-grayish-blue text-wrap max-w-[500px]">
                we dive into the next evoltion of the web that claims to put the
                power of the platforms back into the hands of the people. But is
                it really fulfillinng its promise?
              </p>
              <button className="mt-6 py-3 px-16 bg-soft-red font-bold ">
                READ MORE
              </button>
            </div>
          </div>
        </aside>
        {/* aside 2 */}
        <aside>
          <div className="bg-Very-dark-blue mt-10 p-4  md:px-10">
            <h1 className="text-soft-orange text-3xl font-bold mb-4">New</h1>
            <div className="">
              <h3 className=" text-white">Hydrogen VS Electric Cars</h3>
              <p className="text-Dark-grayish-blue">
                Will hydrogen-fueled cars catch up to EV's?
              </p>
              <div class="border-b border-Dark-grayish-blue w-full my-5"></div>
            </div>
            <div className="">
              <h3 className=" text-white">Hydrogen VS Electric Cars</h3>
              <p className="text-Dark-grayish-blue">
                Will hydrogen-fueled cars catch up to EV's
              </p>
              <div class="border-b border-Dark-grayish-blue w-full my-5"></div>
            </div>
            <div className="">
              <h3 className=" text-white">Hydrogen VS Electric Cars</h3>
              <p className="text-Dark-grayish-blue">
                Will hydrogen-fueled cars catch up to EV's
              </p>
              <div class="border-b border-Dark-grayish-blue w-full my-5"></div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
