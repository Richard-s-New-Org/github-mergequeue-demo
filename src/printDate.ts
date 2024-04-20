import { getGreeting } from 'utils';

export default function printDate(name: string) {
  console.log(getGreeting(name));
  console.log(`The date today is: ${new Date()}`);
}
