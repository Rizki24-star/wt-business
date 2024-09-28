import React from "react";
import Button from "../../components/button/Button";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const InvoicePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="invoice">
      <div className="flex items-center justify-between">
        <h1 className="title">Invoices</h1>
        <Button
          text="Add Invoice"
          Icon={PlusIcon}
          onClick={() => handleNavigate("create")}
        />
      </div>
    </div>
  );
};

export default InvoicePage;
