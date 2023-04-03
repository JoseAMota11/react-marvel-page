import debounce from 'lodash/debounce';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import fetcherCharactersAction from '../../../redux/actions/fetcher';
import { getCharacterByName } from '../../../services/character';

export type FilterProps = {
  section: 'CHARACTERS' | 'COMICS' | 'STORIES';
};

const Filter = ({ section }: FilterProps) => {
  const [offset] = useState(0);
  const dispatch = useDispatch();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const {
      data: { results },
    } = await getCharacterByName(offset, value);
    dispatch(fetcherCharactersAction(results));
  };

  const debounceChange = debounce(handleChange, 500);

  return (
    <div className="center--section">
      <div className="filter">
        <h2 className="filter--title">Filter</h2>
        {section === 'CHARACTERS' ? (
          <div className="filter--container__characters">
            <input
              className="filter--input"
              type="search"
              placeholder="E.g. Spider-Man"
              onChange={debounceChange}
            />
            <select className="filter--select">
              <option value="default" defaultChecked>
                Comics (Default)
              </option>
              <option value="test">Test</option>
            </select>
            <select className="filter--select">
              <option value="default">Stories (Default)</option>
              <option value="test">Test</option>
            </select>
          </div>
        ) : null}
        {section === 'COMICS' ? (
          <div className="filter--container__comics">
            <input
              className="filter--input"
              type="search"
              placeholder="E.g. comic"
            />
            <input
              className="filter--input"
              type="search"
              placeholder="E.g. Marvel Previews (2017)"
            />
          </div>
        ) : null}
        {section === 'STORIES' ? (
          <div className="filter--container__stories">
            <select className="filter--select">
              <option value="any">Any</option>
              <option value="test">Test</option>
            </select>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
