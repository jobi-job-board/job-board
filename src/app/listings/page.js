"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarDark from "src/components/NavbarDark";
import SmallFooter from "src/components/SmallFooter";
import SpyGlass from "@/assets/icons/spyglass.svg";
import Image from "next/image";

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [salary, setSalary] = useState(20000);

  async function fetchListings() {
    const res = await fetch("/api/jobDescription");
    const info = await res.json();
    if (info.success) {
      setListings(info.listings);
      console.log(info);
    } else {
      console.log("error fetching");
    }
  }

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <>
      <NavbarDark />
      <div className="listings-header">
        <h3 className="text-white listings-h3">Job Listings</h3>
        <p className="text-white listings-p">
          Jobi: Connecting Dreams to Careers – Where Your Future Finds You!
        </p>
      </div>

      <div className="listings-wrapper">
        <aside className="listings-sidebar">
          <form className="listings-sidebar-form">
            <input className="listings-input" placeholder="search"></input>{" "}
            <span className="search-icon">
              <Image src={SpyGlass}></Image>
            </span>
            <div>
              <h6>Job Type</h6>
              <div className="checkbox-container">
                <label htmlFor="full-time">Fulltime</label>
                <input
                  className="listings-checkbox"
                  id="full-time"
                  type="checkbox"
                ></input>
              </div>

              <div className="checkbox-container">
                <label htmlFor="hourly">Hourly-contract</label>
                <input
                  className="listings-checkbox"
                  id="hourly"
                  type="checkbox"
                ></input>{" "}
              </div>

              <div className="checkbox-container">
                <label htmlFor="part-time">Part-time</label>
                <input
                  className="listings-checkbox"
                  id="part-time"
                  type="checkbox"
                ></input>{" "}
              </div>

              <div className="checkbox-container">
                <label htmlFor="fixed-price">Fixed-price</label>
                <input
                  className="listings-checkbox"
                  id="fixed-price"
                  type="checkbox"
                ></input>{" "}
              </div>
            </div>
            <div className="listings-sidebar-element">
              <label htmlFor="slider">
                <h6>Desired Salary</h6>
              </label>
              <p className="listings-slider-value">${salary}</p>
              <input
                type="range"
                id="slider"
                min="0"
                max="150000"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              ></input>
            </div>
            <label htmlFor="location-search">
              <h6>Location</h6>
            </label>
            <input
              id="location-search"
              className="listings-input"
              placeholder="Toronto"
            ></input>{" "}
            <span className="search-icon">
              <Image src={SpyGlass}></Image>
            </span>
          </form>
        </aside>
        <div className="listings-flex">
          {listings.map((listing) => {
            return (
              <div className="listing-div" key={listing.id}>
                <Link href={`/listings/${listing.id}`}>
                  <h5 className="listings-title">
                    {listing.title} <span>{listing.type}</span>
                  </h5>
                </Link>
                <p className="listings-details">
                  {listing.salary} {listing.city} {listing.country}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <SmallFooter />
    </>
  );
}
