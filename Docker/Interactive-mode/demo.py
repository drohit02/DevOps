from random import randint

min_num = int(input("Enter the first Number : " ))
max_num = int(input("Enter the second number : "))

if(max_num < min_num):
    print("Invalid Inputs....shutting the program")
else:
    rnd_num = randint(min_num,max_num)
    print(rnd_num)