import { Container, FirstCell, LastCell, Cell } from "./index.styles";
import PropTypes from "prop-types";

export const Skill = ({ name, value }) => {
  return (
    <div className="flex flex-col justify-start items-start text-white gap-y-2">
      <span>{name}</span>
      <Container>
        <FirstCell $fill={true} />
        <Cell $fill={value >= 2} />
        <Cell $fill={value >= 3} />
        <Cell $fill={value >= 4} />
        <LastCell $fill={value >= 5} />
      </Container>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
