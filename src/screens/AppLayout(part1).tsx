// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, TouchableOpacity, Pressable, Button } from 'react-native';
// import { Card, Paragraph, Title, Avatar } from 'react-native-paper';
// import { data } from '../../data';

// const App = () => {

//     const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

//     const renderItem = ({ item }) => {
//         return (
//             <View style={styles.card}>
//                 <Card>
//                     <Card.Title title="StarShip" subtitle="Star Wars" left={LeftContent} />
//                     <Card.Content>
//                         <Title>{(item.name)}</Title>
//                         <Paragraph>{(item.manufacturer)}, Ce vaisseau a une taille maximale de ({item.passengers})</Paragraph>
//                     </Card.Content>

//                     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//                 </Card>
//             </View>
//         )
//     }
//     return (
//         <SafeAreaView style={styles.safeContainer}>

//             <View style={styles.container}>

//                 <FlatList
//                     data={data.results}
//                     renderItem={renderItem}
//                 />

//             </View>

//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeContainer: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     container: {
//         paddingHorizontal: 20,
//         marginTop: 20,
//     },
//     item: {
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     card: {
//         marginBottom: 20,
//         padding: 20,
//         borderRadius: 10,
//         backgroundColor: "#E5E7EB",
//         shadowOpacity: 0.5
//     },
//     card_text: {
//         color: "white"
//     },

//     text: {
//         fontSize: 16
//     }
// });

// export default App;