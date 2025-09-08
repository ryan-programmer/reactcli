import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor:"white"
    },
    topSection: {
        height: Dimensions.get("screen").height * 0.25,
        width: Dimensions.get("screen").width * 0.99,
        paddingHorizontal:1,
        // borderWidth: 1,
        // borderColor: "blue",
        backgroundColor:"#f8f4f4ff"
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderWidth:1,
        // borderColor:"red",
        padding: 10
    },
    currAccount: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "blue",
        alignSelf: "flex-start",
        marginStart: 10,
        padding: 10
    },
    boxOptionsView: {
        flexDirection: "row",
        width:"100%",
        borderWidth: 1,
        borderColor: "green",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 5,
        position: "absolute",
        marginTop: Dimensions.get("screen").height * 0.20

    },
    boxOptions: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "blue",
        // alignSelf: "center",
        padding: 17,
        marginLeft:10,
    },
    quickActionsView: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "black",
        marginTop: Dimensions.get("screen").height * 0.07

    },

    quickActionsRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        borderColor:"black",
        paddingStart: 5
    },
    quickActions: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth:1,
        // borderColor:"black",
        padding: 22,
        // marginStart: 10,
    },
    quickActionsCircle: {
        padding: 20,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 30
    },
    profileCircle: {
        backgroundColor: "#951c07",
        color: "white",
        padding: 8,
        borderRadius: 18
    },
    tapbarRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth:1,
        // borderColor:"red",
        gap: 10
    },
    promoBox:{
        borderWidth:1,
        borderColor:"red",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:8

    }
})