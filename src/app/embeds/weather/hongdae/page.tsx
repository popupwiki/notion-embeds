import { WeatherScript } from '@/app/embeds/weather/weatherwidget-script';

const HongdaeWeatherWidget = () => {
  return (
    <>
      <WeatherScript />
      <a
        className="weatherwidget-io"
        href="https://www.kr-weathernews.com/mv4/html/today.html?loc=101115"
        data-label_1="홍대/합정"
        data-label_2="날씨"
        data-icons="Climacons Animated"
        data-theme="pure"
      >
        홍대/합정 날씨
      </a>
    </>
  );
};

export default HongdaeWeatherWidget;
