import PropTypes from "prop-types";
import styled from "styled-components";

const IconWrapper = styled.div`
  svg {
    width: ${({ width }) => width ?? "24px"};
    height: 24px;
    stroke: ${({ stroke }) => stroke ?? "none"};
    fill: ${({ fill }) => fill ?? "none"};
  }
`;

export const Chip = ({ label = null, icon = null, ...otherProps }) => {
  return (
    <div className="flex justify-center items-center gap-x-1 px-4 py-[4px] border border-[#54d062] rounded-[20px]">
      <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[#54d062]">
        {label}
      </span>
      <IconWrapper {...otherProps}>{icon}</IconWrapper>
    </div>
  );
};
