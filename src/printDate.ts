import { getSalutation } from 'utils';

export default function printDate(name: string) {
  console.log(getSalutation(name));
  console.log(`The date today is: ${new Date()}`);
}
