"use client";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState, useEffect } from "react";
import { ChartLine } from "lucide-react";

export const Analytics = () => {
  const generateRandomData = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const baseValue = 1000 + i * 300;
      const randomVariation = Math.random() * 500 - 250;
      return Math.round(baseValue + randomVariation);
    });
  };

  const [series, setSeries] = useState([
    {
      name: "Views",
      data: generateRandomData(),
    },
    {
      name: "Clicks",
      data: generateRandomData().map((val) => Math.round(val * 0.6)),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries([
        {
          name: "Views",
          data: generateRandomData(),
        },
        {
          name: "Clicks",
          data: generateRandomData().map((val) => Math.round(val * 0.6)),
        },
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const options: ApexOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: ["#3B82F6", "#10B981"],
    grid: {
      show: false,
    },
    xaxis: {
      categories: Array.from({ length: 12 }, (_, i) => i + 1),
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 1000,
      max: 4000,
      tickAmount: 3, // Ensures the Y-axis intervals are 1000 (1000, 2000, 3000, 4000)
      labels: {
        style: {
          colors: "#6B7280",
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
      },
    },
  };

  return (
    <div className="flex-1 flex flex-col items-start justify-start p-5 relative">
      <span className="flex items-center text-neutral-700 text-xs">
        <ChartLine className="mr-2" /> Collaborative pre-production
      </span>

      <h2 className="text-white text-xl mt-3 font-bold">
        Privacy-friendly, lightweight Analytics.
      </h2>
      <h5 className="text-neutral-600 text-lg">
        Upgrade your post-launch workflow with actionable, <br /> real-time
        insights.
      </h5>

      <div className="relative w-full h-full mt-4">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={230}
        />
      </div>
    </div>
  );
};
