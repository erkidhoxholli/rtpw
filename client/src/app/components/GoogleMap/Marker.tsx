import React from "react";
import Dimensions from '@rtpw/design-system/constants/dimensions';
import Colors from '@rtpw/design-system/constants/colors';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.white};
    width: 48px;
    height: 48px;
`
const Marker = ({text}: any) => <Wrapper>{text}</Wrapper>

export default Marker