import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all data-[closed]:opacity-0 data-[closed]:translate-y-4 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in w-full max-w-[900px]"
          >
            <div className="relative">
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Content */}
              <div className="">{children}</div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
