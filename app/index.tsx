import Card from "@/components/Card";
import PokemonCard from "@/components/pokemon/PokemonCard";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Image } from "expo-image";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = useThemeColors();
  const pokemons = Array.from({length: 100}, (_, k) => ({
    name: 'Pokemon name',
    id: k + 1
  }));

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/pokeball.png")}
          style={{width: 40, height: 40}}
        />
        <ThemedText variant="headline" color="grayLight">Pokemon</ThemedText>
      </View>

      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={[styles.gridGap,  styles.list]}
          columnWrapperStyle={styles.gridGap}
          renderItem={
            ({item}) => <PokemonCard id={item.id} name={item.name} style={{flex: 1/3}}/>
          }
          
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12
  },

  body: {
    flex: 1
  },

  gridGap: {
    gap: 8
  },

  list:{
    padding: 12
  }
})
