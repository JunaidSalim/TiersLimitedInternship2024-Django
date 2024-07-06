class EvenNumberIterator:
    def __init__(self, numbers):
        self.numbers = numbers
        self.index = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        while self.index < len(self.numbers):
            num = self.numbers[self.index]
            self.index += 1
            if num % 2 == 0:
                return num
        raise StopIteration

numbers_list = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_iterator = EvenNumberIterator(numbers_list)

for even_num in even_iterator:
    print(even_num)
