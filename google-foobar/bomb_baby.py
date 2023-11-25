# This one was not completed in time.  This wilL NOT pass the test cases since it takes too long to run.

import random

def genRandom(min,max):
    return random.randint(min,max)

def answer(M,F):
    int1 = int(M)
    int2 = int(F)
    genCount = 0
    invalidString = "impossible"
    
    if int1 == 0 or int2 == 0:
        return invalidString
    if int1 == 1 and int2 == 1:
        return 0
    if int1 == int2:
        return invalidString
    if int1 > int2:
        if int1 % int2 == 0:
            return invalidString
    elif int2 > int1:
        if int1 % int2 == 0:
            return invalidString

    while int1 != 1 or int2 != 1:
        if int1 > int2:
            int1 = int1/int2
        else:
            int2 = int2/int1
                
        if int1 < 1 or int2 < 1:
            return invalidString

        genCount += 1

    if int1 == 1 and int2 == 1:
        return genCount


print(20934867324908670398527540987203945732423894732598257238572394823750629385709234857234435236238537295875932487234239794823749238756982375692387 % 7)
#testCase1 = genRandom(1,500)
#testCase2 = genRandom(1,10000000000)
testCase1 = 7
testCase2 = 20934867324908670398527540987203945732423894732598257238572394823750629385709234857234435236238537295875932487234239794823749238756982375692387
#testCase1 = 137
#testCase2 = 582
print("Test case",[testCase1,testCase2])
print("Total Generations:",answer(testCase1,testCase2))
