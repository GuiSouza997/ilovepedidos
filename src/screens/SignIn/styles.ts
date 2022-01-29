import { StyleSheet } from "react-native";
import { theme } from "../../../global/style";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundTheme,
        justifyContent: "center",
        alignItems: "center"
    },
    inputName: {
        height: 50,
        width: 200,
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.backgroundTheme
    },
    image:{
        height: 200,
        width: '50%',
    },
    title:{
        textAlign: "center",
        fontSize: 40
    }
})