import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import shopData from "./shop.data";

const ShopPage = () => {
  const [collections] = useState(shopData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
