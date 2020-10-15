import React from "react";

type RefReturn =
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    > & {
    label: string;
    name: string;
    register: ({ required }: { required?: boolean }) => RefReturn;
};

const Input: React.FC<InputProps> = ({ name, label, register, required }) => (
    <>
        <label>{label}</label>
        <input name={name} ref={register({ required })} />
    </>
);

export default Input