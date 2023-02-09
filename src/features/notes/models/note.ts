/* eslint-disable no-unused-vars */
type HasId = {
  id: string;
};

export type ProtoNoteStructure = {
  title: string;
  author: string;
  isImportant: boolean;
};

export type NoteStructure = HasId & ProtoNoteStructure;

// Sacamos el "id" porque en general no viene en el modelo.
// Sino que se genera luego
export class ProtoNote implements ProtoNoteStructure {
  public isImportant: boolean;
  constructor(public title: string, public author: string) {
    this.isImportant = false;
  }
}
