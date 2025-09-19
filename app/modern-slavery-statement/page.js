"use client";

import { useEffect, useState } from "react";

export default function ModernSalavaryPage() {
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.getElementById("header"); // Select global header
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    // Recalculate on resize (optional)
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldOffset = pathname !== "/";

  return (
    <>
      <section className="py-12">
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <h4>HYPERAMA GROUP MODERN SLAVERY STATEMENT</h4>
          <p className="mb-3">
            Thank you for reading this post, don't forget to subscribe! Tiger
            Tiger is a brand of Hyperama Plc. Our statement sets out the steps
            Hyperama Plc are committed to upholding in regards to our
            responsibilities under the Modern Slavery Act 2015.
          </p>

          <h4>INTRODUCTION FROM THE BOARD OF DIRECTORS</h4>
          <p className="mb-3">
            Modern slavery includes human trafficking, slavery or forced labour
            which can exist in all economies and businesses. We as a Company are
            aware and acknowledge that this is still an on-going issue within
            the global society.
          </p>
          <p className="mb-3">
            We aim to place effective controls in place to prevent any form of
            slavery or human trafficking taking place within our supply chains
            or business, and provide respect and dignity of individuals both
            within the organisation and through our supply chain.
          </p>

          <h4>OUR COMPANY</h4>
          <p className="mb-3">
            Hyperama plc, which includes Tiger Tiger, is a privately-owned
            family Business and are one of the leading importers and suppliers
            of Ethnic food in the UK.
          </p>

          <p className="mb-3">
            Hyperama plc is a growing business and a dynamic place to work. We
            employ circa 80 employees across the group, and our success is
            reliant on our staff feeling engaged, motivated and valued. We share
            a common goal of providing customer satisfaction as the group
            continues to expand and thrive in a variety of competitive markets.
          </p>

          <h4>SUPPLY CHAIN</h4>
          <p className="mb-3">
            We are committed to building long standing relationships with our
            suppliers and make clear our expectations and business conduct. We
            expect all our suppliers to have suitable anti-slavery and human
            trafficking policies and processes, and to operate effective means
            of disclosure within their own organisation.
          </p>

          <h4>STANDARDS IN OUR BUSINESS</h4>
          <p className="mb-3">
            The standards which we set in our business consist of the following:
          </p>
          <p>
            Comply with all local laws in regards to working hours and time
            periods
          </p>
          <p>
            Ensure that workers pay complies with local laws, for instance
            minimum wage standards
          </p>
          <p>
            Ensure all workers are treated with respect and dignity and exclude
            all forms of harassment, intimidation, abuse and violence No forced,
            involuntary labour, slavery or human trafficking
          </p>
          <p>
            No discrimination against workforce on any basis or on personal
            characteristics (racial, colour, race and religion)
          </p>
          <p>
            Creating a fair and equal workplace by providing equal opportunities
            and diverse workforce
          </p>
          <p>
            Ensure a safe and hygienic place of work for employees and operate a
            safe system of work to comply with all local health and safety
            legislations
          </p>

          <h4>EMPLOYMENT</h4>
          <p className="mb-3">
            We hold a robust recruitment procedure in line with UK legislation,
            including right to work document checks, contracts of employment and
            ensuring that personal information provided is genuine and is held
            securely and confidentially
          </p>

          <h4>POLICIES/PROCEDURES</h4>
          <p>
            We have various policies and procedures in place to commit tackling
            slavery and human trafficking such as:
          </p>
          <p>
            Equal opportunities policy- committed to ensuring that our
            workplaces are free from unlawful or unfair discrimination because
            of protected characteristics as defined by the Equality Act 2010
          </p>

          <p>
            Bullying & Harassment Policy- Committed to ensuring that our
            employees have a working environment which respects their personal
            dignity Equal Pay Policy- committed to the principle of equal pay
            for men and women
          </p>

          <h4>ENDORSEMENT OF THIS STATEMENT</h4>
          <p>
            This statement is approved on behalf of the Board of Directors of
            Hyperama Plc on 16th August 2023
          </p>
        </div>
      </section>
    </>
  );
}
