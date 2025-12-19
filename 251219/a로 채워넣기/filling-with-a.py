t = input()

a = t.replace(t[1], "a", 1)
a = a.replace(a[-2], "a", 1)

print(a)
