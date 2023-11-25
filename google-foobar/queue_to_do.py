def xorOfFactoral(num):
    if num == 0:
        return 0
    
    remainder = num % 4
    if remainder == 0:
        return num
    elif remainder == 1:
        return 1
    elif remainder == 2:
        return num + 1
    else:
        return 0

def xorOfRange(start,end):
    retVal = xorOfFactoral(end) ^ xorOfFactoral(start-1)
    return retVal

def answer(start,length):
    currentIterPoint = start
    maxLineLen = length * length
    totalXor = 0
    skip = 0
    while length > 0:
        length -= 1
        totalXor ^= xorOfRange(currentIterPoint+skip,currentIterPoint+length+skip)
        currentIterPoint += length + skip
        skip += 1

    return totalXor

# Test Cases
print(answer(0,3))
print(answer(17,4))
print(answer(200,8))
