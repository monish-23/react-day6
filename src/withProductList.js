import React from 'react';

export const withProductList = (products) => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent
          productList={products}
          {...this.props}
        />
      );
    }
  }
}

export class ProductList extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withProductList;
