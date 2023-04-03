// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import fetcherAction from '../../redux/actions/fetcher';
// import getCharacter from '../../services/character';

// const dispatch = useDispatch();
// useEffect(() => {
//   (async function getData() {
//     const {
//       data: { results },
//     } = await getCharacter();
//     dispatch(fetcherAction(results));
//   })();
// }, []);

const Home = () => (
  <div className="center--section">
    <section className="home">
      <h2 className="home--title">Marvel</h2>
      <p className="home--paragraph">
        Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney
        Company, is one of the world's most prominent character-based
        entertainment companies, built on a proven library of more than 8,000
        characters featured in a variety of media over seventy-five years.
        Marvel utilizes its character franchises in entertainment, licensing and
        publishing. For more information visit marvel.com. © 2023 MARVEL
      </p>
      <img
        src="https://www.komar.de/en/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg"
        alt="Marvel Characters"
      />
    </section>
  </div>
);

export default Home;
