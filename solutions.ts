const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) return value * 2;
    return value * multiplier;
}

const processInput = (value: number | string | boolean) => {
    if (typeof value === "string") return value.trim().toLowerCase();
    else if (typeof value === "number") return value * 10;
    return value ? "Active" : "Inactive";
}

const formatCoordinate = ( coordinate: readonly [number, number, string]) : string => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

const concatenateArrays = <T>(...arrays: T[][]):T[] => {
    let concatenated: T[] = [];
    for (const array of arrays) {
        concatenated.push(...array);
    }
    return concatenated;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (Course:Course[], minStudents:number):Course[] => {
    return Course.filter((course: Course) => course.students > minStudents && course.isPublished);
}

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(item => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age >= 18) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    });
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
};