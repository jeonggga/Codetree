result = []
for i in range(5, 18):
    result.append(i)

# 리스트의 숫자를 문자열로 변환한 후 공백으로 연결
a = " ".join(map(str, result))

print(a)
    