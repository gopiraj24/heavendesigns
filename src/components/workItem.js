import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const WorkItem = ({ image, title, description }) => {
  return (
    <div className="flex flex-col basis-1/2">
      <GatsbyImage image={image} alt={title} />
      <div className="flex flex-col self-stretch pt-6">
        <h3 className="pb-4 font-display text-display-md">{title}</h3>
        <p className="font-light text-body-lg text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};

WorkItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkItem;
