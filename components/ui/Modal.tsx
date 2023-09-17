'use client'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "./button";
import { X } from "lucide-react";

interface ModalProps {
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {


    return (
        <Transition show={isOpen} appear as={Fragment}>
            <Dialog as="div" className={`relative z-10`} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="w-full flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl rounded-lg bg-white text-left align-middle shadow-xl transition-all pt-4">
                                <div className="w-full px-4 pb-4">
                                    <div className="absolute top-4 right-4">
                                        <Button onClick={onClose}>
                                            <X />
                                        </Button>
                                    </div>
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    )
}
