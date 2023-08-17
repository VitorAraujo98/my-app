import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';

const list = [
  {
    id: 1,
    label: 'boleto de água',
    value: '250,00',
    date: '15/08/23',
    type: 0
  },
  {
    id: 2,
    label: 'transferencia cliente',
    value: '300,00',
    date: '14/08/23',
    type: 1
  },
  {
    id: 3,
    label: 'boleto de luz',
    value: '180,00',
    date: '12/08/23',
    type: 2
  },

]

export default function App() {
  return (
    <View style={styles.container}>
        <Header name="João Vitor"/>
   
     <Balance saldo="9.500.90" gastos="-527,00"/>

     <Actions/>

    <Text style={styles.title}>Últimas movimentações</Text>
    <FlatList
     style={styles.list}
     data={list}
     keyExtractor={ (item) => String(item.id)}
     showsVerticalScrollIndicator={false}
     renderItem={ ({ item }) => <Movements data={item}/> }
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
