import { useThemeColors } from "@/hooks/useThemeColors"
import { Image } from "expo-image"
import { StyleSheet, View, ViewStyle } from "react-native"
import Card from "../Card"
import { ThemedText } from "../ThemedText"

type Props = {
    style?: ViewStyle,
    id: number,
    name: string
}

export default function PokemonCard({ style, id, name }: Props) {
    const colors = useThemeColors()

    return (
        <Card style={[style, styles.card]}>
            <ThemedText style={styles.id} variant="caption" color="grayMedium">#{id.toString().padStart(3, '0')}</ThemedText>
            <Image 
                source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                style={{width: 72, height: 72}}
            />
            <ThemedText>{name}</ThemedText>
            <View style={[styles.shadow, {backgroundColor: colors.grayBackground}]} />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        padding: 4,
        position: "relative"
    },

    id: {
        alignSelf: 'flex-end',
    },

    shadow: {
        height: 44,
        borderRadius: 7,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -100
    }
})