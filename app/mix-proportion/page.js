"use client";
import { useState } from "react";
import Navigation from "../component/header";
import "./page.css";
export default function Mix() {
  const [cement, setCement] = useState(0);
  const [sand, setSand] = useState(0);
  const [coarse, setCoarse] = useState(0);

  const sumRatio = parseFloat(cement) + parseFloat(sand) + parseFloat(coarse);

  const [firstReplace, setfirstReplace] = useState(0);
  const [secondReplace, setsecondReplace] = useState(0);

  const firstReplaceRatio = parseFloat(coarse) * (firstReplace / 100);
  const secondReplaceRatio = parseFloat(coarse) * (secondReplace / 100);
  const newCoarseRatio =
    parseFloat(coarse) - firstReplaceRatio - secondReplaceRatio;

  // compression
  const [cTotal, setCTotal] = useState(0);
  const [cLength, setCLength] = useState(0);
  const [cWidth, setCWidth] = useState(0);
  const [cHeight, setCHeight] = useState(0);
  const [coarseDensity, setCoarseDensity] = useState(0);
  const [sandDensity, setSandDensity] = useState(0);
  const [firstReplaceDensity, setFirstReplaceDensity] = useState(0);
  const [secondReplaceDensity, setSecondReplaceDensity] = useState(0);
  const [wToCRatio, setWToCRatio] = useState(0);

  // if(firstReplaceRatio){
  //   setCoarse(prev => prev*)
  // }else if(secondReplaceVol){} else if(firstReplaceRatio && secondReplaceVol){

  // }

  const cVol =
    (parseFloat(cLength) / 1000) *
    (parseFloat(cWidth) / 1000) *
    (parseFloat(cHeight) / 1000);
  const cementVol = (cement / sumRatio) * 1.54 * parseFloat(cTotal) * cVol;
  const sandVol = (sand / sumRatio) * 1.54 * parseFloat(cTotal) * cVol;
  const coarseVol =
    (newCoarseRatio / sumRatio) * 1.54 * parseFloat(cTotal) * cVol;
  const firstReplaceVol =
    (firstReplaceRatio / sumRatio) * 1.54 * parseFloat(cTotal) * cVol;
  const secondReplaceVol =
    (secondReplaceRatio / sumRatio) * 1.54 * parseFloat(cTotal) * cVol;
  const waterVol = cementVol * parseFloat(wToCRatio);

  // flexural
  const [fTotal, setFTotal] = useState(0);
  const [fLength, setFLength] = useState(0);
  const [fWidth, setFWidth] = useState(0);
  const [fHeight, setFHeight] = useState(0);

  const fVol =
    (parseFloat(fLength) / 1000) *
    (parseFloat(fWidth) / 1000) *
    (parseFloat(fHeight) / 1000);
  const cementVolF = (cement / sumRatio) * 1.54 * parseFloat(fTotal) * fVol;
  const sandVolF = (sand / sumRatio) * 1.54 * parseFloat(fTotal) * fVol;
  const coarseVolF =
    (newCoarseRatio / sumRatio) * 1.54 * parseFloat(fTotal) * fVol;
  const firstReplaceVolF =
    (firstReplaceRatio / sumRatio) * 1.54 * parseFloat(fTotal) * fVol;
  const secondReplaceVolF =
    (secondReplaceRatio / sumRatio) * 1.54 * parseFloat(fTotal) * fVol;
  const waterVolF = cementVolF * parseFloat(wToCRatio);
  return (
    <div className="mix-container">
      {}
      <Navigation />
      <div className="mix-sub pl-4 mt-4 text-center">
        <h2 className="text-2xl mb-6 underline">Mix Proportion Calculation</h2>
        <div className="mt-1">
          Concrete grade ratio
          <input
            value={cement}
            name="cement"
            onChange={(e) => setCement(e.target.value)}
          />
          :
          <input
            value={sand}
            name="sand"
            onChange={(e) => setSand(e.target.value)}
          />
          :
          <input
            value={coarse}
            name="coarse"
            onChange={(e) => setCoarse(e.target.value)}
          />
        </div>
        <div className="mt-1">
          1st Coarse Replacement (optional)
          <input
            value={firstReplace}
            name="firstReplace"
            onChange={(e) => setfirstReplace(e.target.value)}
          />
          %
        </div>
        <div className="mt-1">
          2nd Coarse Replacement (optional)
          <input
            value={secondReplace}
            name="secondReplace"
            onChange={(e) => setsecondReplace(e.target.value)}
          />
          %
        </div>
        {/* <div>
          New Ratio: {cement} : {sand} : {newCoarseRatio.toFixed(1)} :
          {firstReplaceRatio.toFixed(1)} : {secondReplaceRatio.toFixed(1)}
        </div> */}
        <div className="mt-1">
          cube/compression mold
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
        <div className="mt-1">
          Total samples/mix for compression{" "}
          <input
            value={cTotal}
            name="cTotal"
            onChange={(e) => setCTotal(e.target.value)}
          />
        </div>
        <div className="mt-1">
          Prismatic/flexural mold{" "}
          <input
            value={fLength}
            name="fLength"
            onChange={(e) => setFLength(e.target.value)}
          />{" "}
          X{" "}
          <input
            value={fWidth}
            name="fWidth"
            onChange={(e) => setFWidth(e.target.value)}
          />{" "}
          X{" "}
          <input
            value={fHeight}
            name="fHeight"
            onChange={(e) => setFHeight(e.target.value)}
          />{" "}
          mm
        </div>
        <div className="mt-1">
          Total samples/mix for flexural{" "}
          <input
            value={fTotal}
            name="fTotal"
            onChange={(e) => setFTotal(e.target.value)}
          />
        </div>
        <div className="mt-1">
          Density of Sand{" "}
          <input
            value={sandDensity}
            name="sandDensity"
            onChange={(e) => setSandDensity(e.target.value)}
          />
          kg/m<sup>3</sup>
        </div>
        <div className="mt-1">
          Density of Coarse Aggregate{" "}
          <input
            value={coarseDensity}
            name="coarseDensity"
            onChange={(e) => setCoarseDensity(e.target.value)}
          />
          kg/m<sup>3</sup>
        </div>
        <div className="mt-1">
          Density of 1st Replacement{" "}
          <input
            value={firstReplaceDensity}
            name="firstReplaceDensity"
            onChange={(e) => setFirstReplaceDensity(e.target.value)}
          />
          kg/m<sup>3</sup>
        </div>
        <div className="mt-1">
          Density of 2nd Replacement{" "}
          <input
            value={secondReplaceDensity}
            name="secondReplaceDensity"
            onChange={(e) => setSecondReplaceDensity(e.target.value)}
          />
          kg/m<sup>3</sup>
        </div>
        <div className="mt-1">
          Water - Cement ratio{" "}
          <input
            value={wToCRatio}
            name="wToCRatio"
            onChange={(e) => setWToCRatio(e.target.value)}
          />
        </div>
        <h3 className="mt-9 text-2xl underline">Summary for Compression</h3>
        <div className="mix-table text-center mt-4 rounded mb-8 mix">
          <div className=" mix-title">
            <div style={{ background: "white" }}></div>
            <div>
              Proportion (m<sup>3</sup>)
            </div>
            <div>Proportion (Kg)</div>
            <div>Estimate (2023) (&#8358;)</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Cement</div>
            <div>{cementVol ? cementVol.toFixed(5) : "-"}</div>
            <div>{cementVol ? (cementVol * 1440).toFixed(2) : "-"}</div>
            <div>
              {cementVol ? ((cementVol * 1440).toFixed(2) * 4500) / 50 : "-"}
            </div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Sand</div>
            <div>{sandVol ? sandVol.toFixed(5) : "-"}</div>
            <div>{sandVol ? (sandVol * sandDensity).toFixed(2) : "-"}</div>
            <div>-</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              Coarse Aggregate
            </div>
            <div>{coarseVol ? coarseVol.toFixed(5) : "-"}</div>
            <div>
              {coarseVol ? (coarseVol * coarseDensity).toFixed(2) : "-"}
            </div>
            <div>-</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              1st Replacement
            </div>
            <div>{firstReplaceVol ? firstReplaceVol.toFixed(5) : "-"}</div>
            <div>
              {firstReplaceVol
                ? (firstReplaceVol * firstReplaceDensity).toFixed(2)
                : "-"}
            </div>
            <div>-</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              2nd Replacement
            </div>
            <div>{secondReplaceVol ? secondReplaceVol.toFixed(5) : "-"}</div>
            <div>
              {secondReplaceVol
                ? (secondReplaceVol * secondReplaceDensity).toFixed(2)
                : "-"}
            </div>
            <div>-</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Water</div>
            <div>{waterVol ? waterVol.toFixed(5) : "-"}</div>
            <div>{waterVol ? (waterVol * 1000).toFixed(2) : "-"}</div>
            <div>-</div>
          </div>
        </div>

        <h3 className="mt-9 text-2xl underline">Summary for Flexural</h3>
        <div className="mix-table text-center mt-4 rounded mb-8 mix">
          <div className=" mix-title">
            <div style={{ background: "white" }}></div>
            <div>
              Proportion (m<sup>3</sup>)
            </div>
            <div>Proportion (Kg)</div>
            <div>Estimate (2023) (&#8358;)</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Cement</div>
            <div>{cementVolF ? cementVolF.toFixed(5) : "-"}</div>
            <div>{cementVolF ? (cementVolF * 1440).toFixed(2) : "-"}</div>
            <div>
              {cementVolF ? ((cementVolF * 1440).toFixed(2) * 4500) / 50 : "-"}
            </div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Sand</div>
            <div>{sandVolF ? sandVolF.toFixed(5) : "-"}</div>
            <div>{sandVolF ? (sandVolF * sandDensity).toFixed(2) : "-"}</div>
            <div>-</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              Coarse Aggregate
            </div>
            <div>{coarseVolF ? coarseVolF.toFixed(5) : "-"}</div>
            <div>
              {coarseVolF ? (coarseVolF * coarseDensity).toFixed(2) : "-"}
            </div>
            <div>-</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              1st Replacement
            </div>
            <div>{firstReplaceVolF ? firstReplaceVolF.toFixed(5) : "-"}</div>
            <div>
              {firstReplaceVolF
                ? (firstReplaceVolF * firstReplaceDensity).toFixed(2)
                : "-"}
            </div>
            <div>-</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>
              2nd Replacement
            </div>
            <div>{secondReplaceVolF ? secondReplaceVolF.toFixed(5) : "-"}</div>
            <div>
              {secondReplaceVolF
                ? (secondReplaceVolF * secondReplaceDensity).toFixed(2)
                : "-"}
            </div>
            <div>-</div>
          </div>
          <div className=" mix-field bg-yellow-600">
            <div style={{ background: "hsl(43, 74%, 49%)" }}>Water</div>
            <div>{waterVolF ? waterVolF.toFixed(5) : "-"}</div>
            <div>{waterVolF ? (waterVolF * 1000).toFixed(2) : "-"}</div>
            <div>-</div>
          </div>
        </div>
      </div>
    </div>
  );
}
