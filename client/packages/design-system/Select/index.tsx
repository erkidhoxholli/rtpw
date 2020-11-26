import React, {useState} from "react";
import ReactSelect, {ValueType} from 'react-select'
import styled from "styled-components";
import Dimensions from "../constants/dimensions";

type OptionType = {
    value: string;
    label: string;
};

interface IProps {
    options: OptionType[]
}

const SelectWrapper = styled(ReactSelect)`
    border-color: ${props => props.theme.colors.lightGray};
    margin: ${Dimensions.spaces.medium} 0;
`

export default function Select({options}: IProps) {
    const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(options[0]);

    const handleChange = (option: ValueType<OptionType>) => {
        setSelectedOption(option);
    };
    return (
        <SelectWrapper
                     value={selectedOption}
                     onChange={(option: any) => handleChange(option)}
                     options={options}/>
    )
}

