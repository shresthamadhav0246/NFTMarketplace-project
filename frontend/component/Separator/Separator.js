import styled from "styled-components";

// Styled component for the line separator
const Separator = styled.hr`
  border: 0;
  border-top: 1px solid ${({ color }) => color || "black"};
  width: ${({ width }) => width || "100%"};
`;

// LineSeparator component
const LineSeparator = ({ color, width }) => {
  return <Separator color={color} width={width} />;
};

export default LineSeparator;
