nums = input()
num = nums.split()

a = int(num[0])
b = int(num[1])

if a < b:
    result_a = 1
else :
    result_a = 0

if a == b:
    result_b = 1
else :
    result_b = 0

print(result_a, result_b)