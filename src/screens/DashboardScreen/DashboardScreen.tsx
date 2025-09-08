import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import styles from './DashboardScreen.style'
import { logo, searchIcon } from '../../../assets/images'
import { Dimensions } from 'react-native'
const DashboardScreen = () => {
  console.log("Dim" + Dimensions.get("screen").height * 10);

  return (
    <View style={styles.container} >

      <View style={styles.topSection}>
        <View style={styles.topBar}>
          <View style={styles.profileCircle}> <Text style={{ color: "white" }}>CU</Text></View>

          <View style={styles.tapbarRight}>
            <Image source={searchIcon} style={{ height: 25, width: 25 }} />
            <Image source={logo} style={{ height: 25, width: 25 }} />
          </View>

        </View>


        <View style={styles.currAccount}>
          <Text>Current  Account | *0050</Text>
          <Text>* * * * PKR </Text>
          <Button title='Overview' color={"red"}></Button>
        </View>
      </View>

      <View style={styles.boxOptionsView}>
        <View style={styles.boxOptions}>
          <Text>one</Text>
          <Text style={{ flexWrap: "wrap" }}>Send Money</Text>
        </View>


        <View style={styles.boxOptions}>
          <Text>one</Text>
          <Text>two</Text>

        </View>


        <View style={styles.boxOptions}>
          <Text>one</Text>
          <Text>two</Text>
        </View>

        <View style={styles.boxOptions}>
          <Text>one</Text>
          <Text>two</Text>
        </View>

      </View>

      <View style={styles.quickActionsView}>


        <View>
          <Text>Quick Actions</Text>
        </View>

        <View style={styles.quickActionsRow}>
          <View style={styles.quickActions}>

            <View style={styles.quickActionsCircle}>
              <Text>one</Text>
            </View>
            <Text>New Action</Text>
          </View>


          <View style={styles.quickActions}>
            <View style={styles.quickActionsCircle}>
              <Text>one</Text>
            </View>
            <Text>Bills & Payments</Text>
          </View>


          <View style={styles.quickActions}>
            <View style={styles.quickActionsCircle}>
              <Text>one</Text>
            </View>
            <Text>Other bank cards</Text>
          </View>


        </View>


      </View>
      <View style={styles.promoBox}>
        <View style={{ flexDirection: "row" }}>
          <Image source={logo} style={{ height: 25, width: 25 }} />
          <View style={{padding:4,marginLeft:4}}>
            <Text style={{fontWeight:"600",fontSize:16}}>Instant Loan upt to 750,000</Text>
            <Text>asd</Text>


          </View>
        </View>
        <Image source={searchIcon} style={{ height: 25, width: 25 }} />

      </View>



    </View>
  )
}

export default DashboardScreen