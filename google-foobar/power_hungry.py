# Power Hungry
# ============

# Commander Lambda's space station is HUGE. And huge space stations take a LOT of power. Huge space stations with doomsday devices take even more power. To help meet the station's power needs, Commander Lambda has installed solar panels on the station's outer surface. But the station sits in the middle of a quasar quantum flux field, which wreaks havoc on the solar panels. You and your team of henchmen have been assigned to repair the solar panels, but you'd rather not take down all of the panels at once if you can help it, since they do help power the space station and all!

# You need to figure out which sets of panels in any given array you can take offline to repair while still maintaining the maximum amount of power output per array, and to do THAT, you'll first need to figure out what the maximum output of each array actually is. Write a function answer(xs) that takes a list of integers representing the power output levels of each panel in an array, and returns the maximum product of some non-empty subset of those numbers. So for example, if an array contained panels with power output levels of [2, -3, 1, 0, -5], then the maximum product would be found by taking the subset: xs[0] = 2, xs[1] = -3, xs[4] = -5, giving the product 2*(-3)*(-5) = 30.  So answer([2,-3,1,0,-5]) will be "30".

# Each array of solar panels contains at least 1 and no more than 50 panels, and each panel will have a power output level whose absolute value is no greater than 1000 (some panels are malfunctioning so badly that they're draining energy, but you know a trick with the panels' wave stabilizer that lets you combine two negative-output panels to produce the positive output of the multiple of their power values). The final products may be very large, so give the answer as a string representation of the number.

import random
from functools import reduce
from time import process_time

def genRandom(min,max,len):
    returnVal = []
    for i in range(0,len):
        returnVal.append(random.randint(min,max))
    return returnVal

def answer2(xs):
    negativeNearZero = -1000
    totalNegatives = 0
    totalPositives = 0
    totalZeros = 0
    total = 1

    if len(xs) == 1:
        return xs[0]

    for singleNumber in xs:
        if singleNumber != 0:
            if singleNumber < 0:
                if abs(singleNumber) < abs(negativeNearZero):
                    negativeNearZero = singleNumber
                totalNegatives += 1
            elif singleNumber > 0:
                totalPositives += 1

            total = total * singleNumber
        else:
            totalZeros += 1
        
    if totalNegatives == 1 and totalZeros != 0 and totalPositives == 0:
        return 0
    if totalPositives == 0 and totalNegatives == 0 and totalZeros != 0:
        return 0

    if total < 0:
        total = total / negativeNearZero

    return total

def answer(xs):
    negativesFirst = sorted((i for i in xs if i < 0),reverse=True)
    positivesFirst = sorted((i for i in xs if i > 0))

    totalCalc = []
    for k,v in enumerate(positivesFirst):
        if len(negativesFirst) >= 2:
            totalCalc.append(v)
            totalCalc.append(negativesFirst.pop())
            totalCalc.append(negativesFirst.pop())
        else:
            if v > 0:
                totalCalc.append(v)

    if len(totalCalc) == 0:
        totalCalc = [0]

    return (reduce(lambda x,y:x*y,totalCalc))

randGen = genRandom(-1000,1000,random.randint(1,50))
#randGen = [-9,0,-91]
print("Test Case: ",randGen)
print("")
startTime = process_time()
print("Answer:",answer(randGen))
endTime = process_time()
print("   Run Time:",endTime - startTime)
print("")
print("-----")
print("")
startTime = process_time()
print("Answer2:",int(answer2(randGen)))
endTime = process_time()
print("   Run Time:",endTime - startTime)
