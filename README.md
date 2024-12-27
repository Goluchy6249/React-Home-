
// import React from "react";
// function Home() {
//   return (
//     <div className="product">
//       <Link to="/abouts ">
//         <img
//           src="https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg"
//           alt="Electronic"
//           width="150px"
//           height="100px"
//         />
//         <h4>Electronic</h4>
//       </Link>

//       <Link to="/abouts ">
//         <img
//           src="https://www.gorefurbo.com/cdn/shop/collections/Refurbished_Mobile_Phones_1.jpg?v=1695978895"
//           alt="Mobiles"
//           width="150px"
//           height="100px"
//         />
//         <h4>Mobiles</h4>
//       </Link>

//       <Link to="/abouts">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U8EzkhUc7CMc3wEdVqZO8l245f9_J75RKg&s"
//           alt="Laptops"
//           width="150px"
//           height="100px"
//         />
//         <h4>Laptops</h4>
//       </Link>

//       <Link to="/abouts">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRddZ2tmRzkNvG4U3Z18nxuP9-6UFdNJcyg&s"
//           alt="Fashion"
//           width="150px"
//           height="100px"
//         />
//         <h4>Fashion</h4>
//       </Link>

//       <Link to="/abouts">
//         <img
//           src="https://img.freepik.com/free-vector/set-isolated-furniture-interior-decor-icons-with-images-soft-furniture-with-tables-carpet-vector-illustration_1284-70894.jpg?semt=ais_hybrid"
//           alt="Home & Furniture"
//           width="150px"
//           height="100px"
//         />
//         <h4>Home & Furniture</h4>
//       </Link>

//       <Link to="/abouts">
//         <img
//           src="https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s="
//           alt="Appliances"
//           width="150px"
//           height="100px"
//         />
//         <h4>Appliances</h4>
//       </Link>
//     </div>
//   );
// }

// export default Home;











import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="product">
      <Link to="/about">
        <img
          src="https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg"
          alt="Electronic"
          width="150px"
          height="100px"
        />
        <h4>Electronic</h4>
      </Link>

      <Link to="/about">
        <img
          src="https://www.gorefurbo.com/cdn/shop/collections/Refurbished_Mobile_Phones_1.jpg?v=1695978895"
          alt="Mobiles"
          width="150px"
          height="100px"
        />
        <h4>Mobiles</h4>
      </Link>

      <Link to="/about">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U8EzkhUc7CMc3wEdVqZO8l245f9_J75RKg&s"
          alt="Laptops"
          width="150px"
          height="100px"
        />
        <h4>Laptops</h4>
      </Link>

      <Link to="/about">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRddZ2tmRzkNvG4U3Z18nxuP9-6UFdNJcyg&s"
          alt="Fashion"
          width="150px"
          height="100px"
        />
        <h4>Fashion</h4>
      </Link>

      <Link to="/about">
        <img
          src="https://img.freepik.com/free-vector/set-isolated-furniture-interior-decor-icons-with-images-soft-furniture-with-tables-carpet-vector-illustration_1284-70894.jpg?semt=ais_hybrid"
          alt="Home & Furniture"
          width="150px"
          height="100px"
        />
        <h4>Home & Furniture</h4>
      </Link>

      <Link to="/about">
        <img
          src="https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s="
          alt="Appliances"
          width="150px"
          height="100px"
        />
        <h4>Appliances</h4>
      </Link>
    </div>
  );
}

export default Home;


