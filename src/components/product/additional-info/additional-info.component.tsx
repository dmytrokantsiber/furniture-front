import { Dispatch, FC, SetStateAction, useState } from "react";

import * as Styles from "./styles";
import { useTranslations } from "../../../hooks/useTranslations";
import Characteristics from "./characteristics/characteristics.component";
import {
  IProductConfigurationItem,
  Product,
} from "../../../types/products.types";
import ProductConfiguration from "./configuration/product-configuration.component";

interface IAdditionalInfoProps {
  data: Product;
  selectedOptions: Record<string, IProductConfigurationItem>;
  setSelectedOptions: Dispatch<
    SetStateAction<Record<string, IProductConfigurationItem>>
  >;
}

const AdditionalInfo: FC<IAdditionalInfoProps> = ({
  data,
  selectedOptions,
  setSelectedOptions,
}) => {
  const tabs = ["characteristics", "configuration"] as const;
  const { t } = useTranslations();
  const [currentTab, setCurrentTab] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <Styles.AdditionalInfoWrapper>
      <Styles.Tabs>
        {tabs.map((item) => {
          return (
            <Styles.TabSwitcher
              key={item}
              onClick={() => setCurrentTab(item)}
              style={{
                color: currentTab === item ? "var(--color-green)" : "black",
              }}
            >
              {t[`product_page.buttons.${item}`]}
            </Styles.TabSwitcher>
          );
        })}
      </Styles.Tabs>
      <hr style={{ border: "1px solid black" }} />
      {currentTab === "characteristics" ? (
        <Styles.Content>
          <Characteristics data={data.filterParams} />
        </Styles.Content>
      ) : (
        <Styles.Content>
          <ProductConfiguration
            data={data.options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </Styles.Content>
      )}
    </Styles.AdditionalInfoWrapper>
  );
};

export default AdditionalInfo;
