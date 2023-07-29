import { Global } from "@emotion/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/app";
import reset from "~/styles/reset";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
