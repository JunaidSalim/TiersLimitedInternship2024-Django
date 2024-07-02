# Task 1: Write a Python function that takes a list of numbers and returns the sum
# of all the numbers. Use a ‘for‘ loop and demonstrate the function with a sample
# list.


def func(nums):
    sum = 0
    for i in range(len(nums)):
        sum+=nums[i]
    return sum


nums = [5,2,9,1]
print(func(nums))