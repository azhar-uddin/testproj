import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    //backgroundColor:'#68a0cf',
    borderWidth: 1,
    borderColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  iconContainer:{
    flex:2,
    alignItems:'center'
  },
  iconText:{
      flex:1,
      flexDirection: 'row',
  },
  iconImage:{
    height:30,
    width:30,
    marginLeft: 20,
    marginRight: 20
  },
  text:{
    fontSize: 16 ,
    color: '#64C5EA',
  },
  imageText:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollview:{
    flex:1,
    flexDirection: 'column',
  }
});

export { styles };
