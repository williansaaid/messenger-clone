'use client'

import ReactSelect from 'react-select';

interface SelectProps {
    label: string;
    onChange: (value: Record<string, any>) => void;
    options: Record<string, any>[];
    value?: Record<string, any>;
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
    label,
    onChange,
    options,
    value,
    disabled,
}) => {
    return (
        <div
            className="z-[100]"
        >
            <label
                className="block text-sm font-medium leading-6 text-dark"
            >
                {label}
            </label>
            <div
                className="mt-2"
            >
                <ReactSelect
                    isDisabled={disabled}
                    value={value}
                    options={options}
                    onChange={onChange}
                    isMulti
                    menuPortalTarget={document.body}
                    styles={{
                        menuPortal: (base) => ({
                            ...base,
                            zIndex: 999
                        })
                    }}
                    classNames={{
                        control: () => 'text-sm'
                    }}
                />
            </div>
        </div>
    )
}

export default Select