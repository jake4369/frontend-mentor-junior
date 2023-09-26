import Image from "next/image";

import { productInfoList } from "@/constants/index";

const ProductInfo = () => {
  return (
    <div className="product-info">
      <h1>Stay updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      {/* LIST */}
      <ul className="product-info__list">
        {productInfoList.map((item) => (
          <li key={item} className="product-info__list-item">
            <Image
              src="/icon-list.svg"
              alt=""
              width={21}
              height={21}
              className="icon__list"
            />{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfo;
