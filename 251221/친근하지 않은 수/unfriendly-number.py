n = int(input())

num = 0

for x in range(1, n+1):
    if (x % 2 == 0) or (x % 3 == 0) or (x % 5 == 0):
        continue
    else:
        num += 1

print(num)