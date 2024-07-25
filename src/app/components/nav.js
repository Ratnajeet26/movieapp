"use client";
import Link from "next/link";
import Slider from "./Slider";

export default function Navbar() {
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light  style={{marginTop:0}} ">
        <div className="container-fluid ">
          <Link href="/" className="navbar-brand">
            Movies App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/api/allmovies" className="nav-link active">
                  All Movies
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-link active">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Slider />
    </>
  );
}
