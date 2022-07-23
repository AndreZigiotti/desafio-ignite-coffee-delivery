import styled from "styled-components";
import { pxToRem } from "../../../shared/utils/pxToRem";

export const ProductsGridContainer = styled.section`
  padding: ${pxToRem(32)} 0 ${pxToRem(157)};

  .section-title {
    margin-bottom: ${pxToRem(54)};
    font-family: 'Baloo 2';
    font-size: ${pxToRem(32)};
    font-weight: 800;
  }

  .products-grid {
    display: grid;
    gap: 40px 32px;
    grid-template-columns: repeat(4, 1fr);
  }
`