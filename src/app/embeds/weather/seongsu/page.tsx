import Script from 'next/script';

const WeatherWidget = () => {
  return (
    <>
      {/** Load the weather widget script after the page is interactive */}
      <Script
        id="weatherwidget-io-js"
        src="https://weatherwidget.io/js/widget.min.js"
        strategy="afterInteractive"
      />

      {/** Weather widget embed */}
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/37d54127d04/seongsu-dong-1il-ga/"
        data-label_1="성수/서울숲"
        data-label_2="날씨"
        data-icons="Climacons Animated"
        data-theme="pure"
      >
        성수/서울숲 날씨
      </a>
    </>
  );
};

export default WeatherWidget;
