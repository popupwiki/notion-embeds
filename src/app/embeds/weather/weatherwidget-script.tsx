import Script from 'next/script';

export const WeatherScript = () => {
  /** Load the weather widget script after the page is interactive */
  return (
    <Script
      id="weatherwidget-io-js"
      src="https://weatherwidget.io/js/widget.min.js"
      strategy="afterInteractive"
    />
  );
};
