import styled from "styled-components";

const primary = "#0658c2",
  darkGray = "#666",
  lightGray = "#999";
/**
 *
 * @internal
 */
export const UploaderWrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 322px;
  max-width: 508px;
  height: 48px;
  flex-grow: 0;
  padding: 8px 16px 8px 8px;
  border-radius: 5px;
  border: dashed 2px ${primary};
  cursor: pointer;
  &.is-disabled {
    border: dashed 2px ${darkGray};
    cursor: no-drop;
    svg {
      fill: ${darkGray};
      color: ${darkGray};
      path {
        fill: ${darkGray};
        color: ${darkGray};
      }
    }
  }
  & > input {
    display: none;
  }
`;
/**
 *
 * @internal
 */
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
/**
 *
 * @internal
 */
export const DescriptionWrapper = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  & > span {
    font-size: 12px;
    color: ${props => (props.error ? "red" : darkGray)};
  }
  .file-types {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`;
/**
 *
 * @internal
 */
export const Description = styled.span`
  font-size: 14px;
  color: ${darkGray};
  span {
    text-decoration: underline;
  }
`;
