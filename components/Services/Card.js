import { Avatar, List } from "antd";
import styled from "styled-components";
import {
  TagOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

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

const statusMap = {
  pending: {
    label: "Pending",
    icon: ClockCircleOutlined,
  },
  completed: {
    label: "Completed",
    icon: CheckCircleOutlined,
  },
};

const IconContainer = styled.span`
  margin-right: 0.5rem;
`;

function TagBadge({ icon: Icon, children }) {
  return (
    <p>
      <IconContainer>
        <Icon />
      </IconContainer>
      {children}
    </p>
  );
}

const ListItem = styled(List.Item)`
  padding: 3rem 0;
`;

const ListItemMeta = styled(List.Item.Meta)``;

function Card({ data }) {
  return (
    <ListItem>
      <ListItemMeta
        avatar={<Avatar src={categoryMap[data.category]?.icon} size="large" />}
        title={data.title}
        description={data.description}
      />
      <div>
        <TagBadge icon={TagOutlined}>
          {categoryMap[data.category]?.label}
        </TagBadge>
        <TagBadge icon={statusMap[data.status]?.icon}>
          {statusMap[data.status]?.label}
        </TagBadge>
      </div>
    </ListItem>
  );
}

export default Card;
