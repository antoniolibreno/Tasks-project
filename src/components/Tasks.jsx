function Tasks(props) {
  console.log(props);
  return <h2>{props.tasks[0].title}</h2>;
}

export default Tasks;
