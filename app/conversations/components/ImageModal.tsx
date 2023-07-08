'use client'

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
    src?: string | null;
    isOpen?: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
    src,
    isOpen,
    onClose
}) => {
    if(!src) return null;

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
        >
            <div
                className="h-[60vh]"
            >
                <Image
                    alt="Image"
                    className="object-contain"
                    fill
                    src={src}
                />
            </div>
        </Modal>
    )
}

export default ImageModal