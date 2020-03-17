import { Avatar, List } from "antd";
import styled from "styled-components";

import foodIcon from "../../assets/food.svg";
import groceryIcon from "../../assets/groceries.svg";
import medicineIcon from "../../assets/medicine.svg";
import suppliesIcon from "../../assets/stationary.svg";

const categoryMap = {
  groceries: {
    label: "Groceries",
    icon: groceryIcon,
  },
  medicine: {
    label: "Medicine",
    icon: medicineIcon,
  },
  food: {
    label: "Food",
    icon: foodIcon,
  },
  supplies: {
    label: "Supplies",
    icon: suppliesIcon,
  },
  other: {
    label: "Other",
    icon: suppliesIcon,
  },
};

const ListItemMeta = styled(List.Item.Meta)``;

function Card({ data }) {
  return (
    <List.Item>
      <ListItemMeta
        avatar={<Avatar src={categoryMap[data.category]?.icon} size="large" />}
        title={data.title}
        description={data.description.slice(0, 100)}
      />
    </List.Item>
  );
}

export default Card;
