import styled from "styled-components";
import { pxToRem } from "../../shared/utils/pxToRem";

export const CartContainer = styled.div`
  position: relative;

  .indicator {
    position: absolute;
    display: flex;
    top: -6px;
    right: -9px;
    border-radius: 100%;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    font-size: ${pxToRem(12)};
    font-weight: bold;
    text-align: center;
    line-height: ${pxToRem(15.6)};
    align-items: center;
    justify-content: center;
    
    color: ${props => props.theme.contexts.light[50]};
    background-color: ${props => props.theme.contexts.secondary[500]};
  }
`