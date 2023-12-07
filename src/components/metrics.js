import React from "react";

const Metrics = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="flex flex-row items-center gap-4 md:col-span-4 xl:flex-row md:flex-col xl:gap-4 md:gap-0 xl:items-center md:items-start">
              <p className="font-normal font-display md:text-display-xl text-display-lg">
                100%
              </p>
              <p className="pt-2 font-normal tracking-wider text-body-sm">
              CLIENTS<br></br> SATISFACTION
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 md:col-span-4 xl:flex-row md:flex-col xl:gap-4 md:gap-0 xl:items-center md:items-start">
              <p className="font-normal font-display md:text-display-xl text-display-lg">
                250
              </p>
              <p className="pt-2 font-normal tracking-wider text-body-sm">
                EMPLOYEES  <br></br> All over India
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 md:col-span-4 xl:flex-row md:flex-col xl:gap-4 md:gap-0 xl:items-center md:items-start">
              <p className="font-normal font-display md:text-display-xl text-display-lg">
                100+
              </p>
              <p className="pt-2 font-normal tracking-wider text-body-sm">
                PROJECTS COMPLETED <br></br> All over India
              </p>
            </div>
          </div>
          <div className="pb-12 mt-12 md:mt-20 md:pb-12">
            <hr className="text-neutral-300"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Metrics;
