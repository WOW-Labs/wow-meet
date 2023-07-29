import Head from "next/head";

export interface headProps {
  title: string;
  desc: string;
  ogDesc: string;
}

/**
 * 검색 최적화를 위한 Seo 컴포넌트
 * 페이지 최 상단에 선언하면 됩니다.
 */
const Seo = ({ title, desc, ogDesc }: headProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | 가장 편한 일정 조율, 와우밋!`}</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="와우밋,wow,wowmeet,meeting,wowmeeting,웬투밋,when2meet,whentomeet,lettuce,레튜스,일정조율,시간표,만남,만남장소,시간,시간조율,미팅,회의,줌"
        />
        <meta name="og:site_name" content={`WOW-MEET`} />
        <meta
          name="og:title"
          content={`${title} | 가장 편한 일정 조율, 와우밋!`}
        />
        <meta name="og:description" content={ogDesc} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/og.png" />
        <meta name="twitter:title" content="WOW MEET" />
      </Head>
    </>
  );
};

export default Seo;
