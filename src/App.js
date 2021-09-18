import React from 'react';
import './App.css';

const User = (props) => <h2>{props.userName}</h2>;

const UserContainer = () => <User userName="UserContainer"/>;

const UserComponentNew = (props) => props.children;

// const HOC = (Component) => {
//   const WrapperComponent = (props) => <Component userName="Ivan"/>;
//   return WrapperComponent
// };

const HOC = (ComponentParam, date) => {
  return (props) => <h1><ComponentParam {...props} {...date}/></h1>
};

const userProps = {userName: "Ivan"};

// const NewComponent = HOC(UserContainer, userProps);
const NewComponent = HOC(User, userProps);

function App() {


  return (
      <>
        <NewComponent/>
      </>
  );
}

export default App;
