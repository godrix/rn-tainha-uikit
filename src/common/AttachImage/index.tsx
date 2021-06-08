import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ImageModal from 'react-native-image-modal';
import { Notifier, NotifierComponents } from 'react-native-notifier';

import * as ImagePicker from 'expo-image-picker';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../constants/colors';
import {
  Container,
  Wrapper,
  Touchable,
  TouchableLabel,
  Label,
  ImagePreview,
  ImagePreviewClose,
  Attachment,
} from './styles';

interface AttachImageProps {
  returnType?: 'base64' | 'uri';
  onGetImage: React.Dispatch<React.SetStateAction<ImageResultProps[]>>;
}

export interface ImageResultProps {
  cancelled: boolean;
  height?: number;
  type?: string;
  uri?: string;
  base64?: string;
  width?: number;
}

export function AttachImage({
  returnType = 'uri',
  onGetImage,
}: AttachImageProps) {
  const [images, setImages] = useState<ImageResultProps[]>([]);

  async function handleCamera() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Notifier.showNotification({
        title: 'Permissão de câmera',
        description: 'Desculpe, precisamos de permissões da câmera',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'warn',
        },
      });
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: returnType === 'base64',
    });

    if (!result.cancelled) {
      setImages([result, ...images]);
    }
  }

  async function handleGalery() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Notifier.showNotification({
        title: 'Permissão para acessar a galeria',
        description:
          'Desculpe, precisamos de permissões da galeria para selecionar uma imagem',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error',
        },
      });
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: returnType === 'base64',
    });

    if (!result.cancelled) {
      setImages([result, ...images]);
    }
  }

  function handleClearImage(uri: string) {
    const galery = images.filter(item => item.uri !== uri);
    setImages(galery);
  }

  useEffect(() => {
    if (images) {
      onGetImage(images);
    }
  }, [images, onGetImage]);

  return (
    <Container>
      <Label>Anexar Imagem</Label>
      <Wrapper>
        <Touchable onPress={handleCamera}>
          <TouchableLabel>Câmera</TouchableLabel>
        </Touchable>
        <Touchable onPress={handleGalery}>
          <TouchableLabel>Galeria</TouchableLabel>
        </Touchable>
      </Wrapper>
      {!!images.length && (
        <Attachment>
          <FlatList
            data={images}
            horizontal
            keyExtractor={item => String(item.uri)}
            renderItem={({ item }) => (
              <ImagePreview>
                <ImageModal
                  resizeMode="contain"
                  imageBackgroundColor={colors.primary}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  source={{
                    uri: item.uri,
                  }}
                />
                <ImagePreviewClose onPress={() => handleClearImage(item.uri)}>
                  <MaterialCommunityIcons
                    name="close-box"
                    size={24}
                    color={colors.white}
                  />
                </ImagePreviewClose>
              </ImagePreview>
            )}
          />
        </Attachment>
      )}
    </Container>
  );
}
