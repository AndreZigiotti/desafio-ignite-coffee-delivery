import styled, { css } from "styled-components";
import { TagProps } from ".";
import { pxToRem } from "../../shared/utils/pxToRem";

export const TagContainer = styled.span<TagProps>`
  padding: ${pxToRem(4)} ${pxToRem(8)};
  border-radius: 9999px;
  font-weight: bold;
  font-size: ${pxToRem(10)};
  text-transform: uppercase;

  color: ${props => props.theme.contexts.light[100]};
  background-color: ${props => props.theme.contexts[props.variant!][300]};

  ${props => {
    return props.light && css`
      color: ${props.theme.contexts[props.variant!][500]};
      background-color: ${props.theme.contexts[props.variant!][100]};
    `
  }}
`