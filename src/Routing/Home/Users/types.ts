export interface IUser {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: string;
  id: { name: string; value: string };
  location: { city: string; state: string; country: string };
  name: { title: string; first: string; last: string };
}
