const API_HOST = import.meta.env.VITE_API_HOST;

export const fetchCategories = async () => {
  const response = await fetch(`${API_HOST}/api/v1/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  const data = await response.json();
  return data.data;
};

export const fetchProperties = async () => {
  const response = await fetch(`${API_HOST}/api/v1/properties`);
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  const data = await response.json();
  console.log(data)
  return data.data;
};
