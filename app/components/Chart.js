"use client"
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1M|USD"
            ]
          ],
          "chartOnly": true,
          "width": "837",
          "height": "460",
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "gridLineColor": "rgba(67, 70, 81, 0.52)",
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "widgetFontColor": "rgba(0, 0, 0, 0.2)",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "5d|1D",
            "1m|30",
            "3m|60",
            "12m|1D",
            "all|1M"
          ],
          "lineColor": "rgba(1, 65, 207, 1)",
          "topColor": "rgba(1, 65, 207, 0.33)",
          "dateFormat": "dd MMM"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
