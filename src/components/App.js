import React from "react";
import ReactDOM from "react-dom";
import { PIDGEOT } from '../samplePokemon/pidgeot'

const styles = {
  main: {
    height: '100vh',
    width: '100vh',
  },
  poly: {
    position: 'absolute',
    height: '100vh',
    width: '100vh',
    top: 0,
    left: 0,
  },
}

export default class App extends React.PureComponent {

  render() {
    return (
      <div>
        <h1>{PIDGEOT.pokemon_name}</h1>
        <div style={{...styles.main}}>
          {PIDGEOT.polygon_coordinates.triangles.map(triangle => (
              <div key={triangle.name} style={
                {...styles.poly,
                ...{
                  backgroundColor: triangle.color,
                  WebkitClipPath: "polygon("+triangle.point1[0]+"% "+triangle.point1[1]+"%, "+triangle.point2[0]+"% "+triangle.point2[1]+"%, "+triangle.point3[0]+"% "+triangle.point3[1]+"%)",
                },
              }
              } />
            ))}
        </div>
      </div>
    )
  }
};

const wrapper = document.getElementById('App');
wrapper ? ReactDOM.render(<App />, wrapper) : false;