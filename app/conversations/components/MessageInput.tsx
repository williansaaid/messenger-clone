'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    required?: boolean;
    placeholder?: string;
    type?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}) => {
    return (
        <div
            className="relative w-full"
        >
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                autoComplete={id}
                {...register(id, { required })}
                className='text-dark font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none'
            />
        </div>
    )
}

export default MessageInput