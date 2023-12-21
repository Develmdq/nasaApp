import { useContext, useState, useEffect } from "react";
import { Header } from "../components";
import { ScrollView } from "react-native";
import {
  BodyContainer,
  MainContainer,
  ImgTodayContainer,
  ImgToday,
  ImgTitle,
  ImgDate,
  InfoContainer,
} from "../styles/styledComponents";
import { AppContainer } from "../styles/styledComponents";
import { DataContext } from "../context/DataProvider";

const Detail = ({ route }) => {
  const [data, setData] = useState();
  const { dataToday, dataLastdays } = useContext(DataContext);
  const { itemId } = route.params;
  
  useEffect(() => {
    const daySelect = dataLastdays?.filter((e) => e.date === itemId);
    itemId === 1 ? setData(dataToday[0]) : setData(daySelect[0]);
  }, []);

  return (
    <AppContainer>
      <Header />

      <BodyContainer>
        <MainContainer>
            <ImgTodayContainer>
              <ImgToday source={{ uri: data?.url }} />
              <ImgTitle>{data?.title}</ImgTitle>
              <InfoContainer>
                <ImgDate>{data?.date}</ImgDate>
              </InfoContainer>
            </ImgTodayContainer>
          </MainContainer>
          <ImgTitle>Explicación:</ImgTitle>
          <ScrollView>
            <ImgDate>{data?.explanation}</ImgDate>
          </ScrollView>
      </BodyContainer>
    </AppContainer>
  );
};

export default Detail;
