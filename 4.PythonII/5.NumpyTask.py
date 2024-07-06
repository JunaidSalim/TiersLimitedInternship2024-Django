import numpy as np

random_integers = np.random.randint(1, 101, size=10)

mean_value = np.mean(random_integers)

print("Random integers array:", random_integers)
print("Mean of the array:", mean_value)