import time
from functools import wraps

def execution_time_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()  
        result = func(*args, **kwargs)  
        end_time = time.time() 
        execution_time = end_time - start_time  
        print(f"Execution time of '{func.__name__}': {execution_time:.6f} seconds")
        return result
    return wrapper

@execution_time_decorator
def calculate_sum(n):
    sum_value = sum(range(n+1))
    return sum_value

result = calculate_sum(1000000)
print("Result:", result)
