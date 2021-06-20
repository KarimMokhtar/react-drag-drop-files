import styled from "styled-components";
import theme from "../../styles/theme";

type Colors = {
  primary: string;
  darkGray: string;
  lightGray: string;
};
const { primary, darkGray, lightGray }: Colors = theme.colors;
export const UploaderWrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 508px;
  height: 48px;
  flex-grow: 0;
  padding: 8px 16px 8px 8px;
  border-radius: 5px;
  border: dashed 2px ${primary};
  cursor: pointer;
  & > input {
    display: none;
  }
`;

export const HoverMsg = styled.div`
  border: dashed 2px ${darkGray};
  border-radius: 5px;
  background-color: ${lightGray};
  opacity: 0.5;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  & > span {
    font-size: 12px;
    color: ${darkGray};
  }
`;
export const Description = styled.span`
  font-size: 14px;
  color: ${darkGray};
  span {
    text-decoration: underline;
  }
`;
