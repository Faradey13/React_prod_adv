import { classNames } from "shared/lib/classNames/classNames";
import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
export interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}
export const Input = ((props: InputProps) => {

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;


    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() =>{
        if(autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    },[autofocus]);

    const onBlure = ()=> {
        setIsFocused(false)
    };

    const onFocus = () => {
        setIsFocused(true)
    };

    const onSelect = (e:any) => {
        setCaretPosition(e?.target?.selectionStart || 0)
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
        setCaretPosition(event.target.value.length)
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlure}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (<span
                    className={cls.caret}
                    style={{left: `${caretPosition * 9}px`}}
                />)}
            </div>
        </div>
    );
});

