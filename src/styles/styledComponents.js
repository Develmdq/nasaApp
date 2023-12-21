import styled from "styled-components/native";

export const AppContainer = styled.SafeAreaView`
  background-color: #071a5d;
  flex: 1;
  /* padding-top: ${Platform.OS === "android" && "35px"}; */
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const ImgLogo = styled.Image`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

export const Spinner = styled.ActivityIndicator``;

export const BodyContainer = styled.View`
  flex:1;
  padding: 5px 15px;
`;

export const MainContainer = styled.View`
  background-color: #2c449d;
  border-radius: 15px;
  margin: 0px 0px 15px 0px;
`;

export const ImgTodayContainer = styled.View`
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 5px;
  
`;

export const ImgToday = styled.Image`
  height: 200px;
  border-radius: 15px;
  margin-bottom: 10px;
  object-fit: contain; 
`;

export const ImgTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
  align-items: center; 
`;

export const ImgDate = styled.Text`
  color: #fff;
  font-size: 12px;
  margin:5px 0px;
`;

export const BtnInfo = styled.TouchableOpacity` 
`;

export const BtnText = styled.Text`
  color: #bebebe;
  font-size: 16px;
`;

export const LastImg = styled.View`
  background-color: #2c449d72;
  border-radius: 15px;
  padding: 5px;
  margin: 15px 0px 0px ;
`;
