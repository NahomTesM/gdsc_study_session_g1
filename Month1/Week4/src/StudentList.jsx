import React from 'react';
import './StudentList.css';

function StudentList() {
  function Arr() {
    const arrName = [
      "Liya Tsegaye Hagos",
      "Maedot Amha Alemu",
      "Mahlet Hailu",
      "Meklit Melkamu",
      "Michael Workineh Abebe",
      "Miheret berhanu",
      "Misganaw Tesfaye",
      "Mistere Nesibu",
      "Nahom ketsela Tadesse",
      "Nahom Teshome Mekonnen",
    ];

    const image = [
        <img src="https://picsum.photos/50/50" alt="random" />,
    ];

    const secondArr = arrName.map((el, index) => (
      <div key={index} className="member-container">
        {el}
        {image}
      </div>
    ));

    return secondArr;
  }

  return (
    <div className="group-container">
      <h1>Group 1 Members</h1>
      <Arr />
    </div>
  );
}

export default StudentList;
