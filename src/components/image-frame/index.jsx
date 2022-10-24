import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { View, Text, Image, Button, Alert } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

// eslint-disable-next-line react/prop-types
const ImageFrame = ({onImage}) => {
  const [pickedUrl, setPickedUrl] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Ud Necesita dar permiso para el uso de la camara", [{ text: "Okay" }]);
      return false;
    }
    return true;
  };

  const onHandleTakePhoto = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay Imagen Selecionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Capturar Imagen" color={colors.secondary} onPress={onHandleTakePhoto} />
    </View>
  );
};

export default ImageFrame;
