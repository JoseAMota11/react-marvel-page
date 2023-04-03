type FilterProps = {
  section: 'CHARACTERS' | 'COMICS' | 'STORIES';
};

const Filter = ({ section }: FilterProps) => (
  <div className="center--section">
    <div className="filter">
      {section === 'CHARACTERS' ? (
        <>
          <input className="filter--input" type="search" />
          <select className="filter--select">
            <option value="any">Any</option>
            <option value="test">Test</option>
          </select>
          <select className="filter--select">
            <option value="any">Any</option>
            <option value="test">Test</option>
          </select>
        </>
      ) : null}
      {section === 'COMICS' ? (
        <>
          <input className="filter--input" type="search" />
          <input className="filter--input" type="search" />
        </>
      ) : null}
      {section === 'STORIES' ? (
        <select className="filter--select">
          <option value="any">Any</option>
          <option value="test">Test</option>
        </select>
      ) : null}
    </div>
  </div>
);

export default Filter;
