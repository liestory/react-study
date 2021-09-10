import "./App.css";
import React from "react";

function Car(props) {
  const classes = ['card']

  if (props.car.marked) {
    classes.push('marked')
  }

  return (
      <div className={classes.join(' ')} onClick={props.onMark}>
        <div className="card-img">
          <img src={props.car.img} alt={props.car.name}/>
        </div>
        <h3>{props.car.name}</h3>
        <p>{props.car.price} $</p>
      </div>
  );
}

function Scooter(props) {
  const classes = ['scooter']

  if (props.scooter.marked) {
    classes.push('marked')
  }

  return (
      <div className={classes.join(' ')} onClick={props.onMark}>
        <div className="scooter-img">
          <img src={props.scooter.img} alt={props.scooter.name}/>
        </div>
        <h3>{props.scooter.name}</h3>
        <p>{props.scooter.price} $</p>
        <p>{props.scooter.battery} %</p>
      </div>
  );
}

class App extends React.Component {
  state = {
    cars: [
      {
        marked: false,
        name: "BWM M2",
        price: 20000,
        img: "https://images.drive.ru/i/0/5dc25470ec05c44c75000023.jpg"
      },
      {
        marked: false, name: "Audi TT",
        price: 15000,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Audi_TT_8S_01_--_Geneva_Motor_Show_--_2014-03-09.jpg/1280px-Audi_TT_8S_01_--_Geneva_Motor_Show_--_2014-03-09.jpg"
      },
      {
        marked: false,
        name: "Rolls Royce",
        price: 50000,
        img: "https://www.rolls-roycecars.ru/upload/img/news/phantom-oribe/1.jpg"
      },
      {
        marked: false, name: "Mercedes amg coupe",
        price: 18000,
        img: "https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/c-class/coupe-c205/amg/exterior-design/_jcr_content/par/productinfotabnav/tabnav/productinfotabnavite/tabnavitem/videoimageslider/slides/videoimageslide/image.MQ6.12.20200129171643.jpeg"
      },
    ],
    scooters: [
      {
        marked: false,
        name: "Ninebot",
        battery: 70,
        price: 100,
        img: "https://cdn1.ozone.ru/s3/multimedia-c/wc1200/6067847736.jpg"
      },
      {
        marked: false,
        name: "TOWN 7 XL",
        battery: 50,
        price: 100,
        img: "https://contents.mediadecathlon.com/p1333151/k39395248d8a6f6cc8e4a50daae9a6c14/samokat-town-7xl-mtnyj.jpg"
      },
      {
        marked: false,
        name: "City-Ride",
        battery: 80,
        price: 100,
        img: "https://cdn1.ozone.ru/s3/multimedia-r/wc1200/6080941311.jpg"
      },
      {
        marked: false,
        name: "SHULZ 200 Pro",
        battery: 70,
        price: 100,
        img: "https://avatars.mds.yandex.net/get-mpic/4120567/img_id1928545958949919610.jpeg/13hq"
      }
    ]
  };

  handleMarkCar(name) {
    const cars = this.state.cars.concat();
    const car = cars.find(c => c.name === name);
    car.marked = !car.marked;
    this.setState({cars: cars})
  }

  handleMarkScooter(name) {
    const scooters = this.state.scooters.concat();
    const scooter = scooters.find(c => c.name === name);
    scooter.marked = !scooter.marked;
    this.setState({scooter: scooter})
  }

  renderCar() {
    return this.state.cars.map((car) => {
      return <Car car={car}
                  key={car.name + Math.random()}
                  onMark={this.handleMarkCar.bind(this, car.name)}/>;
    });
  }

  renderScooter() {
    return this.state.scooters.map((scooter) => {
      return <Scooter scooter={scooter}
                      key={scooter.name + Math.random()}
                      onMark={this.handleMarkScooter.bind(this, scooter.name)}/>;
    });
  }

  render() {
    return (
        <div className="App">
          <div className="list">
            {this.renderCar()}
          </div>
          <div className="list">
            {this.renderScooter()}
          </div>
        </div>
    )
  }
}

export default App;
