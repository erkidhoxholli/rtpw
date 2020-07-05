import React from 'react';
import styled from 'styled-components';
import Dimensions from '../../constants/dimensions';

type ImageProps = {
    src: string;
};

const Wrapper = styled.img`
    object-fit: contain;
    border-radius: ${Dimensions.radius.medium};
    width: ${Dimensions.imageWidth.small};
    margin: ${Dimensions.spaces.medium} 0;
`;

const Image = ({ src }: ImageProps) => <Wrapper src={src} />;

export default Image;
