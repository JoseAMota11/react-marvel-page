import { useEffect } from 'react';

export type FilterProps = {
  section: 'CHARACTERS' | 'COMICS' | 'STORIES';
};

const Filter = ({ section }: FilterProps) => {
  useEffect(() => {});
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
