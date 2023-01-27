import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Common = css`
  width: 2.5rem;
  height: 0.5rem;
  ${({ $fill }) => ($fill ? "background: #2f3d4f" : "background: #eeeeee")};
`;

export const Cell = styled.div`
  ${Common}
`;

export const FirstCell = styled.div`
  ${Common}
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
`;

export const LastCell = styled.div`
  ${Common}
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
`;
