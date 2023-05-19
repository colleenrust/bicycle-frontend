export function BicyclesNew(props) {

   const handleSubmit = (event) => {
     event.preventDefault();
     const params = new FormData(event.target);
     props.onCreateBicycle(params, () => event.target.reset());
   };
  return (
    <div onSubmit= {handleSubmit}>
      <h1>New Photo</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Photo: <input name="url" type="text" />
        </div>
        <div>
          Color: <input name="width" type="text" />
        </div>
        <div>
          Price: <input name="height" type="integer" />
        </div>
        <button type="submit">Create Bicycle</button>
      </form>
    </div>
  );
}