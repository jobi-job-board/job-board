'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavbarDark from 'src/components/NavbarDark';
import SmallFooter from 'src/components/SmallFooter';
import SpyGlass from '@/assets/icons/spyglass.svg';
import Image from 'next/image';

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [salary, setSalary] = useState(20000);
  const [search, setSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [filteredListings, setFilteredListings] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isFulltime, setIsFulltime] = useState(true);
  const [isHourly, setIsHourly] = useState(true);
  const [isPartTime, setIsPartTime] = useState(true);
  const [isFreelance, setIsFreelance] = useState(true);

  async function fetchListings() {
    const res = await fetch('/api/jobDescription');
    const info = await res.json();
    if (info.success) {
      setListings(info.listings);
      console.log(info);
    } else {
      console.log('error fetching');
    }
  }

  useEffect(() => {
    fetchListings();
  }, []);

  const handleReset = () => {
    setIsFulltime(true);
    setIsHourly(true);
    setIsPartTime(true);
    setIsFreelance(true);
    setHasSearched(false);
    setSalary(20000);
    setSearch('');
    setCitySearch('');
  };

  function handleSearchListing(e) {
    e.preventDefault();
    setFilteredListings(
      listings.filter((listing) => {
        return listing.salary >= parseInt(salary);
      })
    );
    if (search.length > 0) {
      setFilteredListings(
        filteredListings.filter((listing) => {
          return listing.title.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
    if (citySearch.length > 0) {
      setFilteredListings(
        filteredListings.filter((listing) => {
          return listing.city.toLowerCase().includes(citySearch.toLowerCase());
        })
      );
    }

    if (!isFulltime) {
      setFilteredListings((prev) =>
        prev.filter((listing) => listing.type.toLowerCase() !== 'fulltime')
      );
    }

    if (!isHourly) {
      setFilteredListings((prev) =>
        prev.filter((listing) => listing.type.toLowerCase() !== 'hourly')
      );
    }

    if (!isPartTime) {
      setFilteredListings((prev) =>
        prev.filter((listing) => listing.type.toLowerCase() !== 'part-time')
      );
    }

    if (!isFreelance) {
      setFilteredListings((prev) =>
        prev.filter((listing) => listing.type.toLowerCase() !== 'freelance')
      );
    }

    setHasSearched(true);
  }

  const numberConverter = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(num);
  };

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
        <div className="flex-col">
          <h6 className="filter">Filter By</h6>
          <aside className="listings-sidebar">
            <form
              onSubmit={handleSearchListing}
              className="listings-sidebar-form"
            >
              <input
                className="listings-input"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></input>{' '}
              <span className="search-icon">
                <Image src={SpyGlass} alt="search icon"></Image>
              </span>
              <div>
                <h6>Job Type</h6>
                <div className="checkbox-container">
                  <label htmlFor="full-time">Fulltime</label>
                  <input
                    className="listings-checkbox"
                    id="full-time"
                    type="checkbox"
                    checked={isFulltime}
                    // defaultChecked={isFulltime}
                    value={isFulltime}
                    onChange={() => setIsFulltime(!isFulltime)}
                  ></input>
                </div>

                <div className="checkbox-container">
                  <label htmlFor="hourly">Hourly-contract</label>
                  <input
                    className="listings-checkbox"
                    id="hourly"
                    type="checkbox"
                    checked={isHourly}
                    // defaultChecked={isHourly}
                    value={isHourly}
                    onChange={() => setIsHourly(!isHourly)}
                  ></input>{' '}
                </div>

                <div className="checkbox-container">
                  <label htmlFor="part-time">Part-time</label>
                  <input
                    className="listings-checkbox"
                    id="part-time"
                    type="checkbox"
                    checked={isPartTime}
                    // defaultChecked={isPartTime}
                    value={isPartTime}
                    onChange={() => setIsPartTime(!isPartTime)}
                  ></input>{' '}
                </div>

                <div className="checkbox-container">
                  <label htmlFor="freelance">Freelance</label>
                  <input
                    className="listings-checkbox"
                    id="freelance"
                    type="checkbox"
                    // defaultChecked={isFreelance}
                    checked={isFreelance}
                    value={isFreelance}
                    onChange={() => setIsFreelance(!isFreelance)}
                  ></input>{' '}
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
                <h6>City</h6>
              </label>
              <input
                id="location-search"
                className="listings-input"
                placeholder="Toronto"
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
              ></input>{' '}
              <span className="search-city-icon">
                <Image src={SpyGlass} alt="search icon"></Image>
              </span>
              <div className="center">
                <button type="submit" className="filter-btn">
                  Filter
                </button>
                <button onClick={handleReset} className="filter-btn">
                  Reset
                </button>
              </div>
            </form>
          </aside>
        </div>
        <div className="listings-flex">
          {!hasSearched &&
            listings.map((listing) => {
              return (
                <div className="listing-div" key={listing.id}>
                  <h5 className="listings-title">
                    <Link
                      className="listing-title"
                      href={`/listings/${listing.id}`}
                    >
                      {listing.title}{' '}
                    </Link>
                    <span className="listing-type">({listing.type})</span>
                  </h5>
                  <p className="listing-details">
                    {numberConverter(listing.salary)}
                    {'  '} {listing.city} {listing.country}
                  </p>
                </div>
              );
            })}
          {hasSearched &&
            filteredListings.map((listing) => {
              return (
                <div className="listing-div" key={listing.id}>
                  <h5 className="listings-title">
                    <Link
                      className="listing-title"
                      href={`/listings/${listing.id}`}
                    >
                      {listing.title}{' '}
                    </Link>
                    <span className="listing-type">({listing.type})</span>
                  </h5>
                  <p className="listing-details">
                    {numberConverter(listing.salary)}
                    {'  '} {listing.city} {listing.country}
                  </p>
                </div>
              );
            })}
          {hasSearched && filteredListings.length === 0 && (
            <h5>No listings found</h5>
          )}
        </div>
      </div>
      <SmallFooter />
    </>
  );
}
