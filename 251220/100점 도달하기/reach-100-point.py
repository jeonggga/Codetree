# 사용자로부터 정수 하나를 입력받아 num에 저장
num = int(input())

# 숫자를 저장할 빈 리스트 생성
num_list = []

# 입력받은 숫자를 리스트에 처음으로 추가
num_list.append(num)

# if문에서 나온 값을 저장하기 위한 빈 리스트
result = []

# 리스트의 마지막 값이 100 이하인 동안 반복
while num_list[-1] <= 100:

    # 점수가 90 이상이면 "A" 문자열을 result 리스트에 추가
    if num_list[-1] >= 90:
        result.append("A")

    elif num_list[-1] >= 80:
        result.append("B")

    elif num_list[-1] >= 70:
        result.append("C")

    elif num_list[-1] >= 60:
        result.append("D")

    else:
        result.append("F")

    # num_list 리스트의 마지막 숫자에 +1 하고 num_list에 추가
    num_list[-1] += 1
    num_list.append(num_list[-1])
    
print(" ".join(result))


# --- 다른 방법 ---
# # 리스트의 마지막 값이 100 이하인 동안 반복
# while num_list[-1] <= 100:

#     # 점수가 90 이상이면 A 출력
#     if num_list[-1] >= 90:
#         print("A", end=" ")

#     # 점수가 80 이상이면 B 출력
#     elif num_list[-1] >= 80:
#         print("B", end=" ")

#     # 점수가 70 이상이면 C 출력
#     elif num_list[-1] >= 70:
#         print("C", end=" ")

#     # 점수가 60 이상이면 D 출력
#     elif num_list[-1] >= 60:
#         print("D", end=" ")

#     # 그 외(60 미만)는 F 출력
#     else:
#         print("F", end=" ")

#     # 현재 마지막 숫자에 1을 더함
#     num_list[-1] += 1

#     # 증가된 숫자를 리스트에 다시 추가
#     num_list.append(num_list[-1])