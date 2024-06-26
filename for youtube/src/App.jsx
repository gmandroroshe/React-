// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Header  from './header1.jsx';
// import Navbar from './Navbar1.jsx';
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';
import Card from './Card.jsx';
import './css/Card.css'
import Card1 from '/Images/card.jpg'
// import Card3 from '/Images/card2.jpg'


function App() {
  return (
    <>
      {/* <Navbar/>
      <Header/>
      <Food/>
      <Footer/> */}
      <Card p1="lorem 1"  Card1={Card1} />
      <Card p1="lorem 2"  Card1={Card1} />
      <Card p1="lorem 3"  Card1={Card1} />
    </>
  );
}

export default App;
