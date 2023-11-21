`use strict`;
class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }
  constructor(note, id) {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(id) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
  updatePriority(id, newPriority) {
    const indexId = this.items.findIndex((item) => item.id === id);
    if (indexId !== -1) {
      this.items[indexId].priority = newPriority;
    }
  }
}
const note1 = new Notes();
note1.addNote({ text: "Note1", id: 1, priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", id: 2, priority: Notes.Priority().LOW });
note1.addNote({ text: "Note3", id: 3, priority: Notes.Priority().LOW });
// console.log(note1.items);
note1.updatePriority((id = 1), Notes.Priority().HIGHT);
note1.removeNote(2);
console.log(note1.items);
