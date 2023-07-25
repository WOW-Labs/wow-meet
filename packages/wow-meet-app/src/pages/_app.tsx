import reset from "~/styles/reset";
import { api } from "~/utils/api";
import { Global } from "@emotion/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/app";
import { RecoilRoot } from "recoil";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Global styles={reset} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default api.withTRPC(MyApp);
