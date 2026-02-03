import React, { useRef } from "react";

interface ImageUploaderProps {
  onFileChange: (file: File) => void;
  children: React.ReactNode;
  className?: string;
  accept: string;
  disabled?: boolean;
}

const ButtonSelectFile: React.FC<ImageUploaderProps> = ({ onFileChange, children, className, accept, disabled }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <>
      <button disabled={disabled} className={className} onClick={handleButtonClick}>
        {children}
      </button>
      <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} accept={accept} />
    </>
  );
};

export default ButtonSelectFile;
