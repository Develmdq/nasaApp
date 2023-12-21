import { useContext } from "react";
import {
  Spinner,
  MainContainer,
  ImgTodayContainer,
  ImgToday,
  ImgTitle,
  ImgDate,
  InfoContainer,
  BtnInfo,
  BtnText,
} from "../styles/styledComponents";
import { DataContext } from "../context/DataProvider";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const { dataToday, loading } = useContext(DataContext);
  const { navigate } = useNavigation();

  const handleView = () => {
    navigate("Detail", { itemId: 1, dataToday });
  };
  return (
    <MainContainer>
      <ImgTodayContainer>
        {loading ? (
          <>
            <Spinner size="large" color="#d4d4d4" />
            <ImgTitle>Cargando...</ImgTitle>
          </>
        ) : (
          <>
            <ImgToday source={{ uri: dataToday[0]?.url }} />
            <ImgTitle>{dataToday[0]?.title}</ImgTitle>
            <InfoContainer>
              <ImgDate>{dataToday[0]?.date}</ImgDate>
              <BtnInfo>
                <BtnText onPress={handleView}>Ver</BtnText>
              </BtnInfo>
            </InfoContainer>
          </>
        )}
      </ImgTodayContainer>
    </MainContainer>
  );
};

export default Main;
