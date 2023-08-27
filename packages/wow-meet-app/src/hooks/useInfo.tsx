import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect } from "react";
import { defaultInfo, infoAtom } from "~/store/infoAtom";

export const useInfo = () => {
  const [info, setInfo] = useAtom(infoAtom);
  const router = useRouter();

  const getInfoStorage = () => {
    if (!router.query.mid) return; //미팅 주소가 없는 페이지의 경우에는 받아오지 않음.

    const prevMid = localStorage.getItem("mid");
    const curMid = router.query.mid;
    if (prevMid !== curMid) return; //이전에 작성한 미팅주소와 현재 접속한 미팅 주소가 동일한 경우에 만 받아옴.

    const name = localStorage.getItem("name");
    const password = localStorage.getItem("password");

    if (name && password && info.name === "" && info.password === "")
      setInfo({ name, password });
  };

  const saveMid = () => {
    if (router.query.mid)
      localStorage.setItem("mid", router.query.mid as string);
  };

  const handleInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    localStorage.setItem(e.target.name, e.target.value);
  };

  const isAuth = (): boolean => {
    return info.name !== "" && info.password !== "";
  };

  const initializeInfo = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("mid");
    setInfo(defaultInfo);
  };

  useEffect(() => {
    getInfoStorage();
  }, []);

  return { info, handleInfo, isAuth, initializeInfo, saveMid };
};
