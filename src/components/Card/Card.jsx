import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import { Link } from "react-router-dom";

// export default function Card({product}) {
//   return (
//     <Link to={`/products/${product.slug}` ?? ''} className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116] hover:ring-opacity-40 active:ring-5 active:ring-[#6247eb] hover:ring-4 active:ring-2 active:ring-opacity-90" >
//     <div className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116]" >
//           <img src={product.imageUrl ?? ''} alt={product.name ?? 'No name'} className="block max-h-[300px] mb-4 object-cover" />
//             <div className="flex flex-col gap-2">
//                 <h4 className="font-medium text-[20px] text-white">{product.name ?? 'No Name'}</h4>
//                 <span className="block font-medium text-[14px] text-[#eaeaea]">{product.category ?? 'Uncatagorized'}</span>
//                 <span className="block font-medium text-[20px] text-white">{formatToIDRCurrency(product.price) ?? 'Not for sale'}</span>
//                 <div>
//                 {product.stock <= 0 ? (
//                     <p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
//                   ) : (product.stock <= 25 && product.stock !== 0) ? (
//                     <>
//                        <p className="text-xl font-semibold text-center text-yellow-500">Almost Sold Out</p>
//                         <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
//                           <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
//                           <span>Add to cart</span>
//                         </Button>
//                     </>

//                   ) : (
//                     <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
//                       <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
//                       <span>Add to cart</span>
//                     </Button>
//                   )}
//                 </div>
//             </div>
//           </div>
//           </Link>
//   )
// }

export default function Card({ product }) {
  return (
    <Link to={`/products/${product.slug}` ?? ""} className="flex flex-col max-w-[400px] p-5 bg-[#1A1A2E] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:ring-2 hover:ring-[#6247eb]">
      <div className="relative w-full h-[250px] overflow-hidden rounded-lg mb-4">
        <img src={product.imageUrl ?? ""} alt={product.name ?? "No name"} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        {product.stock <= 0 && <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-full">Out of Stock</span>}
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <h4 className="text-xl font-semibold text-white mb-2">{product.name ?? "No Name"}</h4>
        <p className="text-sm text-gray-400 mb-4">{product.category ?? "Uncategorized"}</p>
        <p className="text-lg font-medium text-[#eaeaea] mb-4">{formatToIDRCurrency(product.price) ?? "Not for sale"}</p>
        <div className="mt-auto">
          {product.stock <= 0 ? (
            <Button type="button" className="w-full py-3 bg-red-500  text-white rounded-lg hover:bg-[#6b7280] active: bg-[#6b7280] flex items-center justify-center gap-2">
              Not Avaible
              {/* <p className="text-center text-red-500 font-semibold">None</p> */}
            </Button>
          ) : product.stock <= 5 ? (
            <>
              <p className="text-center text-yellow-500 font-medium mb-2">Almost Sold Out</p>
              <Button type="button" className="w-full py-3 bg-[#6173E6] text-white rounded-lg hover:bg-[#5969cf] active:bg-[#4956ab] flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>Add to cart</span>
              </Button>
            </>
          ) : (
            <Button type="button" className="w-full py-3 bg-[#6173E6] text-white rounded-lg hover:bg-[#5969cf] active:bg-[#4956ab] flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>Add to cart</span>
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.object,
};
