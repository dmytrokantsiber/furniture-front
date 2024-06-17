import React, { FC } from "react";

import * as Styles from "./styles";
import { useTranslations } from "../../../../hooks/useTranslations";
import {
  IProductConfiguration,
  IProductConfigurationItem,
  IProductTranslations,
} from "../../../../types/products.types";

interface IProductConfigurationProps {
  data: IProductConfiguration;
  selectedOptions: Record<string, IProductConfigurationItem>;
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<Record<string, IProductConfigurationItem>>
  >;
}

const ProductConfiguration: FC<IProductConfigurationProps> = ({
  data,
  selectedOptions,
  setSelectedOptions,
}) => {
  const { t, lang } = useTranslations();

  const handleOptionChange = (
    element: string,
    value: IProductConfigurationItem,
    label: IProductTranslations
  ) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [element]: { ...value, label },
    }));
  };

  return (
    <Styles.ProductConfigurationWrapper>
      {Object.entries(data).map(([configurationKey, configs]) => {
        if (configs.items.length > 0) {
          return (
            <div key={configurationKey}>
              <Styles.Title>{String(configs.label[lang].value)}</Styles.Title>
              {configs.items.map((configurationItem) => (
                <Styles.Item key={configurationItem._id}>
                  <input
                    type="radio"
                    id={configurationItem._id}
                    name={configurationKey}
                    value={configurationItem.value}
                    checked={
                      selectedOptions[configurationKey]?.value ===
                      configurationItem.value
                    }
                    onChange={() =>
                      handleOptionChange(
                        configurationKey,
                        configurationItem,
                        configs.label
                      )
                    }
                  />
                  <Styles.Label htmlFor={configurationItem._id}>
                    {configurationItem.translations[lang].value} (+{" "}
                    {configurationItem.additionalPrice}{" "}
                    {t["product_page.currency"]})
                  </Styles.Label>
                </Styles.Item>
              ))}
            </div>
          );
        }
        return null;
      })}
    </Styles.ProductConfigurationWrapper>
  );
};
export default ProductConfiguration;
