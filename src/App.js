import React from 'react';
import withProductList, { ProductList } from './withProductList';
import styled from 'styled-components';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399'
  },
  {
    id: 4,
    name: 'Product 4',
    price: 40,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399'
  },
  {
    id: 5,
    name: 'Product 5',
    price: 50,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/trending_products_to_sell_in_India_ad8fc9e0-5052-44bf-bd93-7bec4335f5ee.jpg?v=1647462399'
  },
];

const ProductListWithProducts = withProductList(products)(ProductList);

const ProductListContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const ProductListTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const ProductListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 16px;
    border-radius: 4px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>My App</h1>
        <ProductListContainer>
          <ProductListTitle>Product List</ProductListTitle>
          <ul>
            {products.map((product) => (
              <ProductListItem key={product.id}>
                <img src={product.imageUrl} alt={product.name} />
                <div>
                  <h2>{product.name}</h2>
                  <p>Price: {product.price}</p>
                </div>
              </ProductListItem>
            ))}
          </ul>
        </ProductListContainer>
      </div>
    );
  }
}

export default App;
