import Card from './components/Card'


function App() {
  return (
    <>
    <Card
      image={"🍒"}
      turned={true}
    />
    <Card
      image={"🍒"}
      turned={false}
    />
    </>
  );
}


export default App;
