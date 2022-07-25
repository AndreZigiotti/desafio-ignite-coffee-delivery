import styled from "styled-components";
import { pxToRem } from "../../shared/utils/pxToRem";

export const OrderConfirmationContainer = styled.div`
  text-align: center;

  @media ${props => props.theme.devices.desktop} {
    text-align: left;
  }

  .container {
    gap: 2rem;

    .col {
      flex: 1;
    }
  }

  h1 {
    margin-bottom: 4px;
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${props => props.theme.contexts.secondary[500]};
  }

  .message {
    color: ${props => props.theme.contexts.gray[600]};
    font-size: ${pxToRem(20)};
  }

  .illustration-wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    .illustration {
      margin: 0 auto;
    }
  }

  .box {
    margin-top: 40px;
    padding: 1px;
    border-radius: 6px 36px;
    color: ${props => props.theme.contexts.gray[500]};
    background-image: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    overflow: hidden;

    &-inner {
      padding: 40px;
      border-radius: 5px 34px;
      background-color: ${props => props.theme.contexts.light[100]};
    }

    .info-item {
      display: flex;
      gap: 12px;
      align-items: flex-start;

      &:not(:last-child) {
        margin-bottom: 32px;
      }

      .icon-wrapper {
        display: flex;
        padding: 8px;
        border-radius: 100%;
        color: ${props => props.theme.contexts.light[100]};
        align-items: center;
        justify-content: center;

        &.primary {
          background-color: ${props => props.theme.contexts.primary[300]};
        }

        &.secondary {
          background-color: ${props => props.theme.contexts.secondary[300]};

          &.dark {
            background-color: ${props => props.theme.contexts.secondary[500]};
          }
        }

        svg {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`