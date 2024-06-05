// components/Modal.tsx
'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import { PacmanLoader } from 'react-spinners';
import { analyticsEvent } from '@/lib/analytics';
import { motion } from 'framer-motion';

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger
        className="relative outline-none"
        id="resume-btn"
        onClick={() => {
          analyticsEvent('open_resume_modal', {
            category: 'Resume',
          });
        }}
      >
      </DialogTrigger>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <DialogContent className="flex h-[100vh] max-w-[100vw] flex-col sm:h-[90vh] sm:max-w-[90vw] bg-gray-900 border border-gray-700 text-white rounded-lg shadow-lg">
          <DialogTitle className="flex h-10 items-center text-3xl">
            Resume &nbsp;&nbsp;
            <a
              href="/resume.pdf"
              download="Shaurya_Nayyar_Resume.pdf"
              onClick={() => {
                analyticsEvent('download_resume', {
                  category: 'Resume',
                });
              }}
            >
              <Button
                variant="ghost"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white border-opacity-40 p-0"
              >
                <DownloadIcon className="h-[18px] w-[18px]" />
              </Button>
            </a>
          </DialogTitle>
          <DialogFooter className="relative w-full flex-grow overflow-hidden">
            <iframe
              src="/resume_updated.pdf"
              allow="autoplay"
              className="absolute inset-0 z-10 h-full w-full"
              title="Resume Preview"
            ></iframe>
            <div className="flex h-full w-full items-center justify-center">
              <PacmanLoader color="#fff" size={35} />
            </div>
          </DialogFooter>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
};

export default Modal;
