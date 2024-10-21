import { WeatherScript } from '@/app/embeds/weather/weatherwidget-script';

const SeongsuWeatherWidget = () => {
  return (
    <>
      <WeatherScript />
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

export default SeongsuWeatherWidget;
