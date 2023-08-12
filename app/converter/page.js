"use client";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import "./page.css";
import Navigation from "../component/header";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
const Home = () => {
  const [label1, setLabel1] = useState("1st mix");
  const [label2, setLabel2] = useState("2nd mix");
  const [label3, setLabel3] = useState("3rd mix");
  const [label4, setLabel4] = useState("4th mix");

  const [C, setC] = useState(0);
  const [C14, setC14] = useState(0);
  const [C21, setC21] = useState(0);
  const [C28, setC28] = useState(0);

  const [CP, setCP] = useState(0);
  const [CP14, setCP14] = useState(0);
  const [CP21, setCP21] = useState(0);
  const [CP28, setCP28] = useState(0);

  const [CG, setCG] = useState(0);
  const [CG14, setCG14] = useState(0);
  const [CG21, setCG21] = useState(0);
  const [CG28, setCG28] = useState(0);

  const [CGP, setCGP] = useState(0);
  const [CGP14, setCGP14] = useState(0);
  const [CGP21, setCGP21] = useState(0);
  const [CGP28, setCGP28] = useState(0);

  const [cLength, setCLength] = useState(0);
  const [cWidth, setCWidth] = useState(0);
  const [cHeight, setCHeight] = useState(0);

  const cArea = parseFloat(cHeight) * parseFloat(cWidth);
  const cVol = parseFloat(cWidth) * parseFloat(cHeight) * parseFloat(cHeight);

  const [toggle, setToggle] = useState(false);

  function toggleBtn() {
    setToggle((prev) => !prev);
  }

  const [generate, setGenerate] = useState(false);

  function Generate() {
    setGenerate((prev) => !prev);
  }
  const chartRef = useRef(null);
  let mixesData = [];
  useEffect(() => {
    if (toggle) {
      mixesData = [
        {
          label: `${C || C14 || C21 || C28 ? label1 : ""}`,
          data: [
            (C * 1000) / cArea,
            (C14 * 1000) / cArea,
            (C21 * 1000) / cArea,
            (C28 * 1000) / cArea,
          ],
          backgroundColor: `${
            C || C14 || C21 || C28 ? "hsl(43, 74%, 19%)" : "transparent"
          }`,
        },
        {
          label: `${CP || CP14 || CP21 || CP28 ? label2 : ""}`,
          data: [
            (CP * 1000) / cArea,
            (CP14 * 1000) / cArea,
            (CP21 * 1000) / cArea,
            (CP28 * 1000) / cArea,
          ],

          backgroundColor: `${
            CP || CP14 || CP21 || CP28 ? "hsl(43, 74%, 39%)" : "transparent"
          }`,
        },
        {
          label: `${CG || CG14 || CG21 || CG28 ? label3 : ""}`,
          data: [
            (CG * 1000) / cArea,
            (CG14 * 1000) / cArea,
            (CG21 * 1000) / cArea,
            (CG28 * 1000) / cArea,
          ],

          backgroundColor: `${
            CG || CG14 || CG21 || CG28 ? "hsl(43, 74%, 59%)" : "transparent"
          }`,
        },
        {
          label: `${CGP || CGP14 || CGP21 || CGP28 ? label4 : ""}`,
          data: [
            (CGP * 1000) / cArea,
            (CGP14 * 1000) / cArea,
            (CGP21 * 1000) / cArea,
            (CGP28 * 1000) / cArea,
          ],

          backgroundColor: `${
            CGP || CGP14 || CGP21 || CGP28 ? "hsl(43, 74%, 79%)" : "transparent"
          }`,
        },
      ];
    } else {
      mixesData = [
        {
          label: `${C || C14 || C21 || C28 ? label1 : ""}`,
          data: [
            (C * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (C14 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (C21 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (C28 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
          ],
          backgroundColor: `${
            C || C14 || C21 || C28 ? "hsl(43, 74%, 19%)" : "transparent"
          }`,
        },
        {
          label: `${CP || CP14 || CP21 || CP28 ? label2 : ""}`,
          data: [
            (CP * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CP14 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CP21 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CP28 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
          ],

          backgroundColor: `${
            CP || CP14 || CP21 || CP28 ? "hsl(43, 74%, 39%)" : "transparent"
          }`,
        },
        {
          label: `${CG || CG14 || CG21 || CG28 ? label3 : ""}`,
          data: [
            (CG * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CG14 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CG21 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CG28 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
          ],

          backgroundColor: `${
            CG || CG14 || CG21 || CG28 ? "hsl(43, 74%, 59%)" : "transparent"
          }`,
        },
        {
          label: `${CGP || CGP14 || CGP21 || CGP28 ? label4 : ""}`,
          data: [
            (CGP * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CGP14 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CGP21 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
            (CGP28 * 1000 * parseFloat(cLength) * 4.4482) / cVol,
          ],

          backgroundColor: `${
            CGP || CGP14 || CGP21 || CGP28 ? "hsl(43, 74%, 79%)" : "transparent"
          }`,
        },
      ];
    }

    if (chartRef.current && mixesData) {
      const ctx = chartRef.current.getContext("2d");

      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["7 days", "14 days", "21 days", "28 days"],
          datasets: mixesData,
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: `${toggle ? "Compressive" : "Flexural"} Strength (MPa)`,
              },
            },
            x: {
              title: {
                display: true,
                text: "Time (days)",
              },
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [chartRef, toggle, generate]);

  return (
    <div>
      <Head>
        <title>Calculator</title>
      </Head>
      <Navigation />

      <h2 className="text-3xl text-center mt-5  font-bold   ">
        Converter and Chart
      </h2>
      <div className="flex justify-center items-center mt-4">
        flexural
        {toggle ? (
          <MdToggleOn onClick={toggleBtn} style={{ fontSize: "2rem" }} />
        ) : (
          <MdToggleOff onClick={toggleBtn} style={{ fontSize: "2rem" }} />
        )}
        Compression
      </div>
      <div className="mt-8 mb-8 flex flex-col items-center">
        <div className="mt-1">
          Mold dimension (LxWxH)
          <input
            value={cLength}
            name="cLength"
            onChange={(e) => setCLength(e.target.value)}
          />{" "}
          X{" "}
          <input
            value={cWidth}
            name="cWidth"
            onChange={(e) => setCWidth(e.target.value)}
          />{" "}
          X{" "}
          <input
            value={cHeight}
            name="cHeight"
            onChange={(e) => setCHeight(e.target.value)}
          />{" "}
          mm
        </div>
        <div>
          Label for 1st mix(optional){" "}
          <input
            value={label1}
            name="label1"
            onChange={(e) => setLabel1(e.target.value)}
            style={{ width: "9rem", marginTop: "0.5rem" }}
          />
        </div>
        <div>
          Label for 2nd mix(optional){" "}
          <input
            value={label2}
            name="label2"
            onChange={(e) => setLabel2(e.target.value)}
            style={{ width: "9rem", marginTop: "0.5rem" }}
          />
        </div>
        <div>
          Label for 3rd mix(optional){" "}
          <input
            value={label3}
            name="label3"
            onChange={(e) => setLabel3(e.target.value)}
            style={{ width: "9rem", marginTop: "0.5rem" }}
          />
        </div>
        <div>
          Label for 4th mix(optional){" "}
          <input
            value={label4}
            name="label4"
            onChange={(e) => setLabel4(e.target.value)}
            style={{ width: "9rem", marginTop: "0.5rem" }}
          />
        </div>
        <p className="mt-5">
          Enter the failure load {toggle ? "(kN)" : "(lb)"} to convert to
          {toggle ? " Compressive" : " Flexural"} Strength (MPa){" "}
        </p>
        <div className="result-container mt-5">
          <div>
            <div style={{ background: "white" }}></div>
            <div style={{ background: "white" }}></div>
            <div>7 days</div>
            <div>14 days</div>
            <div>21 days</div>
            <div>28 days</div>
          </div>
          <div className="result-sub">
            <div>
              <div style={{ borderRight: "none", textAlign: "right" }}>
                1st mix
              </div>
              <div>{toggle ? "(kN)" : "(lb)"}</div>
              <div>
                <input value={C} onChange={(e) => setC(e.target.value)} />
              </div>
              <div>
                <input value={C14} onChange={(e) => setC14(e.target.value)} />
              </div>
              <div>
                <input value={C21} onChange={(e) => setC21(e.target.value)} />
              </div>
              <div>
                <input value={C28} onChange={(e) => setC28(e.target.value)} />
              </div>
            </div>
            <div>
              <div style={{ textAlign: "left" }}> (control)</div>
              <div>MPa</div>
              <div>
                {toggle
                  ? (C * 1000) / cArea
                  : ((C * 1000 * parseFloat(cLength) * 4.4482) / cVol).toFixed(
                      2
                    )}
              </div>
              <div>
                {toggle
                  ? (C14 * 1000) / cArea
                  : (
                      (C14 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (C21 * 1000) / cArea
                  : (
                      (C21 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (C28 * 1000) / cArea
                  : (
                      (C28 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="result-sub">
            <div>
              <div style={{ borderRight: "none", textAlign: "right" }}>
                2nd mix
              </div>
              <div>{toggle ? "(kN)" : "(lb)"}</div>
              <div>
                <input value={CP} onChange={(e) => setCP(e.target.value)} />
              </div>
              <div>
                <input value={CP14} onChange={(e) => setCP14(e.target.value)} />
              </div>
              <div>
                <input value={CP21} onChange={(e) => setCP21(e.target.value)} />
              </div>
              <div>
                <input value={CP28} onChange={(e) => setCP28(e.target.value)} />
              </div>
            </div>
            <div>
              <div style={{ textAlign: "left" }}>(optional)</div>
              <div>MPa</div>
              <div>
                {toggle
                  ? (CP * 1000) / cArea
                  : ((CP * 1000 * parseFloat(cLength) * 4.4482) / cVol).toFixed(
                      2
                    )}
              </div>
              <div>
                {toggle
                  ? (CP14 * 1000) / cArea
                  : (
                      (CP14 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (CP21 * 1000) / cArea
                  : (
                      (CP21 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (CP28 * 1000) / cArea
                  : (
                      (CP28 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="result-sub">
            <div>
              <div style={{ borderRight: "none", textAlign: "right" }}>
                3rd mix
              </div>
              <div>{toggle ? "(kN)" : "(lb)"}</div>
              <div>
                <input value={CG} onChange={(e) => setCG(e.target.value)} />
              </div>
              <div>
                <input value={CG14} onChange={(e) => setCG14(e.target.value)} />
              </div>
              <div>
                <input value={CG21} onChange={(e) => setCG21(e.target.value)} />
              </div>
              <div>
                <input value={CG28} onChange={(e) => setCG28(e.target.value)} />
              </div>
            </div>
            <div>
              <div style={{ textAlign: "left" }}>(optional)</div>
              <div>MPa</div>
              <div>
                {toggle
                  ? (CG * 1000) / cArea
                  : ((CG * 1000 * parseFloat(cLength) * 4.4482) / cVol).toFixed(
                      2
                    )}
              </div>
              <div>
                {toggle
                  ? (CG14 * 1000) / cArea
                  : (
                      (CG14 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (CG21 * 1000) / cArea
                  : (
                      (CG21 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (CG28 * 1000) / cArea
                  : (
                      (CG28 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="result-sub">
            <div>
              <div style={{ borderRight: "none", textAlign: "right" }}>
                4th mix
              </div>
              <div>{toggle ? "(kN)" : "(lb)"}</div>
              <div>
                <input value={CGP} onChange={(e) => setCGP(e.target.value)} />
              </div>
              <div>
                <input
                  value={CGP14}
                  onChange={(e) => setCGP14(e.target.value)}
                />
              </div>
              <div>
                <input
                  value={CGP21}
                  onChange={(e) => setCGP21(e.target.value)}
                />
              </div>
              <div>
                <input
                  value={CGP28}
                  onChange={(e) => setCGP28(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div style={{ textAlign: "left" }}>(optional)</div>
              <div>MPa</div>
              <div>
                {toggle
                  ? (CGP * 1000) / cArea
                  : (
                      (CGP * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (CGP14 * 1000) / cArea
                  : (
                      (CGP14 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (CGP21 * 1000) / cArea
                  : (
                      (CGP21 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
              <div>
                {toggle
                  ? (CGP28 * 1000) / cArea
                  : (
                      (CGP28 * 1000 * parseFloat(cLength) * 4.4482) /
                      cVol
                    ).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto p-4 flex flex-col items-center">
        <button
          onClick={Generate}
          className="mt-4 py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:border-yellow-300 mb-5"
        >
          Update Chart
        </button>
        <h1 className="text-3xl mb-4">
          {toggle ? "Compressive" : "Flexural"} Strength Chart
        </h1>
        <div className="chart flex flex-col items-center">
          <canvas ref={chartRef} />

          <button
            onClick={() => {
              const chartCanvas = chartRef.current;
              const link = document.createElement("a");
              link.href = chartCanvas.toDataURL("image/png");
              link.download = "strength_chart.png";
              link.click();
            }}
            className="mt-4 py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:border-yellow-300"
          >
            Download Chart
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
