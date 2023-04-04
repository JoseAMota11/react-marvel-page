import debounce from 'lodash/debounce';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetcherCharactersAction,
  fetcherComicsAction,
} from '../../../redux/actions/fetcher';
import {
  getCharacterByComics,
  getCharacterByName,
  getCharacterByStories,
} from '../../../services/character';
import { getComicsByFormat, getComicsByTitle } from '../../../services/comic';

export type FilterProps = {
  section: 'CHARACTERS' | 'COMICS' | 'STORIES';
};

const Filter = ({ section }: FilterProps) => {
  const dispatch = useDispatch();

  const handleChangeFilterByName = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const { value } = e.target;
      const {
        data: { results },
      } = await getCharacterByName(value);
      dispatch(fetcherCharactersAction(results));
    } catch (error) {
      console.error(error);
    }
  };

  const debounceChange = debounce(handleChangeFilterByName, 500);

  const handleChangeFilterByTitle = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const { value } = e.target;
      const {
        data: { results },
      } = await getComicsByTitle(value);
      dispatch(fetcherComicsAction(results));
    } catch (error) {
      console.error(error);
    }
  };

  const debounceChangeTitle = debounce(handleChangeFilterByTitle, 500);

  const handleChangeSelectComics = async (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    const id = parseInt(value, 10);
    const {
      data: { results },
    } = await getCharacterByComics(id);
    dispatch(fetcherCharactersAction(results));
  };

  const handleChangeSelectStories = async (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    const id = parseInt(value, 10);
    const {
      data: { results },
    } = await getCharacterByStories(id);
    dispatch(fetcherCharactersAction(results));
  };

  const handleChangeSelectFormat = async (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    const {
      data: { results },
    } = await getComicsByFormat(value);
    dispatch(fetcherComicsAction(results));
  };

  return (
    <div className="center--section">
      <div className="filter">
        <h2 className="filter--title">Filters</h2>
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
            <select
              className="filter--select"
              onChange={handleChangeSelectStories}
            >
              <option value="0">Stories (Default)</option>
              <option value="7">
                Investigating the murder of a teenage girl, Cage suddenly learns
                that a three-way gang war is under way for control of the turf
              </option>
              <option value="8">
                In the wake of September 11th, the world watched as
                firefighters, police officers and EMT workers selflessly risked
                their lives
              </option>
              <option value="9">
                Ordinary New York City cop Frankie &QUOT;Gunz&QUOT; Gunzer now
                has a new call to duty Ñ not just to uphold the law, but to save
              </option>
              <option value="10">
                In this thought-provoking anthology, a world-class collection of
                top comic-book creators from around the globe presents a series
              </option>
              <option value="11">Interior #11</option>
              <option value="12">
                Presenting visionary writer/artist Frank Miller's unique take on
                the world-famous wall-crawler Ñ including appearances by the Pu
              </option>
              <option value="14">
                Karen Page, Daredevil's former lover, trades away Daredevil's
                identity for a drug fix. Matt Murdock must find strength as the
                K
              </option>
              <option value="15">
                This classic tale explores Matt Murdock's formative years Ñ
                detailing the relationship between him and his father, and the
                event
              </option>
              <option value="16">
                Frank Miller's Daredevil submerged us in a world where heroes,
                pushed to the brink of madness, were allowed to mirror the human
              </option>
              <option value="17">
                This volume features the gritty, street-level action and moody
                atmosphere that made Miller's Daredevil classic Ñ including
                appea
              </option>
            </select>
          </div>
        ) : null}
        {section === 'COMICS' ? (
          <div className="filter--container__comics">
            <select
              className="filter--select"
              onChange={handleChangeSelectFormat}
            >
              <option value="" defaultChecked>
                Format (Default)
              </option>
              <option value="comic">comic</option>
              <option value="magazine">magazine</option>
              <option value="trade paperback">trade paperback</option>
              <option value="hardcover">hardcover</option>
              <option value="digest">digest</option>
              <option value="graphic novel">graphic novel</option>
              <option value="digital comic">digital comic</option>
              <option value="infinite comic">infinite comic</option>
            </select>
            <input
              className="filter--input"
              type="search"
              placeholder="E.g. Marvel Previews (2017)"
              onChange={debounceChangeTitle}
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
