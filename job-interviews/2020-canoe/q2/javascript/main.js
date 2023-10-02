import Person from './person.js';

function openCloseTest(requester, subject) {
  console.log(`Testing ${requester.name} requesting ${subject.name} mouth open/close`);
  console.log(`  Is ${subject.name} mouth open: ${subject.mouthOpen}`);
  console.log(`  ${requester.name} requesting mouth open`);
  subject.requestMouthOpen(requester);
  console.log(`  Is ${subject.name} mouth open: ${subject.mouthOpen}`);
  console.log(`  ${requester.name} requesting mouth close`);
  subject.requestMouthClose(requester);
  console.log(`  Is ${subject.name} mouth open: ${subject.mouthOpen}`);
  console.log('End Test');
}

const doctor = new Person('Doctor Doo-little', true);
const random = new Person('John Doe');
const me = new Person('Mike Orozco');

// Tests
openCloseTest(me, me);
openCloseTest(me, doctor);
openCloseTest(me, random)

openCloseTest(doctor, me);
openCloseTest(doctor, doctor);
openCloseTest(doctor, random);

openCloseTest(random, me);
openCloseTest(random, doctor);
openCloseTest(random, random);

console.log(`Promoting ${me.name} to doctor`)
me.promoteToDoctor();
openCloseTest(me, random);