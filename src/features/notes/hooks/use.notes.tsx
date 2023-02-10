import { ProtoNoteStructure, NoteStructure } from "../models/note";
import { useCallback, useReducer } from "react";
import { NoteApiRepo } from "../services/repository/note.api.repo";
import { notesReducer } from "../reducer/notes.reducer";
import * as ac from "../reducer/notes.action.creators"; // Para importar todos juntos como "ac"
// Para extraer el type del Custom Hook:
export type useNoteTypeStructure = ReturnType<typeof useNotes>;

export type UseNotesStructure = ReturnType<typeof useNotes>;
export function useNotes(repo: NoteApiRepo) {
  const initialState: NoteStructure[] = [];

  // ANTES: Sin reducer:
  // const [notes, setNotes] = useState(initialState);

  // Para reemplazar el useState por el useReducer:
  const [notes, dispatch] = useReducer(notesReducer, initialState);

  console.log("NOTES: ", notes);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadNotes = useCallback(async () => {
    try {
      const notes = await repo.loadNotes();
      // ANTES: setNotes(notes);
      dispatch(ac.loadNotesCreator(notes)); // Se carga el Array de Notes y se envían por dispatch
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  const addNote = async (note: ProtoNoteStructure) => {
    try {
      const finalNote = await repo.createNote(note);
      // ANTES: setNotes([...notes, finalNote]);
      dispatch(ac.addNotesCreator(finalNote));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const deleteNote = async (id: NoteStructure["id"]) => {
    try {
      await repo.delete(id);
      // ANTES: setNotes(notes.filter((item) => item.id !== id));
      dispatch(ac.deleteNotesCreator(id));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const updateNote = async (note: NoteStructure) => {
    try {
      const finalNote = await repo.update(note);
      // ANTES: setNotes(notes.map((item) => (item.id === note.id ? finalNote : item)));
      dispatch(ac.updateNotesCreator(finalNote));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  return {
    notes,
    loadNotes,
    addNote,
    deleteNote,
    updateNote,
  };
}
