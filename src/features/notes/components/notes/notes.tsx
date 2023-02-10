import { useContext, useEffect } from "react";
import { Add } from "../add/add";
import { Card } from "../card/card";
import "./notes.scss";
import { NotesContext } from "../../context/notes.context";
import { NoteStructure } from "../../models/note";

export function Notes() {
  const { notes, loadNotes } = useContext(NotesContext);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <section className="notes">
      <Add></Add>
      <p>Notes</p>
      <ul>
        {notes.map((item: NoteStructure) => (
          <Card key={item.id} note={item}></Card>
        ))}
      </ul>
    </section>
  );
}
