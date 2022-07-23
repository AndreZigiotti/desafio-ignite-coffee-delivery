import styled from "styled-components";
import { pxToRem } from "../../shared/utils/pxToRem";

export const CardContainer = styled.div`
  padding: ${pxToRem(20)};
  border-radius: 6px 36px;
  text-align: center;
  background-color: ${props => props.theme.contexts.gray[50]};

  header {
    margin-bottom: ${pxToRem(12)};

    img {
      display: block;
      margin: 0 auto;
      margin-top: calc(-20px - ${pxToRem(20)});
    }
  }

  .categories {
    display: flex;
    margin-bottom: 1rem;
    gap: 4px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .product-title {
    margin-bottom: 8px;
    font-family: 'Baloo 2';
    font-size: ${pxToRem(20)};
    font-weight: bold;
    color: ${props => props.theme.contexts.gray[600]};
  }

  .description {
    font-size: ${pxToRem(14)};
    color: ${props => props.theme.contexts.gray[400]};
  }

  footer {
    display: flex;
    margin-top: 33px;
    align-items: center;
    justify-content: space-between;

    .price {
      color: ${props => props.theme.contexts.gray[500]};
    
      span:first-child {
        font-size: ${pxToRem(14)};
      }

      span:last-child {
        margin-left: 4px;
        font-family: 'Baloo 2';
        font-size: ${pxToRem(24)};
        font-weight: 800;
      }
    }

    .controls {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
`