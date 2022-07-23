import styled from "styled-components";
import { pxToRem } from "../../../shared/utils/pxToRem";

export const FormContainer = styled.form`
  display: flex;
  gap: 16px 0;
  flex-direction: column;
  align-items: flex-start;

  .full-width {
    width: 100%;
  }

  .row {
    display: flex;
    width: 100%;
    gap: 0 12px;
    flex-wrap: wrap;
    justify-content: flex-start;

    .full-width {
      width: unset;
      flex: 1;
    }

    .form-control {
      flex-shrink: 1;
    }
  }

  .uf {
    max-width: ${pxToRem(60)};
  }

  .form-control {
    padding: 12px;
    border: 1px solid ${props => props.theme.contexts.gray[200]};
    border-radius: 4px;
    font-size: ${pxToRem(14)};
    outline: none;

    color: ${props => props.theme.contexts.gray[400]};
    background-color: ${props => props.theme.contexts.gray[100]};

    &:focus, &:active {
      border-color: ${props => props.theme.contexts.secondary[500]};
    }
  }
`