import React from 'react';
import { styled } from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';

type ImageProps = {
    src: string;
};

const Wrapper = styled.img`
    object-fit: contain;
    border-radius: ${Dimensions.radius.medium};
    width: ${Dimensions.imageWidth.small};
`;

const Image = ({ src }: ImageProps) => <Wrapper src={src} />;

export default Image;
