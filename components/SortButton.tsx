import { Shadows } from '@/constants/Shadows'
import { useThemeColors } from '@/hooks/useThemeColors'
import { Image } from 'expo-image'
import { useRef, useState } from 'react'
import { Dimensions, Modal, Pressable, StyleSheet, View } from 'react-native'
import Card from './Card'
import Radio from './Radio'
import Row from './Row'
import { ThemedText } from './ThemedText'


type Props = {
    value: "id" | "name",
    onChange: (v: "id" | "name") => void
}

const options = [
    {label: "Number", value: "id"},
    {label: "Name", value: "name"}
] as const


const SortButton = ({value, onChange}: Props) => {
    const buttonRef = useRef<View>(null)
    const colors = useThemeColors();
    const [position, setPosition] = useState<null | {top: number, right: number}>(null)
    const [isModalVisible, setModalVisibility] = useState(false)
    const onButtonPressed = () => {
        buttonRef.current?.measureInWindow((x, y, width, height) => {
            setPosition({
                top: y + height,
                right: Dimensions.get("window").width - x -width,
            })
            setModalVisibility(true)
        })
    }
    const onClose = () => {
        setModalVisibility(false)
    }
  return (
    <>
        <Pressable
            ref={buttonRef}
            onPress={onButtonPressed}
        >
            <View style={[styles.button, {backgroundColor: colors.grayWhite}]}>
                <Image 
                    source={
                        value == "id" ?
                        require("@/assets/hastag.png") : require("@/assets/alpha.png")
                    }
                    style={{width: 16, height: 16}}
                />
            </View>
        </Pressable>

        <Modal
            animationType='fade'
            transparent
            visible={isModalVisible}
            onRequestClose={onClose}
        >  
            <Pressable style={styles.backdrop} onPress={onClose} />
            <View style={[styles.popup, {backgroundColor: colors.tint, ...position}]}>
                <ThemedText 
                    style={styles.title} 
                    variant='subtitle2' 
                    color='grayWhite'
                >
                        Sort by:
                </ThemedText>
                <Card
                    style={[styles.card]}
                >
                    {
                        options.map(
                            opt => (
                                <Pressable onPress={() => onChange(opt.value)}>
                                    <Row key={opt.value} gap={8}>
                                        <Radio checked={opt.value == value} />
                                        <ThemedText>{opt.label}</ThemedText>
                                    </Row>
                                </Pressable>
                            )
                        )
                    }
                </Card>
            </View>
        </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 32,
        height: 32,
        borderRadius: 32,
        flex: 0,
        alignItems: "center",
        justifyContent: "center"
    },

    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },

    popup: {
        padding: 4,
        paddingTop: 16,
        gap: 16,
        borderRadius: 12,
        position: 'absolute',
        width: 113,
        ...Shadows.dp2
    },

    title: {
        paddingLeft: 16
    },

    card: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        gap: 16
    }
})

export default SortButton