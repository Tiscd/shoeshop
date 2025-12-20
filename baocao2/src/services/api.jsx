const mockProducts = [
  {
    id: 1,
    name: 'Giày Nike Air Force 1 07 LX Lucky Charms',
    price: 3850000,
    image: '/assets/product-images/nike-air-force-1-lucky-charms.jpg',
    description: 'Phiên bản đặc biệt với charm may mắn, fullbox new 100%.',
    brand: 'nike'
  },
  // Thêm nhiều sản phẩm khác...
];

export const getProducts = async () => {
  return mockProducts;
};

export const getProductById = async (id) => {
  return mockProducts.find(p => p.id === parseInt(id));
};

export const getProductsByCategory = async (brand) => {
  if (brand === 'all') return mockProducts;
  return mockProducts.filter(p => p.brand === brand);
};