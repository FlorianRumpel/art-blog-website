"use client";

import {useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import CustomLink from "./CustomLink";

function Layout() {
  const location = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className={location === "/" ? "nav-wrapper" : ""}>
        <nav style={location !== "/" ? {boxShadow: "0 -10px 40px black"} : {}}>
          <div className="logo-text">
            <Image
              width={55}
              height={90}
              className="logo-img"
              src={Logo}
              alt="logo"
            />
            <Link
              className={`nav-link ${location === "/persoenlich" && "active"}`}
              href="/persoenlich"
            >
              <h1>
                EMELIE <br /> CHRISTINA <br /> TRENKLER
              </h1>
            </Link>
          </div>

          <div className="big-nav">
            <Link
              className={`nav-link ${
                location.includes("projekte") && "active"
              }`}
              href={`${process.env.BASE_URL}/projekte`}
            >
              PROJEKTE
            </Link>
            <Link
              style={{marginLeft: "0.5rem"}}
              className={`nav-link ${location === "/" && "active"}`}
              href="/"
            >
              HOME
            </Link>
            <div
              className={
                !location.includes("/projekte") ? "nav-hidden" : undefined
              }
            >
              <div className="first-three-nav-links">
                <CustomLink to="grafikdesign" />
                <CustomLink to="urbandesign" />
                <CustomLink to="materialdesign" />
              </div>
              <div className="second-three-nav-links">
                <CustomLink to="kunst" />
                <CustomLink to="fotografie" />
                <CustomLink to="produktdesign" />
              </div>
            </div>
          </div>

          <button
            type="button"
            title="toggle navigation"
            className={navOpen ? "disable-scroll toggle-nav" : "toggle-nav"}
            onClick={() => setNavOpen((prev) => !prev)}
            aria-expanded={navOpen}
          >
            <svg
              fill="var(--button-color)"
              className="hamburger"
              viewBox="0 0 100 100"
              width={250}
            >
              <rect
                className="line top"
                width={70}
                height={10}
                x={15}
                y={25}
                rx={5}
              />

              <rect
                className="line middle"
                width={70}
                height={10}
                x={15}
                y={45}
                rx={5}
              />
              <rect
                className="line bottom"
                width={70}
                height={10}
                x={15}
                y={65}
                rx={5}
              />
            </svg>
          </button>

          <div style={{top: navOpen ? 0 : "100%"}} className="open-navigation">
            <div className="outer-nav">
              <div className="inner-nav">
                <div className="projects-nav">
                  <Link
                    href="/"
                    onClick={() => setNavOpen((prev) => !prev)}
                    className={`nav-link-bold ${location === "/" && "active"}`}
                  >
                    Home
                  </Link>
                  <Link
                    href={`${process.env.BASE_URL}/projekte`}
                    className={`nav-link-bold ${
                      location.includes("projekte") && "active"
                    }`}
                  >
                    Alle Projekte
                  </Link>

                  <ul
                    className={location.includes("/projekte") ? "visible" : ""}
                  >
                    <li>
                      <CustomLink to="grafikdesign" closeNav={setNavOpen} />
                    </li>
                    <li>
                      <CustomLink to="urbandesign" closeNav={setNavOpen} />
                    </li>
                    <li>
                      <CustomLink to="materialdesign" closeNav={setNavOpen} />
                    </li>
                    <li>
                      <CustomLink to="kunst" closeNav={setNavOpen} />
                    </li>
                    <li>
                      <CustomLink to="fotografie" closeNav={setNavOpen} />
                    </li>
                    <li>
                      <CustomLink to="produktdesign" closeNav={setNavOpen} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Layout;
