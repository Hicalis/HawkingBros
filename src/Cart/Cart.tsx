import { Button, Flex, Spin, Table, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import Column from "antd/es/table/Column";
import { FC, useEffect, useState } from "react";
import {
  adminCreate,
  deleteProduct,
  deleteProducts,
  getBaskedSummary,
  getHeader,
  getProducts,
  quantityDec,
  quantityInc,
} from "../Api/api";
import { ElementProduct, Product } from "../Types/types";

const Cart: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [products, setProducts] = useState<ElementProduct[]>([]);
  const [baskedSummary, setBaskedSummary] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    setIsLoading(true);
    let usedGuid = "";
    getHeader().then((res) => (usedGuid = res.UsedGuid));
    getProducts().then((res: Product[]) => {
      const product = res.map((el): ElementProduct => {
        return {
          key: el.Id,
          usedGuid: usedGuid,
          id: el.Id,
          name: el.Name,
          quantity: el.Quantity,
          price: el.Price,
          image: el.Images,
        };
      });
      setProducts(product);
      getBaskedSummary().then((res) => {
        setBaskedSummary(res.Total);
      });
    });
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    adminCreate();
    handleUpdate();
  }, []);

  return (
    <Content style={{ padding: "32px 48px" }}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        {!products ? null : isLoading ? (
          <Spin />
        ) : (
          <Flex vertical={true} gap="middle">
            <Table dataSource={products} pagination={false} loading={isLoading}>
              <Column title="Название" dataIndex="name" key="name" />
              <Column title="Количество" dataIndex="quantity" key="quantity" />
              <Column title="Стоимость" dataIndex="price" key="price" />
              <Column
                title="Изображение"
                dataIndex="images"
                key="images"
                render={(_, { image }: any) => (
                  <Flex gap="small">
                    {image.map((el: any, index: number) => {
                      return (
                        <img
                          alt="img"
                          src={`data:imagestub/png;base64,${el.Image}`}
                          style={{ width: "50px" }}
                          key={index}
                        />
                      );
                    })}
                  </Flex>
                )}
              />
              <Column
                title="Добавить/уменьшить"
                dataIndex="add"
                key="add"
                render={(_, els: ElementProduct) => (
                  <Flex gap="small">
                    <Button
                      onClick={async () => {
                        await quantityInc({
                          UserGuid: els.usedGuid,
                          ProductId: els.id,
                        });
                        handleUpdate();
                      }}
                    >
                      +
                    </Button>
                    <Button
                      onClick={async () => {
                        await quantityDec({
                          UserGuid: els.usedGuid,
                          ProductId: els.id,
                        });
                        handleUpdate();
                      }}
                      danger
                    >
                      -
                    </Button>
                  </Flex>
                )}
              />
              <Column
                title="Удалить"
                dataIndex="delete"
                key="delete"
                render={(_, els: ElementProduct) => (
                  <Button
                    type="primary"
                    danger
                    onClick={async () => {
                      await deleteProduct({
                        UserGuid: els.usedGuid,
                        ProductId: els.id,
                      });
                      handleUpdate();
                    }}
                  >
                    Удалить
                  </Button>
                )}
              />
            </Table>
            <Flex gap="small" justify="space-between" align="center">
              <h2>Итоговая сумма: {baskedSummary}</h2>
              <Flex gap="small" justify="space-between">
                <Button type="primary">Оформить заказ</Button>
                <Button
                  type="primary"
                  danger
                  onClick={async () => {
                    await deleteProducts();
                    handleUpdate();
                  }}
                >
                  Очистить корзину
                </Button>
              </Flex>
            </Flex>
          </Flex>
        )}
      </div>
    </Content>
  );
};

export default Cart;
