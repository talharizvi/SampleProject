import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import Button from '../CustomComponent/Button';

function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('India');
  const [isLoading, setIsLoading] = useState(false);

  const getDataFromApi = () => {
    setIsLoading(true);
    fetch(
      `https://gnews.io/api/v4/search?q=${searchText}&lang=en&country=us&max=10&apikey=8f1b7c3b73ddf868701bf5ec7479292a`,
    )
      .then(response => response.json())
      .then(json => {
        if (json?.errors && json?.errors.length > 0) {
          throw new Error(json.errors[0]);
        } else {
          setData(json.articles);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log('error', error);
        setIsLoading(false);
        alert(error);
      });
  };

  useEffect(() => {
    // Fetch API data
    getDataFromApi();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const renderEmptyResult = () => {
    return (
      <View style={styles.emptyResultContainer}>
        <Text style={styles.emptyResultText}>No results found</Text>
      </View>
    );
  };

  const handleClearData = () => {
    setData([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter text"
        onChangeText={text => setSearchText(text)}
        style={{
          backgroundColor: 'grey',
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'orange',
        }}
      />
      <Button onPress={() => getDataFromApi()} text="Search" />
      <Button onPress={handleClearData} text="Clear" />
      <Button
        onPress={() => navigation.navigate('Profile', {name: 'Talha'})}
        text="Go to Profile"
      />

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          style={styles.flatList}
          ListEmptyComponent={renderEmptyResult}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flex: 1,
  },
  button: {
    backgroundColor: 'steelblue',
    borderRadius: 5,
    marginTop: 10,
    padding: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    marginVertical: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 4,
    overflow: 'hidden',
    backgroundColor: 'grey',
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
  title: {
    flex: 1,
    marginLeft: 8,
  },
  emptyResultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyResultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
