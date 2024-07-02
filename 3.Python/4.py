# Task 4: Write a Python program that uses list comprehension to create a new list
# containing the squares of all even numbers from 1 to 20.

squares = [x**2 for x in range(1, 21) if x % 2 == 0]

print(squares)