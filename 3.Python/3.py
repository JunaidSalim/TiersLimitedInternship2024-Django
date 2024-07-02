# Task 3: Implement a Python class called ‘Rectangle‘ that has attributes for width
# and height. Include methods to calculate the area and perimeter of the rectangle.
# Create an instance of the class and demonstrate the methods.

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

rectangle = Rectangle(5, 3)

print(f"Width: {rectangle.width}")
print(f"Height: {rectangle.height}")
print(f"Area: {rectangle.area()}")
print(f"Perimeter: {rectangle.perimeter()}")
