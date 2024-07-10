import React from "react";

function Cards() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex my-11 gap-3 ml-4">
        <img src="/images/image-retro-pcs.jpg" alt="" />
        <div className="">
          <h1 className="text-soft-red text-4xl font-bold">01</h1>
          <h2 className="font-bold text-xl">Reviving Retro PCs</h2>
          <p className="text-lg text-Dark-grayish-blue">
            What happens when old PCs are given modern upgrades
          </p>
        </div>
      </div>
      <div className="flex my-11 gap-3 ml-4 ">
        <img src="/images/image-top-laptops.jpg" alt="" />
        <div className="">
          <h1 className="text-soft-red text-4xl font-bold">02</h1>
          <h2 className="font-bold text-xl">Top 10 Laptops of 2022</h2>
          <p className="text-lg text-Dark-grayish-blue">
            Our best picks for various needs and budgets
          </p>
        </div>
      </div>
      <div className="flex my-11 gap-3 ml-4">
        <img src="/images/image-gaming-growth.jpg" alt="" />
        <div className="">
          <h1 className="text-soft-red text-4xl font-bold">03</h1>
          <h2 className="font-bold text-xl">The Growth of Gaming</h2>
          <p className="text-lg text-Dark-grayish-blue">
            How the pandemic has sparked fresh opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
export default Cards;
