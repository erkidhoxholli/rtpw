import React from 'react';
import { styled } from '@rtpw/design-system/constants/theme';
import Dimensions from '@rtpw/design-system/constants/dimensions';
import Image from '../Image';

type ListItemProps = {
    name: string;
    avatarUrl: string;
    url: string;
    bio?: string;
    company?: string;
    createdAt: string;
    email?: string;
    location?: string;
};

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.p`
    font-size: ${Dimensions.fontSize.large};
    font-weight: 300;
    margin: ${Dimensions.spaces.xxsmall} 0px;
`;

const Info = styled.div`
    align-items: flex-start;
    margin-top: ${Dimensions.spaces.medium};
`;
const UserInfo = ({ name, bio, company, location, url, email, avatarUrl }: ListItemProps) => (
    <Wrapper>
        <Image src={avatarUrl} />
        <Info>
            <Text>{name}</Text>
            {email && <Text>{email}</Text>}
            {bio && <Text>{bio}</Text>}
            {company && <Text>{company}</Text>}
            {location && <Text>{location}</Text>}
            <Text>{url}</Text>
        </Info>
    </Wrapper>
);

export default UserInfo;
