import Scene from './components/Scene';
import './App.css';

function App() {
  return (
    <div>
      <div className='nav slide-down'>
        <img src="./coca-logo.png" className='logo' alt="Logo" />
        <img src="./cart1.png" className='cart' alt="Cart" />
        <img src="./profile.png" className='profile' alt="Profile" />
      </div>

      <div className="App zoom-inn">
        <Scene />
      </div>
      <div>
        <div className='arrow1 fade-in-delay'>
          <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#FFFFFF">
            <path d="M240-120v-240q0-33 23.5-56.5T320-440h320v-248l-64 64-56-56 160-160 160 160-56 56-64-64v248q0 33-23.5 56.5T640-360H320v240h-80Z" />
          </svg>
        </div>

        <div className='p2 fade-in-delay'>
          <img src="./2.png" style={{ height: "30px" }} alt="Icon" />
          <p style={{ marginTop: "-3px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam at magni eius, a soluta, quod, similique dignissimos esse voluptate consequatur voluptatum! Veritatis consequatur suscipit quia aspernatur perferendis dolores voluptates ipsam.
          </p>
        </div>
      </div>



      <div className='cards slide-in-right'>
        <div className="card">
          <img src="./zero.png" alt="" />
        </div>
        <div className="card">
          <img src="./light.png" alt="" />
        </div>
      </div>

      <div className='arrow2 fade-in-delay'>
        <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#FFFFFF">
          <path d="M240-120v-240q0-33 23.5-56.5T320-440h320v-248l-64 64-56-56 160-160 160 160-56 56-64-64v248q0 33-23.5 56.5T640-360H320v240h-80Z" />
        </svg>
      </div>

      <div className='p1 fade-in-delay'>
        <p style={{ marginTop: "-3px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga beatae iure illo hic aperiam nisi magni veniam dolores .
        </p>
        <img src="./1.png" style={{ height: "30px" }} alt="Icon" />
      </div>

      <div className='btn scale-hover slide-in-left'>
        <h2>Add To Cart</h2>
      </div>
      <div className='price slide-in-left'>
        <h2>100</h2> <h2 style={{ marginLeft: "5px" }}>Birr</h2>
      </div>
      <div className='title slide-in-left'>
        <h2>ኮካ ኮላ - የማይረሳ ጣዕም <br /> <span>(Coca-Cola - Unforgettable Taste)</span></h2>
      </div>
    </div>
  );
}

export default App;
