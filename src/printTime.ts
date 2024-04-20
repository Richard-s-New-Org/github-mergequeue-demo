import { getGreeting } from 'utils';

export default function printDate(name: string) {
  console.log(getGreeting(name));
  const date = new Date();
  console.log(`The time now is: ${date.getHours}:${date.getMinutes}`);
}
