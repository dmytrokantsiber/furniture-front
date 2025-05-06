import { FC, useState } from "react";

import * as Styles from "./styles";
import { useCart } from "../../../hooks/useCart";
import Button from "../../common/button/button.component";
import { useTranslations } from "../../../hooks/useTranslations";
import { ReactComponent as PaySVG } from "../../../assets/icons/payment.svg";
import { ReactComponent as ShipSVG } from "../../../assets/icons/shipping.svg";
import {
  IProductConfigurationItem,
  Product,
} from "../../../types/products.types";

interface IProductMainInfoProps {
  data: Product;
  price?: number;
  configuration?: Record<string, IProductConfigurationItem>;
}

const ProductMainInfo: FC<IProductMainInfoProps> = ({
  data,
  price,
  configuration,
}) => {
  const { lang, t } = useTranslations();
  const { handlePurchaseButtonClick } = useCart();
  const [amount, setAmount] = useState<number>(1);

  return (
    <Styles.ProductMainInfoWrapper>
      <Styles.ProductCard>
        <Styles.Name>{data.name.translations[lang].value}</Styles.Name>
        <Styles.Code>
          {t["product_page.product-code"]}: {data.productCode}
        </Styles.Code>
        <Styles.Price>
          💰 {price} {t["product_page.currency"]}
        </Styles.Price>
        <Styles.Purchase>
          <Button
            handleClick={() =>
              handlePurchaseButtonClick(data, price, configuration, amount)
            }
            type="purchase"
            styles={{ width: 140, height: 50 }}
          />
          <Styles.AmountLabel htmlFor="product-input">
            {t["product_page.buttons.amount"]}
          </Styles.AmountLabel>
          <Styles.AmountInput
            id="product-input"
            placeholder="1"
            min={1}
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 1)}
          />
        </Styles.Purchase>

        <hr style={{ border: "1px solid black" }} />

        <Styles.AdditionalInfo>
          <Styles.InfoField>
            <b> {t["product_page.additional-info.size"]}: </b>
            {data.additionalInfo.size.translations[lang].value}
          </Styles.InfoField>
          <Styles.InfoField>
            <b> {t["product_page.additional-info.avaliability"]}: </b>
            {data.additionalInfo.avaliability.translations[lang].value}
          </Styles.InfoField>
          <Styles.InfoField>
            <b> {t["product_page.additional-info.warranty"]}: </b>
            {data.additionalInfo.warranty.translations[lang].value}
          </Styles.InfoField>
        </Styles.AdditionalInfo>
      </Styles.ProductCard>
      <Styles.Warning>{t["product_page.color-warning"]}</Styles.Warning>
      <Styles.InfoCards>
        <Styles.InfoSingleCard>
          <Styles.InfoSingleImage>
            <ShipSVG />
          </Styles.InfoSingleImage>
          <Styles.InfoSingleText>
            <p>
              <b>{t["product_page.free-delivery_title"]}</b>
            </p>
            <p>{t["product_page.free-delivery_text"]}</p>
          </Styles.InfoSingleText>
        </Styles.InfoSingleCard>
        <Styles.InfoSingleCard>
          <Styles.InfoSingleImage>
            <PaySVG />
          </Styles.InfoSingleImage>

          <Styles.InfoSingleText>
            <p>
              <b>{t["product_page.payment_title"]}</b>
            </p>
            <p>{t["product_page.payment_text"]}</p>
          </Styles.InfoSingleText>
        </Styles.InfoSingleCard>
      </Styles.InfoCards>
    </Styles.ProductMainInfoWrapper>
  );
};
export default ProductMainInfo;
