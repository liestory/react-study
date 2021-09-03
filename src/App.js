import './App.css';
import logo from './logo.svg';
import React from "react";
import Lorem from "react-lorem-component"

export default function App() {

  const Data = [
    {
      title: "Зеленский призвал сделать Чернобыль «магнитом для туризма»",
      desc: "Чернобыль должен стать «мощным магнитом» для внутреннего и международного туризма. Об этом в понедельник, 7 июня, заявил президент Украины Владимир Зеленский."
    },
    {
      title: "Hashrate Follows Price: Bitcoin Hashrate Jumps 92% in 2 Months, Difficulty Expected to Increase in 4 Days",
      desc: <Lorem count="1"/>
    },
    {
      title: "Europe’s Islamic Cryptocurrency “Caizcoin” Undergoes a Strategic Revamp Amid Global Outreach",
      desc: "PRESS RELEASE. The first-ever Islamic cryptocurrency project, Caizcoin, is ready to leap into the international crypto market. The team has been announcing newer advancements undertaken by the platform to improve the users’ experience and help them boost the results of their financial operations. Caizcoin has recently revamped its official website and included a new whitepaper and lightpaper to put its ideas and visions in front of the whole world more precisely and appeal to larger masses for support efficiently."
    }
  ]

  const newsContain = ({title, desc}) => {
    return (
        <div style={{
          boxSize: 'border-box',
          padding: '10px',
          border: '1px solid black',
          width: '30%',
          borderRadius: '10px'
        }}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
    )
  }


  return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <div
            style={{
              display: 'flex', justifyContent: 'space-between',
            }}>
          {Data.map(props => newsContain(props)
          )}
        </div>
      </div>
  )
}