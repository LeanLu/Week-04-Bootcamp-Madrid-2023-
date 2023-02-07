/* eslint-disable no-unused-vars */
type HasId = {
  id: string;
};

export type ProtoTaskStructure = {
  name: string;
  owner: string;
  isCompleted: boolean;
};

export type TaskStructure = HasId & ProtoTaskStructure;

// Sacamos el "id" porque en general no viene en el modelo.
// Sino que se genera luego
export class ProtoTask implements ProtoTaskStructure {
  public isCompleted: boolean;

  constructor(public name: string, public owner: string) {
    this.isCompleted = false;
  }
}
