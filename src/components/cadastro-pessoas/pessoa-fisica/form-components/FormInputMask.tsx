
import InputMask from "react-input-mask";


export interface FormPhoneProps {
    mask?: any;
    values?: any;
    disabled?: any;
    maskChar?: any;
    children?: any;
    onChange?: any;
}

export const FormInputMask = ({ mask, values, disabled, maskChar, children, onChange }: FormPhoneProps) => {


    return (

        <InputMask
            mask={mask}
            value={values}
            disabled={disabled}
            maskChar={maskChar}
            onChange={onChange}

        >
            {children}
           
        </InputMask>


    );

};