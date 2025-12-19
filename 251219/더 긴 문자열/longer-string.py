t = input().split()

a = len(t[0])
b = len(t[1])

if a > b:
    print(t[0], a)
elif a < b:
    print(t[1], b)
else:
    print("same")