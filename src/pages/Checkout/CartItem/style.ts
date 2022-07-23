import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;

  .wrapper {
    display: flex;
    gap: 20px;
  }

  .product-image {
    width: 64px;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.contexts.gray[600]};
  }

  .controls {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .price {
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.contexts.gray[500]};
  }
`