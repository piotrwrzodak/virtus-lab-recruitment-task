import { connect } from 'react-redux';

import { selectFilmsState } from '../../../store/data/films/films.selectors';
import FilterSection from './FilterSection.cmp';

const mapStateToProps = (state) => ({
  films: selectFilmsState(state),
});

export default connect(mapStateToProps, null)(FilterSection);
