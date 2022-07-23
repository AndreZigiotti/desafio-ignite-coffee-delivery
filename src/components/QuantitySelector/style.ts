import styled from "styled-components";
import { pxToRem } from "../../shared/utils/pxToRem";

export const SelectorContainer = styled.div`
  display: flex;
  padding: 8px;
  width: ${pxToRem(72)};
  border-radius: 6px;
  gap: 4px;
  justify-content: center;

  background-color: ${props => props.theme.contexts.gray[200]};

  & > * {
    flex: 1;
  }

  input[type="number"] {
    border: none;
    width: 100%;
    box-shadow: none;
    text-align: center;
    appearance: textfield;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;

    background-color: transparent;

    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
      -webkit-appearance: none;
    }
  }

  button {
    display: flex;
    border: none;
    appearance: none;
    background-color: transparent;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.contexts.primary[300]};

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.contexts.primary[500]};
    }

    svg {
      width: ${pxToRem(14)};
      height: ${pxToRem(14)};
    }
  }
`