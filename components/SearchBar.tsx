import { useThemeColors } from "@/hooks/useThemeColors"
import { Image } from "expo-image"
import { StyleSheet, TextInput } from "react-native"
import Row from "./Row"

type Props = {
    value: string,
    onChange: (str: string) => void
}


export function SearchBar({value, onChange}: Props) {
    const colors = useThemeColors()
    return(
        <Row style={[styles.wrapper, {backgroundColor: colors.grayWhite}]} gap={8} >
            <Image
                source={require('@/assets/icons8-chercher.svg')}
                style={{width: 16, height: 16}}
            />
            <TextInput
                style={styles.input} 
                onChangeText={() => onChange}
            />
        </Row>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderRadius: 16,
        height: 32,
        paddingHorizontal: 12
    },

    input: {
        flex: 1,
        height: 16,
        fontSize: 10,
        lineHeight: 16
    }
})