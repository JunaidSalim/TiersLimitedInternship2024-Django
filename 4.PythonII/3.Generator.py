def fibonacci_generator():
    a, b = 0, 1
    count = 0
    
    while count < 20:
        yield a  
        a, b = b, a + b  
        count += 1

fib_gen = fibonacci_generator()

for num in fib_gen:
    print(num)
