import { connect } from 'react-redux';

import { selectFilmsState } from '../../../../../store/data/films/films.selectors';
import Modal from './Modal.cmp';

const mapStateToProps = (state) => ({
  films: selectFilmsState(state),
});

export default connect(mapStateToProps, null)(Modal);
