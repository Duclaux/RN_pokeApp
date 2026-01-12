import { TextInput } from "react-native"
import Row from "./Row"

type Props = {
    value: string,
    onChange: (str: string) => void
}


export function SearchBar({value, onChange}: Props) {
    return(
        <Row>
            <TextInput 
                onChangeText={() => onChange}
            />
        </Row>
    )
}