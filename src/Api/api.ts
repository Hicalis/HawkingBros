export const getProducts = () => {
  return fetch("http://localhost:8080/api/ShoppingCart/products").then(
    (res) => {
      if (res.status === 204) {
        return [];
      } else return res.json();
    }
  );
};

export const adminCreate = async () => {
  await fetch("http://localhost:8080/api/Admin/create?value=5", {
    method: "POST",
  });
};

export const getHeader = () => {
  return fetch("http://localhost:8080/api/ShoppingCart/header").then((res) =>
    res.json()
  );
};

export const getBaskedSummary = () => {
  return fetch("http://localhost:8080/api/ShoppingCart/baskedsummary").then(
    (res) => res.json()
  );
};

export const quantityInc = async (obj: {
  UserGuid: string;
  ProductId: number;
}) => {
  await fetch("http://localhost:8080/api/ShoppingCart/quantityinc", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
};

export const quantityDec = async (obj: {
  UserGuid: string;
  ProductId: number;
}) => {
  await fetch("http://localhost:8080/api/ShoppingCart/quantitydec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
};

export const deleteProducts = async () => {
  await fetch("http://localhost:8080/api/ShoppingCart/products", {
    method: "DELETE",
  });
};

export const deleteProduct = async (obj: {
  UserGuid: string;
  ProductId: number;
}) => {
  await fetch("http://localhost:8080/api/ShoppingCart/product", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
};
