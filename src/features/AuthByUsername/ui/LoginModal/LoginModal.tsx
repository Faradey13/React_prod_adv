import { classNames } from "shared/lib/classNames/classNames";
import React, { Suspense } from "react";
import {Modal} from "widgets/Modal";
import {LoginFormAsync} from "features/AuthByUsername/ui/LoginForm/LoginForm.async";
import {Loader} from "shared/ui/Loader/Loader";


export interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: ()=>void
}
export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => (
    <Modal className={classNames('', {}, [className])}
        onClose={onClose} isOpen={isOpen} lazy


    >
        <Suspense fallback={<Loader/>}>
            <LoginFormAsync/>
        </Suspense>

    </Modal>
);

