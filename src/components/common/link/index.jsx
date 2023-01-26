import React from "react";
import PropTypes from "prop-types";

export const Link = ({
  href,
  children = null,
  target = "_blank",
  rel = "noopener noreferrer",
  ...otherProps
}) => {
  return (
    <a href={href} target={target} rel={rel} {...otherProps}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
};
