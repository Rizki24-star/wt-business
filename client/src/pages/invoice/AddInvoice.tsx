import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { PlusIcon } from "@heroicons/react/20/solid";
import SelectedProductCard from "../../components/selectedProductCard/selectedProductCard";
import ProductSearchPanel from "../../components/productSearchPanel/ProductSearchPanel";

const invoiceFormData = [
  {
    label: "Date",
    type: "datetime-local",
    value: "",
    onChange: () => {},
  },
  {
    label: "Customer Name",
    type: "text",
    value: "",
    onChange: () => {},
  },
  {
    label: "Salesperson Name",
    type: "text",
    value: "",
    onChange: () => {},
  },
];

const AddInvoicePage = () => {
  return (
    <div className="add-invoice">
      <div className="flex items-center justify-between ">
        <h1 className="title">Add Invoice</h1>
      </div>
      <div className="mt-4">
        <form action="" className="flex flex-col justify-between gap-4 ">
          <div className="flex items-center justify-between w-full  gap-4">
            {invoiceFormData.map(({ label, type, value, onChange }) => (
              <Input
                label={label}
                type={type as "text" | "datetime-local" | "number"}
                value={value}
                onChange={onChange}
              />
            ))}
          </div>
          <div>
            <Input label="Notes" type="text" value="" onChange={() => {}} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h4>Select Products</h4>
              <a className="text-blue-500 font-bold text-lg cursor-pointer">
                Add product
              </a>
            </div>

            <div className="flex flex-wrap max-h-32 py-2  gap-4 overflow-auto">
              <SelectedProductCard />
            </div>
          </div>
          <div className="flex justify-end">
            <Button text="Add Invoice" Icon={PlusIcon} onClick={() => {}} />
          </div>
        </form>
      </div>
      <ProductSearchPanel />
    </div>
  );
};

export default AddInvoicePage;
