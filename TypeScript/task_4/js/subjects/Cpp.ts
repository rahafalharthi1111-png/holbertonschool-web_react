namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  class cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
