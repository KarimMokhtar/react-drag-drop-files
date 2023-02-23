import styled, { css } from 'styled-components';

const primary = '#0658c2',
  darkGray = '#666',
  lightGray = '#999';

const defaultStyle = css`
  display: flex;
  align-items: center;
  min-width: 322px;
  max-width: 508px;
  height: 48px;
  border: dashed 2px ${primary};
  padding: 8px 16px 8px 8px;
  border-radius: 5px;
  cursor: pointer;
  flex-grow: 0;

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
`;
export const UploaderWrapper = styled.label<any>`
  position: relative;
  ${(props) => (props.overRide ? '' : defaultStyle)};
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
    color: ${(props) => (props.error ? 'red' : darkGray)};
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
