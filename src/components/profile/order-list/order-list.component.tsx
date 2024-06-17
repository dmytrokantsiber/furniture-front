import * as Styles from "./styles";
import Error from "../../common/error/error.component";
import Spinner from "../../common/spinner/spinner.component";
import SingleOrder from "./single-order/single-order.component";
import { useTranslations } from "../../../hooks/useTranslations";
import { useGetOrdersByUserQuery } from "../../../store/api/orders/orders.api";

const OrderList = () => {
  const { data, isError, isLoading } = useGetOrdersByUserQuery(null);
  const { t } = useTranslations();

  if (isLoading) {
    return <Spinner text="spinner.loading" width="180" height="180" />;
  }

  if (isError) {
    return <Error status={500} />;
  }

  if (data) {
    return (
      <Styles.OrderListWrapper>
        <Styles.Title>{t["profile_page.order-list.title"]}</Styles.Title>
        <Styles.List>
          {data.map((order, index) => {
            return (
              <div key={order._id}>
                <SingleOrder order={order} />
                {index !== data.length - 1 && (
                  <hr style={{ border: "3px solid black" }} />
                )}
              </div>
            );
          })}
        </Styles.List>
      </Styles.OrderListWrapper>
    );
  }

  return null;
};

export default OrderList;
