import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 py-12 md:gap-20 lg:py-28 md:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="pt-5 font-display md:text-display-xl text-display-md">
                We provide the <span className="italic">best solutions</span>{" "}
                for your dream home
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Architectural & Interior design"
              description="Transforming spaces with expert architectural and interior design.
               Elevate your living experience with us."
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Building Renovation"
              description="Upgrade your space with our professional building 
              renovation services. Elevate aesthetics, enhance value."
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Construction Management"
              description="Streamline projects with our expert Construction Management. 
              Your success, our priority in every detail."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
