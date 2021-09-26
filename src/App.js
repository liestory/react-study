import "./App.css";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import {InputSwitch} from "primereact/inputswitch";
import {Card} from "primereact/card";
import React from "react";
import {bindActionCreators, createStore} from "redux";
import {connect, Provider} from "react-redux";


const CHANGE_FIO = "change Fio";
const CHANGE_AGE = "change age";
const CHANGE_FLAG = "change flag";

// Initial state
const initialState = {
  fio: "Mrikaev Konstantin Muratovich",
  age: 23,
  flag: true,
};

// Action {type:string, payload:any}
const fioAction = {
  type: CHANGE_FIO,
  payload: "My mother told me",
};

const ageAction = {
  type: CHANGE_AGE,
  payload: "2",
};

const flagAction = {
  type: CHANGE_FLAG,
  payload: true,
};

const fioActionCreator = (payload) => ({
  type: CHANGE_FIO,
  payload,
});

const ageActionCreator = (payload) => ({
  type: CHANGE_AGE,
  payload,
});

const flagActionCreator = (payload) => ({
  type: CHANGE_FLAG,
  payload,
});

const MAPPER = (payload, state) => ({
  CHANGE_FIO: {
    ...state,
    fio: payload,
  },
  CHANGE_AGE: {
    ...state,
    age: payload,
  },
  CHANGE_FLAG: {
    ...state,
    flag: payload,
  },
});

// Reducer (state,action) => state
function reducer(state, action) {
  switch (action.type) {
    case CHANGE_FIO:
      return {...state, fio: action.payload};
    case CHANGE_AGE:
      return {...state, age: action.payload};
    case CHANGE_FLAG:
      return {...state, flag: action.payload};
    default:
      return {...state};
  }
}

// Store
const store = createStore(reducer, initialState);
console.log(store.getState());

//View
store.dispatch(fioActionCreator("Chpek"));
console.log(store.getState());


const MapStateToProps = (state) => {
  return {
    fio: state.fio,
    age: state.age,
    flag: state.flag
  }
}

const PutActionToProps = (dispatch) => {
  return {
    changeFio: bindActionCreators(fioActionCreator, dispatch),
    changeAge: bindActionCreators(ageActionCreator, dispatch),
    changeFlag: bindActionCreators(flagActionCreator, dispatch),
  }
}

const Registration = connect(MapStateToProps, PutActionToProps)((props) => {
      // const [fio, setFio] = React.useState("");
      // const [age, setAge] = React.useState(0);
      // const [flag, setFlag] = React.useState("");
      const {fio, age, flag, changeFio, changeAge, changeFlag} = props;
      return (
          <Card footer={<span><input type="submit"/></span>}>
            <from>
              <span className="p-float-label">
                <InputText
                    id="in"
                    value={fio}
                    onChange={(e) => changeFio(e.target.value)}
                />
                <label htmlFor="in">First Name</label>
              </span>
              <span className="p-float-label">
                <InputNumber
                    value={age}
                    onChange={(e) => changeAge(e.value)}
                    mode="decimal"
                />
                {/* <label>Age</label> */}
              </span>
              <span>
                <InputSwitch
                    checked={flag}
                    onChange={(e) => changeFlag(e.value)}
                />
              </span>
              <pre>{JSON.stringify(store.getState())}</pre>
            </from>
          </Card>
      );
    }
)


function App() {
  return (
      <Provider store={store}>
        <Registration/>
      </Provider>
  )
}

export default App;
