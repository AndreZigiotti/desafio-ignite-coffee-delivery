import styled, { css } from "styled-components";
import { ButtonProps } from ".";
import { pxToRem } from "../../shared/utils/pxToRem";

export const ButtonContainer = styled.button<ButtonProps>`
  padding: ${pxToRem(12)} ${pxToRem(45)};
  border: none;
  border-radius: 6px;
  font-size: ${pxToRem(14)};
  font-weight: bold;
  appearance: none;
  transition: all ease-in-out .2s;

  color: ${props => props.theme.contexts.light[50]};
  background-color: ${props => props.theme.contexts[props.variant!][300]};

  &:hover:not(:disabled) {
    cursor: pointer;
    color: ${props => props.theme.contexts.light[50]};
    background-color: ${props => props.theme.contexts[props.variant!][500]};
  }

  ${props => props.withBorder && css`
    border: 1px solid ${props.theme.contexts[props.variant!][300]};
  `}

  ${props => {
    return props.light && css`
      color: ${props.theme.contexts[props.variant!][500]};
      background-color: ${props.theme.contexts[props.variant!][100]};

      &:hover:not(:disabled) {
        background-color: ${props.theme.contexts[props.variant!][300]};
      }
    `
  }}

  &:disabled {
    opacity: .8;
    filter: grayscale(1);
  }
`

export const IconButtonContainer = styled(ButtonContainer)`
  display: flex;
  padding: ${pxToRem(8)};
  font-weight: 400;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(4)};

  svg {
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
  }
`