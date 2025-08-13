import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

export default function Modal({ isOpen, closeModal, title, children }) {

    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-10" onClose={closeModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
                            >
                            <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                { title }
                            </DialogTitle>
                            <div className="mt-4">
                                { children }
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}