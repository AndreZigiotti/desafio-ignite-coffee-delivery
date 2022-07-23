import styled, { css } from "styled-components";
import { pxToRem } from "../../shared/utils/pxToRem";

type ContentBoxProps = {
  extraRadius?: boolean
}

export const ContentBox = styled.div<ContentBoxProps>`
  margin-bottom: 12px;
  padding: 40px;
  border-radius: 6px;

  background-color: ${props => props.theme.contexts.gray[50]};

  ${props => {
    return props.extraRadius && css`
      border-top-right-radius: 44px;
      border-bottom-left-radius: 44px;
    `
  }}

  &.address {
    header {
      .icon {
        color: ${props => props.theme.contexts.secondary[300]};
      }
    }
  }

  &.payment {
    header {
      .icon {
        color: ${props => props.theme.contexts.primary[300]};
      }
    }
  }

  header {
    display: flex;
    margin-bottom: 32px;
    width: 100%;
    font-size: ${pxToRem(14)};
    gap: 8px;
    color: ${props => props.theme.contexts.gray[500]};

    .box-title {
      margin-bottom: 2px;
      font-size: 1rem;
      font-weight: 400;
      color: ${props => props.theme.contexts.gray[600]};
    }

    .icon {
      height: ${pxToRem(22)};
      width: ${pxToRem(22)};
    }
  }

  hr {
    margin: 24px 0;
    border: none;
    height: 1px;
    background-color: ${props => props.theme.contexts.gray[200]};
  }

  .empty-alert {
    margin-bottom: 24px;
    text-align: center;
    color: ${props => props.theme.contexts.gray[400]};

    a {
      color: ${props => props.theme.contexts.secondary[300]};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .checkout-data {

    .invoice {
      margin-bottom: 24px;

      .item {
        display: flex;
        font-size: ${pxToRem(14)};
        align-items: center;
        justify-content: space-between;

        &:not(:last-child) {
          margin-bottom: 12px;
        }

        &.total {
          font-size: ${pxToRem(20)};
          font-weight: bold;
        }
      }
    }

    button {
      width: 100%;
    }
  }

  .payment-methods {
    display: flex;
    gap: ${pxToRem(12)};
    align-items: center;
    justify-content: space-between;

    button {
      flex: 1;
    }
  }
`

export const CheckoutContainer = styled.section`
  padding: 40px 0;

  .container {
    gap: 32px;

    .col {
      flex: 1;

      &:last-child {
        max-width: 448px;
      }
    }
  }

  .section-title {
    margin-bottom: 15px;
    font-family: 'Baloo 2';
  }
`