import { useThemeColors } from '@/hooks/useThemeColors'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
    checked: boolean
}


function Radio({checked} : Props) {
    const colors = useThemeColors()
  return (
    <View style={[styles.radio, {borderColor: colors.tint}]}>
      {
        checked && <View style={[styles.radioInner, {backgroundColor: colors.tint}]}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    radio: {
        width: 14,
        height: 14,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    radioInner: {
        borderRadius: 6,
        width: 6,
        height: 6
    }
})

export default Radio
