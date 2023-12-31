import {classNames} from "shared/lib/classNames/classNames";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import {Portal} from "widgets/Portal/ui/Portal";
import {useTheme} from "app/providers/ThemeProvider";
import cls from './Modal.module.scss'


export interface ModalProps {
    className? : string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=> void;
    lazy?: boolean;
}


export const Modal = (props: ModalProps) => {

    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props

    const ANIMATION_DELAY = 300;

    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState(false)
    const [isMouted, setIsMounted] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const closeHandler = useCallback( () => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout( () => {
                onClose();
                setIsClosing(false)
            },ANIMATION_DELAY)
        }
    },[onClose])

    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation()
    }
    const onKeyDown = useCallback((event:KeyboardEvent) => {
        if(event.key === 'Escape') {
            closeHandler()
        }
    },[closeHandler])

    useEffect(()  => {
        if(isOpen){
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }

    },[isOpen, onKeyDown])

    useEffect(() => {
        if(isOpen){
            setIsMounted(true)
        }
    }, [isOpen]);
    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing] : isClosing
    }

    if(lazy && !isMouted)
        return null

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
}

