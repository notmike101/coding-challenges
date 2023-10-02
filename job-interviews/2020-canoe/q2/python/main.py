import person

def openCloseTest(requester, subject):
  print(f"Testing {requester.get_name()} requesting {subject.get_name()} mouth open/close")
  print(f"  Is {subject.get_name()} mouth open: {subject.get_mouthOpen()}")
  print(f"  {requester.get_name()} requesting mouth open")
  subject.requestMouthOpen(requester)
  print(f"  Is {subject.get_name()} mouth open: {subject.get_mouthOpen()}")
  print(f"  {requester.get_name()} requesting mouth close")
  subject.requestMouthClose(requester)
  print(f"  Is {subject.get_name()} mouth open: {subject.get_mouthOpen()}")
  print("End Test")

doctor = person.Person("Doctor Doo-little", True)
random = person.Person("John Doe")
me = person.Person("Mike Orozco")

openCloseTest(me, me)
openCloseTest(me, doctor)
openCloseTest(me, random)

openCloseTest(doctor, me)
openCloseTest(doctor, doctor)
openCloseTest(doctor, random)

openCloseTest(random, me)
openCloseTest(random, doctor)
openCloseTest(random, random)

print(f"Promoting {me.get_name()} to doctor")
me.promoteToDoctor()
openCloseTest(me, random)