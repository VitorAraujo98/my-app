import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';



export default function App() {
  return (
    <View style={styles.container}>
        <Header name="Joel Santana"/>
   
     <Balance/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});
