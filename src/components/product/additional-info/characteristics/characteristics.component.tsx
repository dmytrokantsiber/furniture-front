import { FC } from "react";

import * as Styles from "./styles";
import { useTranslations } from "../../../../hooks/useTranslations";
import { IProductAdditionalInfoItems } from "../../../../types/products.types";

interface ICharacteristicsProps {
  data: IProductAdditionalInfoItems;
}

const Characteristics: FC<ICharacteristicsProps> = ({ data }) => {
  const { lang } = useTranslations();

  return (
    <Styles.CharacteristicsWrapper>
      <table>
        <tbody>
          {Object.entries(data).map(([element, item]) => {
            if (item.value) {
              return (
                <tr key={element}>
                  <td>
                    <Styles.Title>{item.translations[lang].label}</Styles.Title>
                  </td>
                  <td>
                    <Styles.Text>{item.translations[lang].value}</Styles.Text>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </Styles.CharacteristicsWrapper>
  );
};

export default Characteristics;
