import React, {Component} from 'react';
import Movie from '../../components/Movie/DetailMovie';

export default class DetailMovie extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onMount, route: {params: {idMovie}}} = this.props
    onMount(idMovie)
  }

  render() {
    const {navigation, route, detailMovie, route: {params: {idMovie, validImage}}} = this.props
    return (
      <>
        <Movie navigation={navigation} detailMovie={detailMovie} idMovie={idMovie} validImage={validImage} />
      </>
    );
  }
}