import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = () => (
  <div className="collection-page">
    <h2>COLLECTION PAGE</h2>
  </div>
);

const mapStatetoProps = (state,ownProps) =>({
    collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStatetoProps)(CollectionPage);
