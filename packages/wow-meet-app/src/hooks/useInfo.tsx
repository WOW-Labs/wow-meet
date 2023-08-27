import { useAtom } from "jotai";
import { ChangeEvent } from "react";
import { defaultInfo, infoAtom } from "~/store/infoAtom";

export const useInfo = () => {
  const [info, setInfo] = useAtom(infoAtom);

  const handleInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const isAuth = (): boolean => {
    return info.name !== "" && info.password !== "";
  };

  const initializeInfo = () => {
    setInfo(defaultInfo);
  };

  return { info, handleInfo, isAuth, initializeInfo };
};
