import React from 'react';
import styled from 'styled-components';
import Dimensions from '../../constants/dimensions';
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.h4`
    font-size: ${Dimensions.fontSize.large};
    font-weight: 300;
    margin-top: ${Dimensions.spaces.xsmall};
`;

const UserInfo = ({ name, bio, company, location, url, email, avatarUrl }: ListItemProps) => (
    <Wrapper>
        <Image src={avatarUrl} />
        <Text>{name}</Text>
        {email && <Text>{email}</Text>}
        {bio && <Text>{bio}</Text>}
        {company && <Text>{company}</Text>}
        {location && <Text>{location}</Text>}
        <Text>{url}</Text>
    </Wrapper>
);

export default UserInfo;
