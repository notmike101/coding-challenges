def getPrimeString(lower,upper):
    output = ''
    for num in range(lower,upper - 1):
        if num > 1:
            for i in range(2,num):
                if num % i == 0:
                    break
                else:
                    output = output + str(num)
    return output

primeNumbers = getPrimeString(1,1000)

def answer(n):
    return primeNumbers[n:n+5]

print(answer(50))
