import { ShoppingCartOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { FC } from "react";

const Menus = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },

    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  return <Dropdown menu={{ items }}>Семьи</Dropdown>;
};

const HeaderShop: FC = () => {
  const headersTitle = [
    {
      key: 1,
      label: "Дома",
    },
    {
      key: 2,
      label: "Автомобиля",
    },
    {
      key: 3,
      label: "Семьи",
    },
    {
      key: 4,
      label: "Квартиры",
      children: [
        {
          label: "Коробки",
        },
        {
          label: "Мебель",
        },
      ],
    },
    {
      key: 5,
      icon: <ShoppingCartOutlined />,
      label: "Корзина",
      style: { marginLeft: "auto" },
    },
  ];
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ flex: 1, minWidth: 0 }}
        items={headersTitle}
      />
    </Header>
  );
};

export default HeaderShop;
