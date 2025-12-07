n = input()

n = n.split()

a = int(n[0])
b = int(n[1])

result = []
for i in range(b, (a-1), -1):
    result.append(i)

c = " ".join(map(str, result))

print(c)