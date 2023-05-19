
   export function BicyclesIndex(props) {
      return (
        <div id= "bicycles-index">
          <h1>All Bicycles</h1>
          {props.bicycles.map((bicycle) => (
           <div key={bicycle.id}>
             <h2>{bicycle.name}</h2>
             <img src={bicycle.url} />
             <p>Color: {bicycle.color}</p>
             <p>Price: {bicycle.price}</p>
           </div>
         ))}
        </div>
      );
    }