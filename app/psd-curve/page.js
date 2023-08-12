"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Chart } from "chart.js/auto";
import "./page.css";
import Navigation from "../component/header";

export default function Home() {
  const chartRef = useRef(null);

  const [mass1, setMass1] = useState(() => {
    return 0;
  });
  const [mass2, setMass2] = useState(() => {
    return 0;
  });
  const [mass3, setMass3] = useState(() => {
    return 0;
  });
  const [mass4, setMass4] = useState(() => {
    return 0;
  });
  const [mass5, setMass5] = useState(() => {
    return 0;
  });
  const [mass6, setMass6] = useState(() => {
    return 0;
  });
  const [mass7, setMass7] = useState(() => {
    return 0;
  });

  const mass =
    parseFloat(mass1) +
    parseFloat(mass2) +
    parseFloat(mass3) +
    parseFloat(mass4) +
    parseFloat(mass5) +
    parseFloat(mass6) +
    parseFloat(mass7);

  const percentRetained1 = (mass1 / mass) * 100;
  const percentRetained2 = (mass2 / mass) * 100;
  const percentRetained3 = (mass3 / mass) * 100;
  const percentRetained4 = (mass4 / mass) * 100;
  const percentRetained5 = (mass5 / mass) * 100;
  const percentRetained6 = (mass6 / mass) * 100;
  const percentRetained7 = (mass7 / mass) * 100;

  const cRetained1 = percentRetained1;
  const cRetained2 = cRetained1 + percentRetained2;
  const cRetained3 = cRetained2 + percentRetained3;
  const cRetained4 = cRetained3 + percentRetained4;
  const cRetained5 = cRetained4 + percentRetained5;
  const cRetained6 = cRetained5 + percentRetained6;
  const cRetained7 = cRetained6 + percentRetained7;
  const cRetained =
    cRetained1 +
    cRetained2 +
    cRetained3 +
    cRetained4 +
    cRetained5 +
    cRetained6 +
    cRetained7;

  const pRetained1 = 100 - cRetained1;
  const pRetained2 = 100 - cRetained2;
  const pRetained3 = 100 - cRetained3;
  const pRetained4 = 100 - cRetained4;
  const pRetained5 = 100 - cRetained5;
  const pRetained6 = 100 - cRetained6;
  const pRetained7 = 100 - cRetained7;

  const [dataPoints, setDataPoints] = useState([
    { x: 0.15, y: pRetained6 },
    { x: 0.3, y: pRetained5 },
    { x: 0.6, y: pRetained4 },
    { x: 1.18, y: pRetained3 },
    { x: 2.36, y: pRetained2 },
    { x: 4.75, y: pRetained1 },
  ]);
  const updateState = () => {
    const newState = dataPoints.map((obj) => {
      if (obj.x === 4.75) {
        return { ...obj, y: pRetained1 };
      }
      if (obj.x === 2.36) {
        return { ...obj, y: pRetained2 };
      }
      if (obj.x === 1.18) {
        return { ...obj, y: pRetained3 };
      }
      if (obj.x === 0.6) {
        return { ...obj, y: pRetained4 };
      }
      if (obj.x === 0.3) {
        return { ...obj, y: pRetained5 };
      }
      if (obj.x === 0.15) {
        return { ...obj, y: pRetained6 };
      }
      return obj;
    });

    setDataPoints(newState);
  };

  const updateChart = (dataPoints) => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous Chart instance if it exists
    }
    const ctx = document.getElementById("psdChart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Particle Size Distribution",
            data: dataPoints,
            borderColor: "hsl(43, 74%, 55%)",
            fill: false,
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "logarithmic", // Use logarithmic scale for the particle size (microns) axis
            position: "bottom",
            title: {
              display: true,
              text: "Particle Size (mm)",
            },
            min: 0.1, // Set a minimum value for the logarithmic axis
          },
          y: {
            type: "linear",
            position: "left",
            title: {
              display: true,
              text: "Cumulative Percentage Finer (%)",
            },
            min: 0,
          },
        },
      },
    });
  };

  useEffect(() => {
    updateChart(dataPoints);
  }, [dataPoints]);

  return (
    <div className="">
      <Head>
        <title>Particle Size Distribution Curve</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navigation />
      <h1 className="text-2xl font-bold mb-4 mt-4 text-center">
        Sieve Analysis Computation For Fine Aggregate
      </h1>
      {/* a toogle will be here to change from fine aggregate to coarse aggregate */}
      <div className="particle">
        <div className="particle-sub">
          <div className="particle-tile particle-title">Sieve Size (mm)</div>
          <div className="particle-tile">4.75</div>
          <div className="particle-tile">2.36</div>
          <div className="particle-tile">1.18</div>
          <div className="particle-tile">0.60</div>
          <div className="particle-tile">0.30</div>
          <div className="particle-tile">0.15</div>
          <div className="particle-tile">Pan</div>
          <div className="particle-tile">Total</div>
        </div>
        <div className="particle-sub">
          <div className="particle-tile particle-title">Mass retained (g)</div>
          <div className="particle-tile">
            <input
              placeholder="enter 4.75mm retained"
              name="mass1"
              value={mass1}
              onChange={(e) => setMass1(e.target.value)}
            />
          </div>
          <div className="particle-tile">
            <input
              placeholder="enter 2.36mm retained"
              name="mass2"
              value={mass2}
              onChange={(e) => setMass2(e.target.value)}
            />
          </div>
          <div className="particle-tile">
            <input
              placeholder="enter 1.18mm retained"
              name="mass3"
              value={mass3}
              onChange={(e) => setMass3(e.target.value)}
            />
          </div>
          <div className="particle-tile">
            <input
              placeholder="enter 0.60mm retained"
              name="mass4"
              value={mass4}
              onChange={(e) => setMass4(e.target.value)}
            />
          </div>
          <div className="particle-tile">
            <input
              placeholder="enter 0.30mm retained"
              name="mass5"
              value={mass5}
              onChange={(e) => setMass5(e.target.value)}
            />
          </div>
          <div className="particle-tile">
            <input
              placeholder="enter 0.15mm retained"
              name="mass6"
              value={mass6}
              onChange={(e) => setMass6(e.target.value)}
            />
          </div>
          <div className="particle-tile">
            <input
              placeholder="enter Pan retained"
              name="mass7"
              value={mass7}
              onChange={(e) => setMass7(e.target.value)}
            />
          </div>
          <div className="particle-tile">{mass ? mass : 0}</div>
        </div>
        <div className="particle-sub">
          <div className="particle-tile particle-title">% mass retained</div>
          <div className="particle-tile">
            {percentRetained1 ? percentRetained1.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {percentRetained2 ? percentRetained2.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {percentRetained3 ? percentRetained3.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {percentRetained4 ? percentRetained4.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {percentRetained5 ? percentRetained5.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {percentRetained6 ? percentRetained6.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {percentRetained7 ? percentRetained7.toFixed(2) : "-"}
          </div>
          <div className="particle-tile"></div>
        </div>
        <div className="particle-sub">
          <div className="particle-tile particle-title">
            Cumulative % mass retained
          </div>
          <div className="particle-tile">
            {cRetained1 ? cRetained1.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {cRetained2 ? cRetained2.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {cRetained3 ? cRetained3.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {cRetained4 ? cRetained4.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {cRetained5 ? cRetained5.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {cRetained6 ? cRetained6.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {cRetained7 ? cRetained7.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {cRetained ? cRetained.toFixed(2) : "-"}
          </div>
        </div>
        <div className="particle-sub">
          <div className="particle-tile particle-title">
            Cumulative % mass passing
          </div>
          <div className="particle-tile">
            {pRetained1 ? pRetained1.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {pRetained2 ? pRetained2.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {pRetained3 ? pRetained3.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {pRetained4 ? pRetained4.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {pRetained5 ? pRetained5.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {pRetained6 ? pRetained6.toFixed(2) : "-"}
          </div>
          <div className="particle-tile">
            {pRetained7 ? pRetained7.toFixed(2) : "-"}
          </div>
          <div className="particle-tile"></div>
        </div>
      </div>

      <div className="sub">
        <main className="p-4 w-full max-w-xl flex flex-col items-center">
          <div className="mb-5">
            Fineness Modulus = {cRetained ? cRetained / 100 : "--"}
          </div>
          <button
            onClick={updateState}
            className="py-2 px-4 bg-yellow-600 text-white rounded-md mb-4 hover:bg-yellow-700 focus:outline-none focus:ring focus:border-yellow-300"
          >
            Generate PSD Curve
          </button>
          <h1 className="text-2xl font-bold mb-4">
            Particle Size Distribution Curve
          </h1>
          <canvas
            id="psdChart"
            className="border border-gray-400 rounded-md w-full"
            width="400"
            height="200"
          ></canvas>
          <div className="mt-4 flex flex-col w-full">
            <button
              onClick={() => {
                const chartCanvas = document.getElementById("psdChart");
                const link = document.createElement("a");
                link.href = chartCanvas.toDataURL("image/png");
                link.download = "particle_size_distribution_chart.png";
                link.click();
              }}
              className="py-2 px-4 bg-yellow-600 text-white rounded-md mt-2 hover:bg-yellow-700 focus:outline-none focus:ring focus:border-yellow-300"
            >
              Download Chart
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
