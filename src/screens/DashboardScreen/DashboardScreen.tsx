import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './DashboardScreen.style'
const DashboardScreen = () => {
  return (
    <View style={styles.container} >
      <View style={styles.topBar}>
        <View style={styles.profileCircle}> <Text>CU</Text></View>
        {/* <Image source={} /> */}
      </View>


      <View style={styles.currAccount}>
        <Text>one</Text>
        <Text>two</Text>
        <Text>three</Text>
      </View>


      <View style={styles.boxOptionsView}>
        <View style={styles.boxOptions}>
          <Text>one</Text>
          <Text>two</Text>
          <Text>three</Text>
        </View>


        <View style={styles.boxOptions}>
          <Text>one</Text>
          <Text>two</Text>
          <Text>three</Text>
        </View>


        <View style={styles.boxOptions}>
          <Text>one</Text>
          <Text>two</Text>
          <Text>three</Text>
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



    </View>
  )
}

export default DashboardScreen