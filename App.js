import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Modal, Image, TouchableOpacity, FlatList } from 'react-native';

export default function App() {

  const [categoriaAttiva, setCategoriaAttiva] = useState('formaggi3') 
  const [open, setOpen] = useState(false)
  const[currentItem, setCurrentItem] = useState({})



  const cibi = [
    {id: 1, nome: 'Banana', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 80, categoria: 'frutta', 
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 2, nome: 'Arancia', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 50, categoria: 'frutta', 
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 3, nome: 'Prosciutto', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 150, categoria: 'salumi',
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 4, nome: 'Pompelmo', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 80, categoria: 'frutta',
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 5, nome: 'Melone', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 50, categoria: 'frutta',
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 6, nome: 'Salame', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 150, categoria: 'salumi', 
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 7, nome: 'Ravioli', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 150, categoria: 'pasta',
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 8, nome: 'Tortellini', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 150, categoria: 'pasta',
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 9, nome: 'Asiago', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 150, categoria: 'formaggi',
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 10, nome: 'Gorgonzola', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 150, categoria: 'formaggi',
      carboidrati: 20, proteine: 30, grassi: 30, grassiSaturi: 5, sale: 0.1},
    {id: 11, nome: 'Parmigiano', foto: require('./assets/CristianaCapotondi.jpg'), calorie: 250, categoria: 'formaggi',
      carboidrati: 20, proteine: 40, grassi: 40, grassiSaturi: 15, sale: 0.1},
  ]
  const categorie = [
    {id: 1, nome: 'formaggi'},
    {id: 2, nome: 'salumi'},
    {id: 3, nome: 'frutta'},
    {id: 4, nome: 'pasta'},
    {id: 5, nome: 'all'},
  ]

  const frutta = cibi.filter(cibo =>cibo.categoria === 'frutta')
  const salumi = cibi.filter(cibo =>cibo.categoria === 'salumi')
  const pasta = cibi.filter(cibo =>cibo.categoria === 'pasta')
  const formaggi = cibi.filter(cibo =>cibo.categoria === 'formaggi')

  const handleModal = (item) => {
    setOpen(true)
    setCurrentItem(item)
  }

  return (
    <View style={{marginStart: 5}}>
      <View>
      <FlatList 
        horizontal
        data={categorie}
        keyExtractor={item =>item.id}
        renderItem={({item})=>(
          <TouchableOpacity 
            style={styles.item}
            onPress={() =>setCategoriaAttiva(item.nome)}
          >
            <Text style={styles.title}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    <View>
      <FlatList 
        numColumns={2}
        data={categoriaAttiva === 'frutta' ? frutta 
              : categoriaAttiva === 'salumi' ? salumi
              : categoriaAttiva === 'formaggi' ? formaggi
              : categoriaAttiva === 'pasta' ? pasta : cibi
            
            
            }
        keyExtractor={item =>item.id}
        renderItem={({item})=>(
          <View>
            <TouchableOpacity 
              style={styles.item2}
              onPress={()=>handleModal(item)}
            >
              <Text style={styles.title}>{item.nome}</Text>
              <Image 
                style={styles.image}
                source={item.foto}
              />
              <Text style={styles.textFood}>Calorie: {item.calorie}</Text>
            </TouchableOpacity>
            <Modal
              visible={open}
              //transparent={true}
            >
              <View style={[styles.container, {backgroundColor: 'rgba(255,255,0,0.2)'}]}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{currentItem.nome}</Text>
                <Text>Calorie: {currentItem.calorie}</Text>
                <Text>Categoria: {currentItem.categoria}</Text>
                <View style={{height: 20}}></View>
                      <View style={styles.tabView}>
                        <Text style={{fontWeight: 'bold'}}>Alimento</Text>
                        <Text style={{fontWeight: 'bold'}}>Carboidrati</Text>
                        <Text style={{fontWeight: 'bold'}}>Proteine</Text>
                        <Text style={{fontWeight: 'bold'}}>Grassi</Text>
                        {/* <Text style={{fontWeight: 'bold'}}>di cui Grassi Saturi</Text>
                        <Text style={{fontWeight: 'bold'}}>Sale</Text> */}
                        <Text style={{fontWeight: 'bold'}}>Calorie</Text> 
                        {/* <Text style={{fontWeight: 'bold'}}>Categoria</Text> */}
                      </View>
                {
                  formaggi.map(formaggio =>(
                      <View style={styles.tabView} key={formaggio.id}>
                        <Text style={styles.textTitle} >{formaggio.nome}</Text>
                        <Text style={styles.textView} >{formaggio.carboidrati}</Text>
                        <Text style={styles.textView}>{formaggio.proteine}</Text>
                        <Text style={styles.textView} >{formaggio.grassi} ({formaggio.grassiSaturi})</Text>
                        {/* <Text>{formaggio.grassiSaturi}</Text>
                        <Text>{formaggio.sale}</Text> */}
                        <Text style={styles.textView}>{formaggio.calorie}</Text>
                        {/* <Text>{formaggio.categoria}</Text> */}
                      </View>

                  ))
                }
                <View style={{marginVertical: 10}}>
                  <Button 
                    title="close"
                    onPress={()=>setOpen(false)}
                  />
                </View>
              </View>
            </Modal>
          </View>
        )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    margin: 5,
    marginTop: 62,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 12
  },
  item2: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    margin: 5,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 12,
    elevation: 8,
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    borderRadius: 10

  },
  textFood: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
    color: 'green'

  },
  tabView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textTitle: {
    width: '25%',
    textAlign: 'left'
  },
  textView: {
    width: '15%',
    textAlign: 'center'
  }
});
