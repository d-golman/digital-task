import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changePlatform, changeSearchField, changeSortDirection, changeSortField } from '../store/actions/gameListActions';
import { fetchGames } from '../store/actions/gamesActions';

const SelectFieldsBlock = styled.div`
text-align: center;
.select-group{
  margin: 15px;
  label{
    color: #eee;
    font-size: 1.4rem;
  }
  select{
    display: block;
    margin: 5px auto;
    max-width: 400px;
    min-width: 250px;
    width: 100%;
    font-size: 1.4rem;
    padding: 5px;
  }
  @media screen and (min-width: 1300px){
    display: inline-block;
    text-align: left;
  }
}
.input-group{
  display: inline-block;
  width: 100%;
  padding: 30px 15px;
  max-width: 430px;
  min-width: 250px;
  input{
    width: 80%;
    font-size: 1.4rem;
    padding: 6px;
    border: none;
  }
  button{
    border: none;
    background-color: #FFD369;
    color: #333;
    height: 100%;
    width: 20%;
    font-size: 1.4rem;
    padding: 6px;
    cursor: pointer;
  }
}
`;

const SortFields = () => {
  const { platforms } = useSelector(state => state.platforms);
  const { platform, sortField, sortDirection, searchField } = useSelector(state => state.gameList);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleplatformSelect = (e) => {
    dispatch(changePlatform(e.target.value));
  };
  const handleSortFieldSelect = (e) => {
    dispatch(changeSortField(e.target.value));
  };
  const handleSortDirectionSelect = (e) => {
    dispatch(changeSortDirection(e.target.value));
  };
  const handleSearchChange = () => {
    dispatch(changeSearchField(ref.current.value.toLowerCase()));
  };

  useEffect(() => {
    dispatch(fetchGames(1, platform, sortDirection + sortField, searchField));
  }, [platform, sortField, sortDirection, searchField]);

  return (
    <SelectFieldsBlock>
      <div className="select-group">
        <label htmlFor="select_platform">Platform</label>
        <select id='select_platform' onChange={handleplatformSelect}>
          <option value="">All</option>
          {platforms.map(platform => (
            <option value={platform.id} key={platform.id}>{platform.name}</option>
          ))}
        </select>
      </div>
      <div className="select-group">
        <label htmlFor="select_sort_field">Sort by</label>
        <select id='select_sort_field' onChange={handleSortFieldSelect}>
          <option value="rating">Rating</option>
          <option value="released">Realease date</option>
        </select>
      </div>
      <div className="select-group">
        <label htmlFor="select_sort_direction">Sort direction</label>
        <select id='select_sort_direction' onChange={handleSortDirectionSelect}>
          <option value="-">Descending</option>
          <option value="">Ascending</option>
        </select>
      </div>
      <div className="input-group">
        <input ref={ref} type="text" /><button onClick={handleSearchChange}><i className="fa fa-search"></i></button>
      </div>
    </SelectFieldsBlock>);
};

export default SortFields;
