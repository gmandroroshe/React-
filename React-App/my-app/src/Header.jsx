import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles


function Header() {
  return (
    <header>
      <h1>Home</h1>
      <Carousel>
        <div>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&psig=AOvVaw3orsKmMJpp81GE1LuT-G1j&ust=1719294766181000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCOwqHG84YDFQAAAAAdAAAAABAE" alt="Image 1" />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&psig=AOvVaw3orsKmMJpp81GE1LuT-G1j&ust=1719294766181000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCOwqHG84YDFQAAAAAdAAAAABAE" alt="Image 2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&psig=AOvVaw3orsKmMJpp81GE1LuT-G1j&ust=1719294766181000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCOwqHG84YDFQAAAAAdAAAAABAE" alt="Image 3" />
          <p className="legend">Image 3</p>
        </div>
      </Carousel>
    </header>
  );
}

export default Header;
