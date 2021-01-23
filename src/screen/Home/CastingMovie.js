import React, {Component} from 'react';
import CastingList from '../../components/Casting/CastingList';

export default class HomePopularMovie extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onMount, idMovie } = this.props
    onMount(idMovie)
  }

  render() {
    const {navigation, route, castingMovie} = this.props
    return (
      <>
        <CastingList navigation={navigation} castingMovie = {castingMovie} />
      </>
    );
  }
}
