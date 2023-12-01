"use client";
import { useEffect, useState } from "react";

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
  return <h1>testing {details.title}</h1>;
}
