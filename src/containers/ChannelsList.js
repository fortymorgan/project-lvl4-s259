import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import ChannelsList from '../components/ChannelsList';

const mapStateToProps = (state) => {
  const { channelsList, currentChannel } = state;

  return { channelsList, currentChannel };
};

export default connect(
  mapStateToProps,
  actionCreators,
)(ChannelsList);
