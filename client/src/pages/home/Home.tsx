import React from "react";
import "./home.scss";
import InvoiceCard from "../../components/InvoiceCard/InvoiceCard";

const HomePage = () => {
  return (
    <div className="home">
      <div className="flex items-center justify-between">
        <h1 className="title">Dashboard</h1>
      </div>
      <div>
        <InvoiceCard />
      </div>
    </div>
  );
};

export default HomePage;
