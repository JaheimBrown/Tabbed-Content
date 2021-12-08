import Component from "./Component";
import { useState, useEffect } from "react";
import Data from "./Data";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(Data);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData(Data[0]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const changeUser = (user, num) => {
    setData(Data[user]);
    setIsActive(num);
  };

  return (
    <section className='container'>
      {/* Loading State */}
      {/* Title */}
      {/* Menu */}
      {/* Rendered Data Container */}
      {/* Rendered Data */}
      {isLoading ? (
        <h1 className='title2'>Loading...</h1>
      ) : (
        <div className='container'>
          <h1 className='title'>Experience</h1>
          <div className='grid'>
            <ul className='menu'>
              <li
                className={isActive === 0 ? "list-item active" : "list-item"}
                onClick={() => changeUser(0, 0)}
              >
                Kxng
              </li>
              <li
                onClick={() => changeUser(1, 1)}
                className={isActive === 1 ? "list-item active" : "list-item "}
              >
                camron
              </li>
              <li
                onClick={() => changeUser(2, 2)}
                className={isActive === 2 ? "list-item active" : "list-item "}
              >
                devonte
              </li>
            </ul>
            <Component data={data} />
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
