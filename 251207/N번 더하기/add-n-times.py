n = input()
num = n.split()

a = int(num[0])
b = int(num[1])

c = b
for i in range(b):
    print(a + c)
    c += b
