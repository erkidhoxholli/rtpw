import React from 'react';
import ListItem from '../ListItem';
import { styled } from '@rtpw/design-system/constants/theme';

const Items = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

type Node = {
    description?: string | null;
    id: string;
    name: string;
    url: string;
};

type Edge = {
    node: Node;
};

type ReposProps = {
    data: Edge[];
};

const Repos = ({ data }: ReposProps) => {
    return (
        <>
            <Items>
                {data.map((edge: Edge) => (
                    <ListItem key={edge.node.id} title={edge.node.name} description={edge.node.description} />
                ))}
            </Items>
        </>
    );
};

export default Repos;
