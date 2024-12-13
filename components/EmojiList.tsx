import { useState } from "react"
import { StyleSheet, FlatList, Platform, Pressable } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSource[]>([
    
  ]);

  return (
    <FlatList 
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={}
      contentContainerStyle={styles.listContainer}

    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
