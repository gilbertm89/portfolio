import styled from "styled-components";

export const Container = styled.div`
  &:before {
    --size: 0;
    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: ${({ background }) =>
      `radial-gradient(circle closest-side, ${background}, transparent)`};
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }

  &:hover:before {
    --size: 200px;
  }
`;
