import { FC, useState } from "react";

import { format } from "date-fns";

import * as Styles from "./styles";
import { Order } from "../../../../types/orders.types";
import { useTranslations } from "../../../../hooks/useTranslations";
import ProductMiniCard from "../../../common/product-mini-card/product-mini-card.component";

interface ISingleOrderProps {
  order: Order;
}

const SingleOrder: FC<ISingleOrderProps> = ({ order }) => {
  const { t } = useTranslations();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <Styles.SingleOrderWrapper>
      <Styles.Title>
        {t["profile_page.single-order.title"]}№ {order.orderNumber}
      </Styles.Title>
      <Styles.MiniOrder>
        <Styles.Text>
          {t["cart_page.totalAmount"]} <span>{order.totalItemsAmount}</span>
        </Styles.Text>
        <Styles.Text>
          {t["cart_page.totalPrice"]}{" "}
          <span>
            {order.totalPrice} {t["product_page.currency"]}
          </span>
        </Styles.Text>
        <Styles.Text>
          {t["profile_page.single-order.status"]}{" "}
          <span>
            {order.status === 1
              ? t["profile_page.single-order.inwork"]
              : t["profile_page.single-order.delivered"]}
          </span>
        </Styles.Text>
      </Styles.MiniOrder>
      <Styles.Button onClick={() => setIsOpened(!isOpened)}>
        {t["profile_page.single-order.button"]} {isOpened ? "🔼" : "🔽"}
      </Styles.Button>
      {isOpened ? (
        <Styles.FullOrder>
          <Styles.Date>
            {t["profile_page.single-order.date"]}{" "}
            <span>{format(order.date as Date, "yyyy-MM-dd")}</span>
            {typeof order.date === "object"
              ? format(order.date, "yyyy-MM-dd")
              : null}
          </Styles.Date>
          {order.items.map((item, index) => {
            return (
              <>
                <Styles.ProductMiniCard
                  key={JSON.stringify(
                    item.item._id + JSON.stringify(item.configuration)
                  )}
                >
                  <ProductMiniCard cartItem={item} />
                  <Styles.Amount>
                    {t["product_page.buttons.amount"]}:
                    <span>
                      {" "}
                      {item.amount} {t["general_amount"]}
                    </span>
                  </Styles.Amount>
                </Styles.ProductMiniCard>
                {index !== order.items.length - 1 && <hr />}
                <br />
              </>
            );
          })}
        </Styles.FullOrder>
      ) : null}
    </Styles.SingleOrderWrapper>
  );
};

export default SingleOrder;
