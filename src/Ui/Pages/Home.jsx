import React from "react";
import data from "../Components/data.json";
import data2 from "../Components/datatwo.json";
import Bestseller from "../Components/Bestseller";
import Heroimgslider from "../Components/Heroimgslider";
import Arrivals from "../Components/Arrivals";
import Slider from "../Components/Slider";

export default function Home() {
  return (
    <div>
      <Heroimgslider />
      <Arrivals />
      <Slider data={data} />
      <Bestseller />
      <Slider data={data2} />
    </div>
  );
}
