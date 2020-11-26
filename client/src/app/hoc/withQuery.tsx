// TODO: manage useQuery (loading for each component, error management)
import React, { useState } from 'react';

// First we need to add a type to let us extend the incoming component.
type ExtraInfoType = {
    extraInfo: string;
};
// Mark the function as a generic using P (or whatever variable you want)
export function withExtraInfo<T>(
    // Then we need to type the incoming component.
    // This creates a union type of whatever the component
    // already accepts AND our extraInfo prop
    WrappedComponent: React.ComponentType<T & ExtraInfoType>
) {
    const [extraInfo, setExtraInfo] = useState('');
    setExtraInfo('important data.');

    const ComponentWithExtraInfo = (props: T) => {
        // At this point, the props being passed in are the original props the component expects.
        return <WrappedComponent {...props} extraInfo={extraInfo} />;
    };
    return ComponentWithExtraInfo;
}