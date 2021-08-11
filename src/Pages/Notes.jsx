import React from "react";
import { CardItem } from "../Components/Card";
import Masonry from "react-masonry-css";

const { useEffect, useState } = React;
export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <CardItem {...note} />
        ))}
      </Masonry>
    </div>
  );
}
