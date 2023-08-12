import { useState } from "react";
import ToastUI, { ToastType } from "~/components/Popup/Toast";

const useToast = () => {
  const [toast, setToast] = useState({
    open: false,
    content: "",
    type: ToastType.Postive,
  });

  const close = () => {
    setToast((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };

  const open = (content: string, type: ToastType = ToastType.Postive) => {
    setToast({
      open: true,
      content: content,
      type: type,
    });
  };

  const Toast = () =>
    toast.open ? <ToastUI {...toast} close={close} /> : <></>;

  return { Toast, close, open };
};

export default useToast;
