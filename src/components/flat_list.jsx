import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    <div className="flat-list">
      { flats.map((flat) => {
        return (<Flat flat={flat} key={flat.lat} selected={flat.name === selectedFlat.name} selectFlat={selectFlat} />);
      })}
    </div>
  );
};


// const FlatList = (props) => {
//   const renderList = () => {
//     return props.flats.map((flat, index) => {
//       return (
//         <Flat
//           flat={flat}
//           key={flat.lat}
//           selected={flat.name === props.selectedFlat.name}
//           index={index}
//           selectFlat={props.selectFlat}
//         />
//       );
//     });
//   };

//   return (
//     <div className="flat-list">
//       {renderList()}
//     </div>
//   );
// };

// const FlatList = ({ flats, selectFlat, selectedFlat }) => {
//   return (
//     <div className="flat-list">
//       {flats.map((flat) => {
//         return (<Flat flat={flat} key={flat.imageUrl} selectFlat={selectFlat} selected={selectedFlat.imageUrl === flat.imageUrl} />);
//       })}
//     </div>
//   );
// }

export default FlatList;
