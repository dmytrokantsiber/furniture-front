import {
  IProductConfiguration,
  IProductConfigurationItem,
} from "../../types/products.types";

export const prepareConfigurations = (options: IProductConfiguration) => {
  const defaultConfiguration: Record<string, IProductConfigurationItem> = {};
  Object.entries(options).forEach(([configKey, config]) => {
    if (config.items.length > 0) {
      defaultConfiguration[configKey] = {
        ...config.items[0],
        label: config.label,
      };
    }
  });
  return defaultConfiguration;
};
