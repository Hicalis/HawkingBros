export type Product = {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Currency: string;
  Price: number;
  DiscountedPrice: number;
  Images: [
    {
      FileName: string;
      FileExtension: string;
      Image: string;
    }
  ];
};

export type ElementProduct = {
  id: number;
  image: [
    {
      FileName: string;
      FileExtension: string;
      Image: string;
    }
  ];
  key: number;
  name: string;
  price: number;
  quantity: number;
  usedGuid: string;
};
