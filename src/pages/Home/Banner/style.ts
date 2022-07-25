import styled from "styled-components";
import { pxToRem } from "../../../shared/utils/pxToRem";
import bg from '../../../assets/banner-bg.svg'

export const BannerContainer = styled.section`
  padding: ${pxToRem(92)} 0;
  text-align: center;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  background-color: ${props => props.theme.contexts.light[50]};

  @media ${props => props.theme.devices.desktop} {
    text-align: left;
  }

  .container {
    flex-direction: column-reverse;

    @media ${props => props.theme.devices.desktop} {
      flex-direction: row;
    }
  }

  .section-title {
    margin-bottom: ${pxToRem(16)};
    font-family: 'Baloo 2', cursive;
    font-size: ${pxToRem(48)};
    font-weight: 800;
  }

  .col {
    flex: 1;

    &:first-child {
      flex-grow: 0;

      @media ${props => props.theme.devices.desktop} {
        flex-basis: ${pxToRem(588)};
      }
    }

    & > p {
      margin-bottom: ${pxToRem(66)};
      font-size: ${pxToRem(20)};
    }
  }

  .illustration {
    display: block;
    margin: 0 auto;
    margin-bottom: 48px;
    width: 100%;
    max-width: ${pxToRem(476)};

    @media ${props => props.theme.devices.desktop} {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  .features {
    display: grid;
    gap: ${pxToRem(20)} ${pxToRem(40)};
    grid-template-columns: repeat(2, auto);
    list-style: none;

    li {
      display: flex;
      gap: ${pxToRem(12)};
      align-items: center;
      text-align: left;

      &:first-child .badge {
        background-color: ${props => props.theme.contexts.secondary[500]};
      }

      &:nth-child(2) .badge {
        background-color: ${props => props.theme.contexts.gray[500]};
      }

      &:nth-child(3) .badge {
        background-color: ${props => props.theme.contexts.secondary[300]};
      }

      &:last-child .badge {
        background-color: ${props => props.theme.contexts.primary[300]};
      }
    }

    .badge {
      display: flex;
      padding: .5rem;
      border-radius: 100%;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.contexts.light[100]};

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`