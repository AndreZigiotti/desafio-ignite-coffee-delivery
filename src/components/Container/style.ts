import styled from "styled-components";
import { pxToRem } from "../../shared/utils/pxToRem";

export const ContainerStyle = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  flex-wrap: wrap;

  @media ${props => props.theme.devices.phone} {
    width: 540px;
  }

  @media ${props => props.theme.devices.tablet} {
    width: 720px;
  }

  @media ${props => props.theme.devices.desktop} {
    width: 960px;
  }

  @media ${props => props.theme.devices.desktopXl} {
    width: 1120px;
  }
`