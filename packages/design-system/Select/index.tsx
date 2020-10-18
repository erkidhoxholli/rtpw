import React, {useState} from "react";
import ReactSelect, {ValueType} from 'react-select'

type OptionType = {
    value: string;
    label: string;
};

interface IProps {
    options: OptionType[]
}

export default function Select({options}: IProps) {
    const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(options[0]);

    const handleChange = (option: ValueType<OptionType>) => {
        setSelectedOption(option);
    };
    return (
        <ReactSelect value={selectedOption}
                     onChange={option => handleChange(option)}
                     options={options}/>
    )
}

