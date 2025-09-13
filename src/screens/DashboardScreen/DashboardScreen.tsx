import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './DashboardScreen.style';
import { logo, plusIcon, savingsIcon, searchIcon } from '../../../assets/images';
import { Dimensions } from 'react-native';
import Apptext from '../../components/Apptext';
const DashboardScreen = () => {
  console.log('Dim' + Dimensions.get('screen').height * 10);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.topBar}>
          <View style={styles.profileCircle}>
            {' '}
            <Text style={{ color: 'white' }}>CU</Text>
          </View>

          <View style={styles.tapbarRight}>
            <Image source={searchIcon} style={{ height: 25, width: 25 }} />
            <Image source={logo} style={{ height: 25, width: 25 }} />
          </View>
        </View>

        <View style={styles.currAccount}>
          <Apptext variant='heading3'>Current Account | *0050</Apptext>
          <Apptext>* * * * PKR </Apptext>
          <Button title="Overview" color={'red'}></Button>
        </View>
      </View>

      <View style={styles.boxOptionsView}>
        <View style={styles.boxOptions}>
          <Apptext style={styles.boxLabel}>Send{'\n'}Money</Apptext>
        </View>

        <View style={styles.boxOptions}>
          <Apptext style={styles.boxLabel}>Bills &{'\n'}Payments</Apptext>
        </View>

        <View style={styles.boxOptions}>
          <Apptext style={styles.boxLabel}>Mobile{'\n'}top-up</Apptext>
        </View>

        <View style={styles.boxOptions}>
       <Apptext variant='body' style={styles.quickActionsLabel}>Save &{'\n'}Invest</Apptext>

        </View>
      </View>

      <View style={styles.quickActionsView}>
        <View>
          <Apptext variant='heading3' style={{color:"gray"}}>Quick Actions</Apptext>
        </View>

        <View style={styles.quickActionsRow}>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickActionsButton}>
              <Image source={plusIcon} style={styles.quickActionsIcon} />
            </TouchableOpacity>
            <Apptext variant='body' style={styles.quickActionsLabel}>Other bank{'\n'}cards</Apptext>
          </View>

          <View style={styles.quickActions}>
            
            <TouchableOpacity style={styles.quickActionsButton}>
              <Image source={plusIcon} style={styles.quickActionsIcon} />
            </TouchableOpacity>
            <Apptext variant='body' style={styles.quickActionsLabel}>Other bank{'\n'}cards</Apptext>
     
           
          </View>

          <View style={styles.quickActions}>
         
            <TouchableOpacity style={styles.quickActionsButton}>
              <Image source={plusIcon} style={styles.quickActionsIcon} />
            </TouchableOpacity>
            <Apptext variant='body' style={styles.quickActionsLabel}>Other bank{'\n'}cards</Apptext>
           {/* <Text  style={styles.quickActionsLabel}>Other bank{'\n'}cards</Text> */}
          </View>
            
        
        </View>
      </View>
      <View style={styles.promoBox}>
        <View style={{ flexDirection: 'row',alignItems:"center" }}>
          <Image source={savingsIcon} style={{ height: 40, width: "10%" }} />
          <View style={{ padding: 2, marginLeft: 4,width:"84%"}}>
            <Apptext variant='heading3' style={{}}>
              Instant Loan upt to 750,000
            </Apptext>
            <Apptext  >You are qualified to apply for Bank Alfalah Instant loan upto PKR 750,000 via Alpha</Apptext>
          </View>
        </View>
        <Image source={searchIcon} style={{ height: 25, width: "6%" }} />
      </View>
    </View>
  );
};

export default DashboardScreen;
