import debounce from 'lodash/debounce';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import fetcherCharactersAction from '../../../redux/actions/fetcher';
import {
  getCharacterByComics,
  getCharacterByName,
} from '../../../services/character';

export type FilterProps = {
  section: 'CHARACTERS' | 'COMICS' | 'STORIES';
};

const Filter = ({ section }: FilterProps) => {
  const [offset] = useState(0);
  const [comicId, setComicId] = useState(0);
  const dispatch = useDispatch();

  const handleChangeFilterByName = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const { value } = e.target;
      const {
        data: { results },
      } = await getCharacterByName(offset, value);
      dispatch(fetcherCharactersAction(results));
    } catch (error) {
      console.error(error);
    }
  };

  const debounceChange = debounce(handleChangeFilterByName, 500);

  const handleChangeSelectComics = async (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    const id = parseInt(value);
    const {
      data: { results },
    } = await getCharacterByComics(offset, id);
    dispatch(fetcherCharactersAction(results));
  };

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
            <select
              className="filter--select"
              onChange={handleChangeSelectComics}
            >
              <option value="0" defaultChecked>
                Comics (Default)
              </option>
              <option value="2">Pulse (2004) #6</option>
              <option value="3">
                THE PULSE VOL. 1: THIN AIR TPB (Trade Paperback)
              </option>
              <option value="4">Rogue (2004) #5</option>
              <option value="5">Spectacular Spider-Man (2003) #21</option>
              <option value="6">Amazing Spider-Man (1999) #514</option>
              <option value="8">Exiles (2001) #54</option>
              <option value="9">Fantastic Four (1998) #520</option>
              <option value="10">Data provided by Marvel. © 2023 MARVEL</option>
              <option value="11">X-Men (2004) #164</option>
              <option value="12">Ultimate Spider-Man (2000) #68</option>
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
