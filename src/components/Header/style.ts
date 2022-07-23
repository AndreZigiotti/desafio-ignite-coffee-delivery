import styled from "styled-components";
import { pxToRem } from "../../shared/utils/pxToRem";

export const HeaderContainer = styled.header`
  padding: ${pxToRem(32)} 0;

  .wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .actions {
      display: flex;
      gap: ${pxToRem(12)};
      align-items: center;
    }
  }
`