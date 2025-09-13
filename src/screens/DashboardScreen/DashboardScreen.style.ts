import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'green',
    backgroundColor: 'white',
    paddingHorizontal:5
  },
  topSection: {
    height: Dimensions.get('screen').height * 0.25,
    // paddingHorizontal: 1,
    // borderWidth: 1,
    // borderColor: "blue",
    backgroundColor: '#f8f4f4ff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // borderWidth:1,
    // borderColor:"red",
    padding: 5,
  },
  currAccount: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // borderWidth: 1,
    // borderColor: 'blue',
    alignSelf: 'flex-start',
    marginStart: 10,
    padding: 10,
  },
  boxOptionsView: {
    flexDirection: 'row',
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'green',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    position: 'absolute',
    marginTop: Dimensions.get('screen').height * 0.2,
  },
  boxOptions: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor:"white",
    // alignSelf: "center",
    paddingVertical: 20,
    marginHorizontal: 5,
  },
  boxLabel: {
    flexWrap: 'wrap',
    width: "100%",
    textAlign: 'center',
    fontSize:12,
   
    
    
  },
  quickActionsView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // borderWidth: 1,
    // borderColor: 'black',
    marginTop: Dimensions.get('screen').height * 0.059,
    
    
  },

  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 5,
    
  },
  quickActions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
    // borderColor:"black",
    padding: 5,
    marginStart:10
   
  },
  quickActionsButton:{
    height:50,
    width:50,
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25
  },
  quickActionsIcon:{
    width: 28,   // adjust depending on PNG size
    height: 28,
     resizeMode: "contain",
         tintColor: "white", // applies color overlay if PNG is monochrome

  },
  quickActionsLabel:{
    textAlign:"center",
    
  },
  profileCircle: {
    backgroundColor: "red",
    color: 'white',
    padding: 8,
    borderRadius: 18,
  },
  tapbarRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    // borderColor:"red",
    gap: 10,
  },
  promoBox: {
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
});
