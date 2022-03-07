import React, { useEffect } from "react";
import '../scss/style.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsListsFetching,
  selectLists
} from "../redux/lists/lists.selector";
import { fetchListsStartAsync } from "../redux/lists/lists.actions";
import { selectItems } from "../redux/creatingLists/creation.selector";
import MainContainer from "../components/mainContainer";

const Index = ({ fetchListsStartAsync }) => {
  useEffect(() => {
    fetchListsStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <MainContainer />
    </div>

  );
}
const mapStateToProps = createStructuredSelector({
  lists: selectLists,
  isListsFetching: selectIsListsFetching,
  items: selectItems,

});
const mapDispatchToProps = dispatch => ({
  fetchListsStartAsync: () => dispatch(fetchListsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
