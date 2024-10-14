import React, { useEffect, useState, useRef } from "react";
import Hero from "./components/header/Hero";
import Navbar from "./components/navBar/Navbar";
import OurStory from "./components/ourStory/OurStory";
import TimeLine from "./components/timeLine/TimeLine";
import ImageGallery from "./components/gallery/ImageGallery";
import RouteMap from "./components/map/RouteMap";
import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";

const App = () => {
  const [loader, setLoader] = useState(true);

  const heroRef = useRef(null);
  const storiesRef = useRef(null);
  const timeLineRef = useRef(null);
  const galleryRef = useRef(null);
  const mapRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    ourStories: storiesRef,
    timeLine: timeLineRef,
    gallery: galleryRef,
    map: mapRef,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loader && <Loader />}
      <Navbar sectionRefs={sectionRefs} />
      <Hero heroRef={heroRef} />
      <OurStory storiesRef={storiesRef} />
      <TimeLine timeLineRef={timeLineRef} />
      <ImageGallery galleryRef={galleryRef} />
      <RouteMap mapRef={mapRef} />
      <Footer />
    </div>
  );
};

export default App;
