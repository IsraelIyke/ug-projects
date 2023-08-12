"use client";
import Head from "next/head";
import Navigation from "./component/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navigation />
      <div className="">
        <h1 className="text-2xl font-bold mb-4 mt-4 p-4 text-center">
          The Mechanical Properties of Concrete with Partial Replacement of
          Coarse Aggregate with Glass and the Influence of Polystyrene Addition
        </h1>
        <p className="p-4 text-center">
          The following web tools were created during the course of the project
          to help other student that will decide to work on the same or similar
          topic in the future.
        </p>
        <div className="p-5 flex justify-center card text-center">
          <Link href="./psd-curve">
            <div className="m-2 bg-yellow-600 p-5 rounded text-white hover:bg-yellow-700">
              <h2 className="font-bold mb-2 underline">
                Sieve Analysis and PSD Curve
              </h2>
              <p>
                The tool simplifies the computation of sieve analysis data and
                the fineness modulus also it generates the particle size
                distribution curve which can be downloaded and used for further
                analysis.
              </p>
            </div>
          </Link>
          <Link href="./mix-proportion">
            <div className="m-2 bg-yellow-600 p-5 rounded text-white hover:bg-yellow-700">
              <h2 className="font-bold mb-2 underline">
                Mix Proportion and Cost Estimate
              </h2>
              <p>
                Enables faster calculations for the mix proportion of concrete
                whose coarse aggregate is partially replaced by other materials
                like crushed glass, expanded polystyrene, plastics, PKS, fibre
                glass etc
              </p>
            </div>
          </Link>
          <Link href="./converter">
            <div className="m-2 bg-yellow-600 p-5 rounded text-white hover:bg-yellow-700">
              <h2 className="font-bold mb-2 underline">
                Calculators and Charts
              </h2>
              <p>
                This helps to convert data gotten from the lab test to usable
                data for further analysis. It can also generate charts for the
                compressive and flexural strength of concrete.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
