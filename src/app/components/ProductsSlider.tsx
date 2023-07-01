/* eslint-disable @next/next/no-img-element */

export default function ProductsSlider() {
  return (
    <>
      <div className="subtitle lg:mt-0 md:mt-0 mt-20 text-center flex flex-col gap-4 mb-8">
        <span className="font-bold text-md leading-4 text-center tracking-widest text-blue-600">
          PRODUCTS
        </span>
        <h2 className="font-bold text-3xl leading-10 text-center text-gray-900 tracking-widest">
          Check What We Have
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap">
        <img
          className="hover:scale-110 transition ease-in-out lg:ml-16 md:ml-16 ml-5 lg:mt-0 md:mt-0 mt-5 lg:mr-10 md:mr-10 mr-0 hover:cursor-pointer lg:h-[450px] md:h-[450px] h-[250px] lg:w-[350px] md:w-[400px] w-[280px] rounded-3xl"
          src="/slide4.png"
          alt="Pink Fleece Sweatpants"
        />
        <img
          className="hover:scale-110 transition ease-in-out lg:ml-0 md:ml-0 ml-5 lg:mt-0 md:mt-0 mt-5 lg:mr-10 md:mr-10 mr-0 hover:cursor-pointer lg:h-[450px] md:h-[450px] h-[250px] lg:w-[350px] md:w-[400px] w-[280px] rounded-3xl"
          src="/slide5.png"
          alt="Lite Sweatpants"
        />
        <img
          className="hover:scale-110 transition ease-in-out lg:ml-0 md:ml-0 ml-5 lg:mt-0 md:mt-0 mt-5 hover:cursor-pointer lg:h-[450px] md:h-[450px] h-[250px] lg:w-[350px] md:w-[400px] w-[280px] rounded-3xl"
          src="/slide6.png"
          alt="Imperial Alpaca Hoodie"
        />
      </div>
    </>
  );
}
