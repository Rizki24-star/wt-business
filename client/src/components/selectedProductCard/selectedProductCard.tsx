import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/store";

const SelectedProductCard = ({
  id,
  name,
  quantity,
}: {
  id: number;
  name: string;
  quantity: number;
}) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const product = products.find((product) => product.id === id);
  let totalPrice;
  !product ? (
    <div>Unknown Product</div>
  ) : (
    (totalPrice = product.price * quantity)
  );

  return (
    <div className="flex items-center gap-4 py-2 px-4 bg-white w-max shadow-md rounded-md">
      <img
        className="w-6"
        src="data:image/jpeg;base64,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"
        alt="product-image"
      />
      <div>
        <p className="font-bold">{name}</p>
        <span className="text-sm">Quantity : {quantity}</span>
      </div>
      <div className="mb-auto font-bold text-green-500">
        <h4 className="font-bold text-green-500">IDR {totalPrice}</h4>
      </div>
    </div>
  );
};

export default SelectedProductCard;
