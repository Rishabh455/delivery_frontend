import "./App.css";
import ExpanseItem from "./components/ExpanseItem";
function App() {
  // const age = 100;
  // const isGreen = true;
  //const naan = ['ris', 'ritu', 'ritika', 'rishika', 'rina']
  //const names = [5, 10, 15, 20, 25]
  // const double = (x) => { x * 2 }
  // function double(x){return x*2}
  const arr = [2, 3, 4, 502, 6, 7, 44];
  const users = [
    { fn: "rishabh", ln: "chourasia", age: "22" },
    { fn: "ritu", ln: "mittal", age: "20" },
    { fn: "riti", ln: "sharma", age: "29" },
  ];
  //const triple = (x) => x * 3;
  //   const binary=(x) => x.toString(2);ccccc

  // //function triple(x) { return x * 3; }
  // const o=arr.map(binary)
  return (
    <div className="App">
      {/* {names.map((name,key ) => {
        return <h1 key={key}>{name}
         </h1>
     })} */}
      {/* {<h1>{arr.map(function binary(x) { return x.toString(2); })}</h1>
      } */}
      {<h1>map se {arr.map((x) => x.toString(2))}</h1>}
      {<h1> filter se{arr.filter((x) => x.toString(2))}</h1>}

      {
        <h1>
          {users.reduce(function (acc, curr) {
            if (curr.age > 20) {
              acc.push(curr.fn);
            }
            return acc;
          }, [])}
        </h1>
      }
      {/* {<h1>{users.reduce(function (acc, curr) {
        if (users[curr].age > acc) { acc = users[curr].age}
        return users[acc].fn + users[acc].ln
      },{})}</h1>
      } */}
      {/* {<h1>{users[0].ln}</h1>
      } */}

      {/* {<h1>{users.reduce(function (acc, curr) {
        if (acc[curr.age]) {
          acc[curr.age] = ++acc[curr.age];
        }

        else {
          acc[curr.age] = 1;
        }
        return acc
      },{})}</h1>
      } */}
      <ExpanseItem />
    </div>
  );
}

export default App;
