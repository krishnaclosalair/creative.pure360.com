import Link from "next/link";
import { useState, useEffect } from "react";
import { slide as Nav } from "react-burger-menu";

const navStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "40px",
    height: "40px",
    right: "2rem",
    top: "2rem",
  },
  bmBurgerBars: {
    background: "#ff00ff",
  },
  bmBurgerBarsHover: {
    background: "#000",
  },
  bmCrossButton: {
    height: "40px",
    width: "40px",
    top: "2rem",
    right: "2rem",
  },
  bmCross: {
    background: "#000",
    width: "8px",
    height: "40px",
    left: "-10px",
    top: "-6px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#FFF",
    padding: "1em",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};

const Header = () => {
  const [logoVisibility, setLogoVisibility] = useState(true);
  const [width, setWidth] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const checkScrollHeight = () => {
    if (window.scrollY > 50) {
      setLogoVisibility(false);
    } else {
      setLogoVisibility(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", checkScrollHeight);
    }
    return () => window.removeEventListener("scroll", checkScrollHeight);
  }, []);

  const checkWidth = () => {
    if (window.innerWidth > 768) {
      setWidth("50%");
    } else {
      setWidth("100%");
    }
  };

  useEffect(() => {
    checkWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkWidth);
    }
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <>
      <header className="h-36">
        <nav>
          <div
            className={`fixed top-8 left-8 z-50 transition-all duration-300 ${
              logoVisibility ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href={`/`} scroll={false}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 700 700"
                  fill="#ff00ff"
                  width="50"
                >
                  <path
                    d="M327.4,699c-0.1-0.1-4.1-0.5-8.8-0.9c-8.7-0.7-10.5-0.9-22.5-2.7c-11.6-1.8-12.3-1.9-19.2-3.5
				c-18.4-4.2-24.9-5.9-37.3-10.1c-45.4-15.1-86.8-39-122.5-70.7c-35.8-31.8-67.4-74.6-85.7-115.9c-2.7-6.2-5.3-12.1-5.8-13.2
				c-4.6-9.5-15-42.7-17.6-56c-0.2-1.1-1-5.4-1.9-9.5c-2.9-14.7-3.6-20-5.2-37c-1.5-16.5-0.8-59.2,1.2-71.1c0.2-1.3,0.6-4.6,0.9-7.4
				c0.9-7.8,2.3-15.6,5.1-28.5c2.3-10.7,8.8-33.3,11.4-39.5c0.5-1.1,2.5-6.5,4.6-12c5-13.2,18.1-39.8,25-50.8c3-4.9,5.5-9,5.5-9.3
				c0-0.3,0.4-1,1-1.7c0.5-0.7,4.6-6.4,9.1-12.6c18.8-26.7,41-50.1,67.9-71.6c9.2-7.4,37-26.5,38.6-26.5c0.4,0,1.5-0.6,2.3-1.4
				c2.9-2.5,30.4-16.1,43.1-21.3c26.9-11,57.7-19.4,83.5-22.8c2.2-0.2,5.6-0.7,7.5-1c18.6-2.6,69.8-2.7,83.8,0
				c1.6,0.3,10.4,1.5,14.7,2c24.8,3.2,67.6,16.7,95.3,30.2c10.3,5,27.8,14.5,30.6,16.6c0.6,0.4,6.1,4,12.1,8
				c25.3,16.8,49.2,37.6,67.8,59.2c3.3,3.9,6.3,7.2,6.7,7.5c1.7,1.3,18.1,23.6,24.5,33.5c21.9,33.6,40.6,77.9,48.1,114
				c6.1,29.5,7.9,46.4,7.9,76c0,22.4-1,38.3-3,50c-0.2,1.7-0.7,4.8-1,7c-2.9,20-10.9,48.7-20.2,72.5
				c-20.4,52.2-57.2,103.2-99.8,138.5c-3.3,2.8-6.2,5.3-6.5,5.6c-0.4,0.5-13.8,10.2-27,19.6c-11,7.9-42.3,24.3-60,31.6
				c-22.5,9.2-53.4,17.8-76.5,21.3c-2.7,0.4-5.7,0.9-6.5,1c-0.8,0.2-4.2,0.6-7.6,0.9c-3.3,0.4-7.4,0.9-9,1.1
				C378.8,698.6,328,699.5,327.4,699z M369.6,506.1c9.8-1.5,12.1-1.9,19-3.7c12.8-3.4,19.1-5.8,31.5-12c24.7-12.2,44.9-30,60.6-53.3
				c13.7-20.3,22.8-44.9,25.6-69.2c0.8-7.4,0.9-29.1,0-36.4c-1.9-16.8-6.8-33.9-14.4-50c-4.3-8.9-13.2-23.7-16.4-27
				c-0.8-0.8-2.6-3.1-4-5c-3.6-4.8-14.3-15.5-20.9-21.1c-23.5-19.5-52.4-32-82.5-35.6c-12.7-1.5-35.9-0.7-48,1.6
				c-60.3,11.9-107.9,56.6-123.4,116.1c-1,4.1-2.2,9.5-2.6,12c-0.4,2.5-0.9,5.9-1.2,7.5c-1.1,6.3-0.9,31.1,0.3,40
				c7.3,52.8,38.9,97,85.9,120.4c17.4,8.7,35.5,14.1,52.1,15.7c3.8,0.4,7,0.8,7.2,0.9C338.9,507.4,365.8,506.6,369.6,506.1z"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <Nav
            right
            width={width}
            styles={navStyles}
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
          >
            <Link href={`/products`} scroll={false}>
              <a
                className="block font-avant-garde-bold text-black text-5xl mb-6 hover:text-floss-pink transition duration-250"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
            </Link>
            <Link href={`/`} scroll={false}>
              <a
                className="block font-avant-garde-bold text-black text-5xl mb-6 hover:text-floss-pink transition duration-250"
                onClick={() => setIsOpen(false)}
              >
                Tools
              </a>
            </Link>
            <Link href={`/`} scroll={false}>
              <a
                className="block font-avant-garde-bold text-black text-5xl mb-6 hover:text-floss-pink transition duration-250"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
            </Link>
            <Link href={`/`} scroll={false}>
              <a
                className="block font-avant-garde-bold text-floss-pink text-5xl mb-6"
                onClick={() => setIsOpen(false)}
              >
                New
              </a>
            </Link>
          </Nav>
        </nav>
      </header>
    </>
  );
};

export default Header;
