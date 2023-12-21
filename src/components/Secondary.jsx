import { useContext } from "react";
import { ScrollView } from "react-native";
import {
  HeaderTitle,
  ImgTitle,
  LastImg,
  ImgDate,
  InfoContainer,
  BtnInfo,
  BtnText,
} from "../styles/styledComponents";
import { DataContext } from "../context/DataProvider";
import { useNavigation } from "@react-navigation/native";

const Secondary = () => {
  const { dataLastdays, loading } = useContext(DataContext);
  const { navigate } = useNavigation();

  const handleView = (id) => {
    navigate("Detail", {itemId: id, dataLastdays});
  };
  return (
    <>
      {loading || (
        <>
          <HeaderTitle>Últimos Cinco Días</HeaderTitle>
          <ScrollView>
            {dataLastdays?.map((e) => (
              <LastImg key={e.date}>
                <ImgTitle>{e.title}</ImgTitle>
                <InfoContainer>
                  <ImgDate>{e.date}</ImgDate>
                  <BtnInfo>
                    <BtnText onPress={() => handleView(e.date)}>Ver</BtnText>
                  </BtnInfo>
                </InfoContainer>
              </LastImg>
            ))}
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Secondary;
