import styled from "styled-components";
import { pxToRem } from "../../shared/utils/pxToRem";

export const SelectButtonContainer = styled.button`
  display: flex;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: ${pxToRem(12)};
  text-transform: uppercase;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  appearance: none;
  transition: all ease-in-out .2s;
  
  color: ${props => props.theme.contexts.gray[500]};
  background-color: ${props => props.theme.contexts.gray[200]};

  &:hover:not(:disabled) {
    cursor: pointer;
  }
  
  &:hover:not(.active) {
    background-color: ${props => props.theme.contexts.gray[300]};
  }

  &.active {
    border-color: ${props => props.theme.contexts.primary[300]};
    background-color: ${props => props.theme.contexts.primary[100]};
  }

  & > span {
    white-space: nowrap;
  }
  
  & > svg {
    width: 1rem;
    height: 1rem;
    color: ${props => props.theme.contexts.primary[300]};
  }
`