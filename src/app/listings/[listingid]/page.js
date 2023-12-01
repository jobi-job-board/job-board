"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarDark from "src/components/NavbarDark";
import Dollar from "@/assets/icons/dollar-sign.svg";
import Location from "@/assets/icons/location.svg";
import Type from "@/assets/icons/briefcase.svg";
import SmallFooter from "src/components/SmallFooter";

export default function ListingDetail({ params }) {
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetchDetails();
  }, []);
  async function fetchDetails() {
    const res = await fetch(`/api/jobDescription/${params.listingid}`);
    const info = await res.json();
    if (info.success) {
      setDetails(info.listing);
    } else {
      console.log(info);
    }
  }

  const numberConverter = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <>
      <NavbarDark />
      <header className="details-header">
        <h3 className="text-white details-h3">{details.title}</h3>
      </header>
      <section className="details-wrapper">
        <div className="details-card-wrapper">
          <article className="details-card flex-cen">
            <Image src={Dollar} alt="dollar-sign"></Image>
            <p>Salary</p>
            <p className="details-card-p">
              {numberConverter(details.salary)}/year
            </p>
          </article>
          <article className="details-card flex-cen">
            <Image src={Location} alt="location"></Image>
            <p>Location</p>
            <p className="details-card-p">{details.city}</p>
          </article>
          <article className="details-card flex-cen">
            <Image src={Type} alt="type"></Image>
            <p>Job Type</p>
            <p className="details-card-p">{details.type}</p>
          </article>
        </div>
        <section className="details-job-description">
          <h4 className="details-subheading">Job Description</h4>
          <div dangerouslySetInnerHTML={{ __html: details.description }}></div>
        </section>
      </section>
      <SmallFooter />
    </>
  );
}
