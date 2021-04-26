function Person(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>Age: {props.age}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
