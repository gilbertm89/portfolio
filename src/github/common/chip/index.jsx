import PropTypes from "prop-types";
import styled from "styled-components";

const IconWrapper = styled.div`
  svg {
    width: 24px;
    height: 24px;
    stroke: #54d062;
  }
`;

export const Chip = ({ label, icon = null }) => {
  return (
    <div className="flex justify-center items-center gap-x-1 px-4 py-[4px] border border-[#54d062] rounded-[20px]">
      <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[#54d062]">
        {label}
      </span>
      <IconWrapper>{icon}</IconWrapper>
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
};
