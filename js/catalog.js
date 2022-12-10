// A function to add a product to the website
function addProduct(name, price, description, imageURL) {
    // Create a new object to represent the product
    const product = {
      name: name,
      price: price,
      description: description,
      imageURL: imageURL
    }
  
    // Add the product to the website's product catalog
    productCatalog.push(product);
  }
  
  // Create a product catalog to store the products
  const productCatalog = [];
  
  // Add some products to the catalog
  addProduct("T-Shirt", 19.99, "A comfortable cotton t-shirt", "/images/eucalyptus-1.jpg");
  addProduct("Baseball Hat", 14.99, "A stylish baseball hat", "baseballhat.jpg");
  addProduct("Sweater", 24.99, "A warm and cozy sweater", "sweater.jpg");
  
addProduct();

import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';
import itemPhoto from '../../../assets/matcha-tea.png';

export default createBoard({
    name: 'Matcha Tea ',
    Board: () => (
        <ProductItem
            itemName="Matche Tea"
            itemPhotoURL={itemPhoto}
            itemPrice={9.99}
            itemDescription="240 calories, 32g sugar, 7g fat."
        />
    ),
    environmentProps: {
        windowWidth: 600,
        windowHeight: 800,
    },
});
