import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

const SideBar = ({ ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267_960_720.jpg' }}
          style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>Sonam Kumari</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Help' onPress={() => console.log("Opening Help Page")} />
    </DrawerContentScrollView>
  )
}

export default SideBar