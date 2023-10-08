import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import {Modal} from "widgets/Modal";
import {LoginForm} from "../LoginForm/LoginForm";


export interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: ()=>void
}
export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => (
    <Modal className={classNames('', {}, [className])}
        onClose={onClose} isOpen={isOpen} lazy


    >
        <LoginForm/>
    </Modal>
);

