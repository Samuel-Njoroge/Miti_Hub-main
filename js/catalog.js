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
  addProduct("T-Shirt", 19.99, "A comfortable cotton t-shirt", "tshirt.jpg");
  addProduct("Baseball Hat", 14.99, "A stylish baseball hat", "baseballhat.jpg");
  addProduct("Sweater", 24.99, "A warm and cozy sweater", "sweater.jpg");
  