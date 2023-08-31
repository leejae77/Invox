import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { RootStackParamList } from "./ScreenList";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Login: React.FC<HomeScreenProps> = (props) => {
    return (
      <Button
        title="Null Button"
      />
    );
};

export default Login;
