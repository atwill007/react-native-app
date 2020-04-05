import React, {Component} from 'react';
import {Image, Text, View, StyleSheet, FlatList, Alert} from 'react-native';
// const REQUEST_URL = 'http://localhost:3366/';
import {axiosGet} from '../common/utils/request'

class MovieList extends Component {
  constructor(props) {
    super(props); // 这一句不能省
    this.state = {
      data: [], // 定义state初始值
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    // const movies = await fetch(REQUEST_URL).then((res) => res.json());
    const movies = await axiosGet('/movies/top250')
    // Alert.alert('fetch movies: ', movies.length + '')
    this.setState(state => ({
      data: state.data.concat(movies),
      loaded: true,
    }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.loaded) return this.renderLoadingView();

    // Alert.alert('movie: ', JSON.stringify(movie));
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={(item) => item.index}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影数据...</Text>
      </View>
    );
  }

  renderMovie({item}) {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.imgUrl}} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.intro}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    backgroundColor: '#f5fcff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 10,
    // border: '1px solid #eee',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

export default MovieList;
